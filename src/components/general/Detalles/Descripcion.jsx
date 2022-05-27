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


const Descripcion = props => {

  const params = useParams();
  const url = `https://soluciones.avansis.es:8061/api/Places/Details/`+params.idPlace

   const [details, setDetails] = useState({"Miobjeto": "Mi objeti con mis cosas;"});

const fetchApi = async () =>{
  const response = await fetch(url)
  //console.log(response.status)
  const responseJSON = await  response.json();
  setDetails(responseJSON)
  console.log(responseJSON)
}

useEffect(() =>{
  fetchApi()
}, [])


  return (
    <>
    
      <Grid container spacing={2} justifyContent="center" marginLeft={20} marginTop={5}>
      { JSON.stringify(details, null, 2) }
      <Box
        style={{marginLeft: 50, width: 1000}}
        display="flex"

        >
        <Grid item xs={12} sm={6} >     
      

          <img src='https://st.depositphotos.com/1134101/3098/i/950/depositphotos_30987137-stock-photo-puerto-banus-at-dusk-marina.jpg' />


        </Grid>
        <Grid item xs={12} sm={6} style={{marginLeft: 20, marginTop: -30}}  >
       
          <h1 >titulo</h1>

          <p>Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.
            Cras condimentum, neque vel hendrerit molestie
            , lectus felis commodo arcu, nec mollis mauris
            felis accumsan velit. Cras vestibulum dui a
            ornare rhoncus. Quisque a bibendum lectus,
            vel auctor ipsum. Praesent ac sodales enim.
            Morbi faucibus tempor lorem, et ultrice
            s diam tempus id. In hendrerit metus neque
            , et posuere lectus fringilla vitae.</p>

          <Grid container spacing={1}
            border="1px solid lightgrey" >
            <Grid item xs={12}  marginTop={1} marginBottom={1}>
             <Datos/>
          </Grid>
        </Grid>
        

      </Grid>
      </Box>
     
      </Grid>
   
    </>
  )
}

export default Descripcion;
