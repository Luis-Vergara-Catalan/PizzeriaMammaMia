import { formatCurr } from '../utils/formatCurr'; /*Se importo de archivo formatCurr.js */
import { TiShoppingCart } from "react-icons/ti"; /*carrito de compras */
import { RiLockPasswordLine, RiLockUnlockLine, RiLock2Line } from "react-icons/ri"; /* candado logout */
import { PiPizza } from "react-icons/pi"; /*Pizza */
import Stack from 'react-bootstrap/Stack';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';



function NavBar (){
    const { totalPrice } = useContext(CartContext)
    const token = true; /* Se utiliza en la variable booleana*/
    return (
      <Stack className='fondito' direction="horizontal" gap={3}>
        <Link to='/' className='logo m-3' style={{ textDecoration: 'none' }}><h4> <PiPizza />  Pizzeria Mamma Mia! </h4></Link>
          <div className="p-2 ms-auto">
            { token ? ( /* Variable booleana  esto se cumple cuando la condición es verdadero*/
                <>
                  <Link to='/Login' className='btn btn-outline-light m-1'> <RiLock2Line /> Login</Link>
                  <Link to='/Register' className='btn btn-outline-light m-1'> <RiLock2Line /> Register</Link>
                  <Link to='/Profile' className='btn btn-outline-light m-1'> <RiLockUnlockLine /> Profile</Link>
                </>    
              ) : (/* esto se cumple cuando la condición es falsa*/
                
                  
                  <Link to='/Logout' className='btn btn-outline-light m-2'> <RiLockPasswordLine /> Logout</Link>
                
                  )
            }
            {/* <Link to='/Cart' className='btn btn-outline-light BotonTotal m-2'> <TiShoppingCart /> Total: $ {formatCurr(total)}</Link> */}
            <Link to='/Cart' className='btn btn-outline-light BotonTotal m-2'> <TiShoppingCart /> Total: $ {formatCurr(totalPrice)}</Link>
          </div>
      </Stack>
    )
}

export default NavBar