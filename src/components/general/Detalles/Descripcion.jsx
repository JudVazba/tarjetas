import React from 'react';
import Datos from '../Detalles/Datos';
import { Paper } from '@mui/material';
import { Box, Grid, MenuItem } from '@mui/material';


import '../../styles/Detalle.css';

function Descripcion(props) {
  return (
    <>
      <Grid container>
        <div className='tarjteta_descripcion'>
          <Grid item xs={7}>

            <Paper elevation={8} >
              <img src='https://st.depositphotos.com/1134101/3098/i/950/depositphotos_30987137-stock-photo-puerto-banus-at-dusk-marina.jpg' />
            </Paper>

          </Grid>
          <Grid item xs={5}>
            <div className='datos'>
              <h1>TÍTULO LUGAR</h1>

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
            </div>

            <Grid item xs={12} >
              <Datos />
            </Grid>
          </Grid>
        </div>
      </Grid>
    </>
  )
}

export default Descripcion