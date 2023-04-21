// import important modules
import { useState, MouseEvent } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import useMediaQuery from "@mui/material/useMediaQuery";
import Box from "@mui/material/Box";
import logo from "../../assets/images/logo.png";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import NavLink from "../NavLink/NavLink";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store/store";
import firebaseAuth from "../../firebase/firebaseAuth";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Avatar from "@mui/material/Avatar";
import ListItemIcon from "@mui/material/ListItemIcon";
import BrunchDiningIcon from "@mui/icons-material/BrunchDining";
import TableRestaurantIcon from "@mui/icons-material/TableRestaurant";
import Logout from "@mui/icons-material/Logout";
import Tooltip from "@mui/material/Tooltip";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useNavigate } from "react-router";
import MobileDrawer from "./MobileDrawer";
import Divider from "@mui/material/Divider";
import "./Navbar.css";

const Navbar = () => {
  // Important State Declare
  const [mobileOpen, setMobileOpen] = useState(false);
  const matches = useMediaQuery("(max-width:900px)");

  // user avatar important states
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const open = Boolean(anchorEl);

  // When click on the avatar in desktop, show the menu
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  // Close the menu function
  const handleClose = () => {
    setAnchorEl(null);
  };

  // get user and cart from store
  const { user } = useSelector((state: RootState) => state.user);
  const cart = useSelector((state: RootState) => state.menu.cart);

  // get logOut and navigate
  const { logOut } = firebaseAuth();
  const navigate = useNavigate();

  // Toggle the drawer
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      {/* Startting Appbar/ Navbar */}
      <AppBar position="fixed" className="navbar">
        <Toolbar disableGutters>
          <Container
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            {/* left Content for DeskTop */}
            <Box>
              <NavLink to="/">
                <img src={logo} alt="mrchef_logo" className="logo" />
              </NavLink>
            </Box>

            {/* Right Content for Desktop */}
            <Box component="div" sx={{ display: "flex", alignItems: "center" }}>
              {/* If the width is more than 900px, right menu item will appear */}
              {!matches && (
                <Box className="right_menu">
                  {/* Home */}
                  <NavLink
                    to="/"
                    activeStyle={{
                      color: "#f91943",
                    }}
                  >
                    Home
                  </NavLink>

                  {/* About */}
                  <NavLink
                    to="/about"
                    activeStyle={{
                      color: "#f91943",
                    }}
                  >
                    About
                  </NavLink>

                  {/* Menu */}
                  <NavLink
                    to="/menu"
                    activeStyle={{
                      color: "#f91943",
                    }}
                  >
                    Our Menu
                  </NavLink>

                  {/* Reservation */}
                  <NavLink
                    to="/reservation"
                    activeStyle={{
                      color: "#f91943",
                    }}
                  >
                    Reservation
                  </NavLink>

                  {/* Cart */}
                  <NavLink
                    to="/cart"
                    activeStyle={{
                      color: "#f91943",
                    }}
                  >
                    <Tooltip title="Cart">
                      <Badge badgeContent={cart.length}>
                        <ShoppingCartIcon color="action" />
                      </Badge>
                    </Tooltip>
                  </NavLink>

                  {/* if user exist, the user information will show in this menu avatar, otherwise it will not show */}
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
                                {user.displayName &&
                                  user.displayName.slice(0, 1)}
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
                                {user.displayName &&
                                  user.displayName.slice(0, 1)}
                              </Avatar>
                            )}
                          </IconButton>
                        </Tooltip>
                      </Box>
                      {/* Menu for Desktop, when the menu avatar clicked, it will show the following menu */}
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
                              width: 38,
                              height: 38,
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
                        transformOrigin={{
                          horizontal: "right",
                          vertical: "top",
                        }}
                        anchorOrigin={{
                          horizontal: "right",
                          vertical: "bottom",
                        }}
                      >
                        {/* account info */}
                        <div className="account-info">
                          <div className="account-img">
                            {user.photoURL ? (
                              <Avatar
                                sx={{
                                  width: 45,
                                  height: 45,
                                }}
                                src={user.photoURL}
                                alt="user-image"
                              >
                                {user.displayName &&
                                  user.displayName.slice(0, 1)}
                              </Avatar>
                            ) : (
                              <Avatar
                                sx={{
                                  width: 45,
                                  height: 45,
                                  background: "#f91943",
                                  fontWeight: "700",
                                  textTransform: "uppercase",
                                  fontSize: "1.6rem",
                                }}
                              >
                                {user.displayName &&
                                  user.displayName.slice(0, 1)}
                              </Avatar>
                            )}
                          </div>
                          <div className="account-desc">
                            <h4> {user.displayName} </h4>
                            <p> {user.email} </p>
                          </div>
                        </div>
                        <Divider />
                        <MenuItem
                          onClick={handleClose}
                          className="menu-item-desk"
                        >
                          <span
                            onClick={() => navigate("/myorder")}
                            style={{ fontSize: "16px" }}
                          >
                            <ListItemIcon>
                              <BrunchDiningIcon />
                            </ListItemIcon>
                            My Order
                          </span>
                        </MenuItem>

                        <MenuItem onClick={handleClose}>
                          <span
                            onClick={() => navigate("/myreservation")}
                            style={{ fontSize: "16px" }}
                          >
                            <ListItemIcon>
                              <TableRestaurantIcon />
                            </ListItemIcon>
                            My Reservation
                          </span>
                        </MenuItem>

                        <MenuItem onClick={handleClose}>
                          <span
                            className="log-out"
                            onClick={logOut}
                            style={{ fontSize: "16px" }}
                          >
                            <ListItemIcon>
                              <Logout />
                            </ListItemIcon>
                            Logout
                          </span>
                        </MenuItem>
                      </Menu>
                    </>
                  )}

                  {/* if there is no user show Login Button */}
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

              {/* If the width is equal and less than 900px, it will show a menu, cart icon */}
              {matches && (
                <NavLink
                  to="/cart"
                  activeStyle={{
                    color: "#f91943",
                  }}
                  className="menu-cart-mobile-icon"
                >
                  <Tooltip title="cart">
                    <Badge badgeContent={cart.length}>
                      <ShoppingCartIcon color="action" />
                    </Badge>
                  </Tooltip>
                </NavLink>
              )}
              {matches && (
                <Tooltip title="Menu">
                  <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    onClick={handleDrawerToggle}
                    id="mobile-menu-btn"
                  >
                    <MenuIcon />
                  </IconButton>
                </Tooltip>
              )}
            </Box>
          </Container>
        </Toolbar>
      </AppBar>

      {/* When the mobile Open triggerd, it will show the drawer */}
      {mobileOpen && (
        <MobileDrawer mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
      )}
    </>
  );
};

export default Navbar;
