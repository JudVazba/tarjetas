import React from 'react';
import Estrellas from '../../Estrellas';
import '../../styles/Datos.css';
import { Box, Grid, MenuItem } from '@mui/material';


function Datos() {
  return (
    <>
      <Grid container>
        <div className='etiq'>
          <div className='dato'>
            <Grid item xs={6}>
              <p>TLFN</p>
            </Grid>

            <Grid item xs={6}>
              <p>Dirección</p>
            </Grid>
          </div>
          <div className='estrellas'>
          <Grid item xs={6}>
            <Estrellas />
          </Grid>
          </div>


        </div>
      </Grid>
    </>
  )
}

export default Datos