import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Grid from '@mui/material/Grid';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { mainListItems } from './listItems';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { MdOutlinePreview } from 'react-icons/md';
import { AiFillShopping, AiOutlineMessage } from 'react-icons/ai';
import { FaUserFriends } from 'react-icons/fa';
import { FaShoppingCart } from 'react-icons/fa';
import AddIcon from '@mui/icons-material/Add';
import TableContent from '../form/TableContent';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import Charts from "../chart/Chart"




const drawerWidth = 80;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);

const mdTheme = createTheme();

function DashboardContent() {
  const [open, setOpen] = React.useState(true);
  // const toggleDrawer = () => {
  //   setOpen(!open);
  // };

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="absolute" open={open} sx={{ backgroundColor: "white" }}>
          <Toolbar
            sx={{
              pr: '24px', // keep right padding when drawer closed
            }}
          >
            {/* <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              // onClick={toggleDrawer}
              sx={{
                textAlign:"center",
                // marginRight: '36px',
                // ...(open && { display: 'none' }),
              }}
            >
              <MenuIcon />
            </IconButton> */}
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              <Box sx={{ display: "flex" }}>
                <input  type='text'placeholder='Search for transaction,item etc'
                  style={{
                    width: "15rem",
                    height: "2.5rem",
                    backgroundColor: "#efefef",
                    paddingLeft:"5px",
                    paddingRight:"5px",
                    border:"none",
                    outline: "none",

                  }} />
                <Button style={{ 
                  width: "8rem", 
                  height: "2.5rem",
                  border:"none",
                  backgroundColor:"#2196f3",
                  color:"white",
                  cursor:"pointer"
                   }}>Search</Button>
              </Box>


            </Typography>
            <IconButton >
              <Badge badgeContent={1} color="secondary">
                <AiOutlineMessage />
              </Badge>
            </IconButton>
            <IconButton >
              <Badge badgeContent={1} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            {/* <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton> */}
            <Tooltip title="Open settings">
              <IconButton sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
            }}
          >
            <IconButton
              sx={{ textAlign: "center" }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
          <Divider />

          <List component="nav" >
            {mainListItems}
            <Divider sx={{ my: 1 }} />
          </List>

        </Drawer>

        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
            px: 2,
            py: 3,
          }}
        >
          <Toolbar />
          <Typography variant='h5' component='h1' fontWeight='bold'>
            Dashboard
          </Typography>
          <Grid container spacing={2} sx={{ my: 2 }}>
            <Grid item lg={3} md={4} sm={6} xs={12}>
              <Card
                sx={{ backgroundColor: "#2196f3", py: 1, px: 1, height: "100%", }}
              >
                <CardContent>

                  <Box sx={{ display: "flex", justifyContent: 'space-between', }}>
                    <IconButton style={{ color: "white", fontSize: "2rem" }} aria-label="delete" variant="contained">
                      <MdOutlinePreview />
                    </IconButton>
                    <IconButton style={{ color: "white", fontSize: "2rem" }} aria-label="delete" variant="contained">
                      <MdOutlinePreview />
                    </IconButton>
                  </Box>

                  <Typography sx={{ fontSize: 15, color: "white", mt: 2 }} paragraph gutterBottom>
                    Total Views
                  </Typography>
                  <Typography variant="h4" sx={{ color: "white" }} component="div">
                    308.402
                  </Typography>
                  <Divider sx={{ color: "white" }} />
                  <Typography sx={{ my: 1.5, color: "white", fontSize: 15 }} paragraph>
                    Start from 1 jan 2021
                  </Typography>
                </CardContent>
              </Card>
            </Grid>


            <Grid item lg={3} md={4} sm={6} xs={12}>
              <Card

                sx={{ backgroundColor: "white", py: 1, px: 1, height: "100%", }}
              >
                <CardContent>

                  <Box sx={{ display: "flex", justifyContent: 'space-between', }}>
                    <IconButton style={{ color: "#689f38", fontSize: "2rem" }} aria-label="delete" variant="contained">
                      <AiFillShopping />
                    </IconButton>
                    <IconButton style={{ color: "#689f38", fontSize: "2rem" }} aria-label="delete" variant="contained">
                      <AiFillShopping />
                    </IconButton>
                  </Box>

                  <Typography sx={{ fontSize: 15, mt: 2 }} paragraph gutterBottom>
                    Total Product
                  </Typography>
                  <Typography variant="h4" component="div">
                    10.402
                  </Typography>
                  <Divider sx={{ color: "white" }} />
                </CardContent>
                <CardActions sx={{ fontSize: 15 }}>
                  <Button size="small" startIcon={<AddIcon />}>Add New Product</Button>
                </CardActions>
              </Card>
            </Grid>




            <Grid item lg={3} md={4} sm={6} xs={12}>
              <Card

                sx={{ backgroundColor: "white", py: 1, px: 1, height: "100%", }}
              >
                <CardContent>

                  <Box sx={{ display: "flex", justifyContent: 'space-between', }}>
                    <IconButton style={{ color: "#2196f3", fontSize: "2rem" }} aria-label="delete" variant="contained">
                      <FaUserFriends />
                    </IconButton>
                    <IconButton style={{ color: "#2196f3", fontSize: "2rem" }} aria-label="delete" variant="contained">
                      <FaUserFriends />
                    </IconButton>
                  </Box>

                  <Typography sx={{ fontSize: 15, mt: 2 }} paragraph gutterBottom>
                    Total Users
                  </Typography>
                  <Typography variant="h4" component="div">
                    8.425
                  </Typography>
                  <Divider sx={{ color: "white" }} />
                  <Typography sx={{ my: 1.5, fontSize: 15 }} paragraph>
                    Start from 1 jan 2021
                  </Typography>
                </CardContent>

              </Card>
            </Grid>




            <Grid item lg={3} md={4} sm={6} xs={12}>
              <Card

                sx={{ backgroundColor: "white", py: 1, px: 1, height: "100%", }}
              >
                <CardContent>

                  <Box sx={{ display: "flex", justifyContent: 'space-between', }}>
                    <IconButton style={{ color: "#689f38", fontSize: "2rem" }} aria-label="delete" variant="contained">
                      <FaShoppingCart />
                    </IconButton>
                    <IconButton style={{ color: "#689f38", fontSize: "2rem" }} aria-label="delete" variant="contained">
                      <FaShoppingCart />
                    </IconButton>
                  </Box>

                  <Typography sx={{ fontSize: 15, mt: 2 }} paragraph gutterBottom>
                    Total Users
                  </Typography>
                  <Typography variant="h4" component="div">
                    8.425
                  </Typography>
                  <Divider sx={{ color: "white" }} />
                  <Typography sx={{ my: 1.5, fontSize: 15 }} paragraph>
                    Start from 1 jan 2021
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>


          <Box sx={{ my: 5 }}>
            <Grid container spacing={2}
              sx={{ display: "flex" }}
            >
              <Grid item lg={7}>
                <TableContent />

              </Grid>
              <Grid item lg={5}>

                <Charts />

              </Grid>
            </Grid>
          </Box>


        </Box>

      </Box>
    </ThemeProvider>
  );
}


export default DashboardContent;