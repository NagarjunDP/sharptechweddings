import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Star } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

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

const TestimonialsSlider = () => {
  return (
    <section className="testimonials section">
      <div className="container">
        <div className="testimonials-header text-center">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="eyebrow"
          >
            CLIENT LOVE
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="section-title"
          >
            What <span className="italic">our families</span> say
          </motion.h2>
        </div>

        <div className="testimonials-slider-wrapper">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="testimonials-swiper"
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="testimonial-card"
                >
                  <div className="rating">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} size={14} fill="#C6A75E" stroke="none" />
                    ))}
                  </div>
                  <p className="testimonial-text">"{item.text}"</p>
                  <div className="testimonial-author">
                    <h4 className="author-name">{item.name}</h4>
                    <span className="event-meta">{item.event}</span>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <style jsx>{`
        .testimonials {
          background-color: #FDFDFB;
          padding: 120px 0;
          overflow: hidden;
        }

        .testimonials-header {
          text-align: center;
          margin-bottom: 80px;
        }

        .eyebrow {
          font-family: var(--font-ui);
          text-transform: uppercase;
          letter-spacing: 0.4em;
          color: #C6A75E;
          font-size: 11px;
          font-weight: 500;
          margin-bottom: 20px;
          display: block;
        }

        .section-title {
          font-family: var(--font-display);
          font-size: clamp(2rem, 5vw, 3.5rem);
          line-height: 1.2;
          font-weight: 300;
          color: #1A1A1A;
        }

        .italic {
          font-style: italic;
          color: #1A1A1A; /* Solid black for visibility */
          opacity: 1; /* Ensure full visibility */
        }

        .testimonials-slider-wrapper {
          padding: 20px 0 60px;
        }

        .testimonial-card {
          background-color: #FFFFFF;
          padding: 50px 40px;
          border: 1px solid rgba(198, 167, 94, 0.1);
          height: 100%;
          display: flex;
          flex-direction: column;
          text-align: center;
          transition: all 0.5s ease;
          border-radius: 4px;
        }

        .testimonial-card:hover {
          transform: translateY(-5px);
          border-color: rgba(198, 167, 94, 0.4);
          box-shadow: 0 15px 40px rgba(0,0,0,0.05);
        }

        .rating {
          display: flex;
          gap: 5px;
          margin-bottom: 25px;
          justify-content: center;
        }

        .testimonial-text {
          font-family: var(--font-display);
          font-size: 20px;
          color: #1A1A1A;
          line-height: 1.6;
          margin-bottom: 35px;
          flex-grow: 1;
          font-style: italic;
          font-weight: 400;
        }

        .testimonial-author {
          font-family: var(--font-ui);
        }

        .author-name {
          font-size: 14px;
          font-weight: 600;
          color: #1A1A1A;
          letter-spacing: 0.1em;
          margin-bottom: 5px;
          display: block;
          text-transform: uppercase;
        }

        .event-meta {
          font-size: 10px;
          color: #C6A75E;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          font-weight: 500;
        }

        :global(.swiper-pagination-bullet-active) {
          background: #C6A75E !important;
        }

        @media (max-width: 992px) {
          .section-title {
            font-size: 32px;
          }
        }

        @media (max-width: 768px) {
          .testimonials {
            padding: 80px 0;
          }

          .testimonial-card {
            padding: 40px 30px;
          }

          .testimonial-text {
            font-size: 18px;
          }
        }
      `}</style>
    </section>
  );
};

export default TestimonialsSlider;
