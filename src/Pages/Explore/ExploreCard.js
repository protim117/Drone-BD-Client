import { Grid } from '@mui/material';
import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

const ExploreCard = ({product}) => {
    const {name,img,description,price,_id}=product;

    return (
        <Grid item xs={12} md={4} >
            <Card   className="card h-100">
      <CardMedia
        component="img"
        height="200"
        image={img}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="h5" >
         {price}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {description}
        </Typography>
      </CardContent>
      <CardActions sx={{mx:'auto',py:3}}  >
          <Link to={`/buy/${_id}`} style={{textDecoration:'none'}}><Button >Buy Now</Button></Link>
        
      </CardActions>
    </Card>
       </Grid>
    );
};

export default ExploreCard;