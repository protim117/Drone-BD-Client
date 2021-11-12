import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


const Navigation=()=> {
  const {user,logOut}=useAuth();
  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar position="static" style={{backgroundColor:'transparent',padding:'10px'}} >
        <Toolbar>
       
         {/* header section  */}
          <Link to='/'>
            <img data-aos="flip-left" data-aos-duration="1500" src="https://i.ibb.co/P1zTYvN/logo.png" alt="" />
         </Link>
         <Box sx={{ml:'auto'}}>
           

           {
             user.email? <Box data-aos="zoom-out-left"> 
               <Typography variant='body2'>Signed in:{user.displayName}</Typography>
               <Link style={{textDecoration:"none"}} to='/explore'><Button color="inherit"  style={{color:'white'}}>Explore</Button></Link>
               <Link style={{textDecoration:"none"}} to='/dashboard' >
                 <Button color="inherit"  style={{color:'white'}}>DashBoard</Button>
                 </Link> <Button color="inherit"  style={{color:'white'}} onClick={logOut}>LogOut</Button>
                 </Box> 
             : <Box data-aos="zoom-out-left"><Link style={{textDecoration:"none"}}to='/explore'><Button color="inherit"  style={{color:'white'}}>Explore</Button></Link><Link style={{textDecoration:"none"}} to='/login'> <Button color="inherit"  style={{color:'white'}}>Login</Button></Link></Box>
           }
         </Box>
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navigation;