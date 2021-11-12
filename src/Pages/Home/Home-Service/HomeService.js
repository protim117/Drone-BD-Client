import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Container} from '@mui/material';
import { Box } from '@mui/system';
import { Link } from 'react-router-dom';

const HomeService = ({product}) => {
    const{_id,name,img,description,price}=product;
    var cardStyle = {
        display: 'block',
        height: '72vh'
    }
    return (
        <Container>
        <Box sx={{my:5}} >
        <Card style={cardStyle} className="card">
        <CardMedia
          component="img"
          height="140"
          image={img}
          alt="green iguana"
        />
        <CardContent >
          <Typography gutterBottom variant="h4" component="div">
           {name}
          </Typography>
          <Typography variant="body2">
          {description}
          </Typography>
          <Typography variant="body1">
          {price}
          </Typography>
        </CardContent>
        <Box sx={{mx:"auto"}}>
          <Link to={`buy/${_id}`} style={{textDecoration:'none'}} ><Button  >Buy Now</Button></Link>
        </Box>
      </Card>
        </Box>


      </Container>
 
    );
};

export default HomeService;