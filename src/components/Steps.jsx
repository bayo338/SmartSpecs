import React from 'react';
import { Phone, ShoppingCart, MessageCircle, Smile } from 'lucide-react';

const steps = [
  {
    icon: <ShoppingCart className="text-orange-500 w-6 h-6" />,
    title: '1. Browse & Select',
    description: 'Go through our products, view the details, and select the one that suits your style.',
  },
  {
    icon: <MessageCircle className="text-orange-500 w-6 h-6" />,
    title: '2. Add to Cart',
    description: 'Click the 🛒 Add to Cart button on the product page with your preferred quantity.',
  },
  {
    icon: <Phone className="text-orange-500 w-6 h-6" />,
    title: '3. Proceed to Order',
    description: 'Navigate to the Order page to confirm your items and click "Order via WhatsApp".',
  },
  {
    icon: <Smile className="text-orange-500 w-6 h-6" />,
    title: '4. Sit Back & Relax',
    description: 'We’ll receive your order and contact you quickly to arrange delivery to your doorstep.',
  },
];

const HowToOrder = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-8" id="how-to-order">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">How to Order</h2>
        <p className="text-gray-600 max-w-xl mx-auto mb-12">
          Ordering your SmartSpecs is super simple. Just follow these quick steps:
        </p>

        <div className="grid gap-8 md:grid-cols-2">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex items-start gap-4 bg-gray-50 p-5 rounded-2xl shadow-md hover:shadow-lg transition"
            >
              <div className="p-3 rounded-full bg-white shadow-sm">{step.icon}</div>
              <div className="text-left">
                <h4 className="text-lg font-semibold text-blue-900 mb-1">{step.title}</h4>
                <p className="text-sm text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Payment Note */}
        <p className="mt-10 text-sm text-gray-600 italic border-l-4 border-orange-500 pl-4 max-w-lg mx-auto">
          <strong>Note:</strong> Pay online or on delivery <span className="font-semibold text-blue-900">(Lagos & Abuja only)</span>.
        </p>
      </div>
    </section>
  );
};

export default HowToOrder;
