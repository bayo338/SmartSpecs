import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import testifier1 from '../assets/testifier1.jpg';
import testifier2 from '../assets/testifier2.jpg';
import testifier3 from '../assets/testifier3.jpg';

const testimonials = [
  {
    name: 'Tolu A.',
    image: testifier1,
    text: 'SmartSpecs changed the way I take calls while driving. Super convenient and stylish!',
    location: 'Lagos, Nigeria',
    rating: 5,
  },
  {
    name: 'Chinedu M.',
    image: testifier2,
    text: 'I was skeptical at first, but the audio quality and battery life blew me away.',
    location: 'Abuja, Nigeria',
    rating: 4,
  },
  {
    name: 'Aisha K.',
    image: testifier3,
    text: 'The Pro version helps with my daily screen time. My eyes feel more relaxed. Worth every naira!',
    location: 'Kano, Nigeria',
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-8" id="reviews">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">What Our Customers Are Saying</h2>
        <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
          Join hundreds of satisfied customers who are already enjoying hands-free convenience and sleek design with SmartSpecs.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.2 }}
              className="bg-gray-50 p-6 rounded-2xl shadow-md hover:shadow-lg transition-all"
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-20 h-20 mx-auto rounded-full border-4 border-blue-900 object-cover mb-4"
              />

              <div className="flex gap-1 mb-2 justify-center text-orange-500">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>

              <p className="text-gray-700 italic mb-4">“{testimonial.text}”</p>

              <h4 className="font-semibold text-blue-900">{testimonial.name}</h4>
              <p className="text-sm text-gray-500">{testimonial.location}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
