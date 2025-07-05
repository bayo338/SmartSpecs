import React, { useEffect, useState } from 'react';

const Floating = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Trigger animation after mount
    const timer = setTimeout(() => setAnimate(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <a
      href="https://wa.me/2348038650953"
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg z-50 transition duration-300 ease-in-out ${
        animate ? 'animate-bounce' : 'opacity-0'
      } hover:animate-pulse`}
      aria-label="Chat on WhatsApp"
      title="Chat with us on WhatsApp"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        fill="currentColor"
        className="bi bi-whatsapp"
        viewBox="0 0 16 16"
      >
        <path d="M13.601 2.326a7.897 7.897 0 0 0-5.63-2.324C3.54.002 0 3.54 0 7.908c0 1.397.36 2.77 1.048 3.972L.028 16l4.208-1.103a7.861 7.861 0 0 0 3.765.958h.003c4.368 0 7.906-3.538 7.906-7.905a7.89 7.89 0 0 0-2.309-5.624zM8.004 14.6a6.578 6.578 0 0 1-3.35-.92l-.24-.144-2.494.653.666-2.43-.157-.25a6.556 6.556 0 0 1-.998-3.487c0-3.632 2.958-6.59 6.592-6.59a6.56 6.56 0 0 1 4.676 1.936 6.563 6.563 0 0 1 1.932 4.654c0 3.633-2.957 6.59-6.59 6.59z" />
        <path d="M11.603 9.63c-.2-.1-1.176-.578-1.36-.644-.182-.068-.314-.1-.446.1-.132.2-.513.644-.63.776-.115.132-.232.15-.432.05-.2-.1-.843-.31-1.605-.99-.593-.53-.994-1.177-1.11-1.377-.116-.2-.012-.307.087-.406.09-.09.2-.232.3-.35.1-.116.132-.2.2-.332.067-.133.033-.25-.017-.35-.05-.1-.445-1.076-.61-1.475-.16-.385-.323-.332-.445-.338l-.382-.007a.77.77 0 0 0-.557.26c-.192.207-.753.735-.753 1.79s.772 2.077.88 2.222c.107.133 1.52 2.31 3.69 3.24.516.223.918.355 1.232.455.518.165.99.142 1.362.086.416-.062 1.176-.48 1.34-.944.165-.466.165-.866.116-.95-.048-.084-.182-.133-.38-.233z" />
      </svg>
    </a>
  );
};

export default Floating;
