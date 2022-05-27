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
  const [lugares, setLugares] = useState([]);
  
  const url = "https://soluciones.avansis.es:8061/api/Places/List";
  const body = {
    "pageSize": 10,
    "pageNumber": 0,
    "globalSearch": "",
    "search": [],
    "order": []
  }

  const fetchApi = () =>{
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type':'application/json'
      }
    }).then(response => response.json())
    .catch(error => console.log(error))
    .then(response => setLugares(response.data));
  }
  
  useEffect(() =>{
    fetchApi()
  }, [])

    return (
      <>
        <Router>
          <div>
            <Switch>
              <Route path='/' exact>
                <Tarjeta items={lugares} />
              </Route>
              <Redirect from="/home" to="/"></Redirect>
              <Route path='/action' exact component={Detalle_Accion}>
              </Route>
              <Route path='/detalle/:idPlace' exact component={Detalle} >

              </Route>

            </Switch>
          </div>
        </Router>

      </>
    )
}

export default App;