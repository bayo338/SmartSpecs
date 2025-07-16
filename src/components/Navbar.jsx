import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import {
  ShoppingCart,
  Home,
  Info,
  Phone,
  X,
  Menu
} from 'lucide-react'; // Icons used for nav links
import logo from '../assets/logo.png';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { cart } = useCart();

  const navItems = [
    { name: 'Home', path: '/', icon: <Home size={18} /> },
    { name: 'About Us', path: '/about', icon: <Info size={18} /> },
    { name: 'Contact', path: '/contact', icon: <Phone size={18} /> },
    { name: 'Order', path: '/order', icon: <ShoppingCart size={18} /> },
  ];

  return (
    <header className="bg-[#0a1a3c] text-white top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/">
          <img
            src={logo}
            alt="SmartSpecs Logo"
            className="h-12 w-auto max-w-[100px] object-contain"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 items-center">
          {navItems.map((item) =>
            item.name === 'Order' ? (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `relative flex items-center gap-1 hover:text-gray-300 transition ${
                    isActive ? 'text-gray-300 font-semibold' : ''
                  }`
                }
              >
                <ShoppingCart size={20} />
                {item.name}
                {cart.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    {cart.reduce((acc, item) => acc + item.quantity, 0)}
                  </span>
                )}
              </NavLink>
            ) : (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `hover:text-gray-300 transition ${
                    isActive ? 'text-gray-300 font-semibold' : ''
                  }`
                }
              >
                {item.name}
              </NavLink>
            )
          )}
        </nav>

        {/* Hamburger Icon */}
        <button
          onClick={() => setOpen(true)}
          className="md:hidden focus:outline-none"
        >
          <Menu className="w-6 h-6 text-white" />
        </button>
      </div>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Slide-in Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-3/4 max-w-sm bg-[#0a1a3c] shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          open ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
      >
        {/* Close (X) Icon inside drawer */}
        <div className="flex justify-end p-4">
          <button onClick={() => setOpen(false)}>
            <X className="text-white w-6 h-6" />
          </button>
        </div>

        {/* Mobile Nav Links */}
        <div className="flex flex-col items-start gap-6 px-6">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-2 text-white text-lg hover:text-gray-300 transition ${
                  isActive ? 'text-gray-300 font-semibold' : ''
                }`
              }
            >
              {item.icon}
              {item.name}
            </NavLink>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
