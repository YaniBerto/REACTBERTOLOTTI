import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { ItemCount } from "./itemCount";

const ItemDetail = ({ item }) => {
  const { addItem, IsInCart } = useContext(CartContext);
  const navigate = useNavigate();
  const [count, setCount] = useState(1);
  const [currentStock, setCurrentStock] = useState(item.stock);
  const maxQuantity = currentStock;

  function handleCount(type) {
    if (type === "plus" && count < maxQuantity) setCount(count + 1);
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
    <div className="flex w-5/6 bg-white rounded p-10 transition-all shadow hover:shadow-lg">

      <div className="flex justify-center w-1/2">
        <img className="" width="500" height="500"src={item.img} alt={item.name} />
      </div>

      {/* Item description */}
      <div className="flex flex-col justify-center pl-10">
          <p className="mt-4 text-xl">{item.descripcion}</p>
        <span className="mt-4 text-xl">
          Precio: <strong className="text-gray-800">${item.precio}</strong>
        </span>
        {currentStock > 0 && (
          <p className="text-sm">Stock: {currentStock}</p>
        )}

        <div className="flex flex-col flex-1 items-center">
        
          {currentStock > 0 ? (
            <ItemCount count={count} handleCount={handleCount} />
          ) : (
            <span className="text-red-500 mt-10">Sin stock</span>
          )}
          <div className="w-full flex flex-col items-center">
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