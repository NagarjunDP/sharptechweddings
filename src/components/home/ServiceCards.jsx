import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const services = [
  {
    title: "Venue Booking",
    description: "Finding the perfect stage for your story",
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80",
    icon: "🏛️"
  },
  {
    title: "Decoration",
    description: "Transforming spaces into breathtaking backdrops",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80",
    icon: "🌸"
  },
  {
    title: "Entertainment",
    description: "Performers, DJs, live acts — curated for your vibe",
    image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80",
    icon: "🎶"
  },
  {
    title: "Photography",
    description: "Capturing every tear, laugh, and stolen glance",
    image: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&q=80",
    icon: "📸"
  },
  {
    title: "Choreography",
    description: "Your first dance, perfectly choreographed",
    image: "https://images.unsplash.com/photo-1547153760-18fc86324498?auto=format&fit=crop&q=80",
    icon: "💃"
  },
  {
    title: "Hospitality",
    description: "Seamless guest experience, start to finish",
    image: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?auto=format&fit=crop&q=80",
    icon: "🤝"
  }
];

const ServiceCards = () => {
  return (
    <section className="services section">
      <div className="container">
        <div className="services-header">
          <span className="eyebrow">Our Services</span>
          <h2 className="section-title">Everything you need<br />for a perfect celebration</h2>
        </div>
      </div>

      <div className="services-slider-container">
        <Swiper
          modules={[Navigation, Pagination, Mousewheel]}
          spaceBetween={20}
          slidesPerView={1.2}
          grabCursor={true}
          resistance={true}
          resistanceRatio={0.85}
          touchRatio={1.5}
          slideToClickedSlide={true}
          mousewheel={{ forceToAxis: true }}
          breakpoints={{
            640: { slidesPerView: 2.2, spaceBetween: 30 },
            1024: { slidesPerView: 3.5, spaceBetween: 30 },
          }}
          className="services-swiper"
        >
          {services.map((service, index) => (
            <SwiperSlide key={index}>
              <motion.div
                className="service-card"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="service-image-wrapper">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="service-image"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="service-overlay"></div>
                </div>
                <div className="service-content">
                  <span className="service-icon">{service.icon}</span>
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-description">{service.description}</p>
                 <Link to="/services" className="service-link">Explore Service</Link>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx>{`
        .services {
            background-color: var(--color-mist);
            padding: 100px 0;
        }

        .services-header {
            text-align: center;
            margin-bottom: 80px;
        }

        .eyebrow {
            font-family: var(--font-ui);
            text-transform: uppercase;
            letter-spacing: 0.25em;
            color: var(--color-charcoal);
            font-size: 11px;
            font-weight: 300;
            margin-bottom: 15px;
            display: block;
        }

        .section-title {
            font-family: var(--font-display);
            font-size: 48px;
            line-height: 1.1;
            font-weight: 300;
            font-style: italic;
            color: var(--color-charcoal);
        }

        .services-slider-container {
            padding: 0 40px;
        }

        .services-swiper {
            padding-bottom: 60px !important;
        }

        .service-card {
            background: #FFFFFF;
            border-radius: 0;
            overflow: hidden;
            height: 100%;
            display: flex;
            flex-direction: column;
            border: 1px solid rgba(0,0,0,0.03);
            transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
            will-change: transform;
            transform: translateZ(0);
            backface-visibility: hidden;
        }

        .service-image-wrapper {
            position: relative;
            aspect-ratio: 4/5;
            overflow: hidden;
            will-change: transform;
            transform: translateZ(0);
        }

        .service-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 1.2s cubic-bezier(0.16, 1, 0.3, 1);
            will-change: transform;
            transform: translateZ(0);
        }

        .service-card:hover .service-image {
            transform: scale(1.08) translateZ(0);
        }

        .service-overlay {
            position: absolute;
            top: 0; left: 0; width: 100%; height: 100%;
            background: linear-gradient(to bottom, transparent, rgba(0,0,0,0.2));
            opacity: 0;
            transition: opacity 0.6s ease;
        }

        .service-card:hover .service-overlay {
            opacity: 1;
        }

        .service-content {
            padding: 30px;
            flex-grow: 1;
            display: flex;
            flex-direction: column;
        }

        .service-icon {
            font-size: 24px;
            margin-bottom: 20px;
            display: block;
        }

        .service-title {
            font-family: var(--font-display);
            font-size: 24px;
            margin-bottom: 12px;
            font-weight: 300;
            letter-spacing: 0.05em;
        }

        .service-description {
            font-family: var(--font-ui);
            font-size: 14px;
            color: var(--color-text-muted);
            line-height: 1.6;
            margin-bottom: 25px;
            font-weight: 300;
        }

        .service-link {
            margin-top: auto;
            font-family: var(--font-ui);
            font-size: 10px;
            letter-spacing: 0.2em;
            text-transform: uppercase;
            color: var(--color-charcoal);
            text-decoration: none;
            border-bottom: 1px solid rgba(0,0,0,0.1);
            padding-bottom: 4px;
            width: fit-content;
            transition: border-color 0.3s ease;
        }

        .service-link:hover {
            border-color: var(--color-primary);
        }

        @media (max-width: 768px) {
            .services { padding: 60px 0; }
            .services-header { margin-bottom: 40px; }
            .section-title { font-size: 32px; padding: 0 20px; }
            .services-slider-container { padding: 0 20px; }
            
            .service-content { padding: 20px; }
            .service-title { font-size: 20px; }
            .service-description { font-size: 13px; margin-bottom: 20px; }
        }
      `}</style>
    </section>
  );
};

export default ServiceCards;
