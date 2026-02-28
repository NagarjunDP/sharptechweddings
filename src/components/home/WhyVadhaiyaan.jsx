import React from 'react';
import { motion } from 'framer-motion';

const reasons = [
  {
    number: "01",
    title: "Full-Cycle Mastery",
    description: "From the first bloom to the final wave — we own every moment."
  },
  {
    number: "02",
    title: "Soulful Curation",
    description: "No templates. No repeats. Your story is the only blueprint we use."
  },
  {
    number: "03",
    title: "Creative Collective",
    description: "In-house artists and visionaries dedicated to your visual legacy."
  },
  {
    number: "04",
    title: "Honest Planning",
    description: "Absolute transparency. Every rupee invested, every detail revealed."
  },
  {
    number: "05",
    title: "Impeccable Timing",
    description: "A legacy of 100% on-time delivery. We don't just plan; we perform."
  }
];

const WhyVadhaiyaan = () => {
  return (
    <section className="why-vadhaiyaan section">
      <div className="container">
        <div className="why-header">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="eyebrow"
          >
            WHY VADHAIYAAN
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="section-title"
          >
            The difference is in <span className="italic">the details.</span>
          </motion.h2>
        </div>

        <div className="reasons-grid">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`reason-card ${index % 2 !== 0 ? 'staggered' : ''}`}
            >
              <div className="reason-decoration">
                <span className="reason-number">{reason.number}</span>
                <div className="gold-line" />
              </div>
              <div className="reason-content">
                <h3 className="reason-title">{reason.title}</h3>
                <p className="reason-description">{reason.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .why-vadhaiyaan {
          background-color: #FFFFFF;
          padding: 120px 0;
          overflow: hidden;
        }

        .why-header {
          text-align: center;
          margin-bottom: 100px;
        }

        .eyebrow {
          font-family: var(--font-ui);
          text-transform: uppercase;
          letter-spacing: 0.4em;
          color: #C6A75E;
          font-size: 11px;
          font-weight: 500;
          margin-bottom: 20px;
          display: block;
        }

        .section-title {
          font-family: var(--font-display);
          font-size: clamp(2rem, 5vw, 3.5rem);
          line-height: 1.2;
          font-weight: 300;
          color: #1A1A1A;
        }

        .italic {
          font-style: italic;
          opacity: 0.8;
        }

        .reasons-grid {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 40px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .reason-card {
          flex: 1 1 300px;
          max-width: 380px;
          padding: 40px;
          background: #FDFDFB;
          border-radius: 2px;
          transition: all 0.5s ease;
          position: relative;
        }

        .reason-card:hover {
          transform: translateY(-10px);
          background: #FFFFFF;
          box-shadow: 0 20px 40px rgba(0,0,0,0.03);
        }

        .staggered {
          margin-top: 60px;
        }

        .reason-decoration {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-bottom: 25px;
        }

        .reason-number {
          font-family: var(--font-display);
          font-size: 24px;
          color: #C6A75E;
          font-weight: 400;
          font-style: italic;
        }

        .gold-line {
          height: 1px;
          flex-grow: 1;
          background: linear-gradient(to right, rgba(198, 167, 94, 0.4), transparent);
        }

        .reason-title {
          font-family: var(--font-display);
          font-size: 24px;
          margin-bottom: 15px;
          font-weight: 400;
          color: #1A1A1A;
          letter-spacing: 0.02em;
        }

        .reason-description {
          font-family: var(--font-ui);
          font-size: 15px;
          color: #666;
          font-weight: 300;
          line-height: 1.6;
          letter-spacing: 0.02em;
        }

        @media (max-width: 992px) {
          .reasons-grid {
            gap: 20px;
          }
          
          .staggered {
            margin-top: 0;
          }

          .reason-card {
            max-width: none;
            flex: 1 1 100%;
          }
        }

        @media (max-width: 768px) {
          .why-vadhaiyaan {
            padding: 80px 0;
          }

          .why-header {
            margin-bottom: 60px;
          }

          .section-title {
            font-size: 32px;
          }

          .reason-card {
            padding: 30px;
          }
        }
      `}</style>
    </section>
  );
};

export default WhyVadhaiyaan;
