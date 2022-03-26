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
import BasicTable from '../form/table';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';



function FormDialog() {
  const [open, setOpen] = React.useState(false);
  const [datas, setUserDate] = useState(userData);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [roles, setRoles] = useState("");
  // const [flag, setflag] = useState(name)


  const deleteHandler = (id) => {

    

    const newItems = datas.filter((item) => {
      if (item.id !== id) {
        return item;
      }

    })
    // console.log("newItems", newItems)
    setUserDate([...newItems])
  }

  const upData = (item,index)=>{
      // console.log(item,index)
     setName(item.name) 
     setEmail(item.email)
     setRoles(item.roles)
    setOpen(true);
     

  }


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    if (name !== "" && email !== "" && roles !== "") {
      const obj = {
        name,
        email,
        roles,
      }
      setUserDate([...datas, obj])
      setName("")
      setRoles("")
      setEmail("")

      console.log(obj)
    } else {
      alert("Something went wrong!")


    }


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
            value={name}
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
            value={email}
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
            value={roles}
            onChange={(e) => setRoles(e.target.value)}
          />


        </DialogContent>
        <DialogActions>
          {/* <Button onClick={handleClose}>Cancel</Button> */}

          <Button type='submit' color='secondary' onClick={handleClose}>Add</Button>



        </DialogActions>
      </Dialog>


      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>User Name</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">Roles</TableCell>
              <TableCell align="right">Action</TableCell>
              {/* <TableCell align="right"></TableCell> */}
            </TableRow>
          </TableHead>
          <TableBody>


            {
              datas.map((item, index) => {
                return (<TableRow key={item.id}>
                  <TableCell component="th" scope="row">
                    {item.name}
                  </TableCell>
                  <TableCell align="right">{item.email}</TableCell>
                  <TableCell align="right">{item.roles}</TableCell>
                  <TableCell align="right"><Button onClick={()=>upData(item,index)} style={{ backgroundColor: "green", color: "white" }} >Edit</Button> <Button onClick={() => deleteHandler(item.id)} style={{ backgroundColor: "red", color: "white" }} >Delete</Button></TableCell>

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