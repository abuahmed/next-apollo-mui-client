import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import React, { ReactElement } from "react";

interface Props {}

function GetStarted({}: Props): ReactElement {
  return (
    <Box
      id="getstarted"
      sx={{
        pt: "64px",
        minHeight: "400px",
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
