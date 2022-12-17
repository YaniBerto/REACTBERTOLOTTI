import { useState, useEffect } from "react";
import {useParams} from "react-router-dom"
import ItemList from "./ItemList";
import {} from "../mocks/item.mock";
import {collection, doc, getDoc, getDocs, getFirestore} from "firebase/firestore";


const ItemListContainer=()=>{
  const {categoryid}= useParams();
  const[articulos, setArticulos]= useState([]);

useEffect(()=>{
  const db = getFirestore();
  const queryRef = collection(db, 'items');
  getDocs(queryRef).then((snapshot)=>{
    const articulos = snapshot.docs.map((doc)=>({id: doc.id,
      ...doc.data(),
    }));
      setArticulos(articulos);
      console.log(articulos);
  });
},[]);

//useEffect(()=>{
  //  new Promise((resolve)=>
    //setTimeout(()=>{
      //resolve();}, 1000)
    //).then((data)=>{
      //if (categoryid){
        //const Categories = data.filter(
          //(articulos)=>articulos.Category === categoryid
        //);
        //setArticulos(Categories);
      //}else{
        //setArticulos(data);
      //}
    //});
  //},[categoryid]);

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