
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
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import Loader from '../Loader/Loader';



const Actions = props => {
  

    const params = useParams();

  const urlActions = "https://soluciones.avansis.es:8061/api/Actions/List"
  const url ="https://soluciones.avansis.es:8061/api/Actions/Details"+params.idAction
  const [actions, setActions] = useState([]);
  const [idPlace, setIdPlace] = useState(params.idPlace);
  console.log(idPlace);
 
  const[loading, setLoading] = useState(true);
  
  const body = {
  pageSize: 100,
  pageNumber: 0,
  globalSearch: "",
  search: [
    {
    searchField: "IdPlace",
    searchValue: idPlace,
    searchMode: "EqualTo"
    }
  ],
  order: []
}





const fetchApiActions = () =>{
  fetch(urlActions, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type':'application/json'
    }
  }).then(response => response.json())
  .catch(error => console.log(error))
  .then(response => {
    //setActions(response.data.filter(action => action.idPlace === 1)); 
    setActions(response.data);
    console.log("Actions:");
    console.log(actions);
    setLoading(false); });
 
}



useEffect(() =>{

  fetchApiActions()
 
 
}, [])




//  { JSON.stringify(actions, null, 2) }

  
  

  return (
    <>
      {
         loading?
         <Loader/>
         :
   
     <Grid container spacing={2} marginTop={3} marginLeft={3} marging right="auto">
   
     {    
      
      actions.map((actionf) =>
      
      <Grid item xs={6} sm={4}>
    <Card  sx={{ width:270 }} style={{marginLeft: 20, marginRight: 50}}>
  
      <ActionType/>
     <Link to={"/action/"+actionf.idAction}>
     <CardMedia
     component="img"
      image={"data:image/png;base64,"+actionf.actionImgFeatured}
      />     
      </Link> 
      <CardContent>     
        <Typography variant="body2" color="primary" >
          {actionf.actionTitle}
        </Typography>
        <hr></hr>        
        <p><CalendarMonthIcon color="warning"/>{actionf.actionDateTimeTo}</p>
        <p>{actionf.actionContent}</p>       
      </CardContent>
 
    </Card>
      
   </Grid> 

   )}
     
    </Grid>
      }
    
    </>
  );
}

export default Actions;
