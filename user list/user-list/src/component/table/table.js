import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData() {
  return;
}



 function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table  sx={{ minWidth: 100 }} size="small"  aria-label="simple table">
        <TableHead >
          <TableRow >
         
            {/* <TableCell align="right">User Name</TableCell> */}
            <TableCell ><h4>User Name</h4> </TableCell>
            <TableCell align="right"><h4>User Name</h4> </TableCell>
            <TableCell align="right"><h4>Email</h4> </TableCell>
            <TableCell align="right"><h4>Roles</h4> </TableCell>
            <TableCell align="right"><h4>Action</h4> </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
       
            <TableRow >
              <TableCell component="th" scope="row">
                Zaid Ali
              </TableCell>
              <TableCell align="right">zaidali</TableCell>
              <TableCell align="right">Admin</TableCell>
              <TableCell align="right">Admin</TableCell>
            </TableRow>
          
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default BasicTable;