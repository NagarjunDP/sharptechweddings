import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Instagram, Share2, X, Send } from 'lucide-react';

const FloatingCollective = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const menuVariants = {
        hidden: { opacity: 0, scale: 0.8, y: 20 },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 260,
                damping: 20,
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        },
        exit: {
            opacity: 0,
            scale: 0.8,
            y: 10,
            transition: { duration: 0.2, staggerChildren: 0.05, staggerDirection: -1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: 20 },
        visible: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: 10 }
    };

    return (
        <div className="floating-collective-wrapper">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="collective-menu"
                        variants={menuVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        {/* INSTAGRAM CTA */}
                        <motion.a
                            href="https://instagram.com/vadhaiyaan"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="collective-item instagram"
                            variants={itemVariants}
                            whileHover={{ x: -5, backgroundColor: 'rgba(255, 255, 255, 0.15)' }}
                        >
                            <span className="tooltip">Our Journey</span>
                            <div className="icon-box">
                                <Instagram size={20} />
                            </div>
                        </motion.a>

                        {/* WHATSAPP CTA */}
                        <motion.a
                            href="https://wa.me/919811567604?text=Hi! I am looking for a premier event planner."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="collective-item whatsapp"
                            variants={itemVariants}
                            whileHover={{ x: -5, backgroundColor: 'rgba(255, 255, 255, 0.15)' }}
                        >
                            <span className="tooltip">Connect with us</span>
                            <div className="icon-box">
                                <MessageCircle size={20} />
                            </div>
                        </motion.a>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* MAIN TRIGGER */}
            <motion.button
                onClick={toggleMenu}
                className={`main-trigger ${isOpen ? 'active' : ''}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                animate={{
                    boxShadow: isOpen
                        ? "0 15px 35px rgba(198, 167, 94, 0.3)"
                        : ["0 10px 20px rgba(0,0,0,0.2)", "0 10px 30px rgba(198, 167, 94, 0.2)", "0 10px 20px rgba(0,0,0,0.2)"]
                }}
                transition={{
                    boxShadow: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                }}
            >
                <div className="trigger-content">
                    {isOpen ? <X size={24} /> : <Share2 size={24} />}
                </div>
            </motion.button>

            <style jsx>{`
                .floating-collective-wrapper {
                    position: fixed;
                    bottom: 40px;
                    right: 40px;
                    z-index: 9999;
                    display: flex;
                    flex-direction: column;
                    align-items: flex-end;
                    gap: 15px;
                }

                .collective-menu {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-end;
                    gap: 12px;
                    margin-bottom: 5px;
                }

                .main-trigger {
                    width: 60px;
                    height: 60px;
                    background: #1A1A1A;
                    border: 1px solid rgba(198, 167, 94, 0.3);
                    border-radius: 50%;
                    color: #C6A75E;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
                    position: relative;
                    overflow: hidden;
                }

                .main-trigger.active {
                    background: #C6A75E;
                    color: #1A1A1A;
                    border-color: #C6A75E;
                }

                .trigger-content {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .collective-item {
                    display: flex;
                    align-items: center;
                    gap: 15px;
                    text-decoration: none;
                    background: rgba(26, 26, 26, 0.8);
                    backdrop-filter: blur(12px);
                    -webkit-backdrop-filter: blur(12px);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    padding: 8px 8px 8px 20px;
                    border-radius: 40px;
                    color: #FFFFFF;
                    transition: all 0.3s ease;
                }

                .icon-box {
                    width: 40px;
                    height: 40px;
                    background: rgba(255, 255, 255, 0.05);
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #C6A75E;
                    transition: all 0.3s ease;
                }

                .collective-item:hover .icon-box {
                    background: #C6A75E;
                    color: #1A1A1A;
                }

                .tooltip {
                    font-family: var(--font-ui);
                    font-size: 11px;
                    letter-spacing: 0.15em;
                    text-transform: uppercase;
                    opacity: 0.8;
                    white-space: nowrap;
                }

                @media (max-width: 768px) {
                    .floating-collective-wrapper {
                        bottom: 30px;
                        right: 25px;
                    }
                    .main-trigger {
                        width: 54px;
                        height: 54px;
                    }
                    .tooltip {
                        font-size: 10px;
                        letter-spacing: 0.1em;
                    }
                    .collective-item {
                        padding: 6px 6px 6px 15px;
                    }
                }
            `}</style>
        </div>
    );
};

export default FloatingCollective;
