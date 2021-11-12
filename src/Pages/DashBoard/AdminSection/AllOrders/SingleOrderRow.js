import React from 'react';
import { Button } from '@mui/material';
import './AllOrder.css'
import { Box } from '@mui/system';


const SingleOrderRow = (props) => {
    const{order,handleAction,handleDelete}=props;
    return (
      // data row 
  <tr>
      <td className='selector'><p data-bs-toggle="tooltip" data-bs-placement="bottom" title={`Id: ${order._id} User Email: ${order.email}`}>{order.productName}</p>
      </td>
      <td>{order.status==="Shipped"?<Box><i className="fas fa-truck-moving text-success"></i> {order.status}</Box>: <Box><i className="fas fa-clock text-info"></i> {order.status}</Box>}</td>
      <td><Button onClick={()=>handleAction(order._id)}>Ship</Button></td>
      <td><Button onClick={()=>handleDelete(order._id)}>Delete</Button></td>
    </tr>

    );
};

export default SingleOrderRow;