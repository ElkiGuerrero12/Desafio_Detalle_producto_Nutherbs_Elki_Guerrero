import react, {useStade, useEffect } from "react";
import ItemCount from "./ItemCount";
import '../main/ItemDetail.css'


const ItemDetail = ({ product }) => {

   //console.log(product)
    return (
      <div className="detalleProductos">
      <div className="cartsDetalle">
          
          <img src={product.img} />                  
          
          <div className="nomdespreCartGlobal">
            <div className="nomdespreCart">
          <h2 className="title">{product.nombre}</h2>
          <p className="description">{product.descripcion}</p>
          <p className="precio-product">S/.<span>{product.precio}</span></p>
             </div>
          <ItemCount maximo={product.Stock}  />
          </div>          
        </div>
        <h3>Descripción</h3>
        <h2>{product.descripcionGeneral}</h2>
      </div>
    );
  };

export default ItemDetail;