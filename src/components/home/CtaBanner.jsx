import React from 'react';
import { motion } from 'framer-motion';

const CtaBanner = () => {
  return (
    <section className="cta-banner">
      <div className="container">
        <div className="cta-content text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="cta-header">
              <img src="/logo-v2.png" alt="Vadhaiyaan Crown" className="cta-logo-minimal" />
              <h2 className="cta-title-minimal">Ready to begin your journey?</h2>
            </div>

            <p className="cta-subtext-minimal">Let's craft something extraordinary together.</p>

            <div className="cta-actions-slim">
              <div className="action-row">
                <a href="mailto:hello@vadhaiyaan.com" className="cta-pill">Email Us</a>
                <a href="tel:+919811567604" className="cta-pill">Call Directly</a>
                <a
                  href="https://wa.me/919811567604"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-pill-highlight"
                >
                  WhatsApp Enquiry →
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .cta-banner {
          background-color: #C6A75E; /* Solid Brand Gold for impact but in a shorter section */
          padding: 80px 0;
          color: #FFFFFF;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .cta-header {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
          margin-bottom: 30px;
        }

        .cta-logo-minimal {
          height: 60px;
          filter: brightness(0) invert(1);
          opacity: 0.9;
        }

        .cta-title-minimal {
          font-family: var(--font-display);
          font-size: clamp(1.8rem, 4vw, 3rem);
          line-height: 1.2;
          font-weight: 300;
          color: #FFFFFF;
        }

        .cta-subtext-minimal {
          font-family: var(--font-ui);
          font-size: 16px;
          max-width: 500px;
          margin: 0 auto 40px;
          font-weight: 300;
          letter-spacing: 0.05em;
          opacity: 0.9;
        }

        .cta-actions-slim {
          display: flex;
          justify-content: center;
        }

        .action-row {
          display: flex;
          gap: 15px;
          flex-wrap: wrap;
          justify-content: center;
        }

        .cta-pill {
          font-family: var(--font-ui);
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          color: #FFFFFF;
          text-decoration: none;
          padding: 12px 30px;
          border: 1px solid rgba(255, 255, 255, 0.4);
          border-radius: 100px;
          transition: all 0.4s ease;
        }

        .cta-pill:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: #FFFFFF;
        }

        .cta-pill-highlight {
          font-family: var(--font-ui);
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          color: #C6A75E;
          background: #FFFFFF;
          text-decoration: none;
          padding: 12px 35px;
          border-radius: 100px;
          font-weight: 600;
          transition: all 0.4s ease;
          box-shadow: 0 10px 20px rgba(0,0,0,0.05);
        }

        .cta-pill-highlight:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 30px rgba(0,0,0,0.1);
          background: #FDFDFB;
        }

        @media (max-width: 768px) {
          .cta-banner {
            padding: 60px 20px;
          }
          
          .action-row {
            flex-direction: column;
            width: 100%;
            max-width: 280px;
          }

          .cta-pill, .cta-pill-highlight {
            width: 100%;
            text-align: center;
          }
        }
      `}</style>
    </section>
  );
};

export default CtaBanner;
