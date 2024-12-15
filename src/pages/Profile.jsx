import React, {useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import '../App.css';

const Profile = () => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("https://randomuser.me/api/")
    .then((res) => res.json())
    .then((data) => {
      setUser(data.results[0]);
      setLoading(false);
    })
  }, []);


  return (
    <>
    {loading ?
     <Spinner animation="border" variant="primary" />
     : null}
      {user ?(
      <div className='container-profile'>

      <Card style={{ width: '30rem' }}>
        <ListGroup>
            <img className='picture' src={user.picture.large} alt="imagen de perfil" style={{ width: '30rem' }}/>
          <ListGroup.Item >Nombre:  {user.name.first} {user.name.last}</ListGroup.Item>
          <ListGroup.Item>Edad: {user.dob.age}</ListGroup.Item>
          <ListGroup.Item>Correo Electronico: {user.email}</ListGroup.Item>
          <ListGroup.Item>Telefono: {user.phone}</ListGroup.Item>
          <ListGroup.Item>Ciudad: {user.location.city}</ListGroup.Item>
          <ListGroup.Item>Calle: {user.location.street.name}, # {user.location.street.number}</ListGroup.Item>
          <ListGroup.Item><Link to='/' className='btn btn-dark info-boton'>Cerrar Sesión</Link></ListGroup.Item>
        </ListGroup>
        </Card>
      </div>

      ):
        
      null}

    </>
  )
}

export default Profile