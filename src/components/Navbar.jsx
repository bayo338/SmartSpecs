import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { ShoppingCart } from 'lucide-react';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { cart } = useCart();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'Order', path: '/order' },
  ];

  return (
    <header className="bg-[#0a1a3c] text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* LOGO SECTION */}
        <Link to="/" className="flex items-center space-x-2">
          <img
            src={logo} //  Replace with your actual logo path
            alt="SmartSpecs Logo"
            className="w-8 h-8 md:w-10 md:h-10 object-contain"
          />
          <span className="text-xl md:text-2xl font-bold tracking-tight text-white">
            SmartSpecs
          </span>
        </Link>

        {/* NAV LINKS (Desktop) */}
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

        {/* Mobile Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="white"
            viewBox="0 0 24 24"
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
      <div className="md:hidden px-4 pb-4 bg-[#0a1a3c] flex justify-center">
        <nav className="flex flex-col items-center space-y-3">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `hover:text-gray-300 transition ${
                  isActive ? 'text-gray-300 font-semibold' : ''
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>
      </div>
    )}

    </header>
  );
};

export default Navbar;
