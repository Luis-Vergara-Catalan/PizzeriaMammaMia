import { pizzaCart } from '../data/pizzas';
import { useState } from 'react';
import { formatCurr } from '../utils/formatCurr';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

function Cart() {

const [pizzasCarrito, setPizzasCarrito] = useState(pizzaCart);
    
    const handleAgregar = (index) => {
    pizzasCarrito[index].count++;
    setPizzasCarrito([...pizzasCarrito]);
  }

   const handleQuitar = (index) => {
    pizzasCarrito[index].count--;    
    setPizzasCarrito([...pizzasCarrito.filter((pizza) => pizza.count > 0)]);
  }

    const total = () => {
      return (
        pizzasCarrito.reduce((sumaTotal, pizza) => 
          sumaTotal + pizza.price * pizza.count, 0));
  }

  return (
    
    <div>
    <h1 className='tituloCart'>Detalles del pedido:</h1>
    {
      pizzasCarrito.map((pizza, index) => {

      return (<div className='d-flex' key={pizza.id}>
      <Container>
        <Row>
          <Col>
            <Row>
              <Col>
                <Image className='imageCart' width={150} src={pizza.img} alt="pizzas" />
              </Col>
              <Col>
                <div className='nombreCart'>{pizza.name}</div>
              </Col>
            </Row>
          </Col>
          <Col>
            <div className='precioCart'>$ {formatCurr(pizza.price)}</div>
          </Col>
          <Col>
            <Row>
              <Col>
                <Button className='botonCart' variant="outline-danger"onClick={() => handleQuitar(index)} >-</Button>
              </Col>
              <Col>
                <div className='botonCart'>{pizza.count}</div>
              </Col>
              <Col>
                <Button className='botonCart' variant="outline-success" onClick={ ()=> handleAgregar(index)}>+</Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
        
      </div>)
      })
    } 
    <h1 className='tituloCart'>Precio total: $ {formatCurr(total())} </h1> 
    </div>
  )
}

export default Cart