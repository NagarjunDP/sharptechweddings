import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
    {
        name: "Akansha & Varun",
        event: "WedMeGood Review",
        rating: 5,
        text: "Incredible experience. Every expectation was exceeded."
    },
    {
        name: "Sakshi & Tanmay",
        event: "WedMeGood Review",
        rating: 5,
        text: "Exceptional service. Every single detail was perfect."
    },
    {
        name: "Pooja & Sameer",
        event: "WedMeGood Review",
        rating: 5,
        text: "Highly creative. Exceptionally accommodating team."
    },
    {
        name: "Riya & Karan",
        event: "WedMeGood Review",
        rating: 5,
        text: "Fantastic work. They truly go above and beyond."
    }
];

const Testimonials = () => {
    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    };

    return (
        <main className="testimonials-page">
            <section className="testimonials-hero">
                <div className="container relative">
                    <img src="/logo-v2.png" alt="" className="hero-ghost-logo" />
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="hero-content-wrap"
                    >
                        <span className="eyebrow-gold">CLIENT LOVE</span>
                        <h1 className="hero-title">
                            What our families <br /><span className="italic">have to say.</span>
                        </h1>
                        <p className="hero-subtext">
                            Real stories of magical journeys, curated with love and precision by Vadhaiyaan.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="testimonials-grid-section">
                <div className="container">
                    <div className="testimonials-masonry">
                        {testimonials.map((item, index) => (
                            <motion.div
                                key={index}
                                {...fadeIn}
                                transition={{ ...fadeIn.transition, delay: index * 0.1 }}
                                className="testimonial-grid-card"
                            >
                                <div className="card-stars">
                                    {[...Array(item.rating)].map((_, i) => (
                                        <Star key={i} size={14} fill="#C6A75E" stroke="none" />
                                    ))}
                                </div>
                                <p className="card-text">"{item.text}"</p>
                                <div className="card-footer">
                                    <h4 className="author-name">{item.name}</h4>
                                    <span className="event-label">{item.event}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <style jsx>{`
                .testimonials-page {
                    background-color: #FFFFFF;
                    color: #1A1A1A;
                    min-height: 100vh;
                }

                .container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 0 40px;
                }

                .relative { position: relative; }

                /* Hero Section */
                .testimonials-hero {
                    padding: 180px 0 100px;
                    background-color: #FDFDFB;
                    text-align: center;
                    position: relative;
                    overflow: hidden;
                }

                .hero-ghost-logo {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    height: 220px;
                    opacity: 0.03;
                    pointer-events: none;
                }

                .hero-content-wrap {
                    position: relative;
                    z-index: 1;
                }

                .eyebrow-gold {
                    font-family: var(--font-ui);
                    font-size: 11px;
                    letter-spacing: 0.5em;
                    color: #C6A75E;
                    display: block;
                    margin-bottom: 25px;
                    text-transform: uppercase;
                }

                .hero-title {
                    font-family: var(--font-display);
                    font-size: clamp(2.5rem, 6vw, 4.5rem);
                    font-weight: 300;
                    line-height: 1.1;
                    margin-bottom: 30px;
                }

                .hero-title .italic { font-style: italic; color: #1A1A1A; opacity: 0.8; }

                .hero-subtext {
                    font-family: var(--font-body);
                    font-size: 18px;
                    color: #666666;
                    max-width: 600px;
                    margin: 0 auto;
                    font-weight: 300;
                    line-height: 1.6;
                }

                /* Grid Layout */
                .testimonials-grid-section {
                    padding: 100px 0;
                }

                .testimonials-masonry {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 40px;
                }

                .testimonial-grid-card {
                    background: #FFFFFF;
                    padding: 50px;
                    border: 1px solid rgba(198, 167, 94, 0.1);
                    border-radius: 4px;
                    display: flex;
                    flex-direction: column;
                    transition: all 0.5s ease;
                }

                .testimonial-grid-card:hover {
                    transform: translateY(-5px);
                    border-color: rgba(198, 167, 94, 0.3);
                    box-shadow: 0 20px 40px rgba(0,0,0,0.03);
                }

                .card-stars {
                    display: flex;
                    gap: 4px;
                    margin-bottom: 30px;
                }

                .card-text {
                    font-family: var(--font-display);
                    font-size: 26px;
                    line-height: 1.5;
                    font-style: italic;
                    font-weight: 300;
                    color: #1A1A1A;
                    margin-bottom: 40px;
                    flex-grow: 1;
                }

                .card-footer {
                    font-family: var(--font-ui);
                }

                .author-name {
                    font-size: 14px;
                    font-weight: 600;
                    letter-spacing: 0.1em;
                    text-transform: uppercase;
                    margin-bottom: 5px;
                }

                .event-label {
                    font-size: 10px;
                    color: #C6A75E;
                    letter-spacing: 0.2em;
                    text-transform: uppercase;
                }

                @media (max-width: 992px) {
                    .testimonials-masonry {
                        grid-template-columns: 1fr;
                    }
                    
                    .testimonial-grid-card {
                        padding: 40px 30px;
                    }

                    .card-text {
                        font-size: 22px;
                    }
                }

                @media (max-width: 768px) {
                    .testimonials-hero {
                        padding: 140px 0 60px;
                    }

                    .hero-title {
                        font-size: 36px;
                    }

                    .hero-subtext {
                        font-size: 16px;
                    }
                }
            `}</style>
        </main>
    );
};

export default Testimonials;
