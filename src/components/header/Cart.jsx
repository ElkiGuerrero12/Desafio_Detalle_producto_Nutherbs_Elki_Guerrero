import react, { useContext, useEffect, useState } from "react";
import { cartContext } from "../../context/CartProvider";
import '../header/Cart.css'
import CartItem from "./CartItem";
import { Link } from "react-router-dom";
import CartWidjet from "./CartWidget";


function Cart(){

    const {cart, clearCart, precioTotal} = useContext(cartContext)

   // console.log(totalUnidades)
     
    //const[ unidades, setUnidades] = useState(0)

  // useEffect (  () =>{
   //     setUnidades(totalUnidades)
   // },[])

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
            <p>Total A pagar: S/.{precioTotal()} </p>
           
           
            <div><Link to='/terminarcompra'><button>Terminar la compra</button></Link></div>
          <button onClick={() => clearCart()}>Vaciar Carrito</button>
         
         </div>

    }
        
        </>

        


    )
}

export default Cart;