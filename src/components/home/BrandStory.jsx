import React from 'react';
import { motion } from 'framer-motion';

const BrandStory = () => {
  return (
    <section className="brand-story section">
      <div className="container">
        <div className="story-layout">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            className="logo-anchor"
          >
            <img src="/logo-v2.png" alt="Vadhaiyaan" className="brand-badge" />
          </motion.div>

          <div className="editorial-grid">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="grid-col image-col-main"
            >
              <div className="image-frame">
                <img
                  src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80"
                  alt="Vadhaiyaan Editorial"
                  className="editorial-image"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="grid-col text-col"
            >
              <span className="eyebrow">The Collective</span>
              <h2 className="section-title">Where modern luxury<br />meets timeless tradition.</h2>
              <p className="body-text">
                Vadhaiyaan is more than an event agency; it is a creative collective dedicated to the art of celebration.
                We believe that every wedding is a bespoke masterpiece, waiting to be curated with precision,
                passion, and a touch of magic.
              </p>
              <p className="body-text">
                Our approach is rooted in the philosophy of high-end editorial storytelling—where every detail,
                from the first light to the final dance, is part of a larger narrative.
              </p>
              <div className="signature-block">
                <span className="signature-label">Artfully Curated by</span>
                <span className="signature-name">VADHAIYAAN</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="grid-col image-col-secondary"
            >
              <div className="image-frame small">
                <img
                  src="https://images.unsplash.com/photo-1549416878-b9ca95e26903?auto=format&fit=crop&q=80"
                  alt="Vadhaiyaan Detail"
                  className="editorial-image"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .brand-story {
          background-color: #FFFFFF;
          padding: 120px 0;
          position: relative;
          overflow: hidden;
        }

        .story-layout {
          position: relative;
        }

        .logo-anchor {
          position: absolute;
          top: -40px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 10;
          pointer-events: none;
        }

        .brand-badge {
          height: 120px;
          opacity: 0.4;
          filter: grayscale(1) brightness(0.2);
          mix-blend-mode: multiply;
        }

        .editorial-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-template-areas: 
            "main text"
            "main secondary";
          gap: 60px 80px;
          align-items: start;
        }

        .image-col-main {
          grid-area: main;
        }

        .text-col {
          grid-area: text;
          padding-top: 40px;
        }

        .image-col-secondary {
          grid-area: secondary;
          justify-self: end;
          width: 80%;
        }

        .image-frame {
          width: 100%;
          overflow: hidden;
          background-color: var(--color-mist);
        }

        .image-frame.small {
          aspect-ratio: 4/5;
        }

        .editorial-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 1.5s ease;
        }

        .image-frame:hover .editorial-image {
          transform: scale(1.05);
        }

        .eyebrow {
          font-family: var(--font-ui);
          text-transform: uppercase;
          letter-spacing: 0.3em;
          color: var(--color-charcoal);
          font-size: 12px;
          margin-bottom: 25px;
          display: block;
          font-weight: 300;
        }

        .section-title {
          font-family: var(--font-display);
          font-size: 42px;
          margin-bottom: 40px;
          line-height: 1.1;
          font-weight: 300;
          font-style: italic;
          color: var(--color-charcoal);
        }

        .body-text {
          font-family: var(--font-ui);
          font-size: 16px;
          color: var(--color-text-muted);
          margin-bottom: 25px;
          line-height: 1.8;
          font-weight: 300;
          max-width: 480px;
        }

        .signature-block {
          margin-top: 50px;
          border-top: 1px solid rgba(0,0,0,0.05);
          padding-top: 25px;
        }

        .signature-label {
          display: block;
          font-family: var(--font-display);
          font-size: 14px;
          font-style: italic;
          color: var(--color-text-muted);
          margin-bottom: 5px;
        }

        .signature-name {
          font-family: var(--font-ui);
          font-size: 15px;
          letter-spacing: 0.2em;
          color: var(--color-charcoal);
          font-weight: 400;
        }

        @media (max-width: 992px) {
          .editorial-grid {
            grid-template-columns: 1fr;
            grid-template-areas: 
              "text"
              "main"
              "secondary";
            gap: 40px;
          }

          .brand-badge {
            height: 80px;
            top: -20px;
          }

          .text-col {
            padding-top: 0;
            text-align: center;
          }

          .body-text {
            margin-left: auto;
            margin-right: auto;
          }

          .image-col-secondary {
            width: 100%;
          }
          
          .section-title {
            font-size: 32px;
          }
        }
      `}</style>
    </section>
  );
};

export default BrandStory;
