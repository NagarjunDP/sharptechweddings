import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    };

    const staggerContainer = {
        initial: { opacity: 0 },
        whileInView: { opacity: 1 },
        viewport: { once: true },
        transition: { staggerChildren: 0.2 }
    };

    return (
        <main className="about-v3">
            <div className="container-minimal">
                {/* SECTION 1: THE FOUNDATION */}
                <motion.section
                    {...staggerContainer}
                    className="about-section top-border"
                >
                    <motion.span variants={fadeIn} className="eyebrow-gold">ESTABLISHED 2019</motion.span>
                    <motion.h1 variants={fadeIn} className="about-title">
                        A creative collective <br />
                        <span className="italic">born in New Delhi.</span>
                    </motion.h1>
                    <motion.div variants={fadeIn} className="about-content-main">
                        <p>
                            Vadhaiyaan is a premier wedding planning firm located in Pitampura, Delhi.
                            Founded in 2019, we emerged from a shared vision to redefine the
                            landscape of Indian celebrations through the lens of modern luxury
                            and timeless tradition.
                        </p>
                    </motion.div>
                </motion.section>

                {/* SECTION 2: THE TRIO */}
                <motion.section
                    {...staggerContainer}
                    className="about-section"
                >
                    <motion.span variants={fadeIn} className="eyebrow-gold">THE VISIONARIES</motion.span>
                    <motion.h2 variants={fadeIn} className="about-subtitle">
                        Maddy. Aakriti. Yashnit.
                    </motion.h2>
                    <motion.div variants={fadeIn} className="about-content-sub">
                        <p>
                            Led by this dynamic trio, our team brings together diverse expertise
                            in design, logistics, and creative direction. We believe that every
                            wedding is a bespoke masterpiece, waiting to be curated with
                            precision, passion, and a touch of magic.
                        </p>
                    </motion.div>
                </motion.section>

                {/* SECTION 3: THE PHILOSOPHY */}
                <motion.section
                    {...staggerContainer}
                    className="about-section no-border"
                >
                    <motion.span variants={fadeIn} className="eyebrow-gold">OUR PHILOSOPHY</motion.span>
                    <motion.div variants={fadeIn} className="philosophy-wrap">
                        <h3 className="philo-text">
                            "We don't just plan events; we create experiences that resonate for a lifetime.
                            Every detail is artfully curated to tell <span className="italic">your</span> unique story."
                        </h3>
                    </motion.div>
                </motion.section>
            </div>

            <style jsx>{`
                .about-v3 {
                    background-color: #FFFFFF;
                    color: #1A1A1A;
                    padding: 160px 0 100px;
                    min-height: 100vh;
                }

                .container-minimal {
                    max-width: 900px;
                    margin: 0 auto;
                    padding: 0 40px;
                }

                .about-section {
                    padding: 100px 0;
                    border-top: 1px solid rgba(0,0,0,0.06);
                }

                .about-section.top-border {
                    border-top: none;
                    padding-top: 0;
                }

                .about-section.no-border {
                    border-top: none;
                }

                .eyebrow-gold {
                    font-family: var(--font-ui);
                    font-size: 10px;
                    letter-spacing: 0.5em;
                    color: #C6A75E;
                    display: block;
                    margin-bottom: 40px;
                    text-transform: uppercase;
                }

                .about-title {
                    font-family: var(--font-display);
                    font-size: clamp(2.5rem, 8vw, 5.5rem);
                    font-weight: 300;
                    line-height: 1.1;
                    margin-bottom: 60px;
                    letter-spacing: -0.01em;
                }

                .about-subtitle {
                    font-family: var(--font-display);
                    font-size: clamp(2rem, 6vw, 4rem);
                    font-weight: 300;
                    margin-bottom: 40px;
                }

                .about-content-main p {
                    font-family: var(--font-body);
                    font-size: 24px;
                    line-height: 1.6;
                    color: #444444;
                    font-weight: 300;
                    max-width: 800px;
                }

                .about-content-sub p {
                    font-family: var(--font-body);
                    font-size: 20px;
                    line-height: 1.8;
                    color: #666666;
                    font-weight: 300;
                    max-width: 700px;
                }

                .philosophy-wrap {
                    margin-top: 20px;
                }

                .philo-text {
                    font-family: var(--font-display);
                    font-size: 32px;
                    font-style: italic;
                    line-height: 1.4;
                    font-weight: 300;
                    color: #1A1A1A;
                    max-width: 750px;
                }

                .italic {
                    font-style: italic;
                    opacity: 0.8;
                }

                @media (max-width: 768px) {
                    .about-v3 { padding-top: 120px; }
                    .about-section { padding: 60px 0; }
                    .about-title { font-size: 38px; margin-bottom: 40px; }
                    .about-subtitle { font-size: 32px; }
                    .about-content-main p { font-size: 18px; }
                    .about-content-sub p { font-size: 16px; }
                    .philo-text { font-size: 24px; }
                    .eyebrow-gold { margin-bottom: 25px; }
                }
            `}</style>
        </main>
    );
};

export default About;
