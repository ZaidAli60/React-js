import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SummarizeOutlinedIcon from '@mui/icons-material/SummarizeOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import ReportOutlinedIcon from '@mui/icons-material/ReportOutlined';
import RestorePageOutlinedIcon from '@mui/icons-material/RestorePageOutlined';
import { Box } from '@mui/system';
export const mainListItems = (
  <React.Fragment>
    <Box
      // sx={{ height: "100vh" }}
    >
      <Box sx={{my:4}}>
        <ListItemButton>
          <ListItemIcon sx={{ alignItems: "center", pl: 1, }}>
            <DashboardIcon />
          </ListItemIcon>
        </ListItemButton>
      </Box>
      <Box sx={{my:4}}>
        <ListItemButton>
          <ListItemIcon sx={{ alignItems: "center", pl: 1, }}>
            <ShoppingCartIcon />
          </ListItemIcon>
        </ListItemButton>
      </Box>
      <Box sx={{my:4}}>
        <ListItemButton>
          <ListItemIcon sx={{ alignItems: "center", pl: 1, }}>
            <SummarizeOutlinedIcon />
          </ListItemIcon>
        </ListItemButton>
      </Box>
      <Box sx={{my:4}}>
        <ListItemButton>
          <ListItemIcon sx={{ alignItems: "center", pl: 1, }}>
            <SettingsOutlinedIcon />
          </ListItemIcon>
        </ListItemButton>
      </Box>
      <Box sx={{my:4}}>
        <ListItemButton>
          <ListItemIcon sx={{ alignItems: "center", pl: 1, }}>
            <ReportOutlinedIcon />
          </ListItemIcon>
        </ListItemButton>
      </Box>
      <Box sx={{my:4}}>
        <ListItemButton>
          <ListItemIcon sx={{ alignItems: "center", pl: 1, }}>
            <RestorePageOutlinedIcon />
          </ListItemIcon>
        </ListItemButton>
      </Box>
      
      
      
      

    </Box>
  </React.Fragment>
);


// export const secondaryListItems = (
//     <React.Fragment>
//       <ListSubheader component="div" inset>
//         {/* Saved reports */}
//       </ListSubheader>
//       <ListItemButton>
//         <ListItemIcon>
//           <AssignmentIcon />
//         </ListItemIcon>
//         {/* <ListItemText primary="Current month" /> */}
//       </ListItemButton>
//       <ListItemButton>
//         <ListItemIcon>
//           <AssignmentIcon />
//         </ListItemIcon>
//         {/* <ListItemText primary="Last quarter" /> */}
//       </ListItemButton>
//       <ListItemButton>
//         <ListItemIcon>
//           <AssignmentIcon />
//         </ListItemIcon>
//         {/* <ListItemText primary="Year-end sale" /> */}
//       </ListItemButton>
//     </React.Fragment>
  // );