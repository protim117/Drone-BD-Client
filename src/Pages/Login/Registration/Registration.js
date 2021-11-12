import React, { useState } from 'react';
import {Alert, Button, Container, Grid, Snackbar, TextField, Typography} from '@mui/material';
import { NavLink,useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


const Registration = () => {
    const[loginData,setLoginData]=useState({})
    const {user,authError,register,setAuthError}=useAuth();
    const [open, setOpen] = React.useState(false);
    const history=useHistory();

    const handleOnChange=e=>{
        const field=e.target.name;
        const value=e.target.value;
        const newLoginData={...loginData}
        newLoginData[field]=value;
        
        setLoginData(newLoginData)
    }
    const handleSubmit=e=>{
        setAuthError('');
      if(loginData.password!==loginData.password2){
          alert('Recheck your Password');
          return;
      }
        register(loginData.name,loginData.email,loginData.password,history)
        
        setOpen(true);
        
        e.preventDefault();
       
    }

    // MUI Snackbar 

    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setOpen(false);
    };

// after successfull register a snackbar will be open 
    return (
        <Container>
            <Grid container spacing={2}>
        <Grid item xs={12} md={6} sx={{mt:6}}>
      
       <Typography variant="h5" gutterBottom component="div">
        Register
      </Typography>
    
     <form onSubmit={handleSubmit}>
            <TextField 
            sx={{width:'75%',m:1}}
            id="standard-basic" 
            name="name"
            type='text'
            onChange={handleOnChange}
            label="Your Name" 
            variant="standard" required />
            <TextField 
            sx={{width:'75%',m:1}}
            id="standard-basic" 
            name="email"
            type='email'
            onChange={handleOnChange}
            label="Your Email" 
            variant="standard" required/>
             <TextField
             sx={{width:'75%',m:1}}
             id="filled-password-input"
             name="password"
            onChange={handleOnChange}
             label="Password"
             type="password"
             variant="standard" required
            />
             <TextField
             sx={{width:'75%',m:1}}
             id="filled-password-input"
             name="password2"
            onChange={handleOnChange}
             label="ReType Your Password"
             type="password"
             variant="standard" required
            />
            <Button 
            variant='contained' 
            type='submit'
            sx={{width:'75%',m:1}}>
                Register</Button>

            <NavLink to='/login' style={{textDecoration:'none'}}><Button>Already have an account? Please Login</Button></NavLink>
            {/* navigating between login and registration  */}
            {
          user?.email && <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="success">
            Register Successfull
          </Alert>
        </Snackbar>
      }
    {/* alert will be shown if any error occur */}
      {authError &&  <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}> 
      <Alert severity="error" onClose={handleClose}>{authError}</Alert>
      </Snackbar>}
      </form>
     

       
        </Grid>
        <Grid item xs={12}  md={6}>
            <img data-aos="zoom-in-up"  data-aos-duration="1500" src="https://i.ibb.co/8gxKRZj/regi-re.png" style={{width:'600px'}} alt="" />
        </Grid>
        </Grid>
        </Container>
    );
};

export default Registration;