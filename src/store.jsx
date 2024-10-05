// src/store.js
import { createContext, useContext, useReducer, useEffect } from 'react';

// Retrieve cart from localStorage (or initialize it as empty)
const initialCart = JSON.parse(localStorage.getItem('cart')) || [];

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return [...state, { ...action.payload, quantity: 1 }];
    case 'REMOVE_FROM_CART':
      return state.filter((item) => item.id !== action.payload);
    case 'INCREMENT_QUANTITY':
      return state.map((item) =>
        item.id === action.payload ? { ...item, quantity: item.quantity + 1 } : item
      );
    case 'DECREMENT_QUANTITY':
      return state.map((item) =>
        item.id === action.payload && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
      );
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, initialCart);

  // Save cart to localStorage whenever the cart changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => dispatch({ type: 'ADD_TO_CART', payload: product });
  const removeFromCart = (id) => dispatch({ type: 'REMOVE_FROM_CART', payload: id });
  const incrementQuantity = (id) => dispatch({ type: 'INCREMENT_QUANTITY', payload: id });
  const decrementQuantity = (id) => dispatch({ type: 'DECREMENT_QUANTITY', payload: id });

  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const discountPrice = totalPrice * 0.9; // 10% discount

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, incrementQuantity, decrementQuantity, totalPrice, discountPrice }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
