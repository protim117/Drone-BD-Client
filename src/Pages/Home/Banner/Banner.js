import { Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import './Banner.css'

const Banner = () => {
    // banner section 
    return (
        <Box >
            <Container>
            <Box  className="banner-content">
            <Typography variant='h1'  data-aos="fade-up-right" data-aos-duration="1000">
                DroneBD
            </Typography>
            <Typography variant='h4' data-aos="fade-up-left" data-aos-duration="1000">
            Providing a Wide Choice of Drones
            </Typography>
            </Box>
        </Container>
        </Box>
    );
};

export default Banner;