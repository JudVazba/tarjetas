import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { AccessAlarm, FormatOverline, MailRounded, ThreeDRotation } from '@mui/icons-material';
import PhoneRoundedIcon from '@mui/icons-material/PhoneRounded';
import RoomRoundedIcon from '@mui/icons-material/RoomRounded';
import Estrellas from './Estrellas';
import { IconButton, Fab, Grid } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite';
import './styles/styles.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useParams } from 'react-router-dom';


const Tarjeta = props => { 
  console.log(props);
   return (
    <>
      <Grid container spacing={3} marginLeft="auto" marginRight="auto">
        {
          props.items.map(item =>
            <Grid item xs={12} sm={6} lg={4}>
            
              <Card className="card-body" sx={{ width:270 }} style={{marginLeft: 70, marginRight: 50}} >


                <Typography gutterBottom 
                sx={{ fontSize: 16 }}
                  color="white"
                  bgcolor="darkblue"
                  position="absolute"
                  textAlign="center"
                  justifyContent="center"
                  style={{opacity: 0.6, marginTop: 175}}>
                  {item.placeName}
                </Typography>
                <Link to={"/detalle/"+item.idPlace}>
                <CardMedia
                sx={{ width: 300, height: 200}}
                 onClick={console.log(item.id)}
                  component="img"
                  src={"data:image/png;base64,"+item.placeImgFeatured}
                  alt="imagen del lugar"
                  title='nombre'
                    />
                
                <IconButton
                 aria-label='add to favorites'
                  position="absolute" 
                  style={{bottom:200, left: 230}}>
                  <FavoriteIcon />
                </IconButton>
                </Link>

              

                <CardContent
                sx={{ width: 300, height: 70, marginTop: -3}}>
                  <Grid container spacing={1}>
                    <Grid item xs={12} md={6}>
                      <PhoneRoundedIcon color="primary" />
                      {item.placePhone}
                    </Grid>
                    <Grid item xs={12} md={5} >
                      <Estrellas />
                    </Grid>
                    <Grid item xs={12} >
                      <RoomRoundedIcon color="primary" />
                      {item.placeAddress}
                    </Grid>

                  </Grid>

                </CardContent>
              </Card>
            </Grid>
          )}
      </Grid>
    </>
  );
}

export default Tarjeta

