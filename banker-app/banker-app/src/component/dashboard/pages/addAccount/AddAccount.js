import React, { useState } from "react";
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
import StickyHeadTable from "./AccountTable";
import { firestore } from "../../../config/firebase";
import { collection, addDoc } from "firebase/firestore/lite";
import { toast } from "react-toastify";
const collectName = "Account";
const docsCollectRef = collection(firestore, collectName);
function AddAccount() {
  const [open, setOpen] = React.useState(false);
  const [state, setState] = useState({
    fullName: "",
    cnic: "",
    accountNumber: "",
    branch: "",
    intialDeposit: "",
    chooseAccount: "",
  });

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const createDocs = async (e) => {
    e.preventDefault();
    const formData = state;
    if (state.cnic.length !== 13) {
      return toast.error(
        `Your CNIC number ${state.cnic.length} is not valid. Please enter a valid CNIC number`,
        {
          position: "bottom-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        }
      );
    }
    if (state.accountNumber.length !== 9) {
      return toast.error(
        `Your Account number ${state.accountNumber.length} is not valid. Please enter a valid Account number`,
        {
          position: "bottom-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        }
      );
    }
    if (state.intialDeposit < 500) {
      return toast.error(
        `Your Initial Deposit number ${state.intialDeposit.length} is not valid. Please enter a Initial Deposit`,
        {
          position: "bottom-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        }
      );
    }
    if (state.branch.length !== 2) {
      return toast.error(
        `Your Branch code  ${state.branch.length} is not valid. Please enter a Branch Code `,
        {
          position: "bottom-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        }
      );
    }
    console.log(formData);
    try {
      const docRef = await addDoc(docsCollectRef, formData);
      toast.success("User has been added!", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } catch (e) {
      console.error("Error adding document: ", e);
      toast.error("Something went wron", {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
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
                name="fullName"
                value={state.fullName}
                onChange={handleChange}
              />
            </Grid>
            <Grid item md={6}>
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="CNIC Number"
                type="number"
                fullWidth
                variant="outlined"
                size="small"
                name="cnic"
                value={state.cnic}
                onChange={handleChange}
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
                name="branch"
                value={state.branch}
                onChange={handleChange}
              />
            </Grid>
            <Grid item md={6}>
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Account Number (Length should be 9)"
                type="number"
                fullWidth
                variant="outlined"
                size="small"
                name="accountNumber"
                value={state.accountNumber}
                onChange={handleChange}
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
                  label="Choose Account"
                  name="chooseAccount"
                  value={state.chooseAccount}
                  onChange={handleChange}
                >
                  <MenuItem value="Current Account">Curent Account</MenuItem>
                  <MenuItem value="Saving Account">Saving Account</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item md={6}>
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Initial Deposit (Minimum 500 Rs)"
                type="number"
                fullWidth
                variant="outlined"
                size="small"
                name="intialDeposit"
                value={state.intialDeposit}
                onChange={handleChange}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={handleClose}>
            Cancel
          </Button>
          <div>
            <Button variant="contained" type="sumbit" onClick={createDocs}>
              Create Account
            </Button>
          </div>
        </DialogActions>
      </Dialog>
      <Box sx={{ my: 4 }}>
        <StickyHeadTable />
      </Box>
    </Box>
  );
}

export default AddAccount;
