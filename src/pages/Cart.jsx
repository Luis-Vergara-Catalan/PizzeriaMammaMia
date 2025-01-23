import { useContext} from 'react';
import { formatCurr } from '../utils/formatCurr';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import { CartContext } from '../context/CartContext';

function Cart() {

const { totalPrice, pizzas, token} = useContext(CartContext)

  return (
    
    <div>
    <h1 className='tituloCart'>Detalles del pedido:</h1>
    {
      pizzas.map((pizza, index) => {
      

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
    <h1 className='tituloCart'>Precio total: $ {formatCurr(totalPrice)} </h1> 
    <Button disabled={!token} className='pagar text-white p-4 rounded mt-2'>Pagar</Button>
    </div>
  )
}

export default Cart