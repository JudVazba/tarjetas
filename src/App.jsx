import React, {useState, useEffect} from 'react';
import ReactDom from 'react-dom';
import Button from '@mui/material/Button';
import Tarjeta from './components/Tarjeta';
import Detalle from './components/general/Detalles/Detalle';
import Action from './components/Actions/Action';
import Descripcion from './components/general/Detalles/Descripcion';
import Detalle_Accion from './components/Actions/Detalle_Accion';
import { BrowserRouter as Router, Link, Route, Switch, Redirect } from 'react-router-dom';
import { useParams } from 'react-router-dom';



const App = props => {



  
    return (
      <>
        <Router>
          <div>
         
          
            <Switch>
           
              
              
              <Route path='/places/:page' exact component={Tarjeta}></Route>
              <Route path='/action/:idAction' exact component={Detalle_Accion}></Route>
              <Route path='/detalle/:idPlace' exact component={Detalle} ></Route>
              <Redirect from="/" to="/places/1"></Redirect>

              

            </Switch>
            
          </div>
        </Router>
      </>
    )
}

export default App;