import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import { useGolbalContext } from "../../../context/AccountsContext";

function Transactions() {
  const { transactionData } = useGolbalContext();
  return (
    <Box sx={{ py: 3 }}>
      <Typography variant="h4" sx={{ fontWeight: "bold", pb: 2 }}>
        Transactions
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell
                style={{ backgroundColor: "rgba(33,37,41)", color: "white" }}
              >
                No
              </TableCell>
              <TableCell
                style={{ backgroundColor: "rgba(33,37,41)", color: "white" }}
              >
                Name
              </TableCell>
              <TableCell
                style={{ backgroundColor: "rgba(33,37,41)", color: "white" }}
              >
                CNIC
              </TableCell>
              <TableCell
                style={{ backgroundColor: "rgba(33,37,41)", color: "white" }}
              >
                Account Number
              </TableCell>
              <TableCell
                style={{ backgroundColor: "rgba(33,37,41)", color: "white" }}
              >
                Type
              </TableCell>
              <TableCell
                style={{ backgroundColor: "rgba(33,37,41)", color: "white" }}
              >
                Branch Code{" "}
              </TableCell>
              <TableCell
                style={{ backgroundColor: "rgba(33,37,41)", color: "white" }}
              >
                Amount{" "}
              </TableCell>
              <TableCell
                style={{ backgroundColor: "rgba(33,37,41)", color: "white" }}
              >
                Time{" "}
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {transactionData.map((item, index) => {
              return (
                <TableRow>
                  <TableCell>{index}</TableCell>
                  <TableCell>{item.fullName}</TableCell>
                  <TableCell>{item.cnic}</TableCell>
                  <TableCell>{item.accountNumber}</TableCell>
                  <TableCell>{item.type}</TableCell>
                  <TableCell>{item.branch}</TableCell>
                  <TableCell sx={{ color: "blue" }}>
                    {item.intialDeposit}
                  </TableCell>
                  <TableCell>{item.times}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
export default Transactions;
