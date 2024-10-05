// src/pages/Cart.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../store';
import CartItem from '../components/CartItem';

const Cart = () => {
  const { cart, totalPrice, discountPrice, incrementQuantity, decrementQuantity, removeFromCart } = useCart();

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
      
      {cart.length === 0 ? (
        <div className="text-center">
          <p className="text-lg mb-4">Your cart is empty</p>
          <Link
            to="/"
            className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
          >
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Cart Items */}
          <div className="space-y-4">
            {cart.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                incrementQuantity={incrementQuantity}
                decrementQuantity={decrementQuantity}
                removeFromCart={removeFromCart}
              />
            ))}
          </div>
          
          {/* Cart Summary */}
          <div className="p-4 bg-gray-100 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Cart Summary</h2>

            {/* Display original price with strikethrough */}
            <p className="text-lg">
              Original Price: <span className="line-through text-red-500">${totalPrice.toFixed(2)}</span>
            </p>
            
            {/* Display discounted price */}
            <p className="text-lg text-green-600 font-bold">
              Discounted Price (10% off): ${discountPrice.toFixed(2)}
            </p>
            
            {/* Optional: Additional summary info, such as item count */}
            <p className="text-gray-600 mt-4">
              You saved ${ (totalPrice - discountPrice).toFixed(2) } with this discount!
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
