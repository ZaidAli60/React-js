import React, { useState } from "react";
import { Button, Grid, TextField, Box } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { writeBatch, doc,serverTimestamp } from "firebase/firestore/lite";
import { firestore } from "../../../config/firebase";

function WithDraw(props) {
  const { singledoc } = props;
  const [open, setOpen] = React.useState(false);
  const [withDrawAmount, setwithDrawAmount] = useState("");
  const [description, setdescription] = useState("");
  const handlewithdraw = async () => {

      let WithDrawId = new Date().getTime();
      WithDrawId = WithDrawId.toString();
      let amountAfterWithdraw =
      Number(singledoc.intialDeposit) - Number(withDrawAmount);
      let type = "Debit";
      let WithDrawData = {
        accountNumber: singledoc.accountNumber,
        branch: singledoc.branch,
        cnic: singledoc.cnic,
        type,
        intialDeposit: withDrawAmount,
        fullName: singledoc.fullName,
        createday: serverTimestamp(),
        useruid: singledoc.useruid,
      };
    

      // Get a new write batch
      const batch = writeBatch(firestore);
      const accountRef = doc(firestore, "Account", singledoc.id);
      batch.update(accountRef, { intialDeposit: amountAfterWithdraw });

      const transactionRef = doc(firestore, "transactions", WithDrawId);
      batch.set(transactionRef, WithDrawData)
      // Commit the batch
      await batch.commit();
      setOpen(false)
    } 
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
                required
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
                required
                autofoucs
                value={description}
                onChange={(e) => setdescription(e.target.value)}
              />
            </Grid>
          </Grid>
          <DialogActions>
            <Button onClick={handlewithdraw} variant="contained">
              WithDraw
            </Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default WithDraw;
