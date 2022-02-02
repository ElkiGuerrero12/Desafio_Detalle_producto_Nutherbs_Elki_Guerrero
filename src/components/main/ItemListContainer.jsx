import react, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";



import "./ItemListContainer.css";

function ItemListContainer() {
  const [llegoPromesa, setLlegoPromesa] = useState(false);
  const [arrayDeProductos, setArrayDeProductos] = useState([]);
  const { categoryId } = useParams();

  const productosEnStock = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          category:"salud natural",
          nombre: "Liber",
          Stock: 5,
          descripcion: "Antiinflamatorio y diurético",
          precio: 69.9,
          img: "../img/Liber.jpg",
          descripcionGeneral: "Liber Prost, producto para la próstata 100% natural ideal para tratar las patologías de esta enfermedad.",
        },
        {
          id: 2,
          category:"bajar de peso",
          nombre: "Algas",
          Stock: 4,
          descripcion: "Adelgazante natural",
          precio: 49.9,
          img: "../img/Algas.jpg",
          descripcionGeneral:"Algas en cápsulas, Producto 100% natural y efectivo para perder peso, efecto saciante, reductor del apetito"
        },
        {
          id: 3,
          category:"salud natural",
          nombre: "Cardo Mariano",
          Stock: 4,
          descripcion: "Suplemento natural",
          precio: 59.9,
          img: "../img/Cardo-Mariano.jpg",
          descripcionGeneral:"Cardo Mariano en cápsulas, Protección de enfermedades del hígado y de la vesícula biliar"
        },
        {
          id: 4,
          category:"energizantes",
          nombre: "Noni",
          Stock: 5,
          descripcion: "Suplemento natural",
          precio: 49.9,
          img: "../img/Noni.jpg",
          descripcionGeneral:"Noni en cápsulas, estimula y fortalece el sistema inmunológico, regular la función celular y la regeneración de células dañadas"
        },
        {
          id: 5,
          category:"bajar de peso",
          nombre: "Caigua",
          Stock: 3,
          descripcion: "Adelgazante natural",
          precio: 49.9,
          img: "../img/Caigua.jpg",
          descripcionGeneral:"Caigua en cápsulas, Producto 100% natural y efectivo para perder peso, reduce los niveles de azucar y grasa en la sangre"
        },
        {
          id: 6,
          category:"energizantes",
          nombre: "Ginseng",
          Stock: 8,
          descripcion: "Multivitamíco",
          precio: 49.9,
          img: "../img/Ginseng.jpg",
          descripcionGeneral:"Ginseng en cápsulas, Aumenta la sensación general de vitalidad y la capacidad física y psíquica para trabajar"
        },
        {
          id: 7,
          category:"energizantes",
          nombre: "Ginko Biloba",
          Stock: 6,
          descripcion: "Suplemento natural",
          precio: 49.9,
          img: "../img/Ginko-biloba.jpg",
          descripcionGeneral:"Ginkgo Biloba, Previene el envejecimiento prematuro y mejora el rendimiento sexual"
        },
        {
          id: 8,
          category:"salud natural",
          nombre: "Graviola",
          Stock: 4,
          descripcion: "Antiinflamatorio natural",
          precio: 49.9,
          img: "../img/Graviola.jpg",
          descripcionGeneral:"Graviola en cápsulas, antioxidante y inmunoestimulante natural, tiene propiedades antiinflamatorias"
        },
        {
          id: 9,
          category:"salud natural",
          nombre: "Chanca Piedra",
          Stock: 4,
          descripcion: "Antiinflamatorio natural",
          precio: 49.9,
          img: "../img/Chanca-piedra.jpg",
          descripcionGeneral:"Chancapiedra, efectivo disolviendo cáculos renales y de la vesícula, elimina bacterias del tracto urinario"
        },
        {
          id: 10,
          category:"bajar de peso",
          nombre: "Te Verde",
          Stock: 3,
          descripcion: "Adelgazante natural",
          precio: 49.9,
          img: "../img/te-verde.jpg",
          descripcionGeneral:"Té verde seleccionado, Antioxidante natural. Protege el sistema inmunológico y estimula el metabolismo de grasas"
        },
        {
          id: 11,
          category:"bajar de peso",
          nombre: "Lefen",
          Stock: 3,
          descripcion: "Adelgazante natural",
          precio: 49.9,
          img: "../img/Lefen.jpg",
          descripcionGeneral:"Potente Quemador de grasa corporal. Controla el apetito y mejora tu metabolismo. Adelgazante Natural por excelencia"
        },
        {
          id: 12,
          category:"energizantes",
          nombre: "Camu Camu",
          Stock: 3,
          descripcion: "Splemento Natural",
          precio: 49.9,
          img: "../img/Camu-camu.jpg",
          descripcionGeneral:"Camu Camu, 60 veces más vitamina C que la naranja. Fortalece el sistema inmunológico, protege tu cuerpo contra infecciones virales"
        },
      ]);
    }, 2000);
  });

  useEffect(() => {
    productosEnStock
      .then((res) => {
        console.log(res)
        categoryId
        ? setArrayDeProductos( 
          res.filter((item) => item.category == categoryId)
      
        ):
        setArrayDeProductos(res)


       // console.log(nuevoRes)
        //console.log(nuevoRes[0].category)

          //let myProducto = res;
        setLlegoPromesa(true);
        //setArrayDeProductos(nuevoRes);
      })

      .catch((err) => {
        setLlegoPromesa(true);
        console.log(err);
      });
  },[categoryId]);

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
