import React from 'react';
import { motion } from 'framer-motion';

const AboutV2 = () => {
    return (
        <div className="about-v2-container">
            {/* THE COLLECTIVE — LOGO AESTHETIC SECTION */}
            <section className="about-collective">
                <div className="container">
                    <div className="aesthetic-grid">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                            className="logo-style-header"
                        >
                            <span className="brand-label">THE COLLECTIVE</span>
                            <h2 className="brand-title">VADHAIYAAN</h2>
                        </motion.div>

                        <div className="narrative-wrap">
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 2, delay: 0.5 }}
                                className="narrative-main"
                            >
                                <h3 className="sub-tagline italic">Where modern luxury meets timeless tradition.</h3>
                                <p className="body-text">
                                    Vadhaiyaan is more than an event agency; it is a creative collective
                                    dedicated to the art of celebration. We believe that every wedding
                                    is a bespoke masterpiece, waiting to be curated with precision,
                                    passion, and a touch of magic.
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 2, delay: 1 }}
                                className="narrative-sub"
                            >
                                <p className="body-text">
                                    Our approach is rooted in the philosophy of high-end editorial
                                    storytelling—where every detail, from the first light to the final
                                    dance, is part of a larger narrative.
                                </p>
                                <div className="editorial-signature">
                                    <span className="sc-label">ARTFULLY CURATED BY</span>
                                    <span className="sc-brand">VADHAIYAAN</span>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* MINIMALIST METADATA (Stats) */}
            <section className="aesthetic-stats">
                <div className="container">
                    <div className="stats-row">
                        {[
                            { val: '100+', label: 'CELEBRATIONS', highlight: true },
                            { val: '06', label: 'SERVICES', highlight: true },
                            { val: '03', label: 'VISIONARIES', highlight: true },
                            { val: '100%', label: 'PROMISE', highlight: true }
                        ].map((s, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.98 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 1, delay: i * 0.1 }}
                                className={`stat-block ${s.highlight ? 'orange-highlight' : ''}`}
                            >
                                <span className="stat-v italic">{s.val}</span>
                                <span className="stat-l">{s.label}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <style jsx>{`
                .about-v2-container {
                    background-color: #0F0F0F; /* Deep premium black */
                    color: #FFFFFF;
                    overflow: hidden;
                    padding: 180px 0 100px;
                }

                .container {
                    max-width: 1100px;
                    margin: 0 auto;
                    padding: 0 40px;
                }

                /* Header Alignment — Logo Format */
                .logo-style-header {
                    text-align: center;
                    margin-bottom: 120px;
                }

                .brand-label {
                    display: block;
                    font-family: var(--font-ui);
                    font-size: 11px;
                    letter-spacing: 0.8em;
                    color: var(--color-primary);
                    margin-bottom: 24px;
                    text-transform: uppercase;
                    opacity: 0.8;
                }

                .brand-title {
                    font-family: var(--font-display);
                    font-size: 88px;
                    letter-spacing: 0.4em;
                    font-weight: 300;
                    margin-left: 0.4em; /* Compensate for last letter spacing */
                    color: var(--color-primary); /* Brand Orange/Gold */
                    line-height: 1;
                    text-transform: uppercase;
                }

                /* Narrative Layout */
                .narrative-wrap {
                    display: grid;
                    grid-template-columns: 1.1fr 0.9fr;
                    gap: 120px;
                    align-items: start;
                }

                .sub-tagline {
                    font-size: 42px;
                    margin-bottom: 48px;
                    line-height: 1.2;
                    font-weight: 300;
                    color: #FFFFFF !important; /* Force high contrast white */
                    opacity: 1 !important;
                }

                .italic {
                    font-style: italic;
                    color: inherit;
                }

                .body-text {
                    font-size: 19px;
                    line-height: 1.8;
                    color: rgba(255, 255, 255, 0.6);
                    font-weight: 300;
                }

                .narrative-sub {
                    margin-top: 100px;
                }

                .editorial-signature {
                    margin-top: 80px;
                    padding-top: 40px;
                    border-top: 1px solid rgba(255, 255, 255, 0.1);
                    display: flex;
                    flex-direction: column;
                    gap: 12px;
                }

                .sc-label {
                    font-family: var(--font-ui);
                    font-size: 9px;
                    letter-spacing: 0.4em;
                    color: var(--color-primary);
                    opacity: 0.6;
                }

                .sc-brand {
                    font-family: var(--font-display);
                    font-size: 24px;
                    letter-spacing: 0.3em;
                    font-weight: 300;
                    color: var(--color-primary); /* Consistent Brand Orange */
                }

                /* Stats Aesthetics */
                .aesthetic-stats {
                    margin-top: 80px;
                    padding-top: 60px;
                    border-top: 1px solid rgba(255, 255, 255, 0.05);
                }

                .stats-row {
                    display: flex;
                    justify-content: space-between;
                }

                .stat-block {
                    text-align: left;
                }

                .stat-v {
                    font-size: 54px;
                    display: block;
                    color: var(--color-primary);
                    margin-bottom: 8px;
                    font-weight: 300;
                }

                .stat-l {
                    font-family: var(--font-ui);
                    font-size: 10px;
                    letter-spacing: 0.3em;
                    color: rgba(255, 255, 255, 0.4);
                    text-transform: uppercase;
                }

                .stat-block.orange-highlight .stat-v {
                    color: #FF4D00; /* Vibrant Orange */
                    text-shadow: 0 0 20px rgba(255, 77, 0, 0.2);
                }

                @media (max-width: 992px) {
                    .about-v2-container { padding: 80px 0 60px; }
                    .logo-style-header { margin-bottom: 60px; }
                    .brand-title { 
                        font-size: 32px; /* Reduced further to prevent overflow */
                        letter-spacing: 0.15em; /* Adjusted for mobile fit */
                        margin-left: 0.15em; 
                    }
                    .brand-label { font-size: 9px; letter-spacing: 0.4em; margin-bottom: 16px; }
                    
                    .narrative-wrap { 
                        grid-template-columns: 1fr; 
                        gap: 40px; 
                        text-align: center;
                    }
                    .sub-tagline { 
                        font-size: 28px; 
                        margin-bottom: 32px; 
                        color: #FFFFFF !important; 
                        opacity: 1 !important;
                    }
                    .body-text { font-size: 16px; }
                    .narrative-sub { margin-top: 0; }
                    
                    .editorial-signature { 
                        margin-top: 60px; 
                        padding-top: 30px;
                        align-items: center;
                    }
                    .sc-brand { font-size: 20px; color: var(--color-primary); }
                    
                    .aesthetic-stats { margin-top: 40px; padding-top: 40px; }
                    .stats-row { 
                        display: grid; 
                        grid-template-columns: 1fr 1fr; 
                        gap: 40px; 
                    }
                    .stat-block { text-align: center; }
                    .stat-v { font-size: 42px; }
                }
            `}</style>
        </div>
    );
};

export default AboutV2;
