import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Minus, Plus } from 'lucide-react';
import { useCart } from '../context/CartContext';
import product1 from '../assets/product1.jpg';
import product2 from '../assets/product2.jpg';

const products = {
  1: {
    name: 'SmartSpecs Classic',
    image: product1,
    price: '₦25,000',
    features: [
      'Hands-free calls',
      'UV protection',
      'Bluetooth music playback',
      'Compatible with all smartphones',
      'Lightweight & sleek frame',
    ],
  },
  2: {
    name: 'SmartSpecs Pro',
    image: product2,
    price: '₦35,000',
    features: [
      'All Classic features included',
      'Stronger, premium build',
      'Voice assistant control',
      'Blue light filtering',
      'More immersive audio',
    ],
  },
};

const Product = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const product = products[id];
  const [quantity, setQuantity] = useState(1);
  const [cartMessage, setCartMessage] = useState('');

  if (!product) {
    return (
      <div className="text-center mt-20 text-red-500 font-semibold">
        Product not found.
      </div>
    );
  }

  const handleIncrement = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecrement = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const handleAddToCart = () => {
    addToCart({ ...product, id, quantity });
    setCartMessage(`${quantity} ${quantity > 1 ? 'items' : 'item'} added to cart ✔`);
    setTimeout(() => setCartMessage(''), 3000);
  };

  return (
    <section className="min-h-screen bg-white px-4 py-12 md:py-4" style={{ fontFamily: 'Segoe UI, sans-serif' }}>
      {/* Back Button */}
      <button
        onClick={() => navigate('/')}
        className="flex items-center gap-2 text-sm text-blue-900 hover:text-blue-700 mb-6"
      >
        <ArrowLeft size={18} />
        Back
      </button>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Product Image */}
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-[350px] object-fill rounded-2xl shadow-md"
        />

        {/* Product Info */}
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-3">{product.name}</h1>
          <p className="text-xl text-orange-600 font-semibold mb-4">{product.price}</p>

          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
            {product.features.map((feature, index) => (
              <li key={index} className="leading-relaxed">{feature}</li>
            ))}
          </ul>

          {/* Quantity Selector */}
          <div className="flex items-center gap-4 mb-6">
            <span className="text-gray-700 font-medium">Quantity:</span>
            <div className="flex items-center border border-gray-300 rounded-xl overflow-hidden shadow-sm">
              <button
                onClick={handleDecrement}
                className="px-3 py-2 bg-gray-100 hover:bg-gray-200 text-blue-900"
              >
                <Minus size={16} />
              </button>
              <span className="px-4 py-2 text-blue-900 font-semibold">{quantity}</span>
              <button
                onClick={handleIncrement}
                className="px-3 py-2 bg-gray-100 hover:bg-gray-200 text-blue-900"
              >
                <Plus size={16} />
              </button>
            </div>
          </div>


          <div className="flex flex-col gap-4">
             {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              className="inline-block bg-blue-900 text-white px-5 py-3 rounded-xl hover:bg-blue-800 transition text-sm md:text-base"
            >
               Add {quantity > 1 ? `${quantity} units` : 'to Cart'}
            </button>

            <button
            onClick={() => navigate('/order')}
            className="bg-[#0a1a3c] text-white px-4 py-2 rounded hover:bg-[#102457] transition"
            >
            🛒 Go to Cart
            </button>
          </div>
         

          {/* Cart Message */}
          {cartMessage && (
            <p className="mt-4 text-green-600 font-medium transition-all duration-300 ease-in">
              {cartMessage}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Product;
