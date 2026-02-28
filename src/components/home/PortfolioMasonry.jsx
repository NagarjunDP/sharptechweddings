import React from 'react';
import { motion } from 'framer-motion';

const portfolioItems = [
  {
    image: "https://images.unsplash.com/photo-1519225495045-3b16bfec7c7d?auto=format&fit=crop&q=80",
    className: "tall",
    title: "The Royal Wedding"
  },
  {
    image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80",
    className: "short",
    title: "Summer Gala"
  },
  {
    image: "https://images.unsplash.com/photo-1549416878-b9ca95e26903?auto=format&fit=crop&q=80",
    className: "short",
    title: "Intimate Dinner"
  },
  {
    image: "https://images.unsplash.com/photo-1507504031003-b417219a0fde?auto=format&fit=crop&q=80",
    className: "wide",
    title: "Corporate Launch"
  }
];

const PortfolioMasonry = () => {
  return (
    <section className="portfolio section">
      <div className="container">
        <div className="portfolio-header">
          <h2 className="section-title">Every event tells a story.<br /><span className="italic">Here are a few of ours.</span></h2>
        </div>

        <div className="portfolio-grid">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`portfolio-item ${item.className}`}
            >
              <img src={item.image} alt={item.title} className="portfolio-image" />
              <div className="portfolio-overlay">
                <span className="portfolio-tag">VIEW STORY</span>
                <h3 className="portfolio-item-title">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="portfolio-footer">
          <a href="/gallery" className="btn btn-outline dark">See Full Gallery →</a>
        </div>
      </div>

      <style jsx>{`
        .portfolio {
          background-color: #FFFFFF;
          padding: var(--section-padding-desktop);
        }

        .portfolio-header {
          margin-bottom: 80px;
          text-align: center;
        }

        .eyebrow {
          font-family: var(--font-ui);
          text-transform: uppercase;
          letter-spacing: 0.25em;
          color: var(--color-charcoal);
          font-size: 13px;
          font-weight: 300;
          margin-bottom: 15px;
          display: block;
        }

        .section-title {
          font-family: var(--font-display);
          font-size: 42px;
          line-height: 1.2;
          font-weight: 300;
          font-style: italic;
        }

        .portfolio-grid {
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          grid-auto-rows: 200px;
          gap: 20px;
          max-width: 1400px;
          margin: 0 auto 60px;
          padding: 0 20px;
        }

        .portfolio-item {
          position: relative;
          overflow: hidden;
          background-color: #F8F8F8;
        }

        .portfolio-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: var(--transition-smooth);
        }

        .portfolio-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.4);
          display: flex;
          justify-content: center;
          align-items: center;
          opacity: 0;
          transition: var(--transition-fast);
          color: #FFFFFF;
        }

        .plus-icon {
          font-size: 40px;
          font-weight: 100;
          color: #FFFFFF;
        }

        .portfolio-item:hover .portfolio-overlay {
          opacity: 1;
        }

        .portfolio-item:hover .portfolio-image {
          transform: scale(1.03);
        }

        /* V3 Mosaic Layout */
        .item-1 { grid-column: span 8; grid-row: span 3; } /* Tall 2:3 approx */
        .item-2 { grid-column: span 4; grid-row: span 1.5; } /* Square 1 */
        .item-3 { grid-column: span 4; grid-row: span 1.5; } /* Square 2 */
        .item-4 { grid-column: span 4; grid-row: span 2; } /* Wide start */
        .item-5 { grid-column: span 8; grid-row: span 2; } /* Wide finish */

        .portfolio-footer {
          text-align: center;
        }

        .link-arrow {
          font-family: var(--font-ui);
          text-transform: uppercase;
          font-size: 13px;
          letter-spacing: 0.15em;
          color: var(--color-charcoal);
          font-weight: 300;
          display: inline-block;
          border-bottom: 1px solid var(--color-accent-line);
          padding-bottom: 5px;
        }

        @media (max-width: 992px) {
          .portfolio-grid {
            grid-template-columns: repeat(2, 1fr);
            grid-auto-rows: 250px;
          }
          
          .item-1, .item-2, .item-3, .item-4, .item-5 {
            grid-column: span 1;
            grid-row: span 1;
          }

          .section-title {
            font-size: 32px;
          }
        }

        @media (max-width: 640px) {
          .portfolio-grid {
            grid-template-columns: 1fr;
            gap: 15px;
          }
        }
      `}</style>
    </section>
  );
};

export default PortfolioMasonry;
