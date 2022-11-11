import { useState } from "react";
import ItemList from "./ItemList";


  const articulos = [
        {
          id: "1",
          img: "../imagenes/colgante_fases_luna.jpg",
          Descripcion: "Colgante Lunas",
          Precio: "2500",},
        {
          id: "2",
          img: "../imagenes/aro_flor_violeta_claro.jpg",
          Descripcion: "Aro Flor Violeta",
          Precio: "1500",
        },
  ];

const ItemListContainer = ({greeting})=>{

  const [articles, setArticles] = useState([]);

      const listaArticulos = new Promise((resolve)=>
      setTimeout(() => {
        resolve(articulos);
      }, 2000)
      );

      listaArticulos.then((data) =>setArticles(data));
    console.log(articles)
  return(
    <div>
      <h2>{greeting}</h2>
      <ItemList />
    </div>
  );
};

    
export default ItemListContainer;