import React from 'react';
import { useCart } from '../store';

const ProductCard = ({ product }) => {
  const { cart, addToCart, removeFromCart } = useCart();
  const isInCart = cart.some((item) => item.id === product.id);

  return (
    <div className="bg-white p-4 rounded shadow-md">
      <img src={product.image} alt={product.title} className="h-48 w-full object-contain" />
      <h3 className="mt-2 font-bold">{product.title}</h3>
      <p>${product.price}</p>
      <p>{product.description}</p>
      {isInCart ? (
        <button className="mt-4 bg-red-500 text-white px-4 py-2" onClick={() => removeFromCart(product.id)}>
          Remove from Cart
        </button>
      ) : (
        <button className="mt-4 bg-blue-500 text-white px-4 py-2" onClick={() => addToCart(product)}>
          Add to Cart
        </button>
      )}
    </div>
  );
};

export default ProductCard;
