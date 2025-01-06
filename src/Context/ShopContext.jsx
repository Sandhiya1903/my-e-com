import React, { createContext, useState } from "react";
import all_product from "../Components/Assets/all_product";

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);

      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });

    setTotalPrice((prevTotal) => prevTotal + product.new_price);
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => {
      const productToRemove = prevCart.find((item) => item.id === productId);

      if (productToRemove) {
        setTotalPrice(
          (prevTotal) =>
            prevTotal - productToRemove.new_price * productToRemove.quantity
        );
      }

      return prevCart.filter((item) => item.id !== productId);
    });
  };

  const contextValue = {
    all_product,
    cart,
    totalPrice,
    addToCart,
    removeFromCart,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
