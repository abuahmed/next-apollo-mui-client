import React, { useEffect } from "react";
import { useRouter } from "next/router";

import GoogleLogin from "react-google-login";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { useMutation } from "@apollo/client";

import { SIGN_IN_GOOGLE } from "../../apollo/operations/mutations/user";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
const Google = () => {
  const router = useRouter();

  const [mutate, { loading, error, data }] = useMutation(SIGN_IN_GOOGLE);

  useEffect(() => {
    if (data) {
      localStorage.setItem("userInfo", JSON.stringify(data.googleLogin));
      router.push(`/cart`);
    }
  }, [data]);
  const responseGoogle = (response: any) => {
    mutate({ variables: { idToken: response.tokenId } });
  };
  const failResponseGoogle = (response: any) => {
    // mutate({ variables: { idToken: response.tokenId } });
  };
  return (
    <Box pb={2}>
      <GoogleLogin
        clientId="287014686210-l0hlb5hjd8dg45o9cjpebalgn80dmde2.apps.googleusercontent.com"
        onSuccess={responseGoogle}
        onFailure={failResponseGoogle}
        autoLoad={false}
        render={(renderProps: any) => (
          <Button
            variant="contained"
            sx={{
              backgroundColor: "rgb(220, 0, 78)",
              color: "white",
              width: "100%",
              display: "block",
            }}
            onClick={renderProps.onClick}
          >
            <FontAwesomeIcon icon={faGoogle} /> &nbsp; Login with Google
          </Button>
        )}
        cookiePolicy={"single_host_origin"}
      />
    </Box>
  );
};

export default Google;
