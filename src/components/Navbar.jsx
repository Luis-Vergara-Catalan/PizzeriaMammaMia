import Button from 'react-bootstrap/Button';
import { formatCurr } from '../utils/formatCurr'; /*Se importo de archivo formatCurr.js */
import { TiShoppingCart } from "react-icons/ti"; /*carrito de compras */
import { RiLockPasswordLine, RiLockUnlockLine, RiLock2Line } from "react-icons/ri"; /* candado logout */
import { PiPizza } from "react-icons/pi"; /*Pizza */
import Stack from 'react-bootstrap/Stack';


function NavBar (){
    const total = 25000; /* se agrega donde va a ser utilizada agregando { nombre de la variable }*/
    const token = false; /* Se utiliza en la variable booleana*/
    return (
            <Stack className='fondito' direction="horizontal" gap={3}>
      <div className="p-2">Pizzeria Mamma Mia!</div>
      <div className="p-8">
            <Button variant="outline-light"><PiPizza /> Home</Button>
        { token ? ( /* Variable booleana  esto se cumple cuando la condición es verdadero*/
                   <>
                            <Button variant="outline-light"> <RiLock2Line /> Login</Button>
                            <Button variant="outline-light"> <RiLock2Line /> Register</Button>
                     </>    
                    ) : (/* esto se cumple cuando la condición es falsa*/
                         <>
                            <Button variant="outline-light"><RiLockUnlockLine /> Profile</Button>
                            <Button variant="outline-light"> <RiLockPasswordLine /> Logout</Button>
                       </> 
                    )
                    }
      </div>
      <div className="p-2 ms-auto">
        <Button variant="outline-info" className="BotonTotal"><TiShoppingCart /> Total: $ {formatCurr(total)}</Button>
      </div>
    </Stack>

        
    )
}

export default NavBar