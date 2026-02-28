import React from 'react';
import { motion } from 'framer-motion';
import { Instagram } from 'lucide-react';

const instagramImages = [
  "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1549416878-b9ca95e26903?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1522673607200-164883e2485e?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1519225495045-3b16bfec7c7d?auto=format&fit=crop&q=80"
];

const InstagramFeed = () => {
  return (
    <section className="instagram-feed">
      <div className="marquee-container">
        <div className="marquee-content">
          <span className="marquee-text">Follow our journey @vadhaiyaan</span>
          <span className="marquee-text">The Art of Celebration</span>
          <span className="marquee-text">Follow our journey @vadhaiyaan</span>
          <span className="marquee-text">The Art of Celebration</span>
        </div>
      </div>

      <div className="insta-grid">
        {instagramImages.map((img, index) => (
          <motion.a
            key={index}
            href="https://instagram.com/vadhaiyaan"
            target="_blank"
            rel="noopener noreferrer"
            className="insta-item"
            whileHover={{ opacity: 0.9 }}
          >
            <img src={img} alt={`Vadhaiyaan Instagram ${index + 1}`} className="insta-img" />
            <div className="insta-overlay">
              <Instagram size={24} color="white" />
            </div>
          </motion.a>
        ))}
      </div>

      <style jsx>{`
        .instagram-feed {
          background-color: var(--color-charcoal);
          padding: 100px 0 0;
          overflow: hidden;
        }

        .marquee-container {
          padding: 40px 0;
          border-top: 1px solid rgba(255,255,255,0.1);
          border-bottom: 1px solid rgba(255,255,255,0.1);
          margin-bottom: 60px;
          white-space: nowrap;
          overflow: hidden;
          position: relative;
        }

        .marquee-content {
          display: inline-block;
          animation: marquee 30s linear infinite;
        }

        .marquee-text {
          font-family: var(--font-display);
          font-size: 42px;
          font-style: italic;
          color: #FFFFFF;
          margin-right: 50px;
          font-weight: 300;
        }

        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .insta-grid {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          width: 100%;
        }

        .insta-item {
          position: relative;
          aspect-ratio: 1 / 1;
          overflow: hidden;
          display: block;
        }

        .insta-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
          filter: brightness(0.9) contrast(1.1);
        }

        .insta-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0,0,0,0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .insta-item:hover .insta-overlay {
          opacity: 1;
        }

        .insta-item:hover .insta-img {
          transform: scale(1.05);
        }

        @media (max-width: 992px) {
          .insta-grid {
            grid-template-columns: repeat(3, 1fr);
          }
          .marquee-text {
            font-size: 28px;
          }
        }
      `}</style>
    </section>
  );
};

export default InstagramFeed;
