import { useState, useEffect } from "react";
import { CartContext } from "./CartContext";

export const CartProvider = ({children}) => {
  const [cart, setCart] = useState(() => {
    const stored = localStorage.getItem("cart");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const updateCart = (item) => {
    setCart((prev) => {
      return [...prev, item]
    })
  }

  const updateQuantity = (itemId, updatedQ) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === itemId
          ? { ...item, quantity: updatedQ }
          : item
      )
    );
  };

  const subtotal = cart.length > 0 ? cart.reduce((acc, item) => acc + item.price * item.quantity, 0) : 0;
  const tax = subtotal * 0.1;
  const shipping = 10.0;
  const total = subtotal + tax + shipping;

  return (<CartContext.Provider
      value={{
        cart,
        setCart,
        updateQuantity,
        updateCart,
        subtotal,
        tax,
        shipping,
        total,
      }}
    >
      {children}
    </CartContext.Provider>);
};
