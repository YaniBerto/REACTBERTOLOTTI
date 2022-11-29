import React from 'react';
import ItemCount from './itemCount';
import '../App.css';

const ItemDetail = ({item})=> {
    return (
        <div>
            <div>{item.Descripcion}</div>
            <img src={item.img}alt="Bijouterie"/>
            <ItemCount/>
            
        </div>
    );
};

export default ItemDetail;