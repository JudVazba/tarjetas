import * as React from 'react';
import LoyaltyIcon from '@mui/icons-material/Loyalty';
import LocalActivityIcon from '@mui/icons-material/LocalActivity';
import WorkIcon from '@mui/icons-material/Work';


import '../styles/Actions.css';
import '../styles/styles.css';



var actionType = 1

function ActionType() {

  if(actionType ===1){
  return (
<>
<div className='icono' id='evento'>
<LocalActivityIcon color="primary"/>
<p>Evento</p>
</div>
</>
  )
}else if(actionType ===2){
  return (
    <>
    <div className='icono' id='descuento'>
    <LoyaltyIcon />
    <p>Descuento</p>
    </div>
    </>
      )
}else if(actionType ===3){
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