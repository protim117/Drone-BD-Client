import { Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <Box >
            <Container>
            <Box className="banner-content">
            <Typography variant='h1'>
                DroneBD
            </Typography>
            <Typography variant='h4'>
            Providing a Wide Choice of Drones
            </Typography>
            </Box>
        </Container>
        </Box>
    );
};

export default Banner;