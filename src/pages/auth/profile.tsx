import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import AuthSkeleton from "../../components/Layout/AuthSkeleton";
import { Container } from "@mui/material";
import { useRouter } from "next/router";
import { useReactiveVar } from "@apollo/client";
import { authUserVar } from "../../apollo/cache";

// import AccountHeader from "../../components/account/AccountHeader";
// import { AccountDetail } from "../../components/account/AccountDetail";
// import ChangePassword from "../../components/account/ChangePassword";

export default function Profile() {
  const loading = false;
  const router = useRouter();

  const user = useReactiveVar(authUserVar);

  useEffect(() => {
    if (!user) {
      router.push("/auth/signIn");
    }
  }, [user]);

  return (
    <>
      <Helmet>
        <title>My Account | Pinna Stock</title>
      </Helmet>
      <Box
        sx={{
          mt: 2,
          backgroundColor: "background.default",
          minHeight: "100%",
          py: 3,
        }}
      >
        <Container maxWidth="lg">
          {loading ? (
            <AuthSkeleton />
          ) : (
            <>
              <Grid container spacing={3} sx={{ px: 3 }}>
                <Grid item lg={3} md={5} xs={12}>
                  {/* <AccountHeader /> */}
                  AccountHeader
                </Grid>
                <Grid item lg={9} md={7} xs={12}>
                  {/* <AccountDetail /> */}
                  AccountDetail
                </Grid>
              </Grid>
              <Box sx={{ pt: 3 }}>
                {/* <ChangePassword /> */}
                Change Password
              </Box>
            </>
          )}
        </Container>
      </Box>
    </>
  );
}
