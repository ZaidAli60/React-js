import React, { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import { Button } from "@mui/material";
import { toast } from "react-toastify";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useGolbalContext } from "../../../context/AccountsContext";
import AccountDetail from "./AccountDetail";
import WithDraw from "./WithDraw";
import Deposit from "./Deposit";

function StickyHeadTable() {
  const { documents, setDocuments, deleteDocument } = useGolbalContext();
  const [singledoc, setSingledoc] = useState({});

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = (item) => {
    documents.forEach((doc) => {
      if (item.id === doc.id) {
        setSingledoc(doc);
        setOpen(true);
        return;
      }
    });
  };
  const handleClickopen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
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
              {documents.map((item, index) => {
                return (
                  <TableRow key={item.id}>
                    <TableCell>{index}</TableCell>
                    <TableCell>{item.fullName}</TableCell>
                    <TableCell
                      onClick={() => handleClickOpen(item)}
                      style={{ cursor: "pointer", color: "blue" }}
                    >
                      {item.cnic}
                    </TableCell>
                    <TableCell>{item.accountNumber}</TableCell>
                    <TableCell>{item.branch}</TableCell>
                    <TableCell>{item.intialDeposit}</TableCell>
                    <TableCell>
                      <Button
                        variant="contained"
                        color="error"
                        size="small"
                        sx={{ ml: 1 }}
                        onClick={() => deleteDocument(item)}
                      >
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
      <div>
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
            Account Detail
          </DialogTitle>
          <DialogContent sx={{ my: 2 }}>
            <DialogContentText id="alert-dialog-description">
              <AccountDetail singledoc={singledoc} />
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <WithDraw />
            <Deposit />
          </DialogActions>
        </Dialog>
      </div>
    </>
  );
}

export default StickyHeadTable;
