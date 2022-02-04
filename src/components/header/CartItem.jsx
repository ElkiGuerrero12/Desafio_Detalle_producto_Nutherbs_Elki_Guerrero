import React, { useContext } from "react";
import { cartContext } from "../../context/CartProvider";
import './CartItem.css'

const CartItem = ({prod})=>{

   const {deleteItem} = useContext(cartContext)

    return(

        <div>
            <div className="productCart">
            <img src={prod.item.img} />
            <div className="productCartItems">
            <h3>{prod.item.nombre}</h3>
            <p>Cantidad: {prod.count}</p>
            <button onClick={() => deleteItem(prod.item.id)}>Eliminar</button>
            </div>
            </div>
        </div>
    )
}

export default CartItem;