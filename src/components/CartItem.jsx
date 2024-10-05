import React from 'react';
import { useCart } from '../store';

const CartItem = ({ item }) => {
  const { incrementQuantity, decrementQuantity, removeFromCart } = useCart();

  return (
    <div className="bg-white p-4 flex items-center justify-between rounded shadow-md">
      <div className="flex items-center space-x-4">
        <img src={item.image} alt={item.title} className="h-20 w-20 object-contain" />
        <div>
          <h3 className="font-bold">{item.title}</h3>
          <p>${item.price}</p>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <button onClick={() => decrementQuantity(item.id)}>-</button>
        <p>{item.quantity}</p>
        <button onClick={() => incrementQuantity(item.id)}>+</button>
        <button className="text-red-500" onClick={() => removeFromCart(item.id)}>Remove</button>
      </div>
    </div>
  );
};

export default CartItem;
