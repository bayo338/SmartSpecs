import React from 'react';
import { Facebook, Instagram, Twitter, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-blue-950 text-white py-10 px-6 md:px-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Branding + Brief */}
        <div>
          <Link to="/" className="inline-block mb-3">
            <img
              src={logo} // Replace with your logo image path
              alt="SmartSpecs Logo"
              className="h-10 w-auto object-contain"
            />
          </Link>
          <p className="text-gray-300 text-sm">
            SmartSpecs brings AI to your vision. Stylish, intelligent glasses designed for everyday brilliance.
          </p>
        </div>


        {/* Quick Links */}
        <div>
          <h4 className="font-semibold text-lg mb-3 text-white">Quick Links</h4>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/about" className="hover:text-white">About Us</Link></li>
            <li><Link to="/order" className="hover:text-white">Order</Link></li>
            <li><Link to="/faq" className="hover:text-white">FAQ</Link></li>
            <li><Link to="/privacy-policy" className="hover:text-white">Privacy Policy</Link></li>
            <li><Link to="/terms-and-conditions" className="hover:text-white">Terms & Conditions</Link></li>
          </ul>
        </div>

        {/* Contact & Socials */}
        <div>
          <h4 className="font-semibold text-lg mb-3 text-white">Contact</h4>
          <p className="text-gray-300 text-sm mb-2">📍 Oyo, Nigeria</p>
          <p className="text-gray-300 text-sm mb-4">📧 wade3@elizabeth-liz.com</p>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <Facebook size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <Twitter size={20} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <Instagram size={20} />
            </a>
            <a href="mailto:wade3@elizabeth-liz.com" className="hover:text-white">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} SmartSpecs. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
