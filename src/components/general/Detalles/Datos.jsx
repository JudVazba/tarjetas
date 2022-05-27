import React from 'react';
import Estrellas from '../../Estrellas';
import '../../styles/Datos.css';
import { Box, Grid, MenuItem } from '@mui/material';
import '../../styles/styles.css';


function Datos() {
  return (
    <>
      <Grid container >       
            <Grid item xs={6}  >
              <p>Teléfono: 600600600</p>
            </Grid>
            <Grid item xs={6} marginTop="3%" >           
            <Estrellas/>
          </Grid>
            <Grid item xs={6}>
              <p>Dirección: calle demo número 0</p>
            </Grid>
       
         
        
      </Grid>
    </>
  )
}

export default Datos