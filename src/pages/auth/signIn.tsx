import { Form, FormikProps, Formik } from "formik";
import { useRouter } from "next/router";
import Link from "../../components/Link";

import Button from "@mui/material/Button";
import Google from "../../components/auth/Google";
import Facebook from "../../components/auth/Facebook";
import { loginSchema } from "../../components/auth/validation";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import InputAdornment from "@mui/material/InputAdornment";
import AccountCircle from "@mui/icons-material/AccountCircle";
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
import { SIGN_IN } from "../../apollo/operations/mutations/user";
import { useEffect } from "react";
import { authUserVar } from "../../apollo/cache";
import React from "react";
import { AuthUser } from "../../apollo/models/user";

interface Values {
  email: string;
  password: string;
  showPassword: boolean;
}

const SignIn = () => {
  const router = useRouter();
  const [error, setError] = React.useState<ApolloError>();

  const [signIn, { loading, data }] = useMutation(SIGN_IN, {
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

  useEffect(() => {
    if (data) {
      localStorage.setItem("userInfo", JSON.stringify(data.authUser));
      authUserVar(data.authUser as AuthUser);
    }
  }, [data]);

  return (
    <>
      <Helmet>
        <title>Sign In | Pinna Stock</title>
      </Helmet>
      <AuthenticationWrapper>
        <Card sx={{ width: 600, bgcolor: "background.default" }}>
          <CardContent>
            <Box sx={{ mb: 3 }}>
              <Typography variant="h1">Welcome!</Typography>
              <Typography variant="h2">Sign In</Typography>
            </Box>

            {loading ? (
              <AuthSkeleton />
            ) : (
              <>
                <Formik
                  initialValues={{
                    email: "",
                    password: "",
                    showPassword: false,
                  }}
                  validationSchema={loginSchema}
                  onSubmit={(values, actions) => {
                    actions.setSubmitting(false);
                    signIn({
                      variables: {
                        email: values.email,
                        password: values.password,
                      },
                    });
                  }}
                >
                  {(props: FormikProps<Values>) => (
                    <Form>
                      <FormikTextField
                        formikKey="email"
                        label="Email"
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <AccountCircle />
                            </InputAdornment>
                          ),
                        }}
                      />
                      <FormikTextField
                        formikKey="password"
                        label="Password"
                        type={props.values.showPassword ? "text" : "password"}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <LockRounded />
                            </InputAdornment>
                          ),
                        }}
                      />
                      <Grid
                        container
                        spacing={3}
                        justifyContent="space-between"
                        alignItems="center"
                        sx={{ width: "100%" }}
                      >
                        <Grid item xs={12} sm={6} sx={{ textAlign: "left" }}>
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
                        </Grid>
                        <Grid item xs={12} sm={6} sx={{ textAlign: "right" }}>
                          <Link underline="none" href="/auth/forgotPassword">
                            <>Forgot your password?</>
                          </Link>
                        </Grid>
                      </Grid>

                      {error && <Toast severity="error">{error.message}</Toast>}
                      <Box component="div">
                        <Button
                          sx={{ width: "100%", marginY: "8px" }}
                          type="submit"
                          color="secondary"
                          variant="contained"
                          disabled={!props.isValid}
                        >
                          Sign In
                        </Button>
                      </Box>
                    </Form>
                  )}
                </Formik>
                <Box sx={{ my: 2 }}>
                  Need an account?
                  <Link
                    underline="none"
                    href="/auth/signUp"
                    style={{ marginLeft: "10px" }}
                  >
                    <>Sign Up here</>
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
};

export default SignIn;
