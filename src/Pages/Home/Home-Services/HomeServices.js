import { Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import HomeService from '../Home-Service/HomeService';
import Slider from "react-slick";
import { Box } from '@mui/system';


const HomeServices = () => {
    const [services,setServices]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/products')
        .then(res=> res.json())
        .then(data=>setServices(data))
    },[])
    // console.log(services);

    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block", background: "red" }}
            onClick={onClick}
          />
        );
      }
      
      function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block", background: "green" }}
            onClick={onClick}
          />
        );
      }

    const settings = {
       
        infinite: true,
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "50px",
        slidesToShow: 3,
        speed: 500,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        autoplay: true,
      autoplaySpeed: 2000,
      swipeToSlide: true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true,

              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                nextArrow:false,
                prevArrow:false
              }
            }
          ]
      };
    return (
        <Container>
            <h2 className="my-4">Our Top Products</h2>
           <Box >
           <Slider {...settings}>
            {
                services.slice(0,6).map(service=><HomeService key={service._id} product={service}></HomeService>)
            }
            </Slider>
           </Box>
         
            </Container>
    );
};

export default HomeServices;