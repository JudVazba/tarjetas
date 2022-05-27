
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
import { Link } from 'react-router-dom';
import { Grid } from '@mui/material';



export default function ImgMediaCard(props) {
  return (
    <>
     <Grid container spacing={2} marginTop={3} marginLeft={3} marging right="auto">
    {
     props.items.map( item =>
      <Grid item xs={6} sm={4}>
    <Card  >
  
      <ActionType/>
     <Link to="/action">
     <CardMedia
     component="img"
      image={item.actionImg}
      />     
      </Link> 
      <CardContent>     
        <Typography variant="body2" color="primary" >
          {item.actiontitle}
        </Typography>
        <hr></hr>        
        <p><CalendarMonthIcon color="warning"/>{item.actionDate}</p>
        <p>{item.actionDetails}</p>       
      </CardContent>
 
    </Card>
   </Grid> 
    )}
    </Grid>
    
    </>
  );
}
