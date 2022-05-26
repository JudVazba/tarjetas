import React, { useState, useEffect } from 'react';
import Datos from '../Detalles/Datos';
import { Paper } from '@mui/material';
import { Box, Grid, MenuItem } from '@mui/material';
import { Typography } from '@mui/material';
import '../../styles/styles.css';
import { useParams } from 'react-router-dom';



import '../../styles/Detalle.css';

 export default function Descripcion() {
   let params = useParams();
   useEffect(() =>{
     fetchData();
     console.log(params);
   }, []);

   const fetchData =() =>{
     fetch(`https://soluciones.avansis.es:8060/api/Places/Details/${params.idPlace}`)
     .then((data) =>data.json())
     .then ((data)=>{
      console.log(data);
      setData(data);
     });
   };
  
  const [data, setData] = useState([])
   
  return (
    <>
    
      <Grid container spacing={2} justifyContent="center">
      
        <Grid item xs={4} justifyContent="center" >
      

          <img src='https://st.depositphotos.com/1134101/3098/i/950/depositphotos_30987137-stock-photo-puerto-banus-at-dusk-marina.jpg' />


        </Grid>
        <Grid item xs={12} sm={12} md={6} >

          <h1 >TÍTULO lugar</h1>

          <p>Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.
            Cras condimentum, neque vel hendrerit molestie
            , lectus felis commodo arcu, nec mollis mauris
            felis accumsan velit. Cras vestibulum dui a
            ornare rhoncus. Quisque a bibendum lectus,
            vel auctor ipsum. Praesent ac sodales enim.
            Morbi faucibus tempor lorem, et ultrice
            s diam tempus id. In hendrerit metus neque
            , et posuere lectus fringilla vitae.
            Integer non lectus interdum ante pulvinar posuere.
            Nunc vehicula dapibus arcu. Suspendisse vehicula,
            est id auctor fringilla, metus risus fringilla lorem,
            quis aliquet lacus nisl in odio. In turpis metus,
            iaculis in justo sed, eleifend sollicitudin turpis.
            Suspendisse cursus ante quis ornare finibus. Interdum
            et malesuada fames ac ante ipsum primis in faucibus.
            Maecenas efficitur, leo in condimentum dignissim,
            ipsum neque posuere elit, eu pretium arcu massa
            id est.</p>
          <Grid container
            border="1px solid lightgrey">
            <Grid item xs={12}  marginTop={1} marginBottom={1}>
             <Datos/>
          </Grid>
        </Grid>

      </Grid>
     
      </Grid>
   
    </>
  )
}
