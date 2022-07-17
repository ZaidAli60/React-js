import { Button, Grid } from "@mui/material";
import { Box } from "@mui/system";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import React from "react";
import StickyHeadTable from "./AccountTable";

function AddAccount() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Box sx={{ p: 3 }}>
      <Box>
        <Button
          style={{
            backgroundColor: "#fd7e14",
            color: "white",
          }}
          onClick={handleClickOpen}
        >
          Add Account
        </Button>
      </Box>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle
          sx={{
            display: "flex",
            justifyContent: "center",
            backgroundColor: "rgba(33,37,41)",
            color: "white",
          }}
        >
          Enter Account Details Below
        </DialogTitle>
        <DialogContent sx={{ my: 3 }}>
          <Grid container spacing={1}>
            <Grid item md={6}>
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Full Name"
                type="text"
                fullWidth
                variant="outlined"
                size="small"
              />
            </Grid>
            <Grid item md={6}>
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="CNIC Number"
                type="email"
                fullWidth
                variant="outlined"
                size="small"
              />
            </Grid>
            <Grid item md={6}>
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Branch Code"
                type="number"
                fullWidth
                variant="outlined"
                size="small"
              />
            </Grid>
            <Grid item md={6}>
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Account Number"
                type="number"
                fullWidth
                variant="outlined"
                size="small"
              />
            </Grid>
            <Grid item md={6}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Choose Account
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  // value={age}
                  label="Choose Account"
                  // onChange={handleChange}
                >
                  <MenuItem value={10}>Curent Account</MenuItem>
                  <MenuItem value={20}>Saving Account</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item md={6}>
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Initial Deposit"
                type="number"
                fullWidth
                variant="outlined"
                size="small"
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="contained" onClick={handleClose}>
            Create Account
          </Button>
        </DialogActions>
      </Dialog>
      <Box sx={{ my: 4 }}>
        <StickyHeadTable />
      </Box>
    </Box>
  );
}

export default AddAccount;
