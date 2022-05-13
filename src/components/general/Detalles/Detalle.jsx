import React from 'react';
import Action from '../../Actions/Action';
import Descripcion from '../Detalles/Descripcion';
import '../../styles/Detalle.css';
import Datos from '../Detalles/Datos';

function Detalle() {
    return (
        <>
           <Descripcion/>
                <br/><br/> <br/><br/> <br/><br/>
                <Datos/>
                <br/><br/> <br/><br/> <br/><br/>
                <Action/>
           

        </>
    )
}

export default Detalle