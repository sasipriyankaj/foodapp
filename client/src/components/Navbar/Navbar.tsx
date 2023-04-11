import { useState, MouseEvent } from "react";
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
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store/store";
import firebaseAuth from "../../firebase/firebaseAuth";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Avatar from "@mui/material/Avatar";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import Tooltip from "@mui/material/Tooltip";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

// Drawer Styles
const useStyles = makeStyles({
  drawer: {
    width: 240,
  },
});

const Navbar = () => {
  // Important State Declare
  const [mobileOpen, setMobileOpen] = useState(false);
  const matches = useMediaQuery("(max-width:900px)");

  // user avatar important states
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // get user and cart from store
  const { user } = useSelector((state: RootState) => state.user);
  const cart = useSelector((state: RootState) => state.menu.cart);
  const { logOut } = firebaseAuth();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // store useStyles function in the variable classes
  const classes = useStyles();
  return (
    <AppBar position="fixed" className="navbar">
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
                  to="/reservation"
                  activeStyle={{
                    color: "#f91943",
                  }}
                >
                  Reservation
                </NavLink>
                <NavLink
                  to="/cart"
                  activeStyle={{
                    color: "#f91943",
                  }}
                >
                  <Badge badgeContent={cart.length}>
                    <ShoppingCartIcon color="action" />
                  </Badge>
                </NavLink>

                {/* if user exist, the user information will show in this menu avatar */}
                {user.email && (
                  <>
                    <Box>
                      <Tooltip title="Account Information">
                        <IconButton
                          onClick={handleClick}
                          size="small"
                          sx={{ ml: 2 }}
                          aria-controls={open ? "account-menu" : undefined}
                          aria-haspopup="true"
                          aria-expanded={open ? "true" : undefined}
                        >
                          {user.photoURL ? (
                            <Avatar
                              sx={{
                                width: 38,
                                height: 38,
                              }}
                              src={user.photoURL}
                              alt="user-image"
                            >
                              {user.displayName && user.displayName.slice(0, 1)}
                            </Avatar>
                          ) : (
                            <Avatar
                              sx={{
                                width: 38,
                                height: 38,
                                background: "#f91943",
                                fontWeight: "700",
                                textTransform: "uppercase",
                                fontSize: "1.6rem",
                              }}
                            >
                              {user.displayName && user.displayName.slice(0, 1)}
                            </Avatar>
                          )}
                        </IconButton>
                      </Tooltip>
                    </Box>
                    <Menu
                      anchorEl={anchorEl}
                      id="account-menu"
                      open={open}
                      onClose={handleClose}
                      onClick={handleClose}
                      PaperProps={{
                        elevation: 0,
                        sx: {
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
                      transformOrigin={{ horizontal: "right", vertical: "top" }}
                      anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                    >
                      <MenuItem onClick={handleClose}>
                        <Avatar /> Profile
                      </MenuItem>
                      <MenuItem onClick={handleClose}>
                        <Avatar /> My account
                      </MenuItem>
                      <Divider />
                      <MenuItem onClick={handleClose}>
                        <ListItemIcon>
                          <PersonAdd fontSize="small" />
                        </ListItemIcon>
                        Add another account
                      </MenuItem>
                      <MenuItem onClick={handleClose}>
                        <ListItemIcon>
                          <Settings fontSize="small" />
                        </ListItemIcon>
                        Settings
                      </MenuItem>
                      <MenuItem onClick={handleClose}>
                        <span className="log-out" onClick={logOut}>
                          <ListItemIcon>
                            <Logout fontSize="small" />
                          </ListItemIcon>
                          Logout
                        </span>
                      </MenuItem>
                    </Menu>
                  </>
                )}

                {/* if there is no user show log in Button */}
                {!user.email && (
                  <NavLink
                    to="/login"
                    activeStyle={{
                      color: "#f91943",
                    }}
                  >
                    Login
                  </NavLink>
                )}
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
