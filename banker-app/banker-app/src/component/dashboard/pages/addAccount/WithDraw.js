import React, { useState } from "react";
import { Button, Grid, TextField } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { writeBatch, doc } from "firebase/firestore/lite";
import { firestore } from "../../../config/firebase";

function WithDraw(props) {
  const { singledoc } = props;
  console.log(singledoc);
  const [open, setOpen] = React.useState(false);
  const [withDrawAmount, setwithDrawAmount] = useState("");
  const [description, setdescription] = useState("");
  const handlewithdraw = async () => {
    if (withDrawAmount <= singledoc.intialDeposit) {
      let amountAfterWithdraw =
        Number(singledoc.intialDeposit) - Number(withDrawAmount);

      // Get a new write batch
      const batch = writeBatch(firestore);
      const accountRef = doc(firestore, "Account", singledoc.id);
      batch.update(accountRef, { intialDeposit: amountAfterWithdraw });

      // const transactionRef = doc(firestore, "transactions", transactionId);
      // batch.set(transactionRef, tranctiondata)
      // Commit the batch
      await batch.commit();
    } else {
      alert("add valid amount");
    }
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleClickOpen} variant="contained">
        Withdraw
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
          Withdraw Amount
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
                value={withDrawAmount}
                onChange={(e) => setwithDrawAmount(e.target.value)}
              />
            </Grid>
            <Grid item lg={12}>
              <TextField
                type="text"
                id="outlined-basic"
                label="Description*"
                variant="outlined"
                size="small"
                value={description}
                onChange={(e) => setdescription(e.target.value)}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handlewithdraw} variant="contained">
            WithDraw
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default WithDraw;
