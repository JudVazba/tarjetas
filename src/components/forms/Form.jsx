import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import '../styles/forms.css';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
 


function Form() {

  const[nombre, setNombre] = useState("");
  const[email, setEmail] = useState("");
  const[telefono, setTelefono] = useState("");
  const[comentario, setComentario] = useState("");
  console.log(nombre)

  
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
    <form  method='post' name="form">
        
           <TextField
          id="outlined-textarea"
          name='nombre'
          label="Nombre"
          placeholder="Nombre"
          multiline
          value={nombre}
          onChange={(e)=>setNombre(e.target.value)}
        />
         <TextField
          id="outlined-textarea"
          name='email'
          label="Email"
          placeholder="Email"
          multiline
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />
         <TextField
          id="outlined-textarea"
          name='telefono'
          label="Teléfono"
          placeholder="Teléfono"
          multiline
          value={telefono}
          onChange={(e)=>setTelefono(e.target.value)}
        />
          <TextField
          id="outlined-multiline-static"
          name='comentarios'
          label="Comentarios"
          multiline
          rows={4}
          value={comentario}
          onChange={(e)=>setComentario(e.target.value)}
        />
        <Stack direction="row"> 
      <Button variant="contained"  type='submit' endIcon={<SendIcon />} className="boton" id='submit'> 
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
