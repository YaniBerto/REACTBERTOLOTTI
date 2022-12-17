import cart from "./shoppingCart.png"
import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";


export const CartWidget = ()=> {
    const { qty } = useContext(CartContext);
    return(
        <>
        <p>{qty}</p>
        <button>
<img className="cart" src= {cart} alt="carrito" />
</button>
</>

);
};

export default CartWidget;