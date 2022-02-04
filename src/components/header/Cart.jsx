import react, { useContext } from "react";
import { cartContext } from "../../context/CartProvider";
import '../header/Cart.css'
import CartItem from "./CartItem";
import { Link } from "react-router-dom";

function Cart(){

    const {cart, clearCart} = useContext(cartContext)

    console.log(cart)

    return(
        <>
        {cart.length === 0 ?
        <div className="mensajeCartVacio">
            <p>No hay productos en carrito</p>
            <Link to='/'>Ir a comprar</Link>
        </div>
        :
        <div className="pageCarrito">
            {cart.map(element => <CartItem key={element.item.id} prod= {element}/> )}
          <button onClick={() => clearCart()}>Vaciar Carrito</button>
         </div>

    }
        
        </>

        


    )
}

export default Cart;