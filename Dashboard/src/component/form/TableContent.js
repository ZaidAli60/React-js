import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Grid, Box, Typography, ButtonBase } from '@mui/material';
import { useState } from "react";
import { tableData } from "../form/TableData";
import { styled } from '@mui/material/styles';


const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

function TableContent() {
  const [data, setData] = useState(tableData);
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 300 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>NO</TableCell>
              <TableCell align="right">Product Name</TableCell>
              <TableCell align="right">Status</TableCell>
              <TableCell align="right">Sold</TableCell>
              <TableCell align="right">View</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>


            {
              data.map((item, index) => {
                return <TableRow
                  key={item.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {index}
                  </TableCell>
                  <TableCell align="right">

                    <Box sx={{display:"flex",alignItems:"center"}}>
                      <ButtonBase sx={{ width: 60, height: 50 }}>
                        <Img alt="complex" src={item.img} />
                      </ButtonBase>
                      <Typography>
                        {item.productName}
                      </Typography>
                    </Box>

                 

                  </TableCell>
                  <TableCell align="right" sx={{ color: "#2196f3" }}>{item.status}</TableCell>
                  <TableCell align="right">{item.sold}</TableCell>
                  <TableCell align="right">{item.view}</TableCell>
                </TableRow>
              })
            }


          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}



export default TableContent;