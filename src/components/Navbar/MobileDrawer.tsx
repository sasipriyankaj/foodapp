// import important modules
import "./Navbar.css";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Drawer from "@mui/material/Drawer";
import { Dispatch, SetStateAction } from "react";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import { NavLink } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import EventSeatIcon from "@mui/icons-material/EventSeat";
import LoginIcon from "@mui/icons-material/Login";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store/store";
import BrunchDiningIcon from "@mui/icons-material/BrunchDining";
import TableRestaurantIcon from "@mui/icons-material/TableRestaurant";
import firebaseAuth from "../../firebase/firebaseAuth";
import LogoutIcon from "@mui/icons-material/Logout";
import Divider from "@mui/material/Divider";
import Avatar from "@mui/material/Avatar";

// Type declaration of MobileDrawerDataType
interface MobileDrawerDataType {
  mobileOpen: boolean;
  setMobileOpen: Dispatch<SetStateAction<boolean>>;
}

// set the width of drawer
const drawerWidth = 300;

// using makeStyle function to set the width
const useStyles = makeStyles({
  drawer: {
    width: drawerWidth,
  },
});

const MobileDrawer = ({ mobileOpen, setMobileOpen }: MobileDrawerDataType) => {
  // get user and Logout from store and firebaseAuth
  const { user } = useSelector((state: RootState) => state.user);
  const { logOut } = firebaseAuth();

  // Toggle the drawer
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // define class by calling useStyles function
  const classes = useStyles();

  return (
    <Drawer
      className={classes.drawer}
      classes={{ paper: classes.drawer }}
      variant="temporary"
      open={mobileOpen}
      onClose={handleDrawerToggle}
      anchor="left"
    >
      {/* Top Right Close Button */}
      <Box sx={{ textAlign: "right", pt: 3, mr: 3 }}>
        <div className="close-btn">
          <IconButton aria-label="delete" onClick={handleDrawerToggle}>
            <CloseIcon />
          </IconButton>
        </div>
      </Box>

      {/* List of  Different options */}
      <List sx={{ mt: 3 }}>
        {/* account -info */}
        {user && user.email && (
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
                  {user.displayName && user.displayName.slice(0, 1)}
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
                  {user.displayName && user.displayName.slice(0, 1)}
                </Avatar>
              )}
            </div>
            <div className="account-desc">
              <h4> {user.displayName} </h4>
              <p> {user.email} </p>
            </div>
          </div>
        )}
        <Divider />

        {/* Home  */}
        <NavLink to="/" onClick={handleDrawerToggle}>
          <ListItem disablePadding className="item-list">
            <ListItemButton>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>
        </NavLink>

        {/* About */}
        <NavLink to="/about" onClick={handleDrawerToggle}>
          <ListItem disablePadding className="item-list">
            <ListItemButton>
              <ListItemIcon>
                <InfoIcon />
              </ListItemIcon>
              <ListItemText primary="About" />
            </ListItemButton>
          </ListItem>
        </NavLink>

        {/* Menu */}
        <NavLink to="/menu" onClick={handleDrawerToggle}>
          <ListItem disablePadding className="item-list">
            <ListItemButton>
              <ListItemIcon>
                <RestaurantMenuIcon />
              </ListItemIcon>
              <ListItemText primary="Our Menu" />
            </ListItemButton>
          </ListItem>
        </NavLink>

        {/* Reservation */}
        <NavLink to="/reservation" onClick={handleDrawerToggle}>
          <ListItem disablePadding className="item-list">
            <ListItemButton>
              <ListItemIcon>
                <EventSeatIcon />
              </ListItemIcon>
              <ListItemText primary="Reservation" />
            </ListItemButton>
          </ListItem>
        </NavLink>

        {/* If user email not exist, show Login Option. Otherwise show the options that are in private route information */}
        {!user.email ? (
          <NavLink to="/login" onClick={handleDrawerToggle}>
            <ListItem disablePadding className="item-list">
              <ListItemButton>
                <ListItemIcon>
                  <LoginIcon />
                </ListItemIcon>
                <ListItemText primary="Login" />
              </ListItemButton>
            </ListItem>
          </NavLink>
        ) : (
          <>
            {/* My Order */}
            <NavLink to="/myorder" onClick={handleDrawerToggle}>
              <ListItem disablePadding className="item-list">
                <ListItemButton>
                  <ListItemIcon>
                    <BrunchDiningIcon />
                  </ListItemIcon>
                  <ListItemText primary="My Orders" />
                </ListItemButton>
              </ListItem>
            </NavLink>

            {/* My Reservations */}
            <NavLink to="/myreservation" onClick={handleDrawerToggle}>
              <ListItem disablePadding className="item-list">
                <ListItemButton>
                  <ListItemIcon>
                    <TableRestaurantIcon />
                  </ListItemIcon>
                  <ListItemText primary="My Reservation" />
                </ListItemButton>
              </ListItem>
            </NavLink>

            {/* Log out */}
            <div className="log-out-mobile-menu" onClick={handleDrawerToggle}>
              <ListItem disablePadding onClick={logOut} className="item-list">
                <ListItemButton>
                  <ListItemIcon>
                    <LogoutIcon />
                  </ListItemIcon>
                  <ListItemText primary="Log Out" />
                </ListItemButton>
              </ListItem>
            </div>
          </>
        )}
      </List>
    </Drawer>
  );
};

export default MobileDrawer;
