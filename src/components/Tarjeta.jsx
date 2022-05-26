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


export default function ImgMediaCard(props) {

  const [actualId, setActualId ] = useState([]);


  return (
    <>
      <Grid container spacing={3} marginLeft="auto" marging right="auto">
        {
          
          props.items.map(item =>
          
            <Grid item xs={6} sm={4}>
            
              <Card className="card-body">

                <IconButton aria-label='add to favorites' position="absolute">
                  <FavoriteIcon />
                </IconButton>

                <Typography gutterBottom variant="h6"
                  component="div"
                  color="white"
                  bgcolor="primary.main"
                  position="absolute">
                  {item.lugar}
                </Typography>
                <Link to= "/detalle/:id">
                <CardMedia
                 onClick={console.log()}
                  component="img"
                  image={item.imagen}
                  alt="imagen del lugar"
                  title='nombre'

                />
                </Link>



                <CardContent>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={5}>
                      <PhoneRoundedIcon color="primary" />
                      {item.num}
                    </Grid>
                    <Grid item xs={12} md={5} marginRight="15%">
                      <Estrellas />
                    </Grid>
                    <Grid item xs={12} >
                      <RoomRoundedIcon color="primary" />
                      {item.direccion}
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

