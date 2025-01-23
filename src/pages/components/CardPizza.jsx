import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button'; /*boton */
import { TiShoppingCart } from "react-icons/ti"; /*carrito de compras */
import { PiEyesFill, PiPizza } from "react-icons/pi"; /*ojitos */
import { formatCurr } from '../../utils/formatCurr';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from "react-router-dom";

export default function CardPizza (){
    const { addToCart, pizzas } = useContext(CartContext);
        if (!pizzas.length) {
        return <p>Cargando pizzas...</p>;
    }

    return (
        pizzas.map((data) => {
        
            return(
        <Card key={data.id} pizza={data} style={{ width: '25rem' }} >
            <Card.Img variant="top" src={data.img} />
                <Card.Body>
                        <Card.Title>Pizza {data.name}</Card.Title>
                </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroup.Item className="ingredientes"> <h2>Ingredientes:</h2>
                    <p> <PiPizza /> {data.ingredients.join(", ")}.</p>
                </ListGroup.Item>
            </ListGroup>
            <Card.Body>
                <ListGroup.Item className="Precio">Precio:$ {formatCurr(data.price)}</ListGroup.Item>
                    <Link to={`/pizza/${data.id}`} className='btn btn-light m-2'> Ver Más <PiEyesFill /> </Link>
                    <Button onClick={() => addToCart(data)} variant="dark" className="botoncito">Añadir <TiShoppingCart /></Button>
            </Card.Body>
        </Card>
        )
        
        })
        
    )
}
