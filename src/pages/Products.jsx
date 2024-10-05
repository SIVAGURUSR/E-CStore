// src/pages/Products.jsx
import React, { useEffect, useState } from 'react';
import { useCart } from '../store';

const Products = () => {
  const [products, setProducts] = useState([]);
  const { addToCart, removeFromCart, cart } = useCart();

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const isInCart = (productId) => cart.some((item) => item.id === productId);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8 text-center">Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {products.map((product) => (
          <div key={product.id} className="bg-white p-4 shadow-lg rounded-3xl transform hover:scale-105 transition-transform duration-300">
            <img src={product.image} alt={product.title} className="w-full h-40 object-contain mb-4" />
            <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
            <p className="text-blue-900 mb-2">${product.price}</p>
            <p className="text-sm text-gray-500 mb-4">{product.description.slice(0, 70)}...</p>
            {isInCart(product.id) ? (
              <button
                className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600"
                onClick={() => removeFromCart(product.id)}
              >
                Remove from Cart
              </button>
            ) : (
              <button
                className="bg-green-500 text-white py-2 px-4  rounded-lg hover:bg-green-600"
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
