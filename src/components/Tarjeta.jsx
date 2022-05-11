
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
import Imagen from  './Imagen';
import { TextField, IconButton, Fab } from '@mui/material'
import { palette } from '@mui/system';
import FavoriteIcon from '@mui/icons-material/Favorite';


export default function ImgMediaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
     <CardMedia
     component="img"
      image="img.jpg"
      />
      <CardActions disableSpacing>
      <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
      </CardActions>
    <Imagen/>
      <CardContent>
        <hr></hr>
        <PhoneRoundedIcon color="primary"/>
        <Typography variant="body2" color="text.secondary">
          tlfn(Esto tiene que estar a la izq del icono)
        </Typography>
        <Estrellas/>
        <RoomRoundedIcon color="primary"/>
      </CardContent>
    
    </Card>
  );
}
