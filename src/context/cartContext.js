import { createContext, useEffect, useState } from "react";

export const CartContext = createContext([]);
export const CartContextProvider = ({ children }) => {
  const [productsAdded, setProductsAdded] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    const amount = productsAdded
      .map((product) => parseInt(product.item.precio) * product.quantityAdded)
      .reduce((partialSum, a) => partialSum + a, 0);
    setTotalAmount(amount);

  }, [productsAdded]);
  console.log(totalAmount)
  function addItem(item, quantity) {
    const isAlreadyAdded = IsInCart(item.id);
    if (isAlreadyAdded) {
      setProductsAdded((prevState) =>
        prevState.map((productAdded) =>
          productAdded.item.id === item.id
            ? {
                ...productAdded,
                quantityAdded: productAdded.quantityAdded + quantity,
              }
            : productAdded
        )
      );
    } else {
      setProductsAdded((prevState) =>
        prevState.concat({ item, quantityAdded: quantity })
      );
    }
  }

  function removeItem(itemId) {
    setProductsAdded((prevState) =>
      prevState.filter((product) => product.item.id !== itemId)
    );
  }

  function clear() {
    setProductsAdded([]);
    setTotalAmount(0);
  }

  function IsInCart(itemId) {
    return Boolean(productsAdded.find((product) => product.item.id === itemId));
  }

  return (
    <CartContext.Provider
      value={{
        addItem,
        removeItem,
        clear,
        IsInCart,
        productsAdded,
        totalAmount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};