import { Button, Container, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import React, { useState } from 'react';

const AddProduct = () => {
    // Adding a product 
    const[product,setProduct]=useState({});
    const handleOnChange=e=>{
        const field=e.target.name;
        const value=e.target.value;
        const updated={...product}
        updated[field]=value;
        setProduct(updated);
    }

    const handleSubmit=e=>{
        const uri=`https://ancient-temple-50859.herokuapp.com/products`;
        axios.post(uri,product)
        .then(res=> {
            if(res.data.insertedId){
                alert('Product Added to List Successfully');
                e.target.reset();
            }
        })

        e.preventDefault();
    }
    return (
        // taking product details 
        <Container>
            <Typography variant='h3'>Wanna Add Some Product??</Typography>
            <Box>
           <form onSubmit={handleSubmit}>
           <TextField 
           sx={{width:'50%',m:3}}
           id="standard-basic" 
           label="Product's Name" 
           name='name' 
           variant="standard"
           required
           onChange={handleOnChange} /> <br />

            <TextField
             sx={{width:'50%',m:3}}
            id="standard-multiline-static"
            label="Product Description(within 150 char)"
            name='description'
            multiline
            rows={3}
            variant="standard"
            onChange={handleOnChange}
            required
            inputProps={{ maxLength: 150 }}
            /> <br />
            <TextField 
             sx={{width:'50%',m:2}}
            id="standard-basic" 
            label="Price" 
            variant="standard" 
            name='price'  
            required
            defaultValue='$'
            onChange={handleOnChange} /> <br />

            <TextField 
             sx={{width:'50%',m:2}}
            id="standard-basic" 
            label="Img URL"
             variant="standard"
             name='img'
             required
             onChange={handleOnChange} /> <br />

            <Button type='submit'>Add Product</Button>
           </form>
            </Box>

            </Container>
    );
};

export default AddProduct;