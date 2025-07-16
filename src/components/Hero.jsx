// import { Link } from 'react-router-dom';
import smartGlassesUser from '../assets/smart-glasses-user.jpg'; // adjust path if needed

export default function Hero() {
  return (
    <section
      className="relative text-white px-6 py-12 md:py-20 overflow-hidden"
      style={{
        backgroundImage: `url(${smartGlassesUser})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay to darken image for contrast */}
      <div className="absolute inset-0 z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        {/* Text Content - left aligned */}
        <div className="md:w-1/2 text-left">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4 text-white">
            SmartSpecs –{' '}
            <span className="text-[#c0c0c0]">See Smarter, Live Better</span>
          </h1>
          <p className="text-slate-200 text-lg md:text-xl mb-6">
            Affordable AI Glasses for Everyone
          </p>
          <a
            // href="https://wa.me/+2348038650953"
            href='#products'
            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-medium px-6 py-3 rounded-full shadow-lg transition"
            // target="_blank"
            rel="noopener noreferrer"
          >
            {/* WhatsApp Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-whatsapp"
              viewBox="0 0 16 16"
            >
              <path d="M13.601 2.326a7.897 7.897 0 0 0-5.63-2.324C3.54.002 0 3.54 0 7.908c0 1.397.36 2.77 1.048 3.972L.028 16l4.208-1.103a7.861 7.861 0 0 0 3.765.958h.003c4.368 0 7.906-3.538 7.906-7.905a7.89 7.89 0 0 0-2.309-5.624zM8.004 14.6a6.578 6.578 0 0 1-3.35-.92l-.24-.144-2.494.653.666-2.43-.157-.25a6.556 6.556 0 0 1-.998-3.487c0-3.632 2.958-6.59 6.592-6.59a6.56 6.56 0 0 1 4.676 1.936 6.563 6.563 0 0 1 1.932 4.654c0 3.633-2.957 6.59-6.59 6.59z" />
              <path d="M11.603 9.63c-.2-.1-1.176-.578-1.36-.644-.182-.068-.314-.1-.446.1-.132.2-.513.644-.63.776-.115.132-.232.15-.432.05-.2-.1-.843-.31-1.605-.99-.593-.53-.994-1.177-1.11-1.377-.116-.2-.012-.307.087-.406.09-.09.2-.232.3-.35.1-.116.132-.2.2-.332.067-.133.033-.25-.017-.35-.05-.1-.445-1.076-.61-1.475-.16-.385-.323-.332-.445-.338l-.382-.007a.77.77 0 0 0-.557.26c-.192.207-.753.735-.753 1.79s.772 2.077.88 2.222c.107.133 1.52 2.31 3.69 3.24.516.223.918.355 1.232.455.518.165.99.142 1.362.086.416-.062 1.176-.48 1.34-.944.165-.466.165-.866.116-.95-.048-.084-.182-.133-.38-.233z" />
            </svg>
            Order Now
          </a>
        </div>

        {/* Empty block for spacing (formerly image div) */}
        <div className="md:w-1/2"></div>
      </div>
    </section>
  );
}
