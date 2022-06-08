import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import '../styles/Loader.css';

const Loader = () => {
  return (
    <>
      <Box className="caja"sx={{ 
      top:0, left:0}}
      >
      <CircularProgress />
    </Box>
    </>
  )
}

export default Loader