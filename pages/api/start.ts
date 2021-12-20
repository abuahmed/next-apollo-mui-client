import { NextApiRequest, NextApiResponse } from "next";
import axios from 'axios';
import { google } from 'googleapis';
import Cors from 'cors'

function initMiddleware(middleware: any) {
    return (req: any, res: any) =>
        new Promise((resolve, reject) => {
            middleware(req, res, (result: any) => {
                if (result instanceof Error) {
                    return reject(result)
                }
                return resolve(result)
            })
        })
}

const cors = initMiddleware(
    // You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
    Cors({
        // Only allow requests with GET, POST and OPTIONS
        methods: ['GET', 'POST', 'OPTIONS'],
        origin: '*',
        allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept', 'Authorization']
    })
)


export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    // Run the middleware
    await cors(req, res)

    const { body, method } = req;
    //const bd = JSON.parse(body)
    const { name, email, phone, message, captcha } = body;
    //console.log(body)


    if (method === "POST") {
        // If email or captcha are missing return an error
        if (!email || !captcha) {
            return res.status(422).json({
                message: "Invalid request, please provide the required fields",
            });
        }

        try {
            // Ping the google recaptcha verify API to verify the captcha code you received
            const config = {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded; charset=utf-8",

                },
            };

            const { data } = await axios.post(
                `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${captcha}`,
                config
            );
            //const captchaValidation = data// await response.json();

            if (data.success) {

                const auth = new google.auth.GoogleAuth({
                    keyFile: "keys.json", //the key file
                    //url to spreadsheets API
                    scopes: "https://www.googleapis.com/auth/spreadsheets",
                });
                const authClientObject = await auth.getClient();
                const sheets = google.sheets({ version: "v4", auth: authClientObject });

                const spreadsheetId = '1FpbyOgkV0hHkXFkaUZBooxVU0_ZbNBuIwWebw_lhtYw'
                const range = 'Sheet1!A:D';
                const result = await sheets.spreadsheets.values.append({
                    spreadsheetId,
                    range,
                    valueInputOption: 'USER_ENTERED',
                    requestBody: {
                        values: [
                            [name, email, phone, message]
                        ],
                    },
                });
                //console.log(result.data);
                //return result.data;
                if (result.data) {
                    return res.status(200).json({ message: "Your form has been submitted!,We will get back to you soon. Have a great day!" });
                } else {

                    return res.status(422).json({
                        message: "Something went wrong!, Please try after some time",
                    });
                }
            }




        } catch (error) {
            console.log(error);
            return res.status(422).json({ message: "Something went wrong" });
        }
    }
    // Return 404 if someone pings the API with a method other than
    // POST
    return res.status(404).send("Not found");
}