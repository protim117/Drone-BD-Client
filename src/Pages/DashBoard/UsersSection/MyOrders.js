import { Container, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import MyOrdersRow from './MyOrdersRow';
import axios from 'axios'


const MyOrders = () => {
    const{user}=useAuth();
    const[myOrders,setMyOrders]=useState([]);

    // can delete a user his order 

    const handleDelete=id=>{
        const proceed=window.confirm('Are you sure to delete?');
        if(proceed){
            const uri=`https://ancient-temple-50859.herokuapp.com/orders/${id}`;
            axios.delete(uri)
            .then(data=> {
                if(data.data.deletedCount ){
                    alert('Order deleted SUccessfully.')
                    const remaining=myOrders.filter(order=> order._id!==id);
                    setMyOrders(remaining)
                }})
        }
       
      }

// fetching particular user's order 
    useEffect(()=>{
        const uri=`https://ancient-temple-50859.herokuapp.com/orders?email=${user.email}`;
        fetch(uri)
        .then(res=>res.json())
        .then(data=>setMyOrders(data))
    },[user.email])
    return (
        <div>
          <Container>
          <Typography variant='h4' sx={{my:3}}>Your Ordered Products</Typography>
          <div className="table-responsive">
          <table className="table table-striped table-hover">
            <thead  className="table-light">
              <tr>
                <th scope="col">Product Name</th>
                <th scope="col">Status</th>
                <th scope="col">Cancel Order?</th>
              </tr>
            </thead>
            <tbody>
            {myOrders.map((order) => <MyOrdersRow key={order._id} order={order} handleDelete={handleDelete}></MyOrdersRow>)}
            </tbody>
          </table>
            </div>
          </Container>
        </div>
    );
};

export default MyOrders;