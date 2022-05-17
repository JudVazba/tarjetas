
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
import ActionType from '../ActionType';


export default function ImgMediaCard() {
  return (
    <>
    <div className='accion'>
    <Card sx={{ maxWidth: 345 }}>
    <div className='tipoAccion'>
      <ActionType/>
      </div>
     <CardMedia
     component="img"
      image="img.jpg"
      />
      
      <CardContent>     
        <Typography variant="body2" color="primary">
          Título
        </Typography>
        <hr></hr>
        <div className='calendario'>
        <p><CalendarMonthIcon color="warning"/> Desde fecha</p>
        <p>Descripción</p>
        </div>
      </CardContent>
    
    </Card>
    
    </div>
    </>
  );
}
