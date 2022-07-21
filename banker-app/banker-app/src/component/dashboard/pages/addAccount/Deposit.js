import React, { useState } from "react";
import { Button } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Grid, TextField } from "@mui/material";
import { writeBatch, doc, serverTimestamp } from "firebase/firestore/lite";
import { firestore } from "../../../config/firebase";

function Deposit(props) {
  const { singledoc } = props;
  const [open, setOpen] = React.useState(false);
  const [depositAmount, setdepositAmount] = useState("");
  const [depositDescription, setdepositDescription] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleDeposit = async () => {
    if (depositAmount < 5000) {
      let transactionId = new Date().getTime();
      transactionId = transactionId.toString();
      let type = "credit";
      let tranctiondata = {
        accountNumber: singledoc.accountNumber,
        branch: singledoc.branch,
        cnic: singledoc.cnic,
        type,
        intialDeposit: depositAmount,
        fullName: singledoc.fullName,
        Description: "initial Deposit",
        createday: serverTimestamp(),
        useruid: singledoc.useruid,
      };
      let amountAfterWithdraw =
        Number(singledoc.intialDeposit) + Number(depositAmount);

      // Get a new write batch
      const batch = writeBatch(firestore);
      const accountRef = doc(firestore, "Account", singledoc.id);
      batch.update(accountRef, { intialDeposit: amountAfterWithdraw });

      const transactionRef = doc(firestore, "transactions", transactionId);
      batch.set(transactionRef, tranctiondata);
      await batch.commit();
      setOpen(false);
    } else {
      alert("add valid amount");
    }
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
          <Button onClick={handleDeposit} variant="contained">
            Deposit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Deposit;
