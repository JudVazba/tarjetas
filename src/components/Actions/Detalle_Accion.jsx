import React from 'react';
import Form from '../forms/Form';
import { Divider, Grid, Typography } from '@mui/material';
import '../styles/Detalle.css';
import '../styles/styles.css';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';


const Detalle_Accion = props => {

  const params = useParams();
  const url = `https://soluciones.avansis.es:8061/api/Actions/Details/`+params.idAction
 

   const [action, setAction] = useState([]);


const fetchApi = async () =>{
  const response = await fetch(url)
  //console.log(response.status)
  const responseJSON = await  response.json();
  setAction(responseJSON.data)
  console.log(responseJSON)
}



useEffect(() =>{
  fetchApi()
}, [])
  return (
    <>
      <Grid container spacing={2} justifyContent="center">

        <Grid item xs={6} >


          <img src={"data:image/png;base64,"+action.actionImgFeatured} />


        </Grid>
        <Grid item xs={12} sm={12} md={4} >

          <h1 >{action.actionTitle}</h1>

          <p>{action.actionContent} </p>
          <Grid container
            border="1px solid lightgrey"
          >
            <Grid item xs={12} marginTop={1}>
              <Typography>Fecha desde: {action.actionDateTime}</Typography>
            </Grid>
            <Grid item xs={12} marginTop={3}>
              <Typography>Fecha hasta: {action.actionDateTimeTo}</Typography>
            </Grid>
          </Grid>
        </Grid>

      </Grid>
      <br />
      <br />

      <Divider justifyContent="center" />
      <Grid container
        direction="column-reverse"
        justifyContent="space-evenly"
        alignItems="center"
      >
        <Grid item xs={12} >
          <Form />
        </Grid>

      </Grid>


    </>
  )
}

export default Detalle_Accion