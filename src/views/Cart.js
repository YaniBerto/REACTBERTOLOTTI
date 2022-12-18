import { useContext } from "react";
import { Layout } from "../componentes/Layout";
import { CartContext } from "../context/CartContext";
import {Link} from 'react-router-dom'

const CartView = () => {
    const{productsAdded, removeItem, clear} = useContext(CartContext)
    console.log('carrito',productsAdded)
    return(
        <Layout>
           {
            productsAdded.length === 0 
            ? <div>
                <p>Tu carrito esta vacio!</p>
                <Link to='/'>Ir a comprar!</Link>
            </div>
            :<div>
                <h1>Tu Carrito</h1>
                <div>
                    {productsAdded.map((item)=>{
                        return(
                            <div style={{display:'flex'}} key={item.item.id}>
                                <img src={item.item.img} width="400" height="400" alt={item.item.descripcion}/>
                                <p>{item.item.descripcion}</p>
                                <button className = "btn btn-secondary" onClick={()=> removeItem(item.item.id)}>Borrar Articulo</button>
                            </div>
                        )
                    })}
                <button onClick={clear}>Vaciar carrito</button>
                <button>Terminar Compra</button>
                </div>
            </div>
           }
        </Layout>
    );
};

export default CartView;