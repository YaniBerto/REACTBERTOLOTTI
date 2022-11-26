import { useState, useEffect } from "react";
import {useParams} from "react-router-dom"
import ItemList from "./ItemList";
import {items} from "../mocks/item.mock";

const ItemListContainer=()=>{
  const {Category}= useParams();
  const[articulos, setArticulos]= useState([]);

  useEffect(()=>{
    new Promise((resolve)=>
    setTimeout(()=>{
      resolve(items);}, 1000)
    ).then((data)=>{
      if (Category){
        const Categories = data.filter(
          (articulos)=>articulos.Category === Category
        );
        setArticulos(Categories);
      }else{
        setArticulos(data);
      }
    });
  },[Category]);

  if(articulos.length === 0){
    return <p>cargando...</p>;
  }
  return(
    <div>
      <ItemList articulos=
      {articulos}/>
    </div>
  );
} ;

    
export default ItemListContainer;