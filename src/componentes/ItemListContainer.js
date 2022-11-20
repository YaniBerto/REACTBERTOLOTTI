import { useState, useEffect } from "react";
import {useParams} from "react-router-dom"
import ItemList from "./ItemList";
import {item} from "../mocks/item.mock";

const ItemListContainer=()=>{
  const {Category}= useParams();
  const[articulos, setArticulos]= useState([]);

  useEffect(()=>{
    new Promise((resolve)=>
    setTimeout(()=>{
      resolve(item);}, 2000)
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
    return <p>loading...</p>;
  }
  return(
    <div>
      <ItemList/>
    </div>
  );
} ;

    
export default ItemListContainer;