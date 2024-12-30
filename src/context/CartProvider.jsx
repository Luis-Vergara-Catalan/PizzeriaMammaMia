import { CartContext } from "./CartContext"
import { useState, useEffect } from "react"

//proveedor del contexto
export const CartProvider = ( {children} ) => {

    const [cart, setCart] = useState ([])
    const [totalPrice, setTotalPrice] = useState (0)
    const [pizzas, setPizzas] = useState([]);


  useEffect(() => {
    fetch('http://localhost:5000/api/pizzas') 
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch pizzas');
        }
        return response.json();
      })
      .then((data) => {
        setPizzas(data);
      })
      .catch((error) => {
        console.error('Error fetching pizzas:', error);
      });
  }, []);


  const [pizzasCarrito, setPizzasCarrito] = useState();
    
    const handleAgregar = (index) => {
    pizzasCarrito[index].count++;
    setPizzasCarrito([...pizzasCarrito]);
  }

   const handleQuitar = (index) => {
    pizzasCarrito[index].count--;    
    setPizzasCarrito([...pizzasCarrito.filter((pizza) => pizza.count > 0)]);
  } 

    //Función para agregar productos al carro

    const addToCart = (data) => {
      setCart((prevCart) => [...prevCart, data]);
      setTotalPrice ((prevTotal) => prevTotal + data.price)
    }


  return (
    <CartContext.Provider value={{cart, totalPrice, addToCart, pizzas, handleAgregar, handleQuitar}}>
        {children}
    </CartContext.Provider>
  )
}

