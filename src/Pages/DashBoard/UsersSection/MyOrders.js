import { Button, Container, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import MyOrdersRow from './MyOrdersRow';
import axios from 'axios'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));


  

const MyOrders = () => {
    const{user,isLoading}=useAuth();
    const[myOrders,setMyOrders]=useState([]);


    const handleDelete=id=>{
        const proceed=window.confirm('Are you sure to delete?');
        if(proceed){
            const uri=`http://localhost:5000/orders/${id}`;
            axios.delete(uri)
            .then(data=> {
                if(data.data.deletedCount ){
                    alert('Order deleted SUccessfully.')
                    const remaining=myOrders.filter(order=> order._id!==id);
                    setMyOrders(remaining)
                }})
        }
       
      }


    useEffect(()=>{
        const uri=`http://localhost:5000/orders?email=${user.email}`;
        fetch(uri)
        .then(res=>res.json())
        .then(data=>setMyOrders(data))
    },[])
    return (
        <div>
          <Container>
          <Typography variant='h4' sx={{my:3}}>Your Ordered Products</Typography>
            <TableContainer component={Paper}>
      <Table  aria-label="your order">
        <TableHead>
          <TableRow>
            <StyledTableCell>Product Name</StyledTableCell>
            <StyledTableCell align="right">Name</StyledTableCell>
            <StyledTableCell align="right">Address</StyledTableCell>
            <StyledTableCell align="right">Status</StyledTableCell>
            <StyledTableCell align="right">Cancel Order?</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {myOrders.map((order) => <MyOrdersRow key={order._id} order={order} handleDelete={handleDelete}></MyOrdersRow>)}
        </TableBody>
      </Table>
    </TableContainer>
          </Container>
        </div>
    );
};

export default MyOrders;