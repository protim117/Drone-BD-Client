import { Typography } from '@mui/material';
import React from 'react';
import useAuth from '../../hooks/useAuth';

const DashBoardHome = () => {
    const{isAdmin}=useAuth();
    return (
        <div>
           {
               isAdmin?  <Typography variant='h3'>Hey Admin. Welcome!</Typography> : <Typography variant='h3'>Hey There. Welcome!</Typography>
           }
        </div>
    );
};

export default DashBoardHome;