import React, { useEffect } from "react";
import { useRouter } from "next/router";

import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { useMutation } from "@apollo/client";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";

import { SIGN_IN_FACEBOOK } from "../../apollo/operations/mutations/user";

const Facebook = () => {
  const router = useRouter();

  const [mutate, { loading, error, data }] = useMutation(SIGN_IN_FACEBOOK);

  useEffect(() => {
    if (data) {
      localStorage.setItem("userInfo", JSON.stringify(data.facebookLogin));
      router.push(`/cart`);
    }
  }, [data]);

  const responseFacebook = (response: any) => {
    mutate({
      variables: {
        userID: response.userID,
        accessToken: response.accessToken,
      },
    });
  };
  return (
    <Box pb={2}>
      <FacebookLogin
        appId="148914567116248"
        autoLoad={false}
        callback={responseFacebook}
        render={(renderProps: any) => (
          <Button
            variant="contained"
            onClick={renderProps.onClick}
            sx={{
              backgroundColor: "#3b5998",
              color: "white",
              width: "100%",
              display: "block",
            }}
          >
            <FontAwesomeIcon icon={faFacebookF} /> &nbsp; Login with Facebook
          </Button>
        )}
      />
    </Box>
  );
};

export default Facebook;
