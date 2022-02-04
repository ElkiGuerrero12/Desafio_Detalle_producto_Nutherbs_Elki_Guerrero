import React, { createContext } from "react";
import { useState } from "react/cjs/react.development";
import { createRef } from "react/cjs/react.production.min";

export const cartContext = createContext();

const CartProvider = ({children}) =>{

    const[cart, setCart] = useState([]);
//agregar al carrito
    const addToCart = (product, count) => {
        if(isIncart(product.id)){
            const indexItem = cart.findIndex(ele => ele.item.id === product.id);
            cart[indexItem].count = cart[indexItem].count + count;
            setCart([...cart])

        } else{
            setCart([...cart, {item: product, count:count}])

        }       

    }

    //funtion eliminar
    const deleteItem = (id) =>{
        //nuevo array sin el producto selecionado
        const updadCart = cart.filter(element => element.item.id !== id)
        setCart(updadCart)
    }

    //funtion vaciar carrito
    const clearCart = () => {
        setCart([])

    }

//función que devueva si producto existe en carrito
const isIncart = (id) =>{
    return cart.some(element => element.item.id === id)

}




    return(

        <cartContext.Provider value={{cart, addToCart, deleteItem, clearCart}}>
            {children}

        </cartContext.Provider>
    )
}

export default CartProvider;