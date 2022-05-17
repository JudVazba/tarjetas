import React from 'react';
import Action from '../../Actions/Action';
import Descripcion from '../Detalles/Descripcion';
import '../../styles/Detalle.css';
import Datos from '../Detalles/Datos';
import { Grid } from '@mui/material';

function Detalle() {
    return (
        <>
        <Grid container>
        <Grid item sx={12}>
           <Descripcion/>
           </Grid>
       
               <Grid item sx={12}>
                <Action/>
           </Grid>
</Grid>
        </>
    )
}

export default Detalle