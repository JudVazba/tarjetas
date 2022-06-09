import React from 'react';
import Estrellas from '../../Estrellas';
import '../../styles/Datos.css';
import { Box, Grid, MenuItem } from '@mui/material';
import '../../styles/styles.css';


const Datos = props => { 

  return (
    <>
      <Grid container >       
            <Grid item xs={6}  >
              <p>Teléfono: {props.items.placePhone}</p>
            </Grid>
            <Grid item xs={6} marginTop="3%" >           
            <Estrellas/>
          </Grid>
            <Grid item xs={6}>
              <p>Dirección: {props.items.placeAddress}</p>
            </Grid>
       
         
        
      </Grid>
    </>
  )
}

export default Datos