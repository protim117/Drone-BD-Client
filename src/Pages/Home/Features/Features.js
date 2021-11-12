import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Features = () => {
    return (
        <Container>
            <Typography variant='h4' sx={{my:8}}>
            FLYING IN THE CLOUD
            </Typography>
            <Grid container spacing={2}>
            <Grid item xs={12} md={3}>
               <Box sx={{my:3}}>
               <Typography variant='body-1'>
                    MAX PAYLOAD
                    </Typography>
               <Typography variant='h3' style={{color:'#2196f3'}}>
                    4.3 Kg
                    </Typography>
               </Box>
               <Box sx={{my:3}}>
               <Typography variant='body-1'>
                    DRONE LENGTH
                    </Typography>
               <Typography variant='h3' style={{color:'#2196f3'}}>
                    70 cm
                    </Typography>
               </Box>
               <Box sx={{my:3}}>
               <Typography variant='body-1'>
                    MONEY INVESTED
                    </Typography>
               <Typography variant='h3' style={{color:'#2196f3'}}>
                    1.3 M
                    </Typography>
               </Box>
            </Grid>
            <Grid item xs={12} md={6}>
                <img className="w-100" src="https://i.ibb.co/6yZGpd6/features.png" alt="" data-aos="zoom-in" data-aos-duration="3000" />
            </Grid>
            <Grid item xs={12} md={3}>
            <Box sx={{my:4}}>
               <Typography variant='body-1'>
                    FLIGHT DISTANCE
                    </Typography>
               <Typography variant='h3' style={{color:'#2196f3'}}>
                    320m
                    </Typography>
               </Box>
            <Box sx={{my:3}}>
               <Typography variant='body-1'>
                    TOTAL AIRTIME
                    </Typography>
               <Typography variant='h3' style={{color:'#2196f3'}}>
                    27min
                    </Typography>
               </Box>
           
            </Grid>
            </Grid>
        </Container>
    );
};

export default Features;