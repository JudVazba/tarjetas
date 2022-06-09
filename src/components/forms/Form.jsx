import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import '../styles/forms.css';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';



function Form() {
  return (
   <>
   <Box
    component="form"
    sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
    }}
    noValidate
    autoComplete='off'>
    <div className='formulario'>
    <form action='#' method='post' name="form">
        
           <TextField
          id="outlined-textarea"
          label="Nombre"
          placeholder="Nombre"
          multiline
        />
         <TextField
          id="outlined-textarea"
          label="Email"
          placeholder="Email"
          multiline
        />
         <TextField
          id="outlined-textarea"
          label="Teléfono"
          placeholder="Teléfono"
          multiline
        />
          <TextField
          id="outlined-multiline-static"
          label="Comentarios"
          multiline
          rows={4}
        />
        <Stack direction="row">
      <Button variant="contained" endIcon={<SendIcon />} className="boton">
        Enviar
      </Button>
      </Stack>
        
        </form>

        
    </div>

   </Box>
       
   </>
  )
}

export default Form
