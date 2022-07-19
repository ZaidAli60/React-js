import React, { useState } from "react";
import { Button } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Grid, TextField } from "@mui/material";

function Deposit() {
  const [open, setOpen] = React.useState(false);
  const [depositAmount, setdepositAmount] = useState("");
  const [depositDescription, setdepositDescription] = useState("");
  console.log(depositDescription);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      {" "}
      <Button onClick={handleClickOpen} variant="contained">
        Deposit
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle
          id="alert-dialog-title"
          sx={{
            display: "flex",
            justifyContent: "center",
            backgroundColor: "rgb(33, 37, 41)",
            color: "white",
          }}
        >
          Deposit
        </DialogTitle>
        <DialogContent>
          <Grid container spacing={2} direction="column" sx={{ py: 4 }}>
            <Grid item lg={12}>
              <TextField
                id="outlined-basic"
                label="Amount"
                variant="outlined"
                size="small"
                type="number"
                value={depositAmount}
                onChange={(e) => setdepositAmount(e.target.value)}
              />
            </Grid>
            <Grid item lg={12}>
              <TextField
                type="text"
                id="outlined-basic"
                label="Description*"
                variant="outlined"
                size="small"
                value={depositDescription}
                onChange={(e) => setdepositDescription(e.target.value)}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="contained">
            Deposit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Deposit;
