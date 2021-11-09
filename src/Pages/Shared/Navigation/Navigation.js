import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';


const Navigation=()=> {

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{backgroundColor:'transparent'}} >
        <Toolbar>
       
         
          <Link to='/'><Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <img src="https://i.ibb.co/P1zTYvN/logo.png" alt="" />
          </Typography></Link>
         <Box sx={{ml:'auto'}}>
            <Button color="inherit"  style={{color:'white'}}>Login</Button>
            <Button color="inherit"  style={{color:'white'}}>Login</Button>
            <Button color="inherit"  style={{color:'white'}}>Login</Button>
         </Box>
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navigation;