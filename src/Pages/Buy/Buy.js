import { Alert, Button, Container, Grid, Snackbar, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useHistory, useLocation, useParams } from 'react-router';
import axios from 'axios'
import useAuth from '../hooks/useAuth';
import Navigation from '../Shared/Navigation/Navigation'
import Footer from '../Shared/Footer/Footer';

const Buy = () => {
    const[singleProduct,setSingleProduct]=useState({});
    const[orderProduct,setOrderProduct]=useState({})
    const [open, setOpen] = React.useState(false);
    const{user}=useAuth();
    const {productId}=useParams();
    const history=useHistory();
    const location=useLocation();
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
      };
   

    useEffect(()=>{
        const uri=`http://localhost:5000/products/${productId}`
        fetch(uri)
        .then(res=> res.json())
        .then(data=> setSingleProduct(data))
    },[])
    const{name,description,img,price}=singleProduct;
    const handleOnChange=e=>{
        const field=e.target.name;
        const value=e.target.value;
        const newOrder={...orderProduct};
        newOrder[field]=value;
        setOrderProduct(newOrder);

    }
    const handleOrder=e=>{
       const proceed=window.confirm('Are you sure to proceed to payment?')
       if(proceed){
        orderProduct.name=user.displayName;
        orderProduct.email=user.email;
        orderProduct.productId=productId;
        orderProduct.productName=name;
        orderProduct.status='Pending';
            const uri=`http://localhost:5000/orders`;
        axios.post(uri,orderProduct)
        .then(data=>{
            if(data.data.insertedId){
                setOpen(true);
                const goBack=()=>history.replace(location?.state?.from||'/');
                setTimeout(goBack,3000);
            }
        })
        
       }
        e.preventDefault();
    }


    return (
        <div>
            <Box style={{backgroundColor:'#AB9DEE'}}>
            <Navigation></Navigation>
            </Box>
            <Container>
            <Typography variant='h3' sx={{my:4}}>Product Details</Typography>
           <Box>
           <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
                <img data-aos="zoom-in-down"  data-aos-duration="3000" className="w-100" src={img} alt="" />
            </Grid>
            <Grid item xs={12} md={6}>
                <Box className="text-start my-5"> 
                    <Typography variant='h4'> {name}</Typography>
                    <Typography variant='h5' >Price:<span className="fs-1"> {price}</span></Typography>
                    <Typography variant='body1'><u>Description:</u> {description}</Typography>
                </Box>
            </Grid>
            </Grid>
           </Box>

           <Box sx={{my:5}} style={{backgroundColor:"#EAE5F0"}}>
              
              <Typography variant='h3' sx={{py:3}}>
                   Order Details
               </Typography>
               <form onSubmit={handleOrder}>
               <TextField sx={{width:'50%',mx:'auto',my:4}}
               id="standard-basic" 
               label="Your Name" 
               defaultValue={user.displayName}
               variant="standard"
               disabled />  <br />
               <TextField sx={{width:'50%',mx:'auto',my:3}}
               id="standard-basic" 
               label="Your Email"
               defaultValue={user.email}
                variant="standard"
                disabled />  <br />
               <TextField sx={{width:'50%',mx:'auto',my:2,backgroundColor:'#F7F7F7'}}
               id="standard-basic" 
               label="Phone"
               name='phone'
               type='number' 
               variant="standard"
               onChange={handleOnChange} /> <br />
               <TextField sx={{width:'50%',mx:'auto',my:3,backgroundColor:'#F7F7F7'}}
                id="standard-multiline-static"
                multiline rows={2}
               label="Address" 
               name='address'
               onChange={handleOnChange}
               variant="standard" /> <br />
               <Button type='submit' variant="contained"  sx={{my:4}}> Place Order</Button>
               <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
                    <Alert onClose={handleClose}  variant="filled"   severity="success" sx={{ width: '100%' }}>
                    Order Placed Successfully
                    </Alert>
                </Snackbar>
              </form>
           </Box>

           
            </Container>
            <Footer></Footer>
        </div>
        
    );
};

export default Buy;