import React, { useState } from 'react';
import {Alert, Button, CircularProgress, Container, Divider, Grid, Snackbar, TextField, Typography} from '@mui/material';

import { NavLink,useLocation,useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
  const{user,authError,login,setAuthError}=useAuth();
    const [open, setOpen] = React.useState(false);
    const[loginData,setLoginData]=useState({});
  
    const location=useLocation();
    const history=useHistory();

    const handleOnChange=e=>{
      const field=e.target.name;
      const value=e.target.value;
      const newLogin={...loginData};
      newLogin[field]=value;
      setLoginData(newLogin);
    }
    const handleSubmit=e=>{
      setAuthError('');
      login(loginData.email,loginData.password,location,history)

      e.preventDefault();
      setOpen(true);
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
      };
      
    return (
        <Container>
            <Grid container spacing={2}>
        <Grid item xs={12} md={6} sx={{mt:6}}>
      
       <Typography variant="h5" gutterBottom component="div">
        Login
      </Typography>
     <form onSubmit={handleSubmit}>
            <TextField 
            sx={{width:'75%',m:1}}
            id="standard-basic" 
            name="email"
            type='email'
            onChange={handleOnChange}
            label="Your Email" 
            variant="standard" />
             <TextField
             sx={{width:'75%',m:1}}
             id="filled-password-input"
             name="password"
            onChange={handleOnChange}
             label="Password"
             type="password"
             variant="standard"
            />
            <Button 
            variant='contained' 
            type='submit'
            sx={{width:'75%',m:1}}>
                LogIn</Button>

            <NavLink to='/register' style={{textDecoration:'none'}}><Button>New User? Please Register</Button></NavLink>
          

        {
          user?.email && <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="success">
            Login Successfull
          </Alert>
        </Snackbar>
      }

      {authError &&  <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}> 
      <Alert severity="error" onClose={handleClose}>{authError}</Alert>
      </Snackbar>}
      </form>
       
        </Grid>
        <Grid item xs={12}  md={6}>
            <img data-aos="fade-left"  data-aos-duration="1500" src="https://i.ibb.co/FHqs01R/login-re.png" style={{width:'600px'}} alt="Hello" />
        </Grid>
        </Grid>
        </Container>
    );
};

export default Login;