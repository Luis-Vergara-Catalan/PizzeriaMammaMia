import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useState } from 'react'

const Login = () => {
  const [email,setEmail] = useState("");
  const [password, setPassword] = useState("");
  
 const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "" || password === ""){
        alert('Todos los campos son obligatorios');
        return false;
    } 
    if (password.length < 6) {
        alert('El password debe tener al menos 6 caracteres');
        return false;
    }
    alert('Datos enviados con exito');
    return true;
 }
  return (
    <>
      <h1 className='title'>Login</h1>
      <Form className='m-5'>
        <Form.Group className="mb-5 m-5" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="prueba@prueba.com" onChange={(e) => setEmail(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-5 m-5" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
        </Form.Group>
        <Button className="mb-3 m-5" variant="primary" type="submit"  onClick={(e) => handleSubmit(e)}>
          Login
        </Button>
      </Form>
    </>
  )
}

export default Login