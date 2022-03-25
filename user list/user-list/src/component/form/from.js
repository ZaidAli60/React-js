import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from "react";
import { userData } from "../userData/userData";
// import BasicTable from '../table/table';
// import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function FormDialog() {
  const [open, setOpen] = React.useState(false);
  const [datas, setUserDate] = useState(userData);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [roles, setRoles] = useState("");


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    const obj = {
      name,
      email,
      roles,
    }
    setUserDate([...datas, obj])

    console.log(obj)
  };

  return (
    <div>
      <Button style={{ backgroundColor: "green", color: "white", }} variant="outlined" onClick={handleClickOpen}>
        Add Users
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>User From</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here.
          </DialogContentText>
          <TextField
            margin="dense"
            id="name"
            label="User Name"
            type="text"
            fullWidth
            variant="standard"
            placeholder='Enter Your Name'
            color='secondary'
            // value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            margin="dense"
            id="name"
            label="Email Address"
            type="text"
            fullWidth
            variant="standard"
            placeholder='Enter Your Email'
            color='secondary'
            // value={name}
            onChange={(e) => setEmail(e.target.value)}
          />

          <TextField
            margin="dense"
            id="name"
            label="Roles"
            type="text"
            fullWidth
            variant="standard"
            placeholder='Enter Your Role'
            color='secondary'
            // value={name}
            onChange={(e) => setRoles(e.target.value)}
          />


        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type='submit' onClick={handleClose}>Add</Button>
        </DialogActions>
      </Dialog>

      {/* {
        datas.map((item)=>{
          return(<BasicTable userdatas={item}/>)
        })
      } */}




      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 100 }} aria-label="simple table">
          <TableHead >
            <TableRow >


              <TableCell ><h4>User Name</h4> </TableCell>

              <TableCell align="right"><h4>Email</h4> </TableCell>
              <TableCell align="right"><h4>Roles</h4> </TableCell>
              <TableCell align="right"><h4>Action</h4> </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>

            {
              datas.map((item) => {
                return (<TableRow >

                  <TableCell component="th" scope="row">
                    {item.name}

                  </TableCell>
                  <TableCell align="right">{item.email}</TableCell>
                  <TableCell align="right">{item.roles}</TableCell>
                  <TableCell align="right"><button>Add</button> <button>delete</button></TableCell>
                </TableRow>)
              })
            }







          </TableBody>
        </Table>

      </TableContainer>




    </div>
  );
}

export default FormDialog;