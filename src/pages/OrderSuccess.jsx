import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

const OrderSuccess = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-6 py-10 text-center">
      <CheckCircle size={64} className="text-green-500 mb-6" />
      <h1 className="text-2xl font-bold text-[#0a1a3c]">
        Order Placed Successfully!
      </h1>
      <p className="mt-3 text-gray-600 max-w-md">
        Thank you for choosing <span className="font-semibold">SmartSpecs</span>. 
        We’ll be in touch shortly to confirm your delivery details via WhatsApp.
      </p>

      {/* CTA to Review Page */}
      <div className="mt-8">
        <h3 className="text-lg font-medium text-[#0a1a3c]">
          🎉 Enjoyed your SmartSpecs?
        </h3>
        <p className="text-gray-500 mt-1">Leave a quick review – it only takes 30 seconds!</p>
        <Link
          to="/submit-review"
          className="inline-block mt-4 px-6 py-2 bg-[#0a1a3c] text-white rounded-lg hover:bg-blue-900 transition"
        >
          Leave a Review
        </Link>
      </div>

      {/* Go Home */}
      <Link
        to="/"
        className="mt-8 text-[#0a1a3c] font-medium underline hover:text-blue-900 transition"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default OrderSuccess;
