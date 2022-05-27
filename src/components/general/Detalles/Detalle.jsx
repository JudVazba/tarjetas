import React from 'react';
import Action from '../../Actions/Action';
import Descripcion from '../Detalles/Descripcion';
import '../../styles/Detalle.css';
import Datos from '../Detalles/Datos';
import { Grid } from '@mui/material';
import '../../styles/styles.css';


class Detalle extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            acciones: [
                { actionId: 1, actionType: 1, actiontitle: "mercado medieval", actionDate: "22/05/2021", actionDetails: "mercado medieval con puestos de comida y música ambiental", actionImg: "../ENVIO.jpg" },
                { actionId: 2, actionType: 3, actiontitle: "Niñeros para las tardes", actionDate: "22/05/2021", actionDetails: "Se buscan niñeros para las tardes, contrato temporal", actionImg: "../analista.jpg" },
                { actionId: 3, actionType: 2, actiontitle: "mercado Envío gratis", actionDate: "22/05/2021", actionDetails: "Envío gratis con un consumo de 20€", actionImg: "../ENVIO.jpg" }
            ]
        };
    }
    render() {
        return (
            <>
                <Grid container spacing={2}>
                    <Grid item sx={12}>
                        <Descripcion />
                    </Grid>

                    <Grid item sx={12} sm={12} md={12}>
                   
                        <Action items={this.state.acciones} />
                       
                    </Grid>
                </Grid>
            </>
        )
    }
}

export default Detalle