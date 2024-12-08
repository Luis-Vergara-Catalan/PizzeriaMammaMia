import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button'; /*boton */
import { TiShoppingCart } from "react-icons/ti"; /*carrito de compras */
import { PiEyesFill, PiPizza } from "react-icons/pi"; /*ojitos */
import { formatCurr } from '../../utils/formatCurr';
import { useEffect, useState } from 'react';

export default function CardPizza (){
    const [pizzas, setPizza] = useState([]);

useEffect (() => {
    fetch('http://localhost:5000/api/pizzas')
    .then((res)=> res.json())
    .then((data) => {
    setPizza(data)
    console.log(data)
    })
    }, [])


    return (
        pizzas.map((pizza) => {
        
            return(
        <Card key={pizza.id} pizza={pizza} style={{ width: '25rem' }} >
            <Card.Img variant="top" src={pizza.img} />
                <Card.Body>
                        <Card.Title>Pizza {pizza.name}</Card.Title>
                </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroup.Item className="ingredientes"> <h2>Ingredientes:</h2>
                    <p> <PiPizza /> {pizza.ingredients.join(", ")}.</p>
                </ListGroup.Item>
            </ListGroup>
            <Card.Body>
                <ListGroup.Item className="Precio">Precio:$ {formatCurr(pizza.price)}</ListGroup.Item>
                    <Button variant="outline-dark" className="botoncito">Ver Más <PiEyesFill /></Button>
                    <Button variant="dark" className="botoncito">Añadir <TiShoppingCart /></Button>
            </Card.Body>
        </Card>
        )
        
        })
        
    )
}
