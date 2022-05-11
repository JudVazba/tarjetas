import React from 'react';
import Estrellas from '../Estrellas';
import Action from '../Actions/Action';

function Detalle() {
    return (
        <>
            <div className='pantalla'>
                <div className='titulofoto'>
                    <img src='#img' />
                    <h1>TÍTULO LUGAR</h1>
                    <p>Descripción</p>
                    <div className='etiq'>
                    <Estrellas/>
                    <p>TLFN</p>
                    <p>Dirección</p>
                    </div>
                </div>
                <br/><br/> <br/><br/> <br/><br/>
                <Action/>
            </div>

        </>
    )
}

export default Detalle