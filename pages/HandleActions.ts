import axios from "axios";
//import { google } from 'googleapis';

export interface contactDetail {
  name: string;
  email: string;
  phone: string;
  message: string;
  captcha: string;
}
export interface response {
  status: number;
  message: string;
}
async function HandleActions({
  name,
  email,
  phone,
  message,
  captcha,
}: contactDetail): Promise<response> {
  if (!email || !captcha) {
    return {
      status: 403,
      message: "Invalid request, please provide the required fields",
    };
  }

  //try {
  //     // Ping the google recaptcha verify API to verify the captcha code you received
  //     const config = {
  //         headers: {
  //             "Content-Type": "application/x-www-form-urlencoded; charset=utf-8",

  //         },
  //     };

  //     const { data } = await axios.post(
  //         `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${captcha}`,
  //         config
  //     );
  //     //const captchaValidation = data// await response.json();
  //     //console.log(data.success)
  //     if (data.success) {

  //         const auth = new google.auth.GoogleAuth({
  //             keyFile: "keys.json", //the key file
  //             //url to spreadsheets API
  //             scopes: "https://www.googleapis.com/auth/spreadsheets",
  //         });
  //         const authClientObject = await auth.getClient();
  //         const sheets = google.sheets({ version: "v4", auth: authClientObject });

  //         const spreadsheetId = '1FpbyOgkV0hHkXFkaUZBooxVU0_ZbNBuIwWebw_lhtYw'
  //         const range = 'Sheet1!A:D';
  //         const result = await sheets.spreadsheets.values.append({
  //             spreadsheetId,
  //             range,
  //             valueInputOption: 'USER_ENTERED',
  //             requestBody: {
  //                 values: [
  //                     [name, email, phone, message]
  //                 ],
  //             },
  //         });
  //         //console.log(result.data);
  //         //return result.data;
  //         if (result.data) {
  //             return ({ status: 200, message: "Your form has been submitted!,We will get back to you soon. Have a great day!" });
  //         } else {

  //             return ({
  //                 status: 403,
  //                 message: "Something went wrong!, Please try after some time",
  //             });
  //         }
  //     }

  // } catch (error) {
  //     return ({ status: 403, message: "Something went wrong" });
  // }
  return { status: 403, message: "Something went wrong" };
}

export default HandleActions;
