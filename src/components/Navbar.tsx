import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-gray-900">
              <span className="text-orange-500">Omkar</span> Tours & Travels
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-orange-500 transition-colors">Home</Link>
            <Link to="/about" className="text-gray-700 hover:text-orange-500 transition-colors">About</Link>
            <Link to="/services" className="text-gray-700 hover:text-orange-500 transition-colors">Services</Link>
            <Link to="/contact" className="text-gray-700 hover:text-orange-500 transition-colors">Contact</Link>
            <a 
              href="tel:9867211016" 
              className="flex items-center gap-2 bg-orange-500 text-white px-5 py-2.5 rounded-lg hover:bg-orange-600 transition-colors font-medium"
            >
              <Phone size={18} />
              <span>Call Now</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-100 absolute left-0 right-0 bg-white shadow-lg px-4 flex flex-col space-y-4">
            <Link 
              to="/" 
              className="text-gray-700 hover:text-orange-500 py-2"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="text-gray-700 hover:text-orange-500 py-2"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/services" 
              className="text-gray-700 hover:text-orange-500 py-2"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link 
              to="/contact" 
              className="text-gray-700 hover:text-orange-500 py-2"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <a 
              href="tel:9867211016" 
              className="flex items-center justify-center gap-2 bg-orange-500 text-white px-5 py-3 rounded-lg hover:bg-orange-600 transition-colors font-medium w-full"
            >
              <Phone size={18} />
              <span>Call Now</span>
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
