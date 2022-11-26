import { useEffect, useState } from "react";

import ItemDetail from "./ItemDetail";

import {items} from "../mocks/item.mock";  
import { useParams } from "react-router-dom";


const ItemDetailContainer = ()=>{
    const [item,setItem]= useState(null);
    
    const {id} = useParams();

    useEffect(()=>{
        new Promise((resolve)=>
        setTimeout(()=>{
            const itemFiltrado = items.find((item)=>item.id === id);
            resolve(itemFiltrado);
        },1000)
        ).then((data)=>setItem(data));
    }, [id]);
    if (!item){
        return<p>Cargando...</p>;
    }
    return <ItemDetail item={item}/>;
};

export default ItemDetailContainer;