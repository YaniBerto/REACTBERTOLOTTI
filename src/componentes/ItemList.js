import Item from "./Item";
import React from "react";


const ItemList = ({articulos}) => {
    return(
       
        <div className="articulosPagina">
            
            {articulos.map((Articulo) => (
                <Item key = {Articulo.id} articulo = {Articulo}/>

            ))}
        </div> 
        
    );
    };


export default ItemList;