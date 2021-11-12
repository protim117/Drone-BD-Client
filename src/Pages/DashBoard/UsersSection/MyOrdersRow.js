import React from 'react';
import TableRow from '@mui/material/TableRow';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';


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


const MyOrdersRow = (props) => {
    const{order,handleDelete}=props;
    return (
        <StyledTableRow >
        <StyledTableCell component="th" scope="row">
          {order.productName}
        </StyledTableCell>
        <StyledTableCell align="right">{order.name}</StyledTableCell>
        <StyledTableCell align="right">{order.address}</StyledTableCell>
        <StyledTableCell align="right">{order.status}</StyledTableCell>
        <StyledTableCell align="right"><Button onClick={()=>handleDelete(order._id)}>X</Button></StyledTableCell>
      </StyledTableRow>
    );
};

export default MyOrdersRow;