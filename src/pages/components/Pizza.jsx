import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button'; /*boton */
import { TiShoppingCart } from "react-icons/ti"; /*carrito de compras */
import { PiEyesFill, PiPizza } from "react-icons/pi"; /*ojitos */
import { formatCurr } from '../../utils/formatCurr';
import React, { useEffect, useState } from 'react'

export default function Pizza() {

const [pizzaCard, setPizzaCard] = useState ([])
useEffect (() =>{
    fetch('http://localhost:5000/api/pizzas/p001')
    .then((res) => res.json())
    .then((pizza)=>{
        setPizzaCard(pizza)
    }) 
}, [])


return (
        
    <Card className='cardPizzas' key={pizzaCard.id} style={{ width: '25rem' }} >
            <Card.Img variant="top" src={pizzaCard.img} />
                <Card.Body>
                        <Card.Title>Pizza {pizzaCard.name}</Card.Title>
                </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroup.Item className="ingredientes"> 
                <h2>Descripción:</h2>
                    <p>{pizzaCard.desc}</p>
                <h2>Ingredientes:</h2>
                    <p> <PiPizza /> {pizzaCard.ingredients}.</p>
                </ListGroup.Item>
            </ListGroup>
            <Card.Body>
                <ListGroup.Item className="Precio">Precio:$ {pizzaCard.price}</ListGroup.Item>
                    <Button variant="outline-dark" className="botoncito">Ver Más <PiEyesFill /></Button>
                    <Button variant="dark" className="botoncito">Añadir <TiShoppingCart /></Button>
            </Card.Body>
        </Card>

)

}

