import React from 'react';

export default function FAQ() {
  const faqs = [
    {
      question: 'What are SmartSpecs?',
      answer:
        'SmartSpecs are AI-powered glasses designed for Nigerians, offering features like hands-free calling, UV protection, music playback, and more. The Pro model includes a stronger build and all available features.',
    },
    {
      question: 'What is the difference between SmartSpecs Classic and Pro?',
      answer:
        'SmartSpecs Classic offers core features like calling, music, and UV filtering. SmartSpecs Pro includes all Classic features plus a stronger, more durable build—perfect for rugged use.',
    },
    {
      question: 'How do I place an order?',
      answer:
        'Simply navigate to the "Order" page, add your preferred SmartSpecs to the cart, and complete your order via WhatsApp. We’ve made it seamless and secure.',
    },
    {
      question: 'How long does delivery take?',
      answer:
        'Delivery usually takes 2–5 business days depending on your location in Nigeria. We’ll keep you updated every step of the way.',
    },
    {
      question: 'Are there warranty or return options?',
      answer:
        'Yes! All SmartSpecs come with a 30-day warranty for manufacturing defects. If you encounter any issues, contact us through the "Contact" page.',
    },
    {
      question: 'Is SmartSpecs compatible with all phones?',
      answer:
        'Yes, SmartSpecs connect to any Bluetooth-enabled device including Android and iOS smartphones.',
    },
  ];

  return (
    <div className="bg-white text-[#0a1a3c] min-h-screen px-6 py-12 md:py-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          Frequently Asked Questions
        </h1>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-[#f0f0f0] rounded-2xl p-5 shadow-sm hover:shadow-md transition"
            >
              <h2 className="text-xl font-semibold mb-2 text-[#0a1a3c]">
                {faq.question}
              </h2>
              <p className="text-gray-700">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
