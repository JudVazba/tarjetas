import * as React from 'react';
import ReactDom from 'react-dom';
import Button from '@mui/material/Button';
import Tarjeta from './components/Tarjeta';
import Detalle from './components/general/Detalle';
import Action from './components/Actions/Action';


const tarjetas = [{}]
var primeraPagina = true;

function App() {

  if(primeraPagina){
  return (
      <>
    <Tarjeta className="tarjeta"/>
    
    </>
  )}
  else{
    return(
      <>
      
       <Detalle/>
 
      
      </>
    )
  }
}

export default App