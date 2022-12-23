import cart from "./shoppingCart.png"
import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from 'react-router-dom';


const CartWidget = () => {
    const { productsAdded } = useContext(CartContext);
    const count = productsAdded.length;

    return (
        <div>
            <Link to="/Cart">    
        <img className="cart" src={cart} alt=""/>
                {' '} 
                {count > 0 && (
                <span className="sticky-top absolute">
                    {count}
                </span>
                )}
            </Link>    
        </div>
    );
}

export default CartWidget;