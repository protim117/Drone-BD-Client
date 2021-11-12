import {Container, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box } from '@mui/system';
import axios from 'axios';
import ManageProductTable from './ManageProductTable';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  // Deleting any product in disply 

const ManageProduct = () => {
    const[allProducts,setAllProducts]=useState([]);
const handleDelete=id=>{
    const surety=window.confirm('Are you sure to delete this Product?');
     if(surety){
      const uri=`https://ancient-temple-50859.herokuapp.com/products/${id}`;
      axios.delete(uri)
      .then(res=> {
        if(res.data.deletedCount){
          alert('Deleted Successfully');
          const remaining=allProducts.filter(order=> order._id!==id);
          setAllProducts(remaining);
          
        }
      })
     }
}

    useEffect(()=>{
        const uri=`https://ancient-temple-50859.herokuapp.com/products`;
        fetch(uri)
        .then(res=>res.json())
        .then(data=> setAllProducts(data));
    },[])
    return (
        <Container>
          <Typography variant='h4'>
          Manage Your product
          </Typography>
          <Box>
            <TableContainer component={Paper}>
      <Table aria-label="All Order table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Product Name</StyledTableCell>
            <StyledTableCell align="right">Price</StyledTableCell>
            <StyledTableCell align="right">Delete?</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {allProducts.map((product) => (<ManageProductTable key={product._id} product={product} handleDelete={handleDelete}></ManageProductTable>))}
        </TableBody>
      </Table>
    </TableContainer>
            </Box>

        </Container>
    );
};

export default ManageProduct;