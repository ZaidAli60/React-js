import React, { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { firestore } from "../../../config/firebase";
import { collection, getDocs } from "firebase/firestore/lite";

const collectName = "Account";
const docsCollectRef = collection(firestore, collectName);

function StickyHeadTable() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [documents, setDocuments] = useState([]);
  console.log(documents)
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const readDocs = async () => {
    let array = [];
    const querySnapshot = await getDocs(docsCollectRef);
    // console.log(querySnapshot);
    querySnapshot.forEach((doc) => {
      // console.log(doc)
      array.push({ ...doc.data(), id: doc.id });
    });
    setDocuments(array);
  };

  useEffect(() => {
    readDocs();
  }, []);

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
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
                Branch Code
              </TableCell>
              <TableCell
                style={{ backgroundColor: "rgba(33,37,41)", color: "white" }}
              >
                Balance
              </TableCell>
              <TableCell
                style={{ backgroundColor: "rgba(33,37,41)", color: "white" }}
              >
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {documents.map((item,index) => {
              return (
                <TableRow key={item.id}>
                  <TableCell>{index}</TableCell>
                  <TableCell>{item.fullName}</TableCell>
                  <TableCell>{item.cnic}</TableCell>
                  <TableCell>{item.accountNumber}</TableCell>
                  <TableCell>{item.branch}</TableCell>
                  <TableCell>{item.intialDeposit}</TableCell>
                </TableRow>
              );
            })}
            {/* {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })} */}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}

export default StickyHeadTable;
