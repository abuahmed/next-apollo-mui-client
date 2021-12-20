import axios from "axios";
import {
  faPaperPlane,
  faProjectDiagram,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Box from "@material-ui/core/Box";
import LoadingButton from "@material-ui/lab/LoadingButton";
import Container from "@material-ui/core/Container";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import Stack from "@material-ui/core/Stack";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import React, { ReactElement } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import Toast from "./Toast";
import HandleActions from "../../pages/HandleActions";

interface Props {}

function GetInTouch({}: Props): ReactElement {
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState("");
  const [error, setError] = React.useState("");
  const recaptchaRef = React.createRef<ReCAPTCHA>();

  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const { name, email, phone, message } = formData;

  const setToDefault = () => {
    setSuccess("");
    setError("");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    recaptchaRef.current!.execute();
  };

  const onReCAPTCHAChange = async (captchaCode: string | undefined | null) => {
    // If the reCAPTCHA code is null or undefined indicating that
    // the reCAPTCHA was expired then return early
    if (!captchaCode || !email || !name) {
      return;
    }
    try {
      setLoading(true);

      // const config = {
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      // };

      // const response = await axios.post(
      //   'https://pinnasofts.com/api/start',
      //   {
      //     name,
      //     email,
      //     phone,
      //     message,
      //     captcha: captchaCode,
      //   },
      //   config
      // );
      const response = await HandleActions({
        name,
        email,
        phone,
        message,
        captcha: captchaCode,
      });

      //console.log(response);

      if (response.status == 200) {
        //const success = response.data;
        setSuccess(response.message);
      } else {
        //const error = response.data;
        setError(response.message);
      }
    } catch (error) {
      //setError(error?.message || 'Something went wrong');
    } finally {
      // Reset the reCAPTCHA when the request has failed or succeeded
      // so that it can be executed again if user submits another email.
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
      setLoading(false);

      if (recaptchaRef.current) recaptchaRef.current.reset();
    }
  };

  return (
    <Box
      id="getstarted"
      sx={{
        pt: "64px",
        //height: '400px',
        // background: 'transparent',
        background: "linear-gradient(180deg, #fff 400px, #ffa500 0%)",
      }}
    >
      <Container maxWidth="lg">
        <Stack alignItems="center">
          <Typography data-aos="fade-up" variant="h2" color="black" noWrap>
            Get Started
          </Typography>
          {error && (
            <Toast setToDefault={setToDefault} severity="error">
              {error}
            </Toast>
          )}
          {success && (
            <Toast setToDefault={setToDefault} severity="success">
              {success}
            </Toast>
          )}
          <Divider
            data-aos="zoom-in"
            orientation="horizontal"
            sx={{
              width: { xs: "220px", sm: "400px" },
              backgroundColor: "#008000",
              height: "4px",
              marginBottom: "10px",
            }}
          ></Divider>
          <Grid container>
            <Grid
              item
              data-aos="fade-up"
              data-aos-delay="60"
              sm={6}
              xs={12}
              sx={{ pt: 2 }}
            >
              <Typography variant="body1" color="#000" textAlign="justify">
                The future of business is online, and whether you’re starting
                out as a new business owner, or an established business looking
                to pivot into the online world, there’s never been a better time
                to bring your business online then now. Why not take the first
                step today?
              </Typography>
            </Grid>
            <Grid
              item
              data-aos="fade-up"
              data-aos-delay="50"
              sm={6}
              xs={12}
              sx={{ pb: 8 }}
            >
              <form onSubmit={handleSubmit}>
                <Stack
                  color="#008000"
                  sx={{ backgroundColor: "#fff", p: 3, borderRadius: 2 }}
                >
                  <Typography variant="h4" fontWeight="900" noWrap>
                    <FontAwesomeIcon icon={faProjectDiagram} />
                    &nbsp;Start your project
                  </Typography>

                  <ReCAPTCHA
                    ref={recaptchaRef}
                    size="invisible"
                    sitekey={
                      process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string
                    }
                    onChange={onReCAPTCHAChange}
                  />
                  <TextField
                    id="name"
                    onChange={handleChange}
                    name="name"
                    value={name}
                    label="Name"
                    variant="outlined"
                    margin="normal"
                  />
                  <TextField
                    id="email"
                    onChange={handleChange}
                    name="email"
                    value={email}
                    label="Email or Phone"
                    variant="outlined"
                    margin="normal"
                  />
                  <TextField
                    id="message"
                    onChange={handleChange}
                    name="message"
                    value={message}
                    label="Message"
                    variant="outlined"
                    multiline
                    rows={6}
                    margin="normal"
                  />
                  <LoadingButton
                    loading={loading}
                    loadingPosition="end"
                    type="submit"
                    variant="contained"
                    endIcon={<FontAwesomeIcon icon={faPaperPlane} />}
                  >
                    Submit
                  </LoadingButton>
                </Stack>
              </form>
            </Grid>
          </Grid>
        </Stack>
      </Container>
    </Box>
  );
}

export default GetInTouch;
