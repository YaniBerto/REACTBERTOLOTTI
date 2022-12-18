import cart from "./shoppingCart.png"
import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from 'react-router-dom';


const CartWidget = () => {
    const { productsAdded } = useContext(CartContext);
    const count = productsAdded.length;

    return (
        <div>
            <Link to="/Cart" className="relative">    
                <button>
                        <img src={cart} alt=""/>
                </button>{' '} 
                {count > 0 && (
                <span className="absolute w-4 h-4 bottom-0 -right-2 rounded-full flex justify-center items-center bg-white/70">
                    {count}
                </span>
                )}
            </Link>    
        </div>
    );
}

export default CartWidget;