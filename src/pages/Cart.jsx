import { useContext, useState} from 'react';
import { formatCurr } from '../utils/formatCurr';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import { CartContext } from '../context/CartContext';
import { CartProvider } from '../context/CartProvider';

function Cart() {

const { totalPrice, pizzas, token} = useContext(CartContext)
const {cart} = CartProvider();
const [message, setMessage] = useState('');

const handleChecout = async () => {
  if (!token){
    setMessage("debes iniciar sesión");
    return;
  }
  try {
    const response = await fetch("/api/checkouts", {
      method:"POST",
      headers:{
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({cart: cart}),
    });
    if (response.ok){
      setMessage("compra realizada con éxito.");
    } else {
      setMessage("Error al realizar la compra.");
    }
  } catch (error) {
    setMessage("Error, Intentalo nuevamente");
  }
};

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
    <Button disabled={!token} onClick={handleChecout} className='pagar text-white p-4 rounded mt-2'>Pagar</Button>
    {message && <p>{message}</p>}
    </div>
  )
}

export default Cart