import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const services = [
    {
        number: "01",
        title: "Full Wedding Planning",
        description: "End-to-end orchestration from the first moodboard to the final thank-you note. We handle the complexity so you can handle the joy.",
        image: "https://images.unsplash.com/photo-1519225495045-3b16bfec7c7d?auto=format&fit=crop&q=80"
    },
    {
        number: "02",
        title: "Floral & Decor Design",
        description: "Bespoke environments that tell your story through texture, fragrance, and light. Our in-house team transforms spaces into dreams.",
        image: "https://images.unsplash.com/photo-1522673607200-164883e2485e?auto=format&fit=crop&q=80"
    },
    {
        number: "03",
        title: "Destination Scouting",
        description: "Finding the perfect backdrop across the globe. We scout locations that align with your vision and secure the most exclusive venues.",
        image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80"
    },
    {
        number: "04",
        title: "Entertainment & Multi-Media",
        description: "Curated performance art, celebrity artists, and cinematic films that turn your celebration into a global spectacle.",
        image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80"
    }
];

const ServiceAccordion = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="service-accordion-section section bg-mist">
            <div className="container">
                <div className="section-header">
                    <div className="section-heading-rule"></div>
                    <span className="label-caps">Our Offerings</span>
                    <h2 className="display-title">Bespoke <span className="italic">Services</span></h2>
                </div>

                <div className="accordion-list">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className={`accordion-row ${activeIndex === index ? 'active' : ''}`}
                        >
                            <div
                                className="row-header"
                                onClick={() => setActiveIndex(activeIndex === index ? -1 : index)}
                            >
                                <span className="row-number">{service.number}</span>
                                <h3 className="row-title">{service.title}</h3>
                                <div className="row-indicator">
                                    <div className="indicator-line"></div>
                                    <div className={`indicator-line vertical ${activeIndex === index ? 'open' : ''}`}></div>
                                </div>
                            </div>

                            <AnimatePresence>
                                {activeIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                        className="row-content-wrapper"
                                    >
                                        <div className="row-content">
                                            <div className="row-text">
                                                <p className="row-desc">{service.description}</p>
                                                <a href="/services" className="btn-link">Explore Service Details →</a>
                                            </div>
                                            <div className="row-image">
                                                <motion.img
                                                    initial={{ x: 100, opacity: 0 }}
                                                    animate={{ x: 0, opacity: 1 }}
                                                    transition={{ duration: 0.8, delay: 0.2 }}
                                                    src={service.image}
                                                    alt={service.title}
                                                />
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
        .bg-mist { background-color: var(--color-mist); }
        .display-title { font-size: 56px; margin-top: 10px; }
        
        .accordion-list { margin-top: 60px; border-top: 1px solid rgba(0,0,0,0.1); }
        
        .accordion-row {
          border-bottom: 1px solid rgba(0,0,0,0.1);
          transition: var(--transition-fast);
        }
        
        .row-header {
          display: flex;
          align-items: center;
          padding: 40px 0;
          cursor: pointer;
        }
        
        .row-number {
          font-family: var(--font-display);
          font-size: 120px;
          line-height: 1;
          color: var(--color-primary);
          opacity: 0.15;
          width: 180px;
          transition: var(--transition-smooth);
        }
        
        .accordion-row.active .row-number {
          opacity: 1;
        }
        
        .row-title {
          font-family: var(--font-display);
          font-size: 36px;
          flex: 1;
          color: var(--color-charcoal);
        }
        
        .row-indicator {
          position: relative;
          width: 24px;
          height: 24px;
        }
        
        .indicator-line {
          position: absolute;
          top: 12px;
          left: 0;
          width: 100%;
          height: 2px;
          background-color: var(--color-primary);
          transition: var(--transition-smooth);
        }
        
        .indicator-line.vertical {
          transform: rotate(90deg);
        }
        
        .indicator-line.vertical.open {
          transform: rotate(0deg);
        }
        
        .row-content-wrapper { overflow: hidden; }
        
        .row-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          padding-bottom: 60px;
          align-items: center;
        }
        
        .row-desc {
          font-size: 18px;
          color: var(--color-text-muted);
          margin-bottom: 30px;
        }
        
        .btn-link {
          font-family: var(--font-ui);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          font-size: 13px;
          color: var(--color-primary);
          font-weight: 500;
        }
        
        .row-image img {
          width: 100%;
          height: 400px;
          object-fit: cover;
          border-radius: 4px;
        }
        
        @media (max-width: 992px) {
          .row-number { font-size: 60px; width: 80px; }
          .row-title { font-size: 24px; }
          .row-content { grid-template-columns: 1fr; gap: 30px; }
          .row-image img { height: 250px; }
          .display-title { font-size: 36px; }
        }
      `}</style>
        </section>
    );
};

export default ServiceAccordion;
