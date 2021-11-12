import { Container, Grid, List, ListItem, ListItemButton, ListItemText, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';

const Footer = () => {
    return (
        <Box style={{backgroundColor:'#5c6bc0'}}>
            <Container>
            <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
            <Link to='/'>
            <img className="w-50" src="https://i.ibb.co/P1zTYvN/logo.png" alt="" />
         </Link>
            <Typography variant='body1' style={{color:'white',marginTop:'10px'}} sx={{py:6}}>
            Drone BD is the leading provider of geographic data acquisition, industrial inspections, and high-end aerial imagery, using unmanned aircraft (UAVs).

            Experts in their field, Terra Drone have extensive knowledge and experience in geodesy, topographic surveying, CVI and thermal inspections, LIDAR, aerial imagery and 3D visualisations into one company.
            </Typography>
            </Grid>
            <Grid item xs={12} md={4} >
                <Typography variant='h4' style={{color:'white'}} sx={{my:4}}>
                    Important Links
                </Typography>
                <List>
          <ListItem  >
            <ListItemButton  >
             
             <Link to='/' style={{textDecoration:'none'}}> <ListItemText primary="Home" style={{color:'white',textAlign:'center'}} /> </Link>
            </ListItemButton>
          </ListItem>
          <ListItem >
            <ListItemButton>
             
              <Link to='/explore' style={{textDecoration:'none'}}><ListItemText primary="Explore" style={{color:'white'}} /></Link>
            </ListItemButton>
          </ListItem>
          <ListItem >
            <ListItemButton>
             
              <ListItemText primary="Contact US" style={{color:'white'}} />
            </ListItemButton>
          </ListItem>
          </List>
            </Grid>
            <Grid item xs={12} md={4}>
                <Typography variant="h4" style={{color:'white'}} sx={{my:4}}>
                    Get In Touch
                </Typography>
                <Box>
                <Typography className="fs-1">< FacebookRoundedIcon className="fs-1"/></Typography>
                    
                    <Typography className="fs-1"><i className="fab fa-instagram"></i></Typography>
                    <Typography className="fs-1"><i className="fab fa-twitter"></i></Typography>
                   
                </Box>
            </Grid>

            </Grid>
            </Container>
        </Box>
    );
};

export default Footer;