import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import ExploreCard from './ExploreCard';
import Navigation from '../Shared/Navigation/Navigation'
import Footer from '../Shared/Footer/Footer';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Zoom from '@mui/material/Zoom';

function ScrollTop(props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({
      target: window ? window() : undefined,
      disableHysteresis: true,
      threshold: 100,
    });
  
    const handleClick = (event) => {
      const anchor = (event.target.ownerDocument || document).querySelector(
        '#back-to-top-anchor',
      );
  
      if (anchor) {
        anchor.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        });
      }
    };
  
    return (
      <Zoom in={trigger}>
        <Box
          onClick={handleClick}
          role="presentation"
          sx={{ position: 'fixed', bottom: 16, right: 16 }}
        >
          {children}
        </Box>
      </Zoom>
    );
  }
  
const Explore = (props) => {
  //   fetching data 
    const [products,setProducts]=useState([]);
    useEffect(()=>{
        fetch('https://ancient-temple-50859.herokuapp.com/products')
        .then(res=> res.json())
        .then(data=>setProducts(data))
    },[])
    return (
        <div >
           <Box style={{backgroundColor:'#BAB7E9'}} >
            <Navigation></Navigation>
            <Container>
            <Typography variant="h2" gutterBottom component="div"  id="back-to-top-anchor">
        All Our AvailAble Products
      </Typography>

      <Grid container spacing={2} sx={{my:6}}>
        {
            products.map(product=><ExploreCard key={product._id} product={product}></ExploreCard>)
        }
          </Grid>
        </Container>
        <Footer></Footer>
        </Box>
          
        <ScrollTop {...props}>
        <Fab color="primary" size="large" aria-label="scroll back to top">
          <KeyboardArrowUpIcon  />
        </Fab>
      </ScrollTop>
        
        </div>
        
    );
};

export default Explore;