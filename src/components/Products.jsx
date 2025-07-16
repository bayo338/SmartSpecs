// import React from 'react';
import { Link } from 'react-router-dom';
import product1 from '../assets/product1.jpg';
import product2 from '../assets/product2.jpg';

const products = [
  {
    id: 1,
    name: 'SmartSpecs Classic',
    price: '₦25,000',
    feature: 'Call, UV filter, music',
    image: product1,
  },
  {
    id: 2,
    name: 'SmartSpecs Pro',
    price: '₦35,000',
    feature: 'All features + stronger build',
    image: product2,
  },
];

const Products = () => {
  return (
    <section id='products' className="bg-white py-16 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-10">
          Pick Your SmartSpecs
        </h2>

        {/* Products */}
        <div className="grid sm:grid-cols-2 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-md border border-silver-200 rounded-2xl overflow-hidden hover:shadow-lg transition duration-300"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-80 object-fill rounded-t-lg"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold text-blue-900 mb-1">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-700 mb-2">{product.feature}</p>
                <p className="text-orange-600 font-bold text-xl mb-4">{product.price}</p>

                <Link
                  to={`/product/${product.id}`}
                  className="inline-block bg-blue-900 text-white px-4 py-2 rounded-xl text-sm hover:bg-blue-800 transition"
                >
              Order Now
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Limited Offer Banner */}
        <div className="mt-12 flex justify-center">
          <div className="w-full bg-yellow-300 text-blue-900 font-semibold px-6 py-3 rounded-xl text-center text-sm md:text-base animate-pulse shadow-md">Limited Offer: ₦2,000 off today only!</div>

        </div>
      </div>
    </section>
  );
};

export default Products;
