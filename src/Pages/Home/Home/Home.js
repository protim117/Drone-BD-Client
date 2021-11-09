import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
           <div className="banner-section">
           <Navigation></Navigation>
            <Banner></Banner>
           </div>
        </div>
    );
};

export default Home;