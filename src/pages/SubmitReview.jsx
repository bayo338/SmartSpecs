import { useState } from 'react';
import axios from 'axios';

const SubmitReview = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    rating: 5,
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/reviews', form); // Replace with your backend endpoint
      setSubmitted(true);
    } catch (error) {
      console.error('Error submitting review:', error);
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#0a1a3c] flex items-center justify-center p-4">
      <div className="w-full max-w-lg bg-white shadow-xl rounded-2xl p-6">
        {submitted ? (
          <div className="text-center space-y-3">
            <h2 className="text-2xl font-bold text-[#0a1a3c]">🎉 Thank you!</h2>
            <p className="text-gray-600">
              Your review helps us grow and serve you better.
            </p>
          </div>
        ) : (
          <>
            <h2 className="text-3xl font-bold mb-2 text-center text-[#0a1a3c]">Leave a Review</h2>
            <p className="text-sm text-center text-gray-600 mb-6">
              We’d love to hear your feedback about your recent purchase!
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0a1a3c]"
              />

              <input
                type="email"
                name="email"
                placeholder="Email used for order"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0a1a3c]"
              />

              <div className="flex items-center gap-2">
                <label className="text-sm">Rating:</label>
                <select
                  name="rating"
                  value={form.rating}
                  onChange={handleChange}
                  className="border border-gray-300 px-2 py-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0a1a3c]"
                >
                  {[5, 4, 3, 2, 1].map((star) => (
                    <option key={star} value={star}>
                      {star} Star{star > 1 && 's'}
                    </option>
                  ))}
                </select>
              </div>

              <textarea
                name="message"
                rows="4"
                placeholder="Write your review..."
                value={form.message}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0a1a3c]"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-[#0a1a3c] text-white py-2 rounded-lg hover:bg-blue-900 transition duration-200"
              >
                Submit Review
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default SubmitReview;
