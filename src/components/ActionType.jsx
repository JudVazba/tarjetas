import * as React from 'react';
import LoyaltyIcon from '@mui/icons-material/Loyalty';
import './styles/Actions.css';
import './styles/styles.css';


var actionType = "oferta"

function ActionType() {
  return (
<>
<div className='icono'>
<LoyaltyIcon />
<p>Descuento</p>
</div>
</>
  )
}

export default ActionType