import * as React from 'react';
import ReactDom from 'react-dom';
import Button from '@mui/material/Button';
import Tarjeta from './components/Tarjeta';
import Detalle from './components/general/Detalles/Detalle';
import Action from './components/Actions/Action';
import Descripcion from './components/general/Detalles/Descripcion';
import Detalle_Accion from './components/Actions/Detalle_Accion';
import { BrowserRouter as Router, Link, Route, Switch, Redirect } from 'react-router-dom';
import { useParams } from 'react-router-dom';



class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      lugares: [
        { placeType: 2, idPlace: 1, lugar: "Ayuntamiento", num: "600500555", direccion: "Plaza del ayuntamiento", imagen: "https://blog.fuertehoteles.com/wp-content/uploads/2019/02/marbella-aerial.jpg", descripcion:"Descripción" },
        { placeType: 3, idPlace: 2, lugar: "fuente", num: "00000000", direccion: "Plaza de la fuente", imagen: "https://media-cdn.tripadvisor.com/media/photo-w/11/91/50/4f/fuente-de-la-virgen-del.jpg", descripcion:"Descripción"  },
        { placeType: 4, idPlace: 3, lugar: "Bar manoli", num: "99999999", direccion: "calle mayor, 4", imagen: "https://blog.fuertehoteles.com/wp-content/uploads/2019/02/marbella-aerial.jpg" , descripcion:"Descripción" },
        { placeType: 5, idPlace: 4, lugar: "Asociación bellasvistas", num: "1010101015", direccion: "calle ruación, 9", imagen: "https://citmarbella.es/wp-content/uploads/2021/04/cit-marbella-asociacion-de-empresarios-y-profesionales.png" , descripcion:"Descripción" }
      ]
    };
  }
  render() {

    return (
      <>
        <Router>
          <div>
            <Switch>
              <Route path='/' exact>
                <Tarjeta items={this.state.lugares} />
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
}

export default App;