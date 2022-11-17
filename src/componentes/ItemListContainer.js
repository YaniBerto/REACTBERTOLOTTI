import { useState } from "react";
import ItemList from "./ItemList";
import articulos from "../data/articulos";


 

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
      <ItemList articulos={articles} />
    </div>
  );
};

    
export default ItemListContainer;