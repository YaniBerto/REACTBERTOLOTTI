import cart from "./shoppingCart.png"
import React, { useContext } from "react";
import { Context } from "../context/cartContext";


export const CartWidget = ()=> {
    const { qty } = useContext(Context);
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