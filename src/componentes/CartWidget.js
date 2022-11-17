import cart from "./shoppingCart.png"

const CartWidget=()=>{
    return(
        <button>
<img className="cart" src= {cart} alt="carrito" />
</button>
);
};

export default CartWidget;