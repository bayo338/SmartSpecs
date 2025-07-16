import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';


const Payment = () => {
  const { cart, setCart } = useCart(); 
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const navigate = useNavigate();
  

//   useEffect(() => {
//     const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
//     setCart(storedCart);
//   }, []);

  const getTotal = () =>
    cart.reduce(
      (total, item) =>
        total + item.quantity * parseInt(item.price.replace(/[₦,]/g, '')),
      0
    );

  const whatsappMessage = encodeURIComponent(
    `Hello, I would like to order:\n\n${cart
      .map(
        (item) =>
          `• ${item.name} (₦${item.price}) x ${item.quantity}`
      )
      .join('\n')}\n\nTotal: ₦${getTotal().toLocaleString()}\n\nCustomer Name: ${name}\nPhone: ${phone}`
  );

  const handlePay = () => {
    if (!name || !phone) {
      alert('Please enter your name and phone number.');
      return;
    }


    // Redirect to WhatsApp with message
    window.open(`https://wa.me/2348038650953?text=${whatsappMessage}`, '_blank');

    localStorage.removeItem('cart');
    setCart([]); // Also update local state so UI reflects immediately

    // Navigate to success page
    navigate('/order-success');
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white text-center px-4">
        <div>
          <ShoppingCart size={40} className="text-blue-900 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-blue-900 mb-2">Your cart is empty</h2>
          <button
            onClick={() => navigate('/')}
            className="text-sm text-white bg-blue-900 px-5 py-2 rounded-xl hover:bg-blue-800 transition"
          >
            Go to Products
          </button>
        </div>
      </div>
    );
  }

  return (
    <section className="bg-white min-h-screen px-4 py-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-8 text-center">
          Payment Details
        </h1>

        <div className="bg-silver-100 rounded-xl p-6 border border-silver-300 shadow-sm mb-6">
          <h2 className="text-xl font-semibold text-blue-900 mb-4">Order Summary</h2>
          <ul className="space-y-3">
            {cart.map((item, idx) => (
              <li key={idx} className="text-gray-800 text-sm">
                • {item.name} × {item.quantity} — ₦
                {(item.quantity *
                  parseInt(item.price.replace(/[₦,]/g, ''))).toLocaleString()}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-lg font-bold text-blue-900">
            Total: ₦{getTotal().toLocaleString()}
          </p>
        </div>

        <div className="bg-silver-100 rounded-xl p-6 border border-silver-300 shadow-sm mb-6">
          <h2 className="text-xl font-semibold text-blue-900 mb-4">Customer Information</h2>
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full mb-4 p-3 rounded-lg border border-gray-300 focus:outline-blue-900"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-blue-900"
          />
        </div>

        <div className="text-center">
          <button
            onClick={handlePay}
            className="bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-700 transition font-semibold w-full md:w-auto"
          >
            Pay Now via WhatsApp
          </button>
          <p className="text-sm text-gray-500 mt-2">
            You’ll be redirected to WhatsApp to complete your order
          </p>

          <button
            onClick={() => navigate('/order')}
            className="mt-6 inline-block text-blue-900 underline hover:text-blue-700 text-sm"
          >
            ← Back to Cart
          </button>
        </div>
      </div>
    </section>
  );
};

export default Payment;
