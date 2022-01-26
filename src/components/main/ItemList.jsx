import Item from "./Item";
import './Item.css'






function ItemList({arrayDeProductos}){

    return(

        <>
       
        <div className="listaProductos">
            
            {arrayDeProductos.map(Producto =>{
                return <Item Producto ={Producto} /> 
            } ) }           
        </div>
        
         
        </>
    )
    
        }

export default ItemList;