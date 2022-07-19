import React, { useContext } from "react";
import { Authcontext } from "../../context/Authcontext";
// import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Search from "./Search";
import Notification from "./Notification";
import Profile from "./Profile";
import MoreIcon from "@mui/icons-material/MoreVert";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import NavLinklist from "./NavLinkConfig";
import { Link, Link as LinkRouter, useNavigate } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import AddAccount from "../pages/addAccount/AddAccount";
import Transaction from "../pages/transaction/Transaction";
import Home from "../pages/Home/Home";

const drawerWidth = 240;

export default function Dashboar(props) {
  const { isAuthanticated, setisAuthanticated } = useContext(Authcontext);
  const [anchorEl, setAnchorEl] = React.useState(null);

  console.log(isAuthanticated);
  const navigate = useNavigate();
  const logoutHandler = (e) => {
    e.preventDefault();
    setisAuthanticated(false);
    navigate("/");
  };
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div className="bg-dark vh-100">
      <Toolbar>
        <Typography sx={{ color: "#fd7e14", fontSize: "2rem" }}>
          Banker.
        </Typography>
      </Toolbar>
      <Divider sx={{ backgroundColor: "white" }} />
      <nav aria-label="main mailbox folders">
        <List sx={{ color: "white" }}>
          {NavLinklist.map((item) => {
            return (
              <Link
                component={LinkRouter}
                to={item.path}
                style={{ textDecoration: "none" }}
              >
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon sx={{ color: "white" }}>
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText primary={item.text} />
                  </ListItemButton>
                </ListItem>
              </Link>
            );
          })}
        </List>
      </nav>
      <Divider />
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
   
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          backgroundColor: "white",
        }}
        >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon style={{ color: "black" }} />
          </IconButton>

          <Box style={{ display: "flex", flexGrow: "1" }}>
            <Search />
          </Box>
          <Notification />
          <Profile />

          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="primary"
            >
            <MoreIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
        >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          paddingTop: "64px",
        }}
        >
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="transaction" element={<Transaction />} />
            <Route path="addaccount" element={<AddAccount />} />
          </Route>
        </Routes>
    
      </Box>
    </Box>
</>
  );
}

// ResponsiveDrawer.propTypes = {
  // /**
  //  * Injected by the documentation to work in an iframe.
  //  * You won't need it on your project.
  //  */
  // window: PropTypes.func,
  
  // }
  