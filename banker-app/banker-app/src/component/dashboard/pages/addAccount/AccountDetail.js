import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function AccountDetail(props) {
  const { singledoc } = props;
  return (
    <div style={{width:"300px"}}>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableBody>
            <TableRow>
              <TableCell >Name</TableCell>
              <TableCell >{singledoc.fullName}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell >CNIC</TableCell>
              <TableCell >{singledoc.cnic}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell >Account Number</TableCell>
              <TableCell >{singledoc.accountNumber}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell >Branch Code</TableCell>
              <TableCell >{singledoc.branch}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell >Balance</TableCell>
              <TableCell >{singledoc.intialDeposit}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default AccountDetail;
