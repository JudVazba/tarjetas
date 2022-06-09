import * as React from 'react';
import LoyaltyIcon from '@mui/icons-material/Loyalty';
import LocalActivityIcon from '@mui/icons-material/LocalActivity';
import WorkIcon from '@mui/icons-material/Work';


import '../styles/Actions.css';
import '../styles/styles.css';
import { ContentCutOutlined } from '@mui/icons-material';
import {useState} from 'react';
import { useEffect } from 'react';






const ActionType =props => {

const [actionTypeid, setidActionTypeid] = useState([]);
console.log(props)

const capturarActionType = () =>{
   props.items.map(item =>
 
  setidActionTypeid(item.idActionType)

  )


}

useEffect(() => {
  capturarActionType();
  console.log("AT:")
  console.log(actionTypeid)
}, [props.idActionType])






  if(actionTypeid ===1){
   
  return (
<>

<div className='icono' id='evento'>
<LocalActivityIcon color="primary"/>
<p>Evento</p>
</div>
</>
  )
}else if(actionTypeid ===2){
  return (
    <>
    <div className='icono' id='descuento'>
    <LoyaltyIcon />
    <p>Descuento</p>
    </div>
    </>
      )
}else if(actionTypeid ===3){
  return (
    <>
    <div className='icono' id='oferta'>
    <LoyaltyIcon color='success' />
    <p >Oferta de trabajo</p>
    </div>
    </>
      )
} 
}

export default ActionType