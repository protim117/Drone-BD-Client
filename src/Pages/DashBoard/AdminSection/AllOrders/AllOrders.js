import React, { useEffect, useState } from 'react';
import SingleOrderRow from './SingleOrderRow';
import axios from 'axios';
import './AllOrder.css'


const AllOrders = () => {
    const[AllOrders,setAllOrders]=useState([]);
    const[processing,setProcessing]=useState(false);

  
    const handleAction=id=>{
        const uri=`https://ancient-temple-50859.herokuapp.com/orders/${id}`;
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
      const uri=`https://ancient-temple-50859.herokuapp.com/orders/${id}`;
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
        const uri=`https://ancient-temple-50859.herokuapp.com/orders`;
        fetch(uri)
        .then(res=>res.json())
        .then(data=> setAllOrders(data))
    },[processing])

    return (
        
         <div className="container table-responsive table-height">
            
          <h2>All Orders Placed by Customers</h2>
         
          <table className="table table-success table-striped table-borderless ">
          <thead>
            <tr>
              <th scope="col">Product Name</th>
              <th scope="col">Status</th>
              <th scope="col">Action</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
            <tbody>
            {AllOrders.map((order) => (<SingleOrderRow key={order._id} order={order} handleAction={handleAction} handleDelete={handleDelete}></SingleOrderRow>))}
            </tbody>
          </table>
        
         </div>
       
    );
};

export default AllOrders;