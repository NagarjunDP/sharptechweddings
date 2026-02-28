import React from 'react';
import { motion } from 'framer-motion';

const OurFilms = () => {
    const videoId = "llJSCTTvDb4";

    return (
        <section id="films" className="our-films">
            <div className="container">
                <div className="films-header">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="brand-label"
                    >
                        CINEMATIC TALES
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="films-title italic"
                    >
                        Our Films
                    </motion.h2>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    className="film-player-container"
                >
                    <div className="film-frame">
                        <iframe
                            className="film-iframe"
                            src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&autohide=1&showinfo=0`}
                            title="Vadhaiyaan Highlight Film"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                    <div className="film-accents">
                        <div className="accent-line top-left"></div>
                        <div className="accent-line bottom-right"></div>
                    </div>
                </motion.div>

                <div className="films-footer">
                    <p className="narrative-text">
                        Every frame is a curated memory, every second a story of love.
                        Experience the grandeur of Vadhaiyaan weddings.
                    </p>
                    <a href="/gallery#films" className="view-more-link">
                        VIEW ALL FILMS
                    </a>
                </div>
            </div>

            <style jsx>{`
                .our-films {
                    background-color: #0A0A0A;
                    padding: 160px 0;
                    color: #FFFFFF;
                }

                .films-header {
                    text-align: center;
                    margin-bottom: 100px;
                }

                .brand-label {
                    display: block;
                    font-family: var(--font-ui);
                    font-size: 11px;
                    letter-spacing: 0.6em;
                    color: var(--color-primary);
                    margin-bottom: 24px;
                    text-transform: uppercase;
                }

                .films-title {
                    font-family: var(--font-display);
                    font-size: 64px;
                    font-weight: 300;
                    color: #FFFFFF;
                }

                .film-player-container {
                    position: relative;
                    max-width: 1000px;
                    margin: 0 auto;
                }

                .film-frame {
                    position: relative;
                    padding-bottom: 56.25%; /* 16:9 */
                    height: 0;
                    background: #111;
                    box-shadow: 0 40px 100px rgba(0,0,0,0.5);
                    z-index: 2;
                    overflow: hidden;
                    border: 1px solid rgba(255,255,255,0.05);
                }

                .film-iframe {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    filter: grayscale(0.2) contrast(1.1);
                    transition: filter 0.8s ease;
                }

                .film-iframe:hover {
                    filter: grayscale(0) contrast(1);
                }

                /* Luxury accents */
                .film-accents {
                    position: absolute;
                    top: -20px;
                    left: -20px;
                    right: -20px;
                    bottom: -20px;
                    pointer-events: none;
                    z-index: 1;
                }

                .accent-line {
                    position: absolute;
                    width: 60px;
                    height: 60px;
                    border: 1px solid var(--color-primary);
                    opacity: 0.3;
                }

                .top-left { top: 0; left: 0; border-right: 0; border-bottom: 0; }
                .bottom-right { bottom: 0; right: 0; border-left: 0; border-top: 0; }

                .films-footer {
                    margin-top: 80px;
                    text-align: center;
                }

                .narrative-text {
                    font-family: var(--font-ui);
                    font-size: 16px;
                    color: rgba(255,255,255,0.5);
                    max-width: 500px;
                    margin: 0 auto 40px;
                    line-height: 1.8;
                    font-weight: 300;
                }

                .view-more-link {
                    font-family: var(--font-ui);
                    font-size: 11px;
                    letter-spacing: 0.4em;
                    color: var(--color-primary);
                    text-decoration: none;
                    transition: all 0.3s ease;
                    border-bottom: 1px solid transparent;
                    padding-bottom: 4px;
                }

                .view-more-link:hover {
                    color: #FFFFFF;
                    border-color: var(--color-primary);
                }

                @media (max-width: 768px) {
                    .our-films { padding: 100px 0; }
                    .films-title { font-size: 42px; }
                    .film-accents { display: none; }
                    .narrative-text { font-size: 14px; padding: 0 20px; }
                }
            `}</style>
        </section>
    );
};

export default OurFilms;
