import { appBarClasses, Container, Typography } from '@mui/material';
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
import SingleOrderRow from './SingleOrderRow';
import axios from 'axios';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));


const AllOrders = () => {
    const[AllOrders,setAllOrders]=useState([]);
    const[processing,setProcessing]=useState(false);
    
    const handleAction=id=>{
        const uri=`http://localhost:5000/orders/${id}`;
        const singleOrder=AllOrders.find(order=>order._id===id)
        console.log(singleOrder);
      
        singleOrder.status='Shipped';

        axios.put(uri,singleOrder)
        .then(data=>{
          console.log(data);
          if(data.data.modifiedCount){
            alert('Status Changed to Shipped');
            setProcessing(!processing);
          }
        })
    }
    const handleDelete=id=>{
     const surety=window.confirm('Are you sure to delete this order?');
     if(surety){
      const uri=`http://localhost:5000/orders/${id}`;
      axios.delete(uri)
      .then(res=> {
        if(res.data.deletedCount){
          alert('Deleted Successfully');
          const remaining=AllOrders.filter(order=> order._id!==id);
          setAllOrders(remaining);
          
        }
      })
     }
    }
    useEffect(()=>{
        const uri=`http://localhost:5000/orders`;
        fetch(uri)
        .then(res=>res.json())
        .then(data=> setAllOrders(data))
    },[processing])

    return (
        <div>
          <Container>
          <Typography variant='h5'>All Orders Placed by Customers</Typography>
            <Box>
            <TableContainer component={Paper}>
      <Table aria-label="All Order table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Customer Email</StyledTableCell>
            <StyledTableCell align="right">Product Name</StyledTableCell>
            <StyledTableCell align="right">Address</StyledTableCell>
            <StyledTableCell align="right">Status</StyledTableCell>
            <StyledTableCell align="right">Action</StyledTableCell>
            <StyledTableCell align="right">Delete?</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {AllOrders.map((order) => (<SingleOrderRow key={order._id} order={order} handleAction={handleAction} handleDelete={handleDelete}></SingleOrderRow>))}
        </TableBody>
      </Table>
    </TableContainer>
            </Box>
          </Container>
        </div>
    );
};

export default AllOrders;