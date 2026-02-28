import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Instagram, Phone } from 'lucide-react';

const Navbar = () => {
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
    { name: 'Services', path: '/services' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : 'navbar-transparent'} ${isMobileMenuOpen ? 'menu-is-open' : ''}`}>
      <div className="container nav-container">
        {/* Navigation Toggle - Explicitly White and Visible on All Devices when Scrolled */}
        <button
          className="mobile-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Navigation"
        >
          <Menu size={28} />
        </button>

        {/* Grandeur Logo Branding */}
        <Link to="/" className="logo-wrapper">
          <img
            src="/logo-v2.png"
            alt="Vadhaiyaan"
            className="brand-logo"
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="nav-links desktop-only">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.path}
                className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Contact Action - Desktop Only */}
        <div className="nav-actions desktop-only">
          <Link to="/contact" className="btn-luxury">
            PLAN YOUR EVENT
          </Link>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <button className="mobile-close" onClick={() => setIsMobileMenuOpen(false)}>
          <X size={32} />
        </button>

        <div className="mobile-menu-content">
          <ul className="mobile-nav-links">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link to={link.path} onClick={() => setIsMobileMenuOpen(false)}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mobile-menu-footer">
            <Link to="/contact" className="btn-luxury menu-btn" onClick={() => setIsMobileMenuOpen(false)}>
              PLAN YOUR EVENT
            </Link>
            <div className="social-links">
              <a href="https://instagram.com/vadhaiyaan" target="_blank" rel="noopener noreferrer"><Instagram size={24} /></a>
              <a href="tel:+919811567604"><Phone size={24} /></a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .nav-container {
          /* Global 'Slim Grandeur': Reduced background and blur for all pages when unscrolled */
          background: ${!isScrolled ? 'rgba(0, 0, 0, 0.15)' : 'rgba(0, 0, 0, 0.25)'};
          backdrop-filter: blur(${!isScrolled ? '8px' : '15px'});
          -webkit-backdrop-filter: blur(${!isScrolled ? '8px' : '15px'});
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 100px;
          padding: 5px 35px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          transition: all 0.5s ease;
          position: relative;
          
          /* Global 'Slim Grandeur' Dimensions: 80% width for all top-level navigations */
          width: ${!isScrolled ? '80%' : '85%'};
          max-width: ${!isScrolled ? '1000px' : '1100px'};
          margin: 20px auto 0;
        }

        .navbar.menu-is-open .nav-container {
          margin-top: 0;
          width: 100%;
          max-width: none;
          background: transparent;
          border: none;
          backdrop-filter: none;
        }

        .navbar-scrolled .nav-container {
          background: rgba(10, 10, 10, 0.95);
          padding: 5px 30px;
          border-color: rgba(198, 167, 94, 0.3);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4);
          margin-top: 10px;
        }

        /* Global Toggle Styles for Desktop & Mobile Visibility */
        .mobile-toggle {
          background: none;
          border: none;
          color: #FFFFFF !important;
          cursor: pointer;
          padding: 0;
          display: flex;
          align-items: center;
          opacity: 1;
          filter: drop-shadow(0px 2px 4px rgba(0,0,0,0.3));
          transition: all 0.3s ease;
          z-index: 100;
        }

        .navbar-scrolled .mobile-toggle {
          color: #FFFFFF !important;
        }

        .logo-wrapper {
          display: flex;
          align-items: center;
          transition: transform 0.4s ease;
          position: relative;
          z-index: 10;
        }

        .brand-logo {
          /* Global 'Slim Grandeur' Logo: 100px height for initial state across all sections */
          height: ${!isScrolled ? '100px' : '130px'};
          width: auto;
          filter: brightness(0) invert(1) drop-shadow(0px 4px 12px rgba(0,0,0,0.4));
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
          transform-origin: center;
        }

        .navbar-scrolled .brand-logo {
          height: 85px;
        }

        .nav-links {
          display: flex;
          gap: 30px;
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .nav-link {
          font-family: var(--font-ui);
          font-size: 10px;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          color: #FFFFFF;
          text-decoration: none;
          opacity: 0.7;
          position: relative;
          padding: 10px 0;
          transition: 0.3s ease;
        }

        .nav-link:hover, .nav-link.active { opacity: 1; }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0; left: 50%;
          width: 0; height: 1.5px;
          background: #C6A75E;
          transition: 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          transform: translateX(-50%);
        }

        .nav-link:hover::after, .nav-link.active::after { width: 100%; }

        .btn-luxury {
          background: transparent;
          border: 1px solid #C6A75E;
          padding: 10px 24px;
          color: #C6A75E;
          border-radius: 100px;
          text-decoration: none;
          font-family: var(--font-ui);
          font-size: 9px;
          letter-spacing: 0.15em;
          transition: all 0.4s ease;
        }

        .btn-luxury:hover {
          background: #C6A75E;
          color: #000;
          box-shadow: 0 0 20px rgba(198, 167, 94, 0.3);
        }

        @media (max-width: 992px) {
          .nav-container {
            width: 80%;
            min-width: 250px;
            margin-top: 20px;
            padding: 0 15px;
            display: flex;
            justify-content: center; /* Center the logo */
            gap: 20px;
            height: 60px;
            position: relative;
          }

          .mobile-toggle {
            position: absolute;
            left: 15px;
            top: 50%;
            transform: translateY(-50%);
            z-index: 100;
          }

          .navbar.menu-is-open .nav-container {
            margin-top: 0;
          }

          .logo-wrapper {
            margin: 0; /* Remove margins for true centering */
          }

          .brand-logo {
            height: 110px;
            position: relative;
            z-index: 1010;
          }

          .navbar-scrolled .brand-logo {
            height: 90px;
          }

          .desktop-only, .nav-actions { display: none !important; }
        }

        /* Mobile Menu Overlay */
        .mobile-menu {
          position: fixed;
          top: 0; left: 0; width: 100%; height: 100vh;
          background: #0A0A0A;
          z-index: 2001;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 40px;
          transform: translateY(-110%);
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .mobile-menu.open { transform: translateY(0); }

        .mobile-close {
          position: absolute;
          top: 35px; 
          left: 20px;
          background: none; border: none; color: #FFFFFF;
          cursor: pointer;
          opacity: 0.8;
          transition: 0.3s;
        }
        
        .mobile-close:hover { opacity: 1; transform: rotate(90deg); }

        .mobile-nav-links {
          list-style: none;
          padding: 0;
          text-align: center;
        }

        .mobile-nav-links li { margin-bottom: 30px; }

        .mobile-nav-links a {
          font-family: var(--font-display);
          font-size: 36px;
          color: #FFFFFF;
          text-decoration: none;
          font-style: italic;
          transition: 0.3s;
        }

        .mobile-nav-links a:hover {
          color: #C6A75E;
          padding-left: 10px;
        }

        .mobile-menu-footer {
          margin-top: 40px;
          text-align: center;
          width: 100%;
        }

        .menu-btn { width: 100%; max-width: 280px; }

        .social-links {
          margin-top: 35px;
          display: flex;
          justify-content: center;
          gap: 30px;
        }

        .social-links a { color: #FFFFFF; transition: 0.3s; }
        .social-links a:hover { color: #C6A75E; }
      `}</style>
    </nav>
  );
};

export default Navbar;
