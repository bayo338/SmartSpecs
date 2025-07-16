// import React from 'react';
// import Footer from '../components/Footer';
import logo from '../assets/svg.png';

const About = () => {
  return (
    <section className="bg-white text-[#0a1a3c] px-6 py-16 md:px-20 lg:px-40">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center text-[#0a1a3c]">
          About SmartSpecs
        </h1>
        <p className="text-lg text-gray-700 mb-8 text-center">
          Revolutionizing the way you see the world — literally and digitally.
        </p>

        <div className="bg-[#f1f5f9] p-6 md:p-10 rounded-2xl shadow-lg space-y-6">
          <p className="text-base md:text-lg text-gray-800 leading-relaxed">
            At <span className="font-semibold text-[#0a1a3c]">SmartSpecs</span>, we're on a mission to blend vision and innovation. Our AI-powered smart glasses help you do more than just see — you can take calls, listen to music, and protect your eyes from UV rays, all while staying effortlessly stylish.
          </p>

          <p className="text-base md:text-lg text-gray-800 leading-relaxed">
            Designed for the bold and the curious, SmartSpecs is perfect for students, professionals, and tech lovers who want to stay connected on the go. Whether you're on campus, commuting, or working remotely, SmartSpecs gives you the freedom to live hands-free.
          </p>

          <p className="text-base md:text-lg text-gray-800 leading-relaxed">
            Built with love, powered by AI, and crafted for comfort — SmartSpecs is proudly made for everyone, and we're excited to share our vision with you.
          </p>
        </div>

        <div className="mt-12 flex justify-center">
          <img
            src={logo}
            alt="SmartSpecs logo"
            className="h-16 md:h-20 object-contain"
          />
        </div>        
      </div>      
    </section>
    
  );
};

export default About;
