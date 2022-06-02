import React, { useState, useEffect } from 'react';
import Datos from '../Detalles/Datos';
import { Paper } from '@mui/material';
import { Box, Grid, MenuItem } from '@mui/material';
import { Typography } from '@mui/material';
import '../../styles/styles.css';
import Estrellas from "../../Estrellas";
import { useParams } from 'react-router-dom';
import '../../styles/Detalle.css';
import { SecurityUpdateGoodSharp } from '@mui/icons-material';
import Loader from '../../Loader/Loader';


const Descripcion = props => {

  const params = useParams();
  const url = `https://soluciones.avansis.es:8061/api/Places/Details/`+params.idPlace
  const [details, setDetails] = useState([]);
  


const fetchApi = async () =>{
  const response = await fetch(url)
  //console.log(response.status)
  const responseJSON = await  response.json();
  setDetails(responseJSON.data)
  console.log(responseJSON)
}



useEffect(() =>{
  fetchApi()
}, [])



//  { JSON.stringify(actions, null, 2) }

  return (
    <>
   
    
      <Grid container spacing={2} justifyContent="center" marginLeft={20} marginTop={5}>
      
      <Box
        style={{marginLeft: 50, width: 1000}}
        display="flex"

        >
        <Grid item xs={12} sm={6} >     
      

          <img src={"data:image/png;base64,"+details.placeImgFeatured} />


        </Grid>
        <Grid item xs={12} sm={6} style={{marginLeft: 20, marginTop: -30}}  >
       
          <h1 >{details.placeName}</h1>

          <p>{}</p>

          <Grid container spacing={1}
            border="1px solid lightgrey" >
            <Grid item xs={12}  marginTop={1} marginBottom={1}>
             <Datos items={details}/>
          </Grid>
        </Grid>
        

      </Grid>
      </Box>
     
      </Grid>
   
    </>
  )
}

export default Descripcion;
