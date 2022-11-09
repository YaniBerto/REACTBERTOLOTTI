import cart from '../imagenes/shoppingCart.png'

const CartWidget=()=>{
    return(
        <button>
<img className="cart" src= {cart} alt="carrito" />
</button>
);
};

export default CartWidget;