import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Youtube, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-grandeur">
      <div className="container">
        {/* THE BRAND FINALE — ULTRA LOGO */}
        <div className="footer-hero">
          <img src="/logo-v2.png" alt="Vadhaiyaan" className="footer-logo-massive" />
          <div className="footer-tagline-wrap">
            <span className="eyebrow-gold">ESTABLISHED IN EXCELLENCE</span>
            <h2 className="footer-statement">Making your <span className="italic">most beautiful</span> moments last forever.</h2>
          </div>
        </div>

        {/* EDITORIAL GRID */}
        <div className="footer-main-grid">
          <div className="footer-navigation">
            <span className="footer-label">EXPLORE</span>
            <div className="nav-links-grid">
              <Link to="/" className="f-link">Home</Link>
              <Link to="/about" className="f-link">About</Link>
              <Link to="/services" className="f-link">Services</Link>
              <Link to="/gallery" className="f-link">Gallery</Link>
              <Link to="/testimonials" className="f-link">Testimonials</Link>
              <Link to="/contact" className="f-link">Contact</Link>
            </div>
          </div>

          <div className="footer-contact">
            <span className="footer-label">GET IN TOUCH</span>
            <div className="contact-details">
              <a href="mailto:hello@vadhaiyaan.com" className="contact-link-gold">hello@vadhaiyaan.com</a>
              <a href="tel:+919811567604" className="contact-link-gold">+91 98115 67604</a>
              <p className="location-text">New Delhi, India</p>
            </div>
          </div>

          <div className="footer-social">
            <span className="footer-label">SOCIAL</span>
            <div className="social-stack">
              <a href="https://instagram.com/vadhaiyaan" target="_blank" rel="noopener noreferrer" className="social-item">
                <Instagram size={18} /> <span>Instagram</span>
              </a>
              <a href="https://youtube.com/@vadhaiyaan" target="_blank" rel="noopener noreferrer" className="social-item">
                <Youtube size={18} /> <span>Youtube</span>
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM LEGAL STRIP */}
        <div className="footer-legal">
          <div className="legal-left">
            © {currentYear} VADHAIYAAN · ALL RIGHTS RESERVED
          </div>
          <div className="legal-right">
            <span className="legal-link">PRIVACY POLICY</span>
            <span className="legal-link">TERMS OF SERVICE</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        .footer-grandeur {
          background-color: #0F0F0F; /* Deep premium black */
          color: #FFFFFF;
          padding: 40px 0 30px; /* Ultra-compressed vertical padding */
          overflow: hidden;
          position: relative;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 40px;
        }

        .footer-hero {
          text-align: center;
          margin-bottom: 30px; /* Highly reduced margin */
        }

        .footer-logo-massive {
          height: 120px; /* Compacted from 240px as requested */
          width: auto;
          filter: brightness(0) invert(1);
          opacity: 0.98;
          display: block;
          margin: 0 auto 20px; /* Tighter margin */
          transition: transform 0.8s ease;
        }

        .cta-logo-static {
            height: 80px;
            margin-bottom: 40px;
            filter: brightness(0) invert(1);
        }

        .footer-tagline-wrap {
          position: relative;
          z-index: 1;
        }

        .eyebrow-gold {
          font-family: var(--font-ui);
          font-size: 9px;
          letter-spacing: 0.4em;
          color: #C6A75E;
          display: block;
          margin-bottom: 8px; /* Compressed */
          text-transform: uppercase;
        }

        .footer-statement {
          font-family: var(--font-display);
          font-size: clamp(1.4rem, 3vw, 2.4rem); /* More compact title */
          font-weight: 300;
          line-height: 1.2;
          max-width: 700px;
          margin: 0 auto;
        }

        .italic {
          font-style: italic;
          opacity: 1;
          color: #C6A75E; /* Brand Gold for highlight */
        }

        /* Editorial Grid - Compressed */
        .footer-main-grid {
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr;
          gap: 40px; /* Reduced from 100px */
          padding-bottom: 30px; /* Reduced from 80px */
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          margin-bottom: 30px;
        }

        .footer-label {
          font-family: var(--font-ui);
          font-size: 9px;
          letter-spacing: 0.3em;
          color: rgba(255, 255, 255, 0.3);
          display: block;
          margin-bottom: 15px; /* Reduced from 40px */
          text-transform: uppercase;
        }

        .nav-links-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px 40px;
        }

        .f-link {
          font-family: var(--font-ui);
          font-size: 13px;
          letter-spacing: 0.1em;
          color: rgba(255, 255, 255, 0.7);
          text-decoration: none;
          transition: all 0.4s ease;
          text-transform: uppercase;
        }

        .f-link:hover {
          color: #C6A75E;
          transform: translateX(5px);
        }

        .contact-details {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .contact-link-gold {
          font-family: var(--font-display);
          font-size: 24px;
          color: #FFFFFF;
          text-decoration: none;
          transition: color 0.4s ease;
        }

        .contact-link-gold:hover {
          color: #C6A75E;
        }

        .location-text {
          font-family: var(--font-ui);
          font-size: 14px;
          color: rgba(255, 255, 255, 0.4);
          letter-spacing: 0.05em;
        }

        .social-stack {
          display: flex;
          flex-direction: column;
          gap: 25px;
        }

        .social-item {
          display: flex;
          align-items: center;
          gap: 15px;
          color: rgba(255, 255, 255, 0.7);
          text-decoration: none;
          font-family: var(--font-ui);
          font-size: 13px;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          transition: all 0.4s ease;
        }

        .social-item:hover {
          color: #C6A75E;
          transform: translateX(5px);
        }

        /* Bottom Legal */
        .footer-legal {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-family: var(--font-ui);
          font-size: 10px;
          letter-spacing: 0.25em;
          color: rgba(255, 255, 255, 0.2);
        }

        .legal-right {
          display: flex;
          gap: 40px;
        }

        .legal-link {
          cursor: pointer;
          transition: color 0.4s ease;
        }

        .legal-link:hover {
          color: rgba(255, 255, 255, 0.5);
        }

        @media (max-width: 992px) {
          .footer-main-grid {
            grid-template-columns: 1fr;
            gap: 30px;
            text-align: center;
          }

          .footer-navigation {
            display: none; /* Hide navigation on mobile */
          }

          .nav-links-grid {
            grid-template-columns: 1fr;
            gap: 15px;
          }

          .footer-logo-massive {
            height: 100px;
          }

          .contact-details {
            align-items: center;
          }

          .social-stack {
            align-items: center;
          }

          .social-item {
            justify-content: center;
          }

          .footer-legal {
            flex-direction: column;
            gap: 20px;
            text-align: center;
          }

          .legal-right {
            gap: 20px;
          }

          .footer-statement {
            font-size: 22px;
          }
        }

        @media (max-width: 768px) {
          .footer-grandeur {
            padding: 80px 0 40px;
          }

          .footer-hero {
            margin-bottom: 80px;
          }

          .footer-label {
            margin-bottom: 25px;
          }

          .contact-link-gold {
            font-size: 20px;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
