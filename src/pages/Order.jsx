import React, { useEffect, useState } from 'react';
import { ShoppingCart, Trash2 } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';


const Order = () => {
  const { cart, removeFromCart, clearCart } = useCart();
  const location = useLocation();
  const navigate = useNavigate();

  // useEffect(() => {
  //   const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
  //   setCart(storedCart);
  //   console.log('Cart loaded:', storedCart);
  // }, [location]);

  // const removeFromCart = (id) => {
  //   const updatedCart = cart.filter((item) => item.id !== id);
  //   setCart(updatedCart);
  //   localStorage.setItem('cart', JSON.stringify(updatedCart));
  // };

  // const clearCart = () => {
  //   setCart([]);
  //   localStorage.removeItem('cart');
  // };

  const getTotal = () =>
    cart.reduce(
      (total, item) =>
        total + item.quantity * parseInt(item.price.replace(/[₦,]/g, '')),
      0
    );

  if (cart.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white text-center px-4">
        <div>
          <ShoppingCart size={40} className="text-blue-900 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-blue-900 mb-2">Your cart is empty</h2>
          <Link
            to="/#products"
            className="text-sm text-white bg-blue-900 px-5 py-2 rounded-xl hover:bg-blue-800 transition"
          >
            Go to Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <section className="bg-white min-h-screen px-4 py-16">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-8 text-center">
          🛒 Your Order Summary
        </h1>

        <div className="grid gap-6">
          {cart.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-4 bg-silver-100 border border-silver-300 rounded-xl p-4 shadow-sm"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 object-cover rounded-xl border"
              />
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-blue-900">
                  {item.name}
                </h3>
                <p className="text-sm text-gray-700">
                  Quantity: {item.quantity}
                </p>
                <p className="text-sm font-medium text-orange-600">
                  ₦
                  {(item.quantity *
                    parseInt(item.price.replace(/[₦,]/g, ''))).toLocaleString()}
                </p>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 hover:text-red-600"
              >
                <Trash2 size={20} />
              </button>
            </div>
          ))}
        </div>

        {/* Total and Proceed to Payment */}
        <div className="mt-10 text-center">
          <p className="text-xl font-semibold text-blue-900 mb-4">
            Total: ₦{getTotal().toLocaleString()}
          </p>

          <button
            onClick={() => navigate('/payment')}
            className="inline-block bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-700 transition font-semibold"
          >
            Order Now
          </button>

          <div className="mt-4">
            <button
              onClick={clearCart}
              className="text-sm text-red-500 hover:text-red-600"
            >
              Clear Cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Order;
