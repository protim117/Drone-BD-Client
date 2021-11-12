import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import HomeReview from '../HomeReview/HomeReview';

const HomeReviews = () => {
    const [reviews,setReviews]=useState([]);
    useEffect(()=>{
        fetch('https://ancient-temple-50859.herokuapp.com/reviews')
        .then(res=> res.json())
        .then(data=>setReviews(data))
    },[])
    // user's review will be shown here
    return (
        <div>
            <Container>
                <Typography variant='h3' className="my-5">Our satisfied customers Review</Typography>
                <Box sx={{mb:5}}>
                <Grid container spacing={2}>
                    {
                        reviews.map(review=><HomeReview 
                            key={review._id} 
                            singleReview={review}></HomeReview>)
                    }
                </Grid>
                </Box>
            </Container>
        </div>
    );
};

export default HomeReviews;