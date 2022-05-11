import * as React from 'react';
import ReactDom from 'react-dom';
import Button from '@mui/material/Button';
import Tarjeta from './components/Tarjeta';
import Detalle from './components/general/Detalle';
import Action from './components/Actions/Action';



function App() {
  return (
      <>
    <Tarjeta className="tarjeta"/>

    <br/><br/><br/><br/>
   <div>
     <Detalle/>
   </div>
    
    </>
  )
}

export default App