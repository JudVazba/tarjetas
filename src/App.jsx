import * as React from 'react';
import ReactDom from 'react-dom';
import Button from '@mui/material/Button';
import Tarjeta from './components/Tarjeta';
import Detalle from './components/general/Detalles/Detalle';
import Action from './components/Actions/Action';
import Detalle_Accion from './components/Actions/Detalle_Accion';




var primeraPagina = false;
var form = true;

class App extends React.Component {

    constructor(props){
      super(props);
      this.state = { 
        lugares:[
          {placeType: 2 , id:1, lugar:"Ayuntamiento", num:"600500555", direccion:"Plaza del ayuntamiento",imagen:"https://blog.fuertehoteles.com/wp-content/uploads/2019/02/marbella-aerial.jpg"},
          {placeType: 3 , id:2, lugar:"fuente", num:"00000000", direccion:"Plaza de la fuente",imagen:"https://media-cdn.tripadvisor.com/media/photo-w/11/91/50/4f/fuente-de-la-virgen-del.jpg"},
          {placeType: 4 , id:3, lugar:"Bar manoli", num:"99999999", direccion:"calle mayor, 4",imagen:"https://blog.fuertehoteles.com/wp-content/uploads/2019/02/marbella-aerial.jpg"},
          {placeType: 5 , id:4, lugar:"Asociación bellasvistas", num:"1010101015", direccion:"calle ruación, 9",imagen:"https://citmarbella.es/wp-content/uploads/2021/04/cit-marbella-asociacion-de-empresarios-y-profesionales.png"}
        ]
    };
  }
  render(){
  if(primeraPagina){
  return (
      <>
    <Tarjeta items={this.state.lugares} />
    
    </>
  )}
  else if(form){
    return(
      <>
      
       <Detalle_Accion/>
 
      
      </>
    )
  }else{
    return(
      <>
      
       <Detalle/>
 
      
      </>
    )
  }
}
}

export default App;