
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
import './styles/Tarjeta.css';


export default function ImgMediaCard() {
  return (
      
      <div className='tarj'>
     
    <Card sx={{ maxWidth: 345 }} className="card-body">
    <div className='portada'>
    <div className='imgs'>
     <CardMedia
     component="img"
      image='https://i.ytimg.com/vi/kkLk2XWMBf8/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLB4GZTFu1Ju2EPPPXnhMZtFVvYBaw'
      />  
      <hr></hr>
     </div>
     <div className='megusta'>  
    <CardActions disableSpacing>
      
      <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
      </CardActions>
      </div>
     
     <p className='lugar'>lugar</p>

      </div>
    <div className='detalles'>
    <div className='row'>
    
      <CardContent>    
      
      
        <div className='col'>
        
        <div className='telefono'>
        <PhoneRoundedIcon color="primary"/>
        <p className='tlfn'> 600000000</p>
        <div className='estrellas'>
        <Estrellas />
        </div>
        </div>
        </div>
      
      <div className='row'>
      <div className='col'>
              <div className='location'>
        <RoomRoundedIcon color="primary"/>
        <p className='loc'>Nombre del lugar</p>       
       
        </div>
        </div>
        
       
      
        </div>
       
        
      </CardContent>
      </div>
      </div> 
    
    </Card>
    </div>
    
  
  );
}
