import React from 'react';
import { motion } from 'framer-motion';

const teasers = [
    {
        title: "Pre Wedding Teaser",
        url: "https://www.dropbox.com/scl/fo/sd3kuy5fd50p87694887z/AE4dCab6fWWl-Uq4Seslqhk?e=1&preview=01+PRE+WEDDING+TEASER.mp4&rlkey=3q13mps7arah5svloucqv4852&st=9sfrktad&bmus=1&raw=1",
        poster: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80"
    },
    {
        title: "Sangeet Teaser",
        url: "https://www.dropbox.com/scl/fo/sd3kuy5fd50p87694887z/AE4dCab6fWWl-Uq4Seslqhk?e=1&preview=05+SANGEET+TEASER.mp4&rlkey=3q13mps7arah5svloucqv4852&st=n4oq6vbb&bmus=1&raw=1",
        poster: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80"
    },
    {
        title: "Haldi Teaser",
        url: "https://www.dropbox.com/scl/fo/sd3kuy5fd50p87694887z/AE4dCab6fWWl-Uq4Seslqhk?e=1&preview=06+HALDI+TEASER.mp4&rlkey=3q13mps7arah5svloucqv4852&st=t36pn4y9&bmus=1&raw=1",
        poster: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80"
    }
];

const DropboxTeasers = () => {
    return (
        <section className="dropbox-teasers section">
            <div className="container">
                <div className="teasers-header text-center">
                    <span className="eyebrow">Cinematic Highlights</span>
                    <h2 className="section-title">4K Film Teasers</h2>
                    <p className="subtext">Experience the magic in ultra-high definition.</p>
                </div>

                <div className="teasers-grid">
                    {teasers.map((teaser, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: index * 0.2 }}
                            className="teaser-card"
                        >
                            <div className="video-wrapper">
                                <video
                                    className="teaser-video"
                                    controls
                                    preload="metadata"
                                    poster={teaser.poster}
                                    playsInline
                                >
                                    <source src={teaser.url} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                            <h3 className="teaser-title">{teaser.title}</h3>
                        </motion.div>
                    ))}
                </div>
            </div>

            <style jsx>{`
        .dropbox-teasers {
          background-color: var(--color-white);
        }

        .text-center {
          text-align: center;
        }

        .teasers-header {
          margin-bottom: 60px;
        }

        .eyebrow {
          font-family: var(--font-sans);
          text-transform: uppercase;
          letter-spacing: 0.2em;
          color: var(--color-primary);
          font-size: 13px;
          margin-bottom: 15px;
          display: block;
        }

        .section-title {
          font-size: 48px;
          margin-bottom: 15px;
        }

        .subtext {
          font-family: var(--font-body);
          color: var(--color-text-muted);
          font-size: 16px;
        }

        .teasers-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
        }

        .teaser-card {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .video-wrapper {
          position: relative;
          padding-bottom: 56.25%; /* 16:9 Aspect Ratio */
          height: 0;
          overflow: hidden;
          border-radius: 12px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          background: #000;
        }

        .teaser-video {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .teaser-title {
          font-family: var(--font-serif);
          font-size: 24px;
          text-align: center;
          color: var(--color-text);
        }

        @media (max-width: 992px) {
          .teasers-grid {
            grid-template-columns: 1fr;
            max-width: 600px;
            margin: 0 auto;
          }
          
          .section-title {
            font-size: 36px;
          }
        }
      `}</style>
        </section>
    );
};

export default DropboxTeasers;
