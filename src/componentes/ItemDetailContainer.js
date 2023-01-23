import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";

import { useParams } from "react-router-dom";
import { Layout } from "./Layout";
import { collection, doc, getDoc, getFirestore } from "firebase/firestore";
import React from "react";



const ItemDetailContainer = ()=>{
    const [item,setItem]= useState(null);
    const {id} = useParams();

    useEffect(()=>{
        const db= getFirestore()
        const coleccionProd = collection(db, "items")

        const referenciaDoc = doc(coleccionProd, id)
        
        getDoc(referenciaDoc)
        .then((result)=>{
            setItem({
            id:result.id,
            ...result.data()
        })
        })
        .catch((error)=> console.log(error))
        
        }, [id])
            if (!item){
        return<p>Cargando...</p>;
    }
return  <Layout>
            <ItemDetail item={item}/>
        </Layout>;
}

export default ItemDetailContainer;