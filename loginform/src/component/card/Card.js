import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import AccountCircle from '@mui/icons-material/AccountCircle';
import HttpsTwoToneIcon from '@mui/icons-material/HttpsTwoTone';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import FacebookSharpIcon from '@mui/icons-material/FacebookSharp';
import {AiOutlineGoogle} from 'react-icons/ai';
import {AiOutlineTwitter} from 'react-icons/ai';

import "./Card.css";

function BasicCard() {
    return (
        <div className='card'>
            <Card sx={{ maxWidth: 1000 }} style={{ backgroundColor: "white", color: "black", width: "400px", height: "auto", }}>
                <CardContent>
                    <Typography variant='h2' gutterBottom>
                        Login
                    </Typography>
                    <Typography className='inputField' variant='h2' component="div" >
                        <TextField style={{ width: "100%", }}
                            id="input-with-icon-textfield"
                            label="Username"
                            color="secondary"
                            variant="filled"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <AccountCircle />
                                    </InputAdornment>
                                ),
                            }}

                        />
                    </Typography>

                    <Typography variant='h2' component="div" gutterBottom>
                        <TextField style={{ width: "100%", }}
                            id="input-with-icon-textfield"
                            label="Password"
                            color="secondary"
                            variant="filled"
                            type="password"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <HttpsTwoToneIcon />
                                    </InputAdornment>
                                ),
                            }}
                     
                        />
                    </Typography>
                
                 
                    <Button variant="contained">Login</Button>
                    <Grid style={{padding:"10px 0 20px 0"}} container direction="column" alignItems="center" spacing={2}>
                        <Grid item>
                            or sign up using
                        </Grid>
                    </Grid>
                    <Grid container rowSpacing={1} alignItems="center" justifyContent={"center"} spacing={1} >
                        <Grid item >
                            <IconButton style={{ backgroundColor: "#1877f2", color: "white" }} aria-label="delete" variant="contained">
                                <FacebookSharpIcon />
                            </IconButton>
                        </Grid>
                        <Grid item >
                            <IconButton style={{ backgroundColor: "#ea4335", color: "white" }} aria-label="delete" variant="contained">
                                {/* <DeleteIcon />
                                 */}
                                <AiOutlineGoogle />
                            </IconButton>
                        </Grid>
                        <Grid item >
                            <IconButton style={{ backgroundColor: "#1da1f2", color: "white" }} aria-label="delete" variant="contained">
                                {/* <DeleteIcon /> */}
                                <AiOutlineTwitter />
                            </IconButton>
                        </Grid>



                    </Grid>

                   
                    <Typography style={{margin:"50px 0px 20px 0px",}} >
                    
                        Or sign up using
                                <br />
                        {/* <a>SIGN UP</a> */}
                    <Button>sign </Button>

                    </Typography>
                      
                    




                </CardContent>
             
            </Card>
        </div>

    );
}

export default BasicCard;