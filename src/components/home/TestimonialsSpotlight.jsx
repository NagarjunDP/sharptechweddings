import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
    {
        id: 1,
        quote: "They didn't just plan our wedding. They gave us a memory we will replay for the rest of our lives.",
        author: "PRIYA & ARJUN SHARMA",
        location: "DELHI",
        date: "DECEMBER 2024",
        stars: 5,
        smallQuote: "Absolute magic from start to finish."
    },
    {
        id: 2,
        quote: "Vadhaiyaan understands the soul of an Indian wedding. Every detail felt personal, intentional, and radiant.",
        author: "MEERA & ROHIT KAPOOR",
        location: "MUMBAI",
        date: "OCTOBER 2024",
        stars: 5,
        smallQuote: "Unmatched elegance and warmth."
    },
    {
        id: 3,
        quote: "I didn't have to think about a single thing. I just lived my day. That is the greatest gift they gave me.",
        author: "ANANYA & SIDDHARTH",
        location: "UDAIPUR",
        date: "NOVEMBER 2024",
        stars: 5,
        smallQuote: "Perfect end-to-end execution."
    }
];

const TestimonialsSpotlight = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="testimonials-spotlight-section section">
            <div className="container spotlight-grid">
                {/* Main Featured Testimonial */}
                <div className="featured-column">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={testimonials[activeIndex].id}
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 30 }}
                            transition={{ duration: 0.6 }}
                            className="featured-content"
                        >
                            <div className="quote-mark">"</div>
                            <h3 className="main-quote italic">
                                {testimonials[activeIndex].quote}
                            </h3>
                            <div className="attribution-line">
                                <span className="label-caps">— {testimonials[activeIndex].author}, {testimonials[activeIndex].location} · {testimonials[activeIndex].date}</span>
                            </div>
                            <div className="star-row">
                                {[...Array(testimonials[activeIndex].stars)].map((_, i) => (
                                    <span key={i} className="star">★</span>
                                ))}
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Side Panel: Mini Cards */}
                <div className="side-panel">
                    <span className="label-caps side-title">Kind Words</span>
                    <div className="mini-cards-stack">
                        {testimonials.map((t, index) => (
                            <motion.div
                                key={t.id}
                                whileHover={{ x: -10 }}
                                onClick={() => setActiveIndex(index)}
                                className={`mini-card ${activeIndex === index ? 'active' : ''}`}
                            >
                                <p className="mini-quote italic">"{t.smallQuote}"</p>
                                <span className="mini-author">{t.author}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            <style jsx>{`
        .testimonials-spotlight-section {
          background-color: var(--color-cream);
          overflow: hidden;
          position: relative;
        }

        .spotlight-grid {
          display: grid;
          grid-template-columns: 1.5fr 0.5fr;
          gap: 100px;
          align-items: center;
        }

        .featured-column {
          position: relative;
        }

        .quote-mark {
          font-family: var(--font-display);
          font-size: 200px;
          line-height: 1;
          color: var(--color-primary);
          opacity: 0.2;
          position: absolute;
          top: -100px;
          left: -40px;
        }

        .main-quote {
          font-size: 42px;
          line-height: 1.3;
          color: var(--color-charcoal);
          margin-bottom: 40px;
          position: relative;
          z-index: 1;
        }

        .attribution-line {
          margin-bottom: 15px;
        }

        .star-row {
          color: var(--color-primary);
          font-size: 18px;
        }

        .side-panel {
          border-left: 1px solid rgba(0,0,0,0.1);
          padding-left: 40px;
        }

        .side-title {
          display: block;
          margin-bottom: 30px;
          color: var(--color-primary);
        }

        .mini-cards-stack {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .mini-card {
          padding: 25px;
          background: var(--color-white);
          border-radius: 4px;
          cursor: pointer;
          transition: var(--transition-fast);
          border: 1px solid transparent;
          box-shadow: 0 5px 15px rgba(0,0,0,0.02);
        }

        .mini-card:hover {
          border-color: var(--color-primary-light);
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
        }

        .mini-card.active {
          border-color: var(--color-primary);
          background: var(--color-mist);
        }

        .mini-quote {
          font-size: 16px;
          margin-bottom: 10px;
          color: var(--color-text);
        }

        .mini-author {
          font-family: var(--font-ui);
          text-transform: uppercase;
          font-size: 11px;
          letter-spacing: 0.1em;
          color: var(--color-text-muted);
        }

        @media (max-width: 992px) {
          .spotlight-grid {
            grid-template-columns: 1fr;
            gap: 60px;
          }
          .main-quote {
            font-size: 32px;
          }
          .side-panel {
            border-left: none;
            padding-left: 0;
            border-top: 1px solid rgba(0,0,0,0.1);
            padding-top: 40px;
          }
        }
      `}</style>
        </section>
    );
};

export default TestimonialsSpotlight;
