import react from "react";
import ItemCount from "./ItemCount"
import { Link } from "react-router-dom";

import './Item.css'


function Item({Producto}){
   

    return(
        <div className="productos">
            <div className="carts">
                <div>
                <img src={Producto.img} />                  
                </div>
                <h2 className="title">{Producto.nombre}</h2>
                <p className="description">{Producto.descripcion}</p>
                <p className="precio-product">S/.<span>{Producto.precio}</span></p>
                <Link className="verDetalle" to={`/detalle/${Producto.id}`}>Ver detalle</Link>
                
            </div>        
            
            
            
        </div>
    )

}

export default Item;