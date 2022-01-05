import { Card, CardContent, CardMedia, Grid } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import React, { ReactElement } from "react";

interface Props {}

function About({}: Props): ReactElement {
  return (
    <Box id="about" sx={{ pt: "64px" }}>
      <Container maxWidth="lg">
        <Stack alignItems="center" sx={{ padding: "24px" }}>
          <Typography data-aos="fade-up" variant="h2" color="orange" noWrap>
            What We Do
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
          <Grid container spacing={3} justifyItems="center" color="black">
            <Grid item xs={12} sm={6} md={4}>
              <Card
                elevation={20}
                sx={{ maxWidth: 345 }}
                data-aos="fade-up"
                data-aos-delay="50"
              >
                <CardMedia
                  sx={{ height: 300 }}
                  image="../../../img/logo.png"
                  title="reliable applications"
                />
                <CardContent>
                  <Typography
                    variant="h4"
                    component="h4"
                    fontWeight="900"
                    color="orange"
                  >
                    Deliver Applications
                  </Typography>
                  <Divider orientation="horizontal" flexItem />
                  <Typography
                    sx={{ mt: 1 }}
                    component="div"
                    variant="body1"
                    color="text.secondary"
                    textAlign="justify"
                  >
                    Business software development, implementation, integration,
                    consulting, and IT training - everything what help in
                    modernizing your company. What can we offer to you?
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card
                elevation={20}
                sx={{ maxWidth: 345 }}
                data-aos="fade-up"
                data-aos-delay="60"
              >
                <CardMedia
                  sx={{ height: 300 }}
                  image="../../../img/logo2.png"
                  title="more than websites"
                />
                <CardContent>
                  <Typography
                    variant="h4"
                    component="h4"
                    fontWeight="900"
                    color="orange"
                  >
                    More Than websites
                  </Typography>
                  <Divider orientation="horizontal" flexItem />

                  <Typography
                    sx={{ mt: 1 }}
                    component="div"
                    variant="body1"
                    color="text.secondary"
                    textAlign="justify"
                  >
                    We Build Web sites That Build Your Business. We love
                    creating fast, simple, functional, beautiful & user-friendly
                    websites using the latest web standard technologies.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card
                elevation={20}
                sx={{ maxWidth: 345 }}
                data-aos="fade-up"
                data-aos-delay="70"
              >
                <CardMedia
                  sx={{ height: 300 }}
                  image="../../../img/logo.png"
                  title="solution partner"
                />
                <CardContent>
                  <Typography
                    variant="h4"
                    component="h4"
                    fontWeight="900"
                    color="orange"
                  >
                    Your Solution Partner
                  </Typography>
                  <Divider orientation="horizontal" flexItem />

                  <Typography
                    sx={{ mt: 1 }}
                    component="div"
                    variant="body1"
                    color="text.secondary"
                    textAlign="justify"
                  >
                    We are not your typical IT Services Provider, We are your
                    solution partner. With sole focus on adding value to
                    customers, we use a right combination of technology and
                    business processes improvements to achieve the goals.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Stack>
      </Container>
    </Box>
  );
}

export default About;
