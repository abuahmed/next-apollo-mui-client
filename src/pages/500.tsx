import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

export default function Custom500() {
  return (
    <Box id="about" sx={{ pt: "64px" }}>
      <Container maxWidth="lg">
        <Stack alignItems="center" sx={{ padding: "24px" }}>
          <Typography data-aos="fade-up" variant="h2" color="orange" noWrap>
            404
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
          <Typography data-aos="fade-up" variant="h6" noWrap>
            Server-side error occurred!
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}
