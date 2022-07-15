import React from "react";
import { IconButton,Badge } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";

function Notification() {
  return (
    <div>
      <IconButton color="primary" aria-label="upload picture" component="label">
        <Badge badgeContent={1} color="error">
          <NotificationsIcon sx={{ color: "#2962ff" }} />
        </Badge>
      </IconButton>
    </div>
  );
}

export default Notification;
