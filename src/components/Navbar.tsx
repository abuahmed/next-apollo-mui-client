import {
  AppBar,
  Divider,
  IconButton,
  List,
  ListItem,
  SwipeableDrawer,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import React, { useState } from "react";
import Link from "./Link";

import Logo from "./Logo";
import { GradientBackground, ShadowStyled } from "../styles/layoutStyled";
import { StyledButton } from "../styles/componentStyled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressCard,
  faCartArrowDown,
  faHome,
  faPlay,
  faUsersCog,
} from "@fortawesome/free-solid-svg-icons";
import MenuIcon from "@mui/icons-material/Menu";
import NavbarContent from "./header/NavbarContent";

const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

const Navbar = () => {
  const theme = useTheme();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const handleDrawerOpen = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <>
      <AppBar>
        <GradientBackground>
          <ShadowStyled>
            <Container maxWidth="lg">
              <Toolbar>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  onClick={handleDrawerOpen}
                  edge="start"
                  sx={{
                    marginRight: "0px",
                  }}
                  size="large"
                >
                  <MenuIcon />
                </IconButton>
                <Link
                  href="/"
                  style={{
                    marginRight: "24px",
                  }}
                >
                  <Logo />{" "}
                </Link>
                <NavbarContent />
              </Toolbar>
            </Container>
          </ShadowStyled>
        </GradientBackground>
      </AppBar>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        variant="temporary"
        onClose={handleDrawerOpen}
        open={drawerOpen}
        onOpen={handleDrawerOpen}
        anchor="left"
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: 240 },
        }}
      >
        <Box
          sx={{
            background: theme.palette.background.paper,
            minHeight: "100vh",
          }}
        >
          <Toolbar>
            <Typography
              variant="h5"
              color="black"
              sx={{ ml: "8px", fontWeight: "900", lineHeight: "1.1" }}
            >
              Pizzeria <br /> Shop
            </Typography>
          </Toolbar>
          <Divider />
          <List onClick={handleDrawerOpen}>
            <ListItem
              sx={{
                display: "flex",
                py: 2,
              }}
            >
              <StyledButton
                startIcon={<FontAwesomeIcon icon={faHome} />}
                href="#home"
              >
                Home
              </StyledButton>
            </ListItem>
            <ListItem
              sx={{
                display: "flex",
                py: 2,
              }}
            >
              <StyledButton
                LinkComponent={Link}
                startIcon={<FontAwesomeIcon icon={faUsersCog} />}
                href="/services"
              >
                Services
              </StyledButton>
            </ListItem>
            <ListItem
              sx={{
                display: "flex",
                py: 2,
              }}
            >
              <StyledButton
                LinkComponent={Link}
                startIcon={<FontAwesomeIcon icon={faAddressCard} />}
                href="/about"
              >
                About
              </StyledButton>
            </ListItem>
            <ListItem
              sx={{
                display: "flex",
                py: 2,
              }}
            >
              <StyledButton
                LinkComponent={Link}
                startIcon={<FontAwesomeIcon icon={faPlay} />}
                href="/start"
              >
                Get Started
              </StyledButton>
            </ListItem>
            <ListItem
              sx={{
                display: "flex",
                py: 2,
              }}
            >
              <StyledButton
                LinkComponent={Link}
                startIcon={<FontAwesomeIcon icon={faCartArrowDown} />}
                href="/cart"
              >
                My Cart
              </StyledButton>
            </ListItem>
          </List>
        </Box>
      </SwipeableDrawer>
    </>
  );
};

export default Navbar;
