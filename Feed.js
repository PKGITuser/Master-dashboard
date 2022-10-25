import { Box } from '@mui/material'
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Typography from '@mui/material/Typography';
import "./Navbar.css";

export const Feed = () => {
  return (
    <Box bgcolor={"#808080"} flex={4} padding={2}>
      <Card>
      <CardActionArea>
        {/* <CardMedia
          component="img"
          height="20%"
          image="src/assets/AdobeStock.jpg"
          alt=""
        /> */}
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            PHN Industries
          </Typography>Where service comes first. 
          <Typography variant="body2" color="text.secondary">
           
PHN Industries is a service orientated company providing solutions in many industries throughout Australia including Mining, 
Rail, Marine, Civil, Drilling,
 Tunnelling and more. 
 Australian owned and operated for over 8 years, 
 PHN uses only the highest quality components and materials, and pride themselves in their attention to detail and expert service. Our highly capable staff are skilfully trained to carry out and assist you in all of your hydraulic needs. 
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card><br/>
    <Card>
      <CardActionArea>
        {/* <CardMedia
          component="img"
          height="20%"
          image="src/assets/AdobeStock.jpg"
          alt=""
        /> */}
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            PHN Industries
          </Typography>Where service comes first. 
          <Typography variant="body2" color="text.secondary">
           
PHN Industries is a service orientated company providing solutions in many industries throughout Australia including Mining, 
Rail, Marine, Civil, Drilling,
 Tunnelling and more. 
 Australian owned and operated for over 8 years, 
 PHN uses only the highest quality components and materials, and pride themselves in their attention to detail and expert service. Our highly capable staff are skilfully trained to carry out and assist you in all of your hydraulic needs. 
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card><br/>
    <Card>
      <CardActionArea>
        {/* <CardMedia
          component="img"
          height="20%"
          image="src/assets/AdobeStock.jpg"
          alt=""
        /> */}
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            PHN Industries
          </Typography>Where service comes first. 
          <Typography variant="body2" color="text.secondary">
           
PHN Industries is a service orientated company providing solutions in many industries throughout Australia including Mining, 
Rail, Marine, Civil, Drilling,
 Tunnelling and more. 
 Australian owned and operated for over 8 years, 
 PHN uses only the highest quality components and materials, and pride themselves in their attention to detail and expert service. Our highly capable staff are skilfully trained to carry out and assist you in all of your hydraulic needs. 
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    
    </Box>
  )
}
export default Feed