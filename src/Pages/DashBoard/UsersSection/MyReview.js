import { Alert, Button, Container, Rating, Snackbar, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import StarIcon from '@mui/icons-material/Star';
import useAuth from '../../hooks/useAuth';
import axios from 'axios';

const labels = {
    0:'Waste of TIme',
    1: 'Useless',
    2: 'Poor',
    3: 'Ok',
    4: 'Good',
    5: 'Excellent',
  };

const MyReview = () => {
    const{user}=useAuth();
    const[rating,setRating]=useState({});
    const [value, setValue] = React.useState(5);
  const [hover, setHover] = React.useState(-1);
  const [open, setOpen] = React.useState(false);

    const handleOnChange=e=>{
        const field=e.target.name;
        const value=e.target.value;
        const newRating={...rating};
        newRating[field]=value;
        setRating(newRating);
    }
  const handleSubmit=e=>{
   const proceed=window.confirm('Are you sure you wanna Post the Review?')
   if(proceed){
    rating.displayName=user.displayName;
    rating.email=user.email;
    rating.rating= value===null? 0:value;
    const uri=`http://localhost:5000/reviews`;
    axios.post(uri,rating)
    .then(data=> {if(data.data.insertedId){
        setOpen(true);
        e.target.reset();
    }})
   }

    e.preventDefault();
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
    return (
        <Container>
           <Typography variant='h2'>Write A Review About Our Site</Typography>
           <Typography variant='body1'>We Care</Typography>
           <Box>
               <form onSubmit={handleSubmit}>
               <TextField  sx={{width:'50%',m:1}}
               id="standard-basic" 
               label="Your Name" 
               name='displayName'
               variant="standard"
               defaultValue={user.displayName} disabled /> <br />

               <TextField sx={{width:'50%'}}
               id="standard-basic" 
               label="Your Email" 
               name='Email'
               variant="standard"
               defaultValue={user.email} disabled/> <br />

            <TextField sx={{width:'50%',m:5}}
                id="standard-multiline-static"
                label="Your Review(within 150 character)"
                multiline
                rows={3}
                variant="standard"
                name='review'
                inputProps={{ maxLength: 150 }}
                onChange={handleOnChange}
                required
                 /> <br />
                <Box sx={{mb:3}}>
                    <Typography variant='h5'>Please Add a Rating</Typography> <br />

                <Rating
        name="hover-feedback"
        size="large"
        value={value}

        max={5}
        onChange={(event, newValue) => {
           
          setValue(newValue);
          
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
     
        <Box >{labels[hover !== -1 ? hover : value]}</Box>
                </Box>
                <Button sx={{mt:3}} type='submit'>Submit Review</Button>
                <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="success">
            Review Posted Successfully
          </Alert>
        </Snackbar>
               </form>
           </Box>
        </Container>
    );
};

export default MyReview;