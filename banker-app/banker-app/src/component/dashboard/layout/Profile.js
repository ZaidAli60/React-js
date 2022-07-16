import React from "react";
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { Avatar } from "@mui/material";
import User from "../../../Assets/user.jpg"
 
function Profile() {
    
  return (
    <div>
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        color="inherit"
      >
   
        <Avatar src={User} alt="user"/>
      </IconButton>
  
    </div>
  );
}

export default Profile;
