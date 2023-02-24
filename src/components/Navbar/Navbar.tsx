import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import { makeStyles } from "@mui/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Box from "@mui/material/Box";
import logo from "../../assets/images/logo.png";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import NavLink from "../NavLink/NavLink";
import "./Navbar.css";

// Drawer Styles
const useStyles = makeStyles({
  drawer: {
    width: 240,
  },
});

const Navbar = () => {
  // Important State Declare
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const matches = useMediaQuery("(max-width:900px)");

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // store useStyles function in the variable classes
  const classes = useStyles();
  return (
    <AppBar position="static" color="transparent">
      <Toolbar disableGutters>
        <Container
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* left Content */}
          <Box>
            <img src={logo} alt="mrchef_logo" className="logo" />
          </Box>

          {/* Right Content */}
          <Box component="div" sx={{ display: "flex", alignItems: "center" }}>
            {/* If the width is more than 900px, right menu item will appear */}
            {!matches && (
              <Box className="right_menu">
                <NavLink
                  to="/"
                  activeStyle={{
                    color: "#f91943",
                  }}
                >
                  Home
                </NavLink>
                <NavLink
                  to="/about"
                  activeStyle={{
                    color: "#f91943",
                  }}
                >
                  About
                </NavLink>
                <NavLink
                  to="/menu"
                  activeStyle={{
                    color: "#f91943",
                  }}
                >
                  Our Menu
                </NavLink>
                <NavLink
                  to="/login"
                  activeStyle={{
                    color: "#f91943",
                  }}
                >
                  Login
                </NavLink>
              </Box>
            )}

            {/* If the width is equal and less than 900px, it will show a menu icon */}
            {matches && (
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={handleDrawerToggle}
              >
                <MenuIcon />
              </IconButton>
            )}
          </Box>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
