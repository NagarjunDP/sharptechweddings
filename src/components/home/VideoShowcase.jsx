import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

const VideoShowcase = () => {
  // Main showcase video ID: llJSCTTvDb4
  const videoId = "llJSCTTvDb4";

  return (
    <section className="video-showcase section">
      <div className="container">
        <div className="video-header text-center">
          <span className="eyebrow">See the Magic</span>
          <h2 className="section-title">Watch the Magic Unfold</h2>
          <p className="subtext">Over 100+ events crafted with love.</p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="video-player-wrapper"
        >
          <div className="video-player-container">
            <iframe
              className="video-iframe"
              src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`}
              title="Vadhaiyaan Highlight Film"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="video-decoration"></div>
        </motion.div>

        <div className="video-footer text-center">
          <a href="/gallery#videos" className="link-arrow">Watch More Stories →</a>
        </div>
      </div>

      <style jsx>{`
        .video-showcase {
          background-color: var(--color-mist);
          padding: var(--section-padding-desktop);
        }

        .video-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .eyebrow {
          font-family: var(--font-ui);
          text-transform: uppercase;
          letter-spacing: 0.25em;
          color: var(--color-charcoal);
          font-size: 13px;
          font-weight: 300;
          margin-bottom: 15px;
          display: block;
        }

        .section-title {
          font-family: var(--font-display);
          font-size: 42px;
          line-height: 1.2;
          font-weight: 300;
          font-style: italic;
        }

        .main-video-wrapper {
          max-width: 900px;
          margin: 0 auto 50px;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 8px 40px rgba(0,0,0,0.12);
        }

        .aspect-16-9 {
          position: relative;
          padding-bottom: 56.25%;
          height: 0;
        }

        .video-iframe {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border: none;
        }

        .secondary-videos {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 30px;
          max-width: 900px;
          margin: 0 auto 50px;
        }

        .vid-thumb {
          aspect-ratio: 16 / 9;
          background-color: #EEE;
          border-radius: 8px;
          overflow: hidden;
          cursor: pointer;
        }

        .also-watch {
          text-align: center;
          margin-top: 40px;
        }

        .watch-label {
          font-family: var(--font-ui);
          font-size: 11px;
          letter-spacing: 0.2em;
          color: var(--color-charcoal);
          display: block;
          margin-bottom: 20px;
        }

        .dropbox-link {
          font-family: var(--font-ui);
          font-size: 14px;
          color: var(--color-charcoal);
          display: block;
          margin-bottom: 12px;
          font-weight: 300;
        }

        @media (max-width: 768px) {
          .secondary-videos {
             grid-template-columns: 1fr;
          }
          .section-title {
            font-size: 32px;
          }
        }
      `}</style>
    </section>
  );
};

export default VideoShowcase;
