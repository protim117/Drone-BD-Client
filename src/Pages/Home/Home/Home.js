import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';
import Features from '../Features/Features';
import HomeServices from '../Home-Services/HomeServices';
import HomeReviews from '../HomeReviews/HomeReviews';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Zoom from '@mui/material/Zoom';

// scroll to top button 
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
  


const Home = (props) => {
    return (
        <div>
          {/* all section  */}
           <div className="banner-section" id="back-to-top-anchor">
           <Navigation></Navigation>
            <Banner></Banner>
            </div>
            <HomeServices></HomeServices>
            <Features></Features>
            <HomeReviews></HomeReviews>
            <Footer></Footer>
            <ScrollTop {...props}>
        <Fab color="primary" size="large" aria-label="scroll back to top">
          <KeyboardArrowUpIcon  />
        </Fab>
      </ScrollTop>
        </div>
    );
};

export default Home;