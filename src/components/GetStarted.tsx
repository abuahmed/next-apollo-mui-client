import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Divider from "@material-ui/core/Divider";
import Stack from "@material-ui/core/Stack";
import Typography from "@material-ui/core/Typography";
import React, { ReactElement } from "react";

interface Props {}

function GetStarted({}: Props): ReactElement {
  return (
    <Box
      id="getstarted"
      sx={{
        pt: "64px",

        background: "linear-gradient(180deg, #fff 400px, #ffa500 0%)",
      }}
    >
      <Container maxWidth="lg">
        <Stack alignItems="center">
          <Typography data-aos="fade-up" variant="h2" color="black" noWrap>
            Get Started
          </Typography>

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
        </Stack>
      </Container>
    </Box>
  );
}

export default GetStarted;
