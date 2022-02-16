import react, { useContext, useEffect, useState, useRef } from "react";
import { cartContext } from "../../context/CartProvider";
import { Link } from "react-router-dom";
import { getFirestore } from "../../firebase/firebase";
import firebase from "firebase/app";
import './TerminarCompra.css';


function TerminarCompra(){
    const {cart, precioTotal} = useContext(cartContext)
    const [orderId, setOrderId] = useState("");    
    const [total, setTotal] = useState(0);

    const nameRef = useRef();
    const emailRef = useRef();
    const mobileRef = useRef();
    const addressRef = useRef();
    const cityRef = useRef();

    useEffect(() => {
        setTotal(precioTotal());
      }, [precioTotal]);

    const finalizarCompra = () => {
        const db = getFirestore();
        const orders = db.collection("orders");
    
        const miOrden = {
          buyer: {
            name: nameRef.current.value,
            mobile: mobileRef.current.value,
            email: emailRef.current.value,
            address: addressRef.current.value,
            city: cityRef.current.value,
          },
          items: cart,
          total: total,
          date: firebase.firestore.Timestamp.fromDate(new Date()),
        };
    
        orders
          .add(miOrden)
          .then(({ id, nombre }) => {
            console.log("orden ingresada: " + id);
            setOrderId(id);
            
          })
          .catch((err) => {
            console.log(err);
          });
          
         
         
         
      };


    return(

        <div>
           
        <div className="formularioCompra">

            <div className="datosPersonales"> 
            <h2>Complete el formulario para continuar</h2>

            <input
              type="text"
              name="name"
              ref={nameRef}
              placeholder="Nombre y Apellidos"
              className="i"
              required="required"
            />

            <input 
              type="number"
              name="mobile"
              ref={mobileRef}
              placeholder="Número Celular"
              className=""
              required="required"
            />

            <input 
              type="email"
              name="email"
              ref={emailRef}
              placeholder="Email"
              className=""
              required="required"
            />
            <input 
              type="text"
              name="adress"
              ref={addressRef}
              placeholder="Dirección"
              className=""
              required="required"
            />

            <input 
              type="text"
              name="Ciudad"
              ref={cityRef}
              placeholder="Ciudad"
              className=""
              required="required"
            />
            
            </div>
            <button onClick={() => finalizarCompra()} className="botonComprar">
              Comprar
            </button>
            </div>
         
            

            <div className="compraExitosa"> 
            <h2>Felicidades su compra fue exitosa, su número de orden es: {orderId}</h2>
            
            </div>
            </div>
          
    )
}


export default TerminarCompra;