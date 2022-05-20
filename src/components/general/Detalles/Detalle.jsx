import React from 'react';
import Action from '../../Actions/Action';
import Descripcion from '../Detalles/Descripcion';
import '../../styles/Detalle.css';
import Datos from '../Detalles/Datos';
import { Grid } from '@mui/material';
import '../../styles/styles.css';

function Detalle() {
    return (
        <>
        <Grid container spacing={2}>
        <Grid item sx={12}>
           <Descripcion/>
           </Grid>
       
               <Grid item sx={12} sm={6} md={4}>
                <Action/>
           </Grid>
</Grid>
        </>
    )
}

export default Detalle