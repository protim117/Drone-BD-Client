import React from 'react';
import { Button } from '@mui/material';
import './AllOrder.css'


const SingleOrderRow = (props) => {
    const{order,handleAction,handleDelete}=props;
    return (
  <tr>
      <td className='selector'><p data-bs-toggle="tooltip" data-bs-placement="bottom" title={`Id: ${order._id} User Email: ${order.email}`}>{order.productName}</p>
      </td>
      <td>{order.status}</td>
      <td><Button onClick={()=>handleAction(order._id)}>Ship</Button></td>
      <td><Button onClick={()=>handleDelete(order._id)}>Delete</Button></td>
    </tr>

    );
};

export default SingleOrderRow;