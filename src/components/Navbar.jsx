// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../store';

const Navbar = () => {
  const { cart } = useCart();

  return (
    <nav className="bg-blue-600 p-4 shadow-lg overflow-hidden ">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-black text-lg font-semibold px-3 py-1 bg-white rounded-md hover:bg-green-400">E-C Store</Link>
        <Link to="/cart" className="flex items-center text-white text-lg">
          <span className="relative bg-white text-black px-3 py-1  rounded-md hover:bg-green-400 transition duration-300 text-center">Cart<span className="absolute top-0 -mt-2 -mr-3 right-0 bg-red-600 text-white rounded-full w-6 h-6 text-center text-sm">{cart.length} </span></span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
