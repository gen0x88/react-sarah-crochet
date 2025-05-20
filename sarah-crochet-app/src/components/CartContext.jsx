import React from 'react';

export const CartContext = React.createContext({
  cart: [],
  setCart: () => {},
  updateKey: () => {},
  updateCart: () => {},
  subtotal: 0,
  tax: 0,
  shipping: 0,
  total: 0
});
