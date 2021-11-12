import { Grid, Rating } from '@mui/material';
import React from 'react';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';

function stringToColor(string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.substr(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

function stringAvatar(name) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
  };
}

const HomeReview = ({singleReview}) => {
    const{displayName,rating,review}=singleReview;
    return (
        <Grid item xs={12} md={4} className="h-100">
             <Card className="card p-4 h-100">
            <Box><center> <Avatar  style={{ width: '56px', height: '56px' }} {...stringAvatar(displayName)} /></center> </Box>
            <CardContent>
                <Typography variant="h5" component="div">
               {displayName}
                </Typography>
                <Typography sx={{ mb: 1.5 }} >
                <Rating name="disabled" value={rating} readOnly />
                </Typography>
                <Typography variant="body1">
                <q>{review}</q>
                </Typography>
            </CardContent>
            </Card>
        </Grid>
    );
};

export default HomeReview;