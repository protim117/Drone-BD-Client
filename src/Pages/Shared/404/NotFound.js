import { Button } from '@mui/material';
import {useHistory } from 'react-router-dom';
import React from 'react';


const NotFound = () => {
    // if page isnot FoundationTwoTone,it will go back 
    const history=useHistory();
    const not={
        height:'70vh'
    }
    return (
        <div>
            <img src="https://i.ibb.co/jfr3fxJ/6M513.png" style={not} alt="" className='w-100'/>
            <div className='text-center'><Button style={{backgroundColor:'grey',color:'white'}} onClick={history.goBack}>Go Back</Button></div>
        </div>
    );
};

export default NotFound;