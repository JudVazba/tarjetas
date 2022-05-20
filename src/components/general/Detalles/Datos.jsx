import React from 'react';
import Estrellas from '../../Estrellas';
import '../../styles/Datos.css';
import { Box, Grid, MenuItem } from '@mui/material';
import '../../styles/styles.css';


function Datos() {
  return (
    <>
      <Grid container>
       
            <Grid item xs={6}>
              <p>TLFN</p>
            </Grid>
            <Grid item xs={6} >
           
            <Estrellas />
          </Grid>
            <Grid item xs={6}>
              <p>Dirección</p>
            </Grid>
       
         
        
      </Grid>
    </>
  )
}

export default Datos