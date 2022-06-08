import React from 'react';
import Form from '../forms/Form';
import { Divider, Grid, Typography } from '@mui/material';
import '../styles/Detalle.css';
import '../styles/styles.css';


function Detalle_Accion() {
  return (
    <>
      <Grid container spacing={2} justifyContent="center">

        <Grid className="containerImg" item xs={10} sm={10} md={4} >


          <img src='https://st.depositphotos.com/1134101/3098/i/950/depositphotos_30987137-stock-photo-puerto-banus-at-dusk-marina.jpg' />


        </Grid>
        <Grid className='text' item xs={10} sm={10} md={4} >

          <h1 >TÍTULO ACCIÓN</h1>

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
            border="1px solid lightgrey"
          >
            <Grid className="Desde" item xs={12} marginTop={1}>
              <Typography>Fecha desde:</Typography>
            </Grid>
            <Grid className="Hasta" item xs={12} marginTop={3}>
              <Typography>Fecha hasta:</Typography>
            </Grid>
          </Grid>
        </Grid>

      </Grid>
      <br />
      <br />

      <Divider justifyContent="center" />
      <Grid container className="form"
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
