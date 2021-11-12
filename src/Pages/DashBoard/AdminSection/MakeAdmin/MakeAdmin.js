import { Alert, Button, Snackbar, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import React, { useState } from 'react';

const MakeAdmin = () => {
    const [email,setEmail]=useState('');
    const [open, setOpen] = React.useState(false);
    const handleOnChange=e=>{
        setEmail(e.target.value)
      }
    
      const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
      };
    
      const handleSubmit=e=>{
        const uri=`http://localhost:5000/users/admin`;
        const user={email}
     
    
        axios.put(uri,user)
        .then(data=>{ 
            console.log(data);
          if(data.data.modifiedCount){
            setOpen(true);
            e.target.reset();
        }})
    
        e.preventDefault();
      }
    return (
        <div>
           <Typography variant='h3'>Make an admin</Typography>
           <Box>
           <form onSubmit={handleSubmit}>
          <TextField 
          sx={{mb:3}}
          id="standard-basic" 
          type='email'
          name='email'
          label="Admin's email"
          onChange={handleOnChange}
           variant="standard" required /> <br/>
           <Button variant='contained' type='submit'>Add Admin</Button>
           <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Admin added Successfully
        </Alert>
      </Snackbar>
          </form>
           </Box>
        </div>
    );
};

export default MakeAdmin;