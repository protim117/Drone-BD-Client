import React from 'react';
import { Button } from '@mui/material';
import { Box } from '@mui/system';

// user's order row 
const MyOrdersRow = (props) => {
    const{order,handleDelete}=props;
    return (

      <tr>
                <th scope="row">{order.productName}</th>
                <td>{order.status==="Shipped"?<Box><i className="fas fa-truck-moving text-success"></i> {order.status}</Box>: <Box><i className="fas fa-clock text-info"></i> {order.status}</Box>}</td>
                <td><Button onClick={()=>handleDelete(order._id)}>CANCEL</Button></td>
        </tr>
    );
};

export default MyOrdersRow;