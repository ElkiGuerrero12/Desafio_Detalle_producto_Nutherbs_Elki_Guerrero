import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemCount from "./ItemCount";
import ItemDetail from "./ItemDetail";


function ItemDetailContainer(){
  const [llegoPromesa, setLlegoPromesa] = useState(false);
  const { itemId } = useParams();
  const [product, setProduct] = useState([]);

  
    
  const productosEnStock = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          nombre: "Liber",
          Stock: 5,
          descripcion: "Antiinflamatorio y diurético",
          precio: 69.9,
          img: "../img/Liber.jpg",
          descripcionGeneral: "Liber Prost, producto para la próstata 100% natural ideal para tratar las patologías de esta enfermedad.",
        },
        {
          id: 2,
          nombre: "Algas",
          Stock: 4,
          descripcion: "Adelgazante natural",
          precio: 49.9,
          img: "../img/Algas.jpg",
          descripcionGeneral:"Algas en cápsulas, Producto 100% natural y efectivo para perder peso, efecto saciante, reductor del apetito"
        },
        {
          id: 3,
          nombre: "Cardo Mariano",
          Stock: 4,
          descripcion: "Suplemento natural",
          precio: 59.9,
          img: "../img/Cardo-Mariano.jpg",
          descripcionGeneral:"Cardo Mariano en cápsulas, Protección de enfermedades del hígado y de la vesícula biliar"
        },
        {
          id: 4,
          nombre: "Noni",
          Stock: 5,
          descripcion: "Suplemento natural",
          precio: 49.9,
          img: "../img/Noni.jpg",
          descripcionGeneral:"Noni en cápsulas, estimula y fortalece el sistema inmunológico, regular la función celular y la regeneración de células dañadas"
        },
        {
          id: 5,
          nombre: "Caigua",
          Stock: 3,
          descripcion: "Adelgazante natural",
          precio: 49.9,
          img: "../img/Caigua.jpg",
          descripcionGeneral:"Caigua en cápsulas, Producto 100% natural y efectivo para perder peso, reduce los niveles de azucar y grasa en la sangre"
        },
        {
          id: 6,
          nombre: "Ginseng",
          Stock: 8,
          descripcion: "Multivitamíco",
          precio: 49.9,
          img: "../img/Ginseng.jpg",
          descripcionGeneral:"Ginseng en cápsulas, Aumenta la sensación general de vitalidad y la capacidad física y psíquica para trabajar"
        },
        {
          id: 7,
          nombre: "Ginko Biloba",
          Stock: 6,
          descripcion: "Suplemento natural",
          precio: 49.9,
          img: "../img/Ginko-biloba.jpg",
          descripcionGeneral:"Ginkgo Biloba, Previene el envejecimiento prematuro y mejora el rendimiento sexual"
        },
        {
          id: 8,
          nombre: "Graviola",
          Stock: 4,
          descripcion: "Antiinflamatorio natural",
          precio: 49.9,
          img: "../img/Graviola.jpg",
          descripcionGeneral:"Graviola en cápsulas, antioxidante y inmunoestimulante natural, tiene propiedades antiinflamatorias"
        },
      ]);
    }, 2000);
  });

  useEffect(() => {
    productosEnStock
      .then((res) => {
        console.log(res)
       let listadoDeProductos = res.filter(item => item.id == itemId);
        console.log(listadoDeProductos)

          let myProducto = listadoDeProductos[0];

        setProduct(myProducto);
        setLlegoPromesa(true);
        
      })

      .catch((err) => {
        setLlegoPromesa(true);
        console.log(err);
      });
  },[itemId]);

  //console.log(product)


    return(

        <>
        {llegoPromesa ? (
        <div >           
            
            <ItemDetail product = {product} />          
 
        </div>
      ) : (
        <p style={{fontSize:"18px", textAlign:"center"}}>Loading... </p>
      )}

  
       
        
        </>



    )
}

export default ItemDetailContainer;