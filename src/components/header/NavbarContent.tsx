import React, { useState } from "react";
import { useRouter } from "next/router";

import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Link from "../Link";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import Search from "../search/Search";
import { Avatar, Badge, Box, Tooltip } from "@mui/material";
import Mode from "../mode/Mode";
import {
  AppRegistration,
  Key,
  Logout,
  Mail,
  Notifications,
  Person,
  Settings,
} from "@mui/icons-material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";
import { useReactiveVar } from "@apollo/client";

import { authUserVar, isUserLoggedInVar } from "../../apollo/cache";
import { AuthUser } from "../../apollo/models/user";

function NavbarContent() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const isMenuOpen = Boolean(anchorEl);
  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  //const router = useRouter();

  const isUserLoggedIn = useReactiveVar(isUserLoggedInVar);
  const user = useReactiveVar(authUserVar);
  //const [user, setUser] = React.useState<AuthUser>();
  React.useEffect(() => {
    if (isUserLoggedIn) {
      //setUser(JSON.parse(localStorage.getItem("userInfo") as string));
    } else {
      //setUser(undefined);
      authUserVar();
    }
  }, [isUserLoggedIn]);
  const logoutHandler = () => {
    isUserLoggedInVar(false);
    localStorage.removeItem("userInfo");
    //router.push("/");
    handleMenuClose();
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const menuId = "primary-search-account-menu";

  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      open={isMenuOpen}
      onClose={handleMenuClose}
      id={menuId}
      keepMounted
      PaperProps={{
        elevation: 0,
        sx: {
          bgcolor: "whitesmoke",
          overflow: "visible",
          filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
          mt: 1.5,
          "& .MuiAvatar-root": {
            width: 32,
            height: 32,
            ml: -0.5,
            mr: 1,
          },
          "&:before": {
            content: '""',
            display: "block",
            position: "absolute",
            top: 0,
            right: 14,
            width: 10,
            height: 10,
            bgcolor: "background.paper",
            transform: "translateY(-50%) rotate(45deg)",
            zIndex: 0,
          },
        },
      }}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      transformOrigin={{ vertical: "top", horizontal: "right" }}
    >
      {!user && [
        <MenuItem key="11" onClick={handleMenuClose} disableRipple>
          <Link
            href="/auth/signIn"
            sx={{
              textDecoration: "none",
              color: "#000",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Key /> Sign In
          </Link>
        </MenuItem>,
        <MenuItem key="12" onClick={handleMenuClose} disableRipple>
          <Link
            href="/auth/signUp"
            sx={{
              textDecoration: "none",
              color: "#000",
              display: "flex",
              alignItems: "center",
            }}
          >
            <AppRegistration /> Sign Up
          </Link>
        </MenuItem>,
      ]}
      {user && [
        <MenuItem key="13" onClick={handleMenuClose} disableRipple>
          <Link
            href="/auth/profile"
            sx={{
              textDecoration: "none",
              color: "#000",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Person /> My account
          </Link>
        </MenuItem>,
        <MenuItem key="14" onClick={logoutHandler} disableRipple>
          <Typography
            sx={{ color: "#000", display: "flex", alignItems: "center" }}
          >
            <Logout /> Logout
          </Typography>
        </MenuItem>,
      ]}
    </Menu>
  );

  return (
    <>
      <Typography sx={{ fontWeight: 500 }} variant="h4" noWrap>
        Pizzeria Shop
        {/* {pageTitle} */}
      </Typography>
      <Box sx={{ flex: "1 1 auto" }} />
      <Toolbar disableGutters>
        <Search initialValue="" />
        {/* {searchText} */}
      </Toolbar>
      <Box style={{ display: "flex" }}>
        {user && (
          <>
            <IconButton color="inherit" style={{ marginLeft: 0 }}>
              <Badge badgeContent={4} color="primary">
                <Mail />
              </Badge>
            </IconButton>
            <IconButton color="inherit">
              <Badge badgeContent={17} color="primary">
                <Notifications />
              </Badge>
            </IconButton>
            <IconButton LinkComponent={Link} href="/cart" color="inherit">
              <Badge badgeContent={3} color="primary">
                <FontAwesomeIcon icon={faCartArrowDown} />
              </Badge>
            </IconButton>
          </>
        )}
        <Mode />
        <Tooltip title="Account settings">
          <IconButton
            edge="end"
            aria-label="account of current user"
            aria-controls={menuId}
            aria-haspopup="true"
            onClick={handleProfileMenuOpen}
            color="inherit"
            size="large"
          >
            {user ? (
              <Avatar
                alt="avatar"
                src={user.avatar}
                sx={{
                  height: 20,
                  width: 20,
                }}
              />
            ) : (
              // <FontAwesomeIcon height="20px" width="20px" icon={faWrench} />
              <Settings />
            )}
          </IconButton>
        </Tooltip>
      </Box>

      {renderMenu}
    </>
  );
}

export default NavbarContent;
