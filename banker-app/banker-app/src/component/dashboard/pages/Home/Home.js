import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import IconButton from "@mui/material/IconButton";
import Divider from "@mui/material/Divider";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { MdOutlinePreview, MdTransform } from "react-icons/md";
import { Grid } from "@mui/material";
import { Link as LinkRouter } from "react-router-dom";
import { useGolbalContext } from "../../../context/AccountsContext";
const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);
function Home() {
  const { documents, transactionData } = useGolbalContext();
  return (
    <Box sx={{ p: 1 }}>
      <Box>
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          Dashboard
        </Typography>
      </Box>
      <Grid container spacing={2}>
        <Grid item lg={6} md={6} sx={12} xs={12}>
          <Card sx={{ backgroundColor: "#2196f3", my: 2 }}>
            <CardContent>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <IconButton
                  style={{ color: "white", fontSize: "2rem" }}
                  aria-label="delete"
                  variant="contained"
                >
                  <MdOutlinePreview />
                </IconButton>
                <IconButton
                  style={{ color: "white", fontSize: "2rem" }}
                  aria-label="delete"
                  variant="contained"
                >
                  <MdOutlinePreview />
                </IconButton>
              </Box>

              <Typography
                variant="h4"
                sx={{
                  color: "white",
                  display: "flex",
                  justifyContent: "center",
                  pt: 1,
                }}
                component="div"
              >
                {documents.length}
              </Typography>
              <Typography variant="h5" sx={{ color: "white", mt: 2 }} paragraph>
                Total Account
              </Typography>

              <Typography sx={{ color: "white", fontSize: 15 }} paragraph>
                Start from 1 jan 2022
              </Typography>
            </CardContent>
            <div className="d-flex justify-content-center py-1">
              <LinkRouter
                to="addaccount"
                className="btn bg-white"
                variant="outline"
              >
                + Add New Account
              </LinkRouter>
            </div>
          </Card>
        </Grid>

        <Grid item lg={6} md={6} sx={12} xs={12}>
          <Card sx={{ my: 2 }}>
            <CardContent>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <IconButton
                  color="primary"
                  style={{ fontSize: "2rem" }}
                  aria-label="delete"
                  variant="contained"
                >
                  <MdTransform />
                </IconButton>
                <IconButton
                  color="primary"
                  style={{ fontSize: "2rem" }}
                  aria-label="delete"
                  variant="contained"
                >
                  <MdTransform />
                </IconButton>
              </Box>

              <Typography
                variant="h4"
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  pt: 1,
                }}
                component="div"
              >
                {transactionData.length}
              </Typography>
              <Typography variant="h5" sx={{ mt: 2 }} paragraph>
                Total Transactions
              </Typography>

              <Typography sx={{ fontSize: 15 }} paragraph>
                Start from 1 jan 2022
              </Typography>
            </CardContent>
            <div className="d-flex justify-content-center py-1">
              <LinkRouter
                to="transactions"
                className="btn bg-white"
                variant="outline"
              >
                + All View Account
              </LinkRouter>
            </div>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
export default Home;
