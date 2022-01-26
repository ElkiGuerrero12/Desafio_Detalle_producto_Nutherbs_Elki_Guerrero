import react, {useState, useEffect} from "react";
import ItemList from "./ItemList";
import ItemDetailContainer from "./ItemDetailContainer";


import "./ItemListContainer.css";

function ItemListContainer() {
  const [llegoPromesa, setLlegoPromesa] = useState(false);

  const [arrayDeProductos, setArrayDeProductos] = useState([]);

  const productosEnStock = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          nombre: "Liber",
          Stock: 5,
          descripcion: "Antiinflamatorio y diurético",
          precio: 69.9,
          img: "./img/Liber.jpg",
          descripcionGeneral: "Liber Prost, producto para la próstata 100% natural ideal para tratar las patologías de esta enfermedad.",
        },
        {
          id: 2,
          nombre: "Algas",
          Stock: 4,
          descripcion: "Adelgazante natural",
          precio: 49.9,
          img: "./img/Algas.jpg",
        },
        {
          id: 3,
          nombre: "Cardo Mariano",
          Stock: 4,
          descripcion: "Suplemento natural",
          precio: 59.9,
          img: "./img/Cardo-Mariano.jpg",
        },
        {
          id: 4,
          nombre: "Noni",
          Stock: 5,
          descripcion: "Suplemento natural",
          precio: 49.9,
          img: "./img/Noni.jpg",
        },
        {
          id: 5,
          nombre: "Caigua",
          Stock: 3,
          descripcion: "Adelgazante natural",
          precio: 49.9,
          img: "./img/Caigua.jpg",
        },
        {
          id: 6,
          nombre: "Ginseng",
          Stock: 8,
          descripcion: "Multivitamíco",
          precio: 49.9,
          img: "./img/Ginseng.jpg",
        },
        {
          id: 7,
          nombre: "Ginko Biloba",
          Stock: 6,
          descripcion: "Suplemento natural",
          precio: 49.9,
          img: "./img/Ginko-biloba.jpg",
        },
        {
          id: 8,
          nombre: "Graviola",
          Stock: 4,
          descripcion: "Antiinflamatorio natural",
          precio: 49.9,
          img: "./img/Graviola.jpg",
        },
      ]);
    }, 2000);
  });

  useEffect(() => {
    productosEnStock
      .then((res) => {
        setLlegoPromesa(true);
        setArrayDeProductos(res);
      })

      .catch((err) => {
        setLlegoPromesa(true);
        console.log(err);
      });
  });

  return (
    <div className="main">
      <h1>Los mejores productos naturales</h1>      

      {llegoPromesa ? (
        <div className="listaProductos">

            <ItemList arrayDeProductos = {arrayDeProductos} />
           

          
        </div>
      ) : (
        <p style={{fontSize:"18px", textAlign:"center"}}>Loading... </p>
      )}

    
    </div>
  );
}

export default ItemListContainer;
