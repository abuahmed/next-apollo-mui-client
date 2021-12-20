import {
  AppBar,
  Divider,
  List,
  ListItem,
  SwipeableDrawer,
  Toolbar,
  Typography,
  useTheme,
} from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';

import Stack from '@material-ui/core/Stack';
import React, { useState } from 'react';
import Link from '../Link';

import Logo from './Logo';
import { GradientBackground, ShadowStyled } from '../styles/layoutStyled';
import { StyledButton } from '../styles/componentStyled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAddressBook,
  faAddressCard,
  faBars,
  faHome,
  faPlay,
  faUsersCog,
} from '@fortawesome/free-solid-svg-icons';

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
            <Container maxWidth='lg' sx={{ color: 'text.primary' }}>
              <Toolbar sx={{ height: 64, display: 'flex' }}>
                <Link href='/'>
                  <Logo />
                </Link>
                <Typography
                  variant='h5'
                  color='white'
                  sx={{ ml: '8px', fontWeight: '900', lineHeight: '1.1' }}
                >
                  Pinnacle <br /> Softwares
                </Typography>
                <Box sx={{ flex: '1 1 auto' }} />
                <Stack
                  spacing={2}
                  sx={{ display: { md: 'inline-flex', xs: 'none' } }}
                  direction='row'
                >
                  <StyledButton
                    startIcon={<FontAwesomeIcon icon={faHome} />}
                    href='#home'
                  >
                    Home
                  </StyledButton>
                  <StyledButton
                    startIcon={<FontAwesomeIcon icon={faUsersCog} />}
                    href='#services'
                  >
                    Services
                  </StyledButton>
                  <StyledButton
                    startIcon={<FontAwesomeIcon icon={faAddressCard} />}
                    href='#about'
                  >
                    About
                  </StyledButton>
                  <StyledButton
                    startIcon={<FontAwesomeIcon icon={faPlay} />}
                    href='#getstarted'
                  >
                    Get Started
                  </StyledButton>
                  <StyledButton
                    startIcon={<FontAwesomeIcon icon={faAddressBook} />}
                    href='#contact'
                  >
                    Contact
                  </StyledButton>
                </Stack>

                <Stack sx={{ mr: 2, display: { md: 'none', xs: 'block' } }}>
                  <Box
                    style={{
                      borderRadius: '50%',
                    }}
                    onClick={handleDrawerOpen}
                  >
                    <FontAwesomeIcon icon={faBars} />
                  </Box>
                </Stack>
              </Toolbar>
            </Container>
          </ShadowStyled>
        </GradientBackground>
      </AppBar>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        variant='temporary'
        onClose={handleDrawerOpen}
        open={drawerOpen}
        onOpen={handleDrawerOpen}
        anchor='right'
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
        }}
      >
        <Box
          sx={{
            background: theme.palette.background.paper,
            minHeight: '100vh',
          }}
        >
          <Toolbar>
            <Typography
              variant='h5'
              color='black'
              sx={{ ml: '8px', fontWeight: '900', lineHeight: '1.1' }}
            >
              Pinnacle <br /> Softwares
            </Typography>
          </Toolbar>
          <Divider />
          <List onClick={handleDrawerOpen}>
            <ListItem
              sx={{
                display: 'flex',
                py: 2,
              }}
            >
              <StyledButton
                startIcon={<FontAwesomeIcon icon={faHome} />}
                href='#home'
              >
                Home
              </StyledButton>
            </ListItem>
            <ListItem
              sx={{
                display: 'flex',
                py: 2,
              }}
            >
              <StyledButton
                startIcon={<FontAwesomeIcon icon={faUsersCog} />}
                href='#services'
              >
                Services
              </StyledButton>
            </ListItem>
            <ListItem
              sx={{
                display: 'flex',
                py: 2,
              }}
            >
              <StyledButton
                startIcon={<FontAwesomeIcon icon={faAddressCard} />}
                href='#about'
              >
                About
              </StyledButton>
            </ListItem>
            <ListItem
              sx={{
                display: 'flex',
                py: 2,
              }}
            >
              <StyledButton
                startIcon={<FontAwesomeIcon icon={faPlay} />}
                href='#getstarted'
              >
                Get Started
              </StyledButton>
            </ListItem>
            <ListItem
              sx={{
                display: 'flex',
                py: 2,
              }}
            >
              <StyledButton
                startIcon={<FontAwesomeIcon icon={faAddressBook} />}
                href='#contact'
              >
                Contact
              </StyledButton>
            </ListItem>
          </List>
        </Box>
      </SwipeableDrawer>
    </>
  );
};

export default Navbar;
