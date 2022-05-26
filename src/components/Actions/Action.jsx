
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
import Estrellas from '../Estrellas';
import { palette } from '@mui/system';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import '../styles/Actions.css';
import ActionType from './ActionType';
import '../styles/styles.css';



export default function ImgMediaCard() {
  return (
    <>
   
    <Card sx={{ maxWidth: 345 }}  marginTop={3} >
   
      <ActionType/>
     
     <CardMedia
     component="img"
      image="../img.jpg"
      />      
      <CardContent>     
        <Typography variant="body2" color="primary" >
          Título de la acción
        </Typography>
        <hr></hr>        
        <p><CalendarMonthIcon color="warning"/> Desde fecha</p>
        <p>Descripción del lugar traída por datos de la bbdd</p>       
      </CardContent>
    
    </Card>
    
    
    </>
  );
}
