import React from 'react'
import { Link } from 'react-router-dom'


const NotFound = () => {
  return (
    <div className='notFound'>
    <h1>OHH!! lo sentimos, no hemos encontrado lo que buscas.</h1>
        <img src="https://www.imagenspng.com.br/wp-content/uploads/2022/04/flork-png-89.png" alt="Flork triste por no encontrar pagina" />
        <Link to='/' className='btn btn-dark'>Volver al Home</Link>
    
    </div>

  )
}

export default NotFound