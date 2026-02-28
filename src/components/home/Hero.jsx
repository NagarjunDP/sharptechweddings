import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  const videoRef = useRef(null);
  const { scrollY } = useScroll();

  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  // Subtle parallax effect
  const y = useTransform(scrollY, [0, 500], [0, 80]);

  const videoUrl =
    "https://res.cloudinary.com/dvixsy4wh/video/upload/f_auto,q_auto,vc_auto/07_HALDI_TEASER_twxkxv";

  return (
    <section className="hero">
      <motion.div
        className="hero-video-container"
        style={{ y }}
      >
        <motion.video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="hero-video"
          initial={{ scale: 1 }}
          animate={{ scale: isMobile ? 1.02 : 1.05 }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
          }}
        >
          <source src={videoUrl} type="video/mp4" />
        </motion.video>

        <div className="hero-overlay" />
      </motion.div>

      <div className="container hero-content">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Logo Branding - Ultra Grandeur Scale */}
          <div className="hero-logo-container">
            <img
              src="/logo-v2.png"
              alt="Vadhaiyaan"
              className="hero-brand-logo-max"
            />
          </div>

          <div className="text-blur-wrapper">
            <div className="hero-label-minimal">
              WEDDING PLANNING SERVICE
            </div>

            <h1 className="hero-title-refined">
              Making your happily <br />
              ever after <span className="highlight-magical">‘MAGICAL’</span>
            </h1>

            <p className="hero-subtext-refined">
              Crafting your most beautiful moments forever — where every detail tells your unique story.
            </p>
          </div>

          <div className="hero-actions-creative">
            <Link to="/contact" className="btn-vadhaiyaan-gold">
              <span className="btn-text">PLAN NOW</span>
              <div className="btn-glow" />
            </Link>
          </div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        className="hero-scroll-indicator"
      >
        <ChevronDown size={28} strokeWidth={1} />
      </motion.div>

      <style jsx>{`
        .hero {
          position: relative;
          height: 100vh;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #000;
        }

        .hero-video-container {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          z-index: 0;
        }

        .hero-video {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .hero-overlay {
          position: absolute;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle at center, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.4) 100%);
          z-index: 1;
        }

        .hero-content {
          position: relative;
          z-index: 2;
          text-align: center;
          color: white;
          padding: 0 20px;
          margin-top: 40px;
        }

        .hero-logo-container {
          margin-bottom: 20px;
          display: flex;
          justify-content: center;
        }

        .hero-brand-logo-max {
          height: 280px;
          filter: brightness(0) invert(1);
          opacity: 0.98;
          transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .text-blur-wrapper {
          background: rgba(0, 0, 0, 0.1);
          backdrop-filter: blur(4px);
          -webkit-backdrop-filter: blur(4px);
          padding: 20px;
          border-radius: 20px;
          display: inline-block;
          max-width: 800px;
          margin-bottom: 30px;
        }

        .hero-label-minimal {
          font-family: var(--font-ui);
          font-size: 10px;
          letter-spacing: 0.5em;
          opacity: 0.85;
          margin-bottom: 20px;
          font-weight: 400;
          text-transform: uppercase;
        }

        .hero-title-refined {
          font-family: var(--font-display);
          font-size: clamp(1.8rem, 4vw, 2.8rem);
          font-weight: 300;
          line-height: 1.25;
          letter-spacing: 0.02em;
          margin-bottom: 20px;
        }

        .italic {
          font-style: italic;
          font-weight: 400;
          opacity: 1;
          color: #FFFFFF;
        }

        .highlight-magical {
          color: #C6A75E;
          font-style: italic;
          text-shadow: 0 0 15px rgba(198, 167, 94, 0.3);
          font-weight: 400;
        }

        .hero-subtext-refined {
          font-family: var(--font-ui);
          font-size: 14px;
          font-weight: 300;
          letter-spacing: 0.08em;
          max-width: 500px;
          margin: 0 auto;
          opacity: 0.8;
          line-height: 1.7;
        }

        /* Golden Enhanced CTA */
        .hero-actions-creative {
          display: flex;
          justify-content: center;
          margin-top: 30px;
        }

        .btn-vadhaiyaan-gold {
          position: relative;
          text-decoration: none;
          padding: 18px 55px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #C6A75E; /* Solid Brand Gold */
          border-radius: 100px / 45px; /* Premium Arched Ellipse */
          transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(198, 167, 94, 0.3);
        }

        .btn-text {
          color: #FFFFFF; /* High contrast white on gold */
          font-family: var(--font-ui);
          font-size: 12px;
          letter-spacing: 0.45em;
          font-weight: 600;
          z-index: 2;
          transition: all 0.6s ease;
        }

        .btn-glow {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, rgba(255,255,255,0.2) 0%, transparent 100%);
          opacity: 0;
          transition: opacity 0.6s ease;
          z-index: 1;
        }

        .btn-vadhaiyaan-gold:hover {
          transform: translateY(-5px) scale(1.03);
          box-shadow: 0 20px 50px rgba(198, 167, 94, 0.5);
          background: #D4B66B; /* Slightly lighter gold on hover */
        }

        .btn-vadhaiyaan-gold:hover .btn-glow {
          opacity: 1;
        }

        .btn-vadhaiyaan-gold:hover .btn-text {
          letter-spacing: 0.55em;
          text-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
        }

        .hero-scroll-indicator {
          position: absolute;
          bottom: 30px;
          left: 50%;
          transform: translateX(-50%);
          color: white;
          opacity: 0.4;
          z-index: 2;
        }

        @media (max-width: 768px) {
          .hero-brand-logo-max {
            height: 180px;
          }
          
          .text-blur-wrapper {
            padding: 15px;
            margin-bottom: 25px;
          }

          .hero-title-refined {
            font-size: 26px;
          }

          .btn-vadhaiyaan-gold {
            padding: 14px 45px;
            border-radius: 100px / 40px;
          }

          .btn-text {
            font-size: 11px;
            letter-spacing: 0.35em;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;