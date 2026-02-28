import React from 'react';
import { motion } from 'framer-motion';

const services = [
    {
        id: "venue-booking",
        title: "Venue Booking",
        description: "Finding the perfect stage for your story. We scout, negotiate, and secure the most stunning locations that align with your vision and guest count.",
        includes: ["Destination Scouting", "Price Negotiation", "Contract Management", "Site Inspections"],
        image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80"
    },
    {
        id: "decoration",
        title: "Decoration",
        description: "Transforming spaces into breathtaking backdrops. Our in-house design team crafts bespoke themes, from traditional elegance to modern chic.",
        includes: ["Theme Design", "Floral Arrangements", "Lighting Concepts", "Stage & Mandap Decor"],
        image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80"
    },
    {
        id: "entertainment",
        title: "Entertainment",
        description: "Performers, DJs, live acts — curated for your vibe. We bring the energy and soul to your celebration with world-class artists.",
        includes: ["Live Bands & Singers", "Celebrity DJs", "Traditional Performers", "Sound & AV Setup"],
        image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80"
    },
    {
        id: "photography",
        title: "Photography",
        description: "Capturing every tear, laugh, and stolen glance. Our cinematographers tell your story through an editorial and emotional lens.",
        includes: ["Candid Photography", "Cinematic Films", "Pre-wedding Shoots", "Same-day Edits"],
        image: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&q=80"
    },
    {
        id: "choreography",
        title: "Choreography",
        description: "Your first dance, perfectly choreographed. We bring professional dance masters to ensure your Sangeet is nothing short of a Bollywood production.",
        includes: ["Sangeet Production", "Concept Choreography", "Backstage Management", "Music Mixing"],
        image: "https://images.unsplash.com/photo-1547153760-18fc86324498?auto=format&fit=crop&q=80"
    },
    {
        id: "hospitality",
        title: "Hospitality",
        description: "Seamless guest experience, start to finish. We handle the RSVPs, check-ins, and on-ground helpdesk so you can be a guest at your own wedding.",
        includes: ["RSVP Management", "Helpdesk Setup", "Airport Transfers", "Room Placement"],
        image: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?auto=format&fit=crop&q=80"
    }
];

const Services = () => {
    return (
        <main className="services-page">
            <section className="services-hero">
                <div className="container relative">
                    <img src="/logo-v2.png" alt="" className="services-hero-ghost" />
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2 }}
                        className="services-hero-content"
                    >
                        <span className="eyebrow-gold">OUR OFFERINGS</span>
                        <h1 className="hero-title">
                            Refined Services for <br /><span className="italic">Unforgettable</span> Events
                        </h1>
                    </motion.div>
                </div>
            </section>

            {services.map((service, index) => (
                <section key={service.id} className="service-detail-section" id={service.id}>
                    <div className="container service-detail-grid">
                        <motion.div
                            className={`service-detail-content ${index % 2 !== 0 ? 'order-2' : ''}`}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <span className="service-number">0{index + 1}</span>
                            <h2 className="service-detail-title">{service.title}</h2>
                            <p className="service-detail-desc">{service.description}</p>
                            <ul className="service-includes">
                                {service.includes.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                            <a href="/contact" className="btn-vadhaiyaan-gold">Request Consultation</a>
                        </motion.div>

                        <motion.div
                            className="service-detail-image-wrapper"
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <img src={service.image} alt={service.title} className="service-image-refined" />
                        </motion.div>
                    </div>
                </section>
            ))}

            <style jsx>{`
        .services-page { background-color: var(--color-bg); }
        .relative { position: relative; }
        
        /* Compact Creative Hero */
        .services-hero { 
            padding: 140px 0 60px; /* Highly reduced from 200px+ */
            background-color: #FDFDFB; 
            text-align: center;
            overflow: hidden;
            position: relative;
        }

        .services-hero-ghost {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            height: 180px;
            opacity: 0.03;
            pointer-events: none;
        }

        .services-hero-content {
            position: relative;
            z-index: 1;
        }

        .eyebrow-gold {
            font-family: var(--font-ui);
            font-size: 10px;
            letter-spacing: 0.5em;
            color: #C6A75E;
            display: block;
            margin-bottom: 20px;
            text-transform: uppercase;
        }

        .hero-title { 
            font-family: var(--font-display); 
            font-size: clamp(2rem, 5vw, 4rem); 
            color: var(--color-charcoal); 
            line-height: 1.1; 
            font-weight: 300;
        }
        .hero-title .italic { font-style: italic; color: #C6A75E; }
        
        /* Detailed Sections */
        .service-detail-section {
          min-height: 60vh;
          display: flex;
          align-items: center;
          padding: 80px 0; /* Reduced from 120px */
          border-bottom: 1px solid rgba(0,0,0,0.03);
        }
        
        .service-detail-section:nth-child(even) { background-color: #F8F5F0; }
        
        .service-detail-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px; /* Reduced gap */
          align-items: center;
        }

        .service-number {
            font-family: var(--font-display);
            font-size: 14px;
            color: #C6A75E;
            display: block;
            margin-bottom: 20px;
            font-weight: 300;
            letter-spacing: 0.2em;
        }
        
        .service-detail-title { 
            font-family: var(--font-display); 
            font-size: clamp(2rem, 4vw, 3.2rem); 
            margin-bottom: 25px; 
            color: var(--color-charcoal); 
            font-style: italic; 
            font-weight: 300;
        }
        .service-detail-desc { 
            font-family: var(--font-body); 
            font-size: 1.1rem; 
            color: #555555; 
            margin-bottom: 35px; 
            line-height: 1.7; 
            font-weight: 300;
        }
        
        .service-includes { 
            margin-bottom: 45px; 
            display: grid; 
            grid-template-columns: 1fr 1fr; 
            gap: 12px; 
        }
        .service-includes li {
          position: relative;
          padding-left: 20px;
          font-family: var(--font-ui);
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: #666666;
        }
        .service-includes li::before {
          content: '✦';
          position: absolute;
          left: 0;
          color: #C6A75E;
          font-size: 10px;
        }

        .btn-vadhaiyaan-gold {
            display: inline-block;
            padding: 16px 36px;
            background: #C6A75E;
            color: white;
            font-family: var(--font-ui);
            font-size: 11px;
            letter-spacing: 0.2em;
            text-transform: uppercase;
            text-decoration: none;
            transition: all 0.4s ease;
        }

        .btn-vadhaiyaan-gold:hover {
            background: #B59650;
            transform: translateY(-2px);
            box-shadow: 0 10px 20px rgba(198, 167, 94, 0.2);
        }
        
        .service-detail-image-wrapper {
            position: relative;
            overflow: hidden;
        }

        .service-image-refined {
          width: 100%;
          height: 550px; /* Reduced height for compactness */
          object-fit: cover;
          box-shadow: 0 15px 40px rgba(0,0,0,0.06);
          filter: grayscale(10%) contrast(105%);
        }
        
        .order-2 { order: 2; }
        
        @media (max-width: 992px) {
          .services-hero { padding: 100px 0 40px; }
          .service-detail-section { padding: 60px 0; }
          .service-detail-grid { grid-template-columns: 1fr; gap: 40px; }
          .order-2 { order: 0; }
          .service-image-refined { height: 350px; }
          .service-detail-title { font-size: 2.2rem; }
          .service-includes { grid-template-columns: 1fr; }
        }
      `}</style>
        </main>
    );
};

export default Services;
