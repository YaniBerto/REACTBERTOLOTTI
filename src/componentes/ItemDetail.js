import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { ItemCount } from "./itemCount";

const ItemDetail = ({ item }) => {
  const { addItem, IsInCart } = useContext(CartContext);
  const navigate = useNavigate();
  const [count, setCount] = useState(1);
  const [currentStock, setCurrentStock] = useState(item.stock);
  const maxquantity = currentStock;

  function handleCount(type) {
    if (type === "plus" && count < maxquantity) setCount(count + 1);
    if (type === "minus" && count > 1) setCount(count - 1);
  }

  function handleAdd() {
    if (currentStock < count) alert("No hay stock");
    else {
      setCurrentStock(currentStock - count);
      addItem(item, count);
    }
  }

  function handleCheckout() {
    navigate("/Cart");
  }
  return (
    <div className="item">

      <div className="card">
        <img className="" width="500" height="500"src={item.img} alt={item.name} />
      </div>

      
      <div className="containerItemDetail">
          <p className="text-xl">{item.descripcion}</p>
        <span className="mt-4 text-xl">
          Precio: <strong className="text-gray-800">${item.precio}</strong>
        </span>
        {currentStock > 0 && (
          <p className="text-sm">Stock: {currentStock}</p>
        )}

        <div className="containerItemDetail">
        
          {currentStock > 0 ? (
            <ItemCount count={count} handleCount={handleCount} />
          ) : (
            <span>Sin stock</span>
          )}
          <div className="">
            <button
              onClick={handleAdd}
              className="btn btn-secondary"
              disabled={currentStock === 0}
            >
              Agregar al carrito
            </button>
            <button
              disabled={!IsInCart(item.id)}
              onClick={handleCheckout}
              className="btn btn-secondary"
            >
              Finalizar Compra
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ItemDetail;