import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Register = () => {

const {token, register} = useUserContext();
  const [email,setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState('');

  if (token) return <Navigate to="/home" />;
  
 const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    if (!email || !password) {
            setMessage('Todos los campos son obligatorios.');
        } else if (password.length < 6) {
            setMessage('La contraseña debe tener al menos 6 caracteres.');
        } else {
            try {
                await register(email, password);
                setMessage('Inicio de sesión');
            } catch (error) {
                setMessage('Error en el iniciar la sesión');
            }
        }
    };
  return (
    <div>
    
    <h1 className='title'>Formualrio de registro</h1>
        <Form className='m-5'>
        <Form.Group className="mb-5 m-5" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="prueba@prueba.com" onChange={(e) => setEmail(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-5 m-5" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-5 m-5" controlId="formBasicPassword">
          <Form.Label>Confirmación de contraseña</Form.Label>
          <Form.Control type="password" placeholder="Confirmar Password" onChange={(e) => setConfirmPassword(e.target.value)} />
        </Form.Group>
        <Button className="mb-3 m-5" variant="primary" type="submit"  onClick={(e) => handleSubmit(e)}>
          Login
        </Button>
      </Form>
    {message && <p>{message}</p>}
    </div>
  )
}

export default Register