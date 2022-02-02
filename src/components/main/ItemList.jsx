import Item from "./Item";
import './Item.css'






function ItemList({arrayDeProductos}){

    return(

        <>
       
        <div className="listaProductos">
            
        {arrayDeProductos.map((product) => {
        return <Item data={product} key={product.id} />;
      })}          
        </div>
        
         
        </>
    )
    
        }

export default ItemList;