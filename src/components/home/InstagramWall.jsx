import React from 'react';
import { motion } from 'framer-motion';
import { Instagram } from 'lucide-react';

const images = [
    { id: 1, url: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80", size: "tall" },
    { id: 2, url: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80" },
    { id: 3, url: "https://images.unsplash.com/photo-1519225495045-3b16bfec7c7d?auto=format&fit=crop&q=80" },
    { id: 4, url: "https://images.unsplash.com/photo-1522673607200-164883e2485e?auto=format&fit=crop&q=80", size: "wide" },
    { id: 5, url: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80" },
    { id: 6, url: "https://images.unsplash.com/photo-1544256718-3bcf237f3974?auto=format&fit=crop&q=80", size: "wide" }
];

const InstagramWall = () => {
    return (
        <section className="instagram-wall section bg-dark">
            <div className="watermark-at watermark-motif">@</div>

            <div className="container">
                <header className="wall-header reveal-on-scroll">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="wall-title italic"
                    >
                        We post.<br />
                        You <span className="script-accent">swoon.</span>
                    </motion.h2>
                    <div className="wall-badges">
                        <span className="label-caps gold-text">REAL MOMENTS · REAL MAGIC · REAL WEDDINGS</span>
                        <a href="https://instagram.com/vadhaiyaan" target="_blank" rel="noopener noreferrer" className="insta-badge">
                            <Instagram size={16} /> @vadhaiyaan
                        </a>
                    </div>
                </header>

                <div className="mosaic-grid">
                    {images.map((img, index) => (
                        <motion.div
                            key={img.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className={`mosaic-item ${img.size || ''}`}
                        >
                            <img src={img.url} alt={`Instagram ${img.id}`} />
                            <div className="hover-overlay">
                                <div className="overlay-content">
                                    <span className="italic">View on Instagram</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <div className="ticker-wrapper">
                <div className="ticker-content">
                    {[1, 2, 3].map(i => (
                        <span key={i} className="ticker-item">
                            ✦ @VADHAIYAAN · WEDDINGS ✦ EVENTS ✦ MAGIC ✦ @VADHAIYAAN · FOLLOW US ✦ REAL MOMENTS
                        </span>
                    ))}
                </div>
            </div>

            <div className="wall-cta text-center reveal-on-scroll">
                <p className="cta-text italic">"Every event we create lives on our feed."</p>
                <a href="https://instagram.com/vadhaiyaan" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                    Follow @vadhaiyaan on Instagram →
                </a>
            </div>

            <style jsx>{`
        .bg-dark { background-color: var(--color-charcoal); color: var(--color-cream); position: relative; overflow: hidden; }
        .gold-text { color: var(--color-primary); }
        .text-center { text-align: center; }

        .watermark-at {
          top: -50px;
          right: -50px;
          font-size: 400px;
          font-family: var(--font-display);
          color: rgba(255,255,255,0.03);
          z-index: 0;
        }

        .wall-header { margin-bottom: 60px; position: relative; z-index: 1; }
        .wall-title { font-size: 80px; line-height: 1; margin-bottom: 20px; }
        .wall-badges { display: flex; flex-direction: column; gap: 15px; }

        .insta-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          background: rgba(255,255,255,0.1);
          border-radius: 50px;
          width: fit-content;
          font-family: var(--font-ui);
          font-size: 13px;
          transition: var(--transition-fast);
        }
        .insta-badge:hover { background: var(--color-primary); color: white; }

        .mosaic-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-auto-rows: 250px;
          gap: 15px;
          margin-bottom: 80px;
          position: relative;
          z-index: 1;
        }

        .mosaic-item { position: relative; overflow: hidden; border-radius: 4px; }
        .mosaic-item img { 
          width: 100%; 
          height: 100%; 
          object-fit: cover; 
          filter: sepia(0.08); 
          transition: var(--transition-smooth); 
        }
        .tall { grid-row: span 2; }
        .wide { grid-column: span 2; }

        .hover-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0,0,0,0.6);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: var(--transition-fast);
        }
        .mosaic-item:hover .hover-overlay { opacity: 1; }
        .mosaic-item:hover img { transform: scale(1.05); }

        .ticker-wrapper {
          background-color: var(--color-primary);
          padding: 15px 0;
          margin: 60px 0;
          border-top: 1px solid rgba(255,255,255,0.2);
          border-bottom: 1px solid rgba(255,255,255,0.2);
          overflow: hidden;
          position: relative;
          z-index: 1;
        }

        .ticker-content {
          display: flex;
          white-space: nowrap;
          animation: marquee 30s linear infinite;
        }
        .ticker-content:hover { animation-play-state: paused; }

        .ticker-item {
          font-family: var(--font-ui);
          font-size: 14px;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          color: var(--color-charcoal);
          padding-right: 50px;
        }

        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .wall-cta { padding: 40px 0; position: relative; z-index: 1; }
        .cta-text { font-size: 36px; margin-bottom: 30px; }

        @media (max-width: 992px) {
          .wall-title { font-size: 48px; }
          .mosaic-grid { grid-template-columns: repeat(2, 1fr); grid-auto-rows: 200px; }
          .cta-text { font-size: 24px; }
        }
      `}</style>
        </section>
    );
};

export default InstagramWall;
