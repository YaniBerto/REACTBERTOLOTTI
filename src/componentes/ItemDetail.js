import React from 'react';
import ItemCount from './itemCount';
import '../App.css';



const ItemDetail = ({item})=> {
    return (
        <div className="detalle">
            <div>{item.Descripcion}</div>
            <img src={item.img}style= {{width: "250px"}}alt="Bijouterie"/>
            <ItemCount Stock={item.Stock}/>
           
        
            
        </div>
    );
};

export default ItemDetail;