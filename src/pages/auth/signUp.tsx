import React, { useEffect } from "react";
import { Form, FormikProps, Formik } from "formik";
import { useRouter } from "next/router";
import Link from "../../components/Link";

import Button from "@mui/material/Button";
import Google from "../../components/auth/Google";
import Facebook from "../../components/auth/Facebook";
import { registerSchema } from "../../components/auth/validation";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import InputAdornment from "@mui/material/InputAdornment";
import LockRounded from "@mui/icons-material/LockRounded";

import { FormikTextField } from "../../components/Layout/FormikTextField";

import AuthSkeleton from "../../components/Layout/AuthSkeleton";
import Toast from "../../components/Layout/Toast";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Helmet } from "react-helmet";
import Divider from "@mui/material/Divider";
import { AuthenticationWrapper } from "../../styles/layoutStyled";
import { ApolloError, useMutation, useReactiveVar } from "@apollo/client";
import { SIGN_UP } from "../../apollo/operations/mutations/user";
import { authUserVar } from "../../apollo/cache";

interface Values {
  name: string;
  email: string;
  showPassword: boolean;
  password: string;
  confirmPassword: string;
}

export default function SignUp() {
  const router = useRouter();
  const [error, setError] = React.useState<ApolloError>();
  const [signUp, { loading, data }] = useMutation(SIGN_UP, {
    onError: (err) => {
      setError(err);
    },
  });
  const user = useReactiveVar(authUserVar);

  useEffect(() => {
    if (user) {
      router.push("/cart");
    }
  }, [user]);
  // errorPolicy: "all",
  //     onCompleted: (data) => {
  //       if (data) {
  //         router.push(`/auth/signin`);
  //       }
  //     },
  useEffect(() => {
    if (data) {
      router.push(`/auth/signIn`);
    }
  }, [data]);

  return (
    <>
      <Helmet>
        <title>Sign Up | Pinna Stock</title>
      </Helmet>
      <AuthenticationWrapper>
        <Card sx={{ width: 600 }}>
          <CardContent>
            <Box sx={{ mb: 3 }}>
              <Typography variant="h1">Welcome!</Typography>
              <Typography variant="h2">Create your account</Typography>
            </Box>

            {/* {success && redirectToLogin} */}
            {loading ? (
              <AuthSkeleton />
            ) : (
              <>
                <Formik
                  initialValues={{
                    name: "",
                    email: "",
                    showPassword: false,
                    password: "",
                    confirmPassword: "",
                  }}
                  validationSchema={registerSchema}
                  onSubmit={(values, actions) => {
                    actions.setSubmitting(false);
                    signUp({
                      variables: {
                        email: values.email,
                        name: values.name,
                        password: values.password,
                        confirmPassword: values.confirmPassword,
                      },
                    });
                  }}
                >
                  {(props: FormikProps<Values>) => (
                    <Form>
                      <FormikTextField formikKey="name" label="Name" />
                      <FormikTextField formikKey="email" label="Email" />
                      <Grid container spacing={3}>
                        <Grid item xs={12} md={6}>
                          <FormikTextField
                            formikKey="password"
                            label="Password"
                            type={
                              props.values.showPassword ? "text" : "password"
                            }
                            InputProps={{
                              startAdornment: (
                                <InputAdornment position="start">
                                  <LockRounded />
                                </InputAdornment>
                              ),
                            }}
                          />
                        </Grid>
                        <Grid item xs={12} md={6}>
                          <FormikTextField
                            formikKey="confirmPassword"
                            label="Confirm Password"
                            type={
                              props.values.showPassword ? "text" : "password"
                            }
                            InputProps={{
                              startAdornment: (
                                <InputAdornment position="start">
                                  <LockRounded />
                                </InputAdornment>
                              ),
                            }}
                          />
                        </Grid>
                      </Grid>
                      <FormControlLabel
                        style={{ marginBottom: "0" }}
                        control={
                          <Switch
                            checked={props.values.showPassword}
                            onChange={props.handleChange("showPassword")}
                            name="showPassword"
                          />
                        }
                        label="Show Password"
                      />
                      {error && <Toast severity="error">{error.message}</Toast>}
                      <Box component="div">
                        <Button
                          sx={{ width: "100%", marginY: "8px" }}
                          type="submit"
                          color="secondary"
                          variant="contained"
                          disabled={!props.isValid}
                        >
                          Create your account
                        </Button>
                      </Box>
                    </Form>
                  )}
                </Formik>
                <Box sx={{ my: 2 }}>
                  Have an account?
                  <Link
                    underline="none"
                    href="/auth/signIn"
                    style={{ marginLeft: "10px" }}
                  >
                    <>Sign In here</>
                  </Link>
                </Box>
                <Divider variant="middle" sx={{ my: 2 }}>
                  or
                </Divider>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <Google />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Facebook />
                  </Grid>
                </Grid>
              </>
            )}
          </CardContent>
        </Card>
      </AuthenticationWrapper>
    </>
  );
}
