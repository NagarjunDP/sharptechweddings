import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Instagram, MessageCircle } from 'lucide-react';

const Contact = () => {
    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    };

    const contactMethods = [
        {
            icon: <Phone size={20} />,
            label: "Call Us",
            value: "+91 98115 67604",
            link: "tel:+919811567604"
        },
        {
            icon: <MessageCircle size={20} />,
            label: "WhatsApp",
            value: "Chat with us",
            link: "https://wa.me/919811567604"
        },
        {
            icon: <Mail size={20} />,
            label: "Email",
            value: "hello@vadhaiyaan.com",
            link: "mailto:hello@vadhaiyaan.com"
        }
    ];

    return (
        <main className="contact-v3">
            {/* HERO SECTION */}
            <section className="contact-hero">
                <div className="container relative">
                    <img src="/logo-v2.png" alt="" className="hero-ghost-logo" />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2 }}
                        className="hero-text-wrap"
                    >
                        <span className="eyebrow-gold">STAY IN TOUCH</span>
                        <h1 className="hero-title">
                            Let's start your <br /><span className="italic">magical journey.</span>
                        </h1>
                    </motion.div>
                </div>
            </section>

            {/* DIRECT CONNECT CARDS */}
            <section className="connect-grid-section">
                <div className="container">
                    <div className="connect-masonry">
                        {contactMethods.map((method, index) => (
                            <motion.a
                                key={index}
                                href={method.link}
                                {...fadeIn}
                                transition={{ ...fadeIn.transition, delay: index * 0.1 }}
                                className="connect-card"
                                target={method.label === "WhatsApp" ? "_blank" : "_self"}
                                rel="noopener noreferrer"
                            >
                                <div className="card-icon-wrap">{method.icon}</div>
                                <div className="card-info">
                                    <span className="card-label">{method.label}</span>
                                    <h4 className="card-value">{method.value}</h4>
                                </div>
                            </motion.a>
                        ))}
                    </div>
                </div>
            </section>

            {/* ENQUIRY FORM SECTION */}
            <section className="enquiry-section">
                <div className="container enquiry-grid">
                    <motion.div {...fadeIn} className="enquiry-text">
                        <h2 className="enquiry-title">Curate Your Event</h2>
                        <p className="enquiry-subtitle">
                            Please share the initial details of your celebration. Our planning team
                            will reach out within 24 hours to begin the conversation.
                        </p>

                        <div className="location-box">
                            <MapPin size={18} className="gold-icon" />
                            <div className="loc-text">
                                <strong>Headquarters</strong><br />
                                Pitampura, New Delhi, India
                            </div>
                        </div>

                        <div className="map-wrapper">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.8392319277!2d77.0688975472!3d28.5272803437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347ec45b%3A0x280e8fcae2bd3494!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1709000000000!5m2!1sen!2sin"
                                width="100%" height="280" style={{ border: 0 }} allowFullScreen="" loading="lazy">
                            </iframe>
                            <div className="map-overlay"></div>
                        </div>
                    </motion.div>

                    <motion.div {...fadeIn} className="form-container">
                        <form className="editorial-form" onSubmit={(e) => { e.preventDefault(); alert('Inquiry sent successfully!'); }}>
                            <div className="form-group-floating">
                                <label>Your Name</label>
                                <input type="text" placeholder="Magical Name" required />
                            </div>

                            <div className="form-row-split">
                                <div className="form-group-floating">
                                    <label>Email Address</label>
                                    <input type="email" placeholder="hello@vadhaiyaan.com" required />
                                </div>
                                <div className="form-group-floating">
                                    <label>Phone</label>
                                    <input type="tel" placeholder="+91" required />
                                </div>
                            </div>

                            <div className="form-row-split">
                                <div className="form-group-floating">
                                    <label>Celebration Type</label>
                                    <select required>
                                        <option value="">Select Event</option>
                                        <option value="Wedding">Wedding</option>
                                        <option value="Engagement">Engagement</option>
                                        <option value="Corporate">Corporate</option>
                                        <option value="Other">Other Magic</option>
                                    </select>
                                </div>
                                <div className="form-group-floating">
                                    <label>Planned Date</label>
                                    <input type="date" required />
                                </div>
                            </div>

                            <div className="form-group-floating">
                                <label>The Vision</label>
                                <textarea rows="4" placeholder="Tell us about your dream..." required></textarea>
                            </div>

                            <button type="submit" className="btn-vadhaiyaan-submit">
                                Begin the Journey
                            </button>
                        </form>
                    </motion.div>
                </div>
            </section>

            <style jsx>{`
                .contact-v3 {
                    background-color: #FFFFFF;
                    color: #1A1A1A;
                    padding-bottom: 100px;
                }

                .container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 0 40px;
                }

                .relative { position: relative; }

                /* Hero Section */
                .contact-hero {
                    padding: 160px 0 80px;
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
                    height: 240px;
                    opacity: 0.03;
                    pointer-events: none;
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
                    font-size: clamp(2.5rem, 7vw, 5rem);
                    font-weight: 300;
                    line-height: 1.1;
                }

                .hero-title .italic { font-style: italic; opacity: 0.8; }

                /* Connect Cards */
                .connect-grid-section {
                    padding: 40px 0;
                    margin-top: -30px;
                }

                .connect-masonry {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 30px;
                }

                .connect-card {
                    background: #FFFFFF;
                    padding: 35px;
                    border: 1px solid rgba(198, 167, 94, 0.1);
                    display: flex;
                    align-items: center;
                    gap: 20px;
                    text-decoration: none;
                    color: inherit;
                    transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
                }

                .connect-card:hover {
                    border-color: #C6A75E;
                    transform: translateY(-5px);
                    box-shadow: 0 20px 40px rgba(198, 167, 94, 0.05);
                }

                .card-icon-wrap {
                    width: 48px;
                    height: 48px;
                    border-radius: 50%;
                    background: #FDFDFB;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #C6A75E;
                    border: 1px solid rgba(198, 167, 94, 0.1);
                }

                .card-label {
                    font-family: var(--font-ui);
                    font-size: 10px;
                    letter-spacing: 0.2em;
                    text-transform: uppercase;
                    color: #C6A75E;
                    display: block;
                    margin-bottom: 4px;
                }

                .card-value {
                    font-family: var(--font-display);
                    font-size: 18px;
                    font-weight: 400;
                }

                /* Enquiry Section */
                .enquiry-section {
                    padding: 100px 0;
                }

                .enquiry-grid {
                    display: grid;
                    grid-template-columns: 1fr 1.5fr;
                    gap: 120px;
                    align-items: flex-start;
                }

                .enquiry-title {
                    font-family: var(--font-display);
                    font-size: 42px;
                    font-weight: 300;
                    margin-bottom: 25px;
                    font-style: italic;
                }

                .enquiry-subtitle {
                    font-family: var(--font-body);
                    font-size: 17px;
                    line-height: 1.8;
                    color: #666666;
                    margin-bottom: 40px;
                    font-weight: 300;
                }

                .location-box {
                    display: flex;
                    gap: 15px;
                    margin-bottom: 40px;
                    align-items: flex-start;
                }

                .gold-icon { color: #C6A75E; margin-top: 4px; }

                .loc-text {
                    font-family: var(--font-ui);
                    font-size: 14px;
                    line-height: 1.6;
                    color: #444444;
                }

                .map-wrapper {
                   position: relative;
                   border-radius: 4px;
                   overflow: hidden;
                   box-shadow: 0 10px 30px rgba(0,0,0,0.05);
                }

                .map-overlay {
                    position: absolute;
                    top: 0; left: 0; width: 100%; height: 100%;
                    background: rgba(198, 167, 94, 0.05);
                    pointer-events: none;
                }

                /* Editorial Form */
                .form-container {
                    background: #FDFDFB;
                    padding: 80px;
                    border-radius: 4px;
                }

                .editorial-form {
                    display: flex;
                    flex-direction: column;
                    gap: 40px;
                }

                .form-group-floating {
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                }

                .form-group-floating label {
                    font-family: var(--font-ui);
                    font-size: 10px;
                    letter-spacing: 0.2em;
                    text-transform: uppercase;
                    color: #C6A75E;
                    font-weight: 600;
                }

                .form-group-floating input,
                .form-group-floating select,
                .form-group-floating textarea {
                    background: transparent;
                    border: none;
                    border-bottom: 1px solid rgba(0,0,0,0.1);
                    padding: 12px 0;
                    font-family: var(--font-display);
                    font-size: 18px;
                    outline: none;
                    transition: border-color 0.4s ease;
                }

                .form-group-floating input:focus,
                .form-group-floating select:focus,
                .form-group-floating textarea:focus {
                    border-color: #C6A75E;
                }

                .form-row-split {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 40px;
                }

                .btn-vadhaiyaan-submit {
                    padding: 20px;
                    background: #C6A75E;
                    color: white;
                    border: none;
                    font-family: var(--font-ui);
                    font-size: 11px;
                    letter-spacing: 0.3em;
                    text-transform: uppercase;
                    cursor: pointer;
                    transition: all 0.4s ease;
                    margin-top: 20px;
                }

                .btn-vadhaiyaan-submit:hover {
                    background: #B59650;
                    transform: translateY(-2px);
                    box-shadow: 0 10px 20px rgba(198, 167, 94, 0.15);
                }

                @media (max-width: 1024px) {
                    .enquiry-grid { grid-template-columns: 1fr; gap: 80px; }
                    .form-container { padding: 50px; }
                }

                @media (max-width: 768px) {
                    .contact-hero { padding: 120px 0 60px; }
                    .connect-masonry { grid-template-columns: 1fr; }
                    .form-row-split { grid-template-columns: 1fr; gap: 40px; }
                    .form-container { padding: 35px; }
                    .contact-v3 { padding-bottom: 60px; }
                }
            `}</style>
        </main>
    );
};

export default Contact;
