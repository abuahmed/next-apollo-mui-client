import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useReactiveVar } from "@apollo/client";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { authUserVar } from "../apollo/cache";
export default function Cart() {
  const user = useReactiveVar(authUserVar);
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/auth/signIn");
    }
  }, [user]);
  return (
    <Box id="about" sx={{ pt: "64px" }}>
      <Container maxWidth="lg">
        <Stack alignItems="center" sx={{ padding: "24px" }}>
          <Typography data-aos="fade-up" variant="h2" color="orange" noWrap>
            My Cart
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
