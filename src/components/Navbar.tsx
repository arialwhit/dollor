
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled || isMobileMenuOpen ? 'py-3 glass-pink shadow-md' : 'py-6 bg-transparent'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="text-4xl font-cursive glitter-text font-bold tracking-wider">
          Dolluxe
        </Link>
        
        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-[11px] uppercase tracking-[0.2em] font-semibold hover:text-pink-500 transition-colors ${location.pathname === link.path ? 'text-pink-600' : 'text-gray-600'}`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/book"
            className="bg-pink-500 text-white px-8 py-3 text-[11px] uppercase tracking-widest hover:bg-pink-600 transition-all shadow-lg hover:shadow-pink-200 active:scale-95 rounded-full font-bold"
          >
            Book Now ✨
          </Link>
        </div>

        {/* Mobile menu button */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-pink-600 focus:outline-none"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}/></svg>
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden glass-pink border-t border-pink-100 mobile-menu-enter">
          <div className="flex flex-col items-center py-10 space-y-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-lg font-playful tracking-widest ${location.pathname === link.path ? 'text-pink-600 font-bold' : 'text-gray-600'}`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/book"
              className="bg-pink-500 text-white px-14 py-4 text-xs uppercase tracking-[0.4em] shadow-lg rounded-full"
            >
              Get Your Glow
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
