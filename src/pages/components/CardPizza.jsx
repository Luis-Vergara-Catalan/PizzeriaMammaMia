import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button'; /*boton */
import { TiShoppingCart } from "react-icons/ti"; /*carrito de compras */
import { PiEyesFill, PiPizza } from "react-icons/pi"; /*ojitos */
import { formatCurr } from '../../utils/formatCurr';

function CardPizza ({name, img, ingredients, price}){
    return (
        
        <Card style={{ width: '25rem' }}>
            <Card.Img variant="top" src={img} />
                <Card.Body>
                        <Card.Title>Pizza {name}</Card.Title>
                </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroup.Item className="ingredientes"> <h2>Ingredientes:</h2>
                    <p> <PiPizza /> {ingredients}</p>
                </ListGroup.Item>
            </ListGroup>
            <Card.Body>
                <ListGroup.Item className='Precio'>Precio:$ {formatCurr(price)}</ListGroup.Item>
                    <Button variant="outline-dark" className="botoncito">Ver Más <PiEyesFill /></Button>
                    <Button variant="dark" className="botoncito">Añadir <TiShoppingCart /></Button>
            </Card.Body>
        </Card>
        
    )
}

export default CardPizza