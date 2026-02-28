import React from 'react';
import { motion } from 'framer-motion';

const images = [
    { id: 1, title: "Royal Jaipur Wedding", url: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80", size: "tall" },
    { id: 2, title: "Summer Garden Sangeet", url: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80", size: "small" },
    { id: 3, title: "Modern Terrace Celebration", url: "https://images.unsplash.com/photo-1519225495045-3b16bfec7c7d?auto=format&fit=crop&q=80", size: "small" },
    { id: 4, title: "Enchanted Forest Decor", url: "https://images.unsplash.com/photo-1522673607200-164883e2485e?auto=format&fit=crop&q=80", size: "wide" },
    { id: 5, title: "Vintage Cocktail Night", url: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80", size: "small" },
    { id: 6, title: "Traditional Haldi Glow", url: "https://images.unsplash.com/photo-1544256718-3bcf237f3974?auto=format&fit=crop&q=80", size: "wide" }
];

const PortfolioMosaic = () => {
    return (
        <section className="portfolio-mosaic-section section">
            <div className="container">
                <div className="section-header text-center">
                    <div className="section-heading-rule mx-auto"></div>
                    <span className="label-caps">Exquisite Portfolio</span>
                    <h2 className="display-title italic">Curated <span className="not-italic">Experiences</span></h2>
                </div>

                <div className="mosaic-grid">
                    {images.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            className={`mosaic-item ${item.size}`}
                        >
                            <div className="item-inner">
                                <img src={item.url} alt={item.title} loading="lazy" />
                                <div className="item-overlay">
                                    <div className="overlay-content">
                                        <span className="label-caps white">Real Weddings</span>
                                        <h3 className="item-title">{item.title}</h3>
                                        <a href="/gallery" className="view-link">View Story →</a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center mt-60">
                    <a href="/gallery" className="btn btn-primary">Enter the Gallery</a>
                </div>
            </div>

            <style jsx>{`
        .text-center { text-align: center; }
        .mx-auto { margin-left: auto; margin-right: auto; }
        .mt-60 { margin-top: 60px; }
        .white { color: var(--color-white) !important; }
        .display-title { font-size: 56px; margin-bottom: 50px; }
        .display-title .not-italic { font-style: normal; }

        .mosaic-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          grid-auto-rows: 300px;
          gap: 20px;
        }

        .mosaic-item { position: relative; overflow: hidden; border-radius: 4px; }
        
        .tall { grid-row: span 2; }
        .wide { grid-column: span 2; }
        .small { grid-column: span 1; grid-row: span 1; }

        .item-inner { width: 100%; height: 100%; position: relative; }
        .item-inner img { width: 100%; height: 100%; object-fit: cover; transition: var(--transition-smooth); }
        
        .item-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(to bottom, transparent, rgba(0,0,0,0.7));
          display: flex;
          align-items: flex-end;
          padding: 30px;
          opacity: 0;
          transition: var(--transition-fast);
        }

        .mosaic-item:hover .item-overlay { opacity: 1; }
        .mosaic-item:hover img { transform: scale(1.05); }

        .item-title { color: var(--color-white); font-size: 24px; margin: 10px 0; }
        .view-link { color: var(--color-primary-light); font-family: var(--font-ui); font-size: 13px; text-transform: uppercase; letter-spacing: 0.1em; }

        @media (max-width: 992px) {
          .mosaic-grid {
            grid-template-columns: repeat(2, 1fr);
            grid-auto-rows: 250px;
          }
          .wide { grid-column: span 2; }
          .display-title { font-size: 36px; }
        }

        @media (max-width: 576px) {
          .mosaic-grid { grid-template-columns: 1fr; grid-auto-rows: 300px; }
          .wide, .tall { grid-column: span 1; grid-row: span 1; }
        }
      `}</style>
        </section>
    );
};

export default PortfolioMosaic;
