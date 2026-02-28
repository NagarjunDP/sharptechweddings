import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
    { id: 1, type: "Wedding", url: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80" },
    { id: 2, type: "Engagement", url: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80" },
    { id: 3, type: "Wedding", url: "https://images.unsplash.com/photo-1519225495045-3b16bfec7c7d?auto=format&fit=crop&q=80" },
    { id: 4, type: "Birthday", url: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&q=80" },
    { id: 5, type: "Corporate", url: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?auto=format&fit=crop&q=80" },
    { id: 6, type: "Wedding", url: "https://images.unsplash.com/photo-1522673607200-164883e2485e?auto=format&fit=crop&q=80" },
    { id: 7, type: "Engagement", url: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80" },
    { id: 8, type: "Birthday", url: "https://images.unsplash.com/photo-1530103862676-fa8c91abeead?auto=format&fit=crop&q=80" }
];

const videos = [
    { id: 1, videoId: "Oyt9M0-bbM0", title: "Royal Wedding Film" },
    { id: 2, videoId: "llJSCTTvDb4", title: "Summer Celebration Highlights" },
    { id: 3, videoId: "cjxvYAjZ3Ag", title: "Enchanting Engagement" }
];

const Gallery = () => {
    const [activeTab, setActiveTab] = useState('Photos');
    const [filter, setFilter] = useState('All');

    const filteredImages = filter === 'All' ? images : images.filter(img => img.type === filter);

    return (
        <main className="gallery-page section">
            <div className="container">
                <div className="gallery-header text-center">
                    <h1 className="hero-title">Our Gallery</h1>
                    <p className="subtext">A glimpse into the magical moments we've crafted.</p>
                </div>

                <div className="gallery-tabs text-center">
                    <button
                        className={`tab-btn ${activeTab === 'Photos' ? 'active' : ''}`}
                        onClick={() => setActiveTab('Photos')}
                    >
                        Photos
                    </button>
                    <button
                        className={`tab-btn ${activeTab === 'Videos' ? 'active' : ''}`}
                        onClick={() => setActiveTab('Videos')}
                    >
                        Our Videos
                    </button>
                </div>

                {activeTab === 'Photos' && (
                    <>
                        <div className="filter-bar text-center">
                            {['All', 'Wedding', 'Engagement', 'Birthday', 'Corporate'].map(f => (
                                <button
                                    key={f}
                                    className={`filter-btn ${filter === f ? 'active' : ''}`}
                                    onClick={() => setFilter(f)}
                                >
                                    {f}
                                </button>
                            ))}
                        </div>

                        <motion.div layout className="gallery-grid">
                            <AnimatePresence>
                                {filteredImages.map(img => (
                                    <motion.div
                                        layout
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.9 }}
                                        key={img.id}
                                        className="gallery-item"
                                    >
                                        <img src={img.url} alt={`Gallery ${img.id}`} loading="lazy" />
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </motion.div>
                    </>
                )}

                {activeTab === 'Videos' && (
                    <div className="video-grid">
                        {videos.map(v => (
                            <div key={v.id} className="video-card">
                                <div className="video-container">
                                    <iframe
                                        src={`https://www.youtube.com/embed/${v.videoId}`}
                                        title={v.title}
                                        frameBorder="0"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                                <h3 className="video-title">{v.title}</h3>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            <style jsx>{`
        .gallery-page { padding-top: 150px; background-color: var(--color-bg); }
        .text-center { text-align: center; }
        .hero-title { font-size: 3.5rem; margin-bottom: 10px; }
        .subtext { color: var(--color-text-muted); margin-bottom: 50px; }
        
        .gallery-tabs { margin-bottom: 40px; }
        .tab-btn {
          font-family: var(--font-sans);
          padding: 10px 30px;
          font-size: 1.2rem;
          border-bottom: 2px solid transparent;
          margin: 0 10px;
          opacity: 0.6;
        }
        .tab-btn.active { color: var(--color-primary); border-color: var(--color-primary); opacity: 1; }
        
        .filter-bar { margin-bottom: 40px; }
        .filter-btn {
          font-family: var(--font-sans);
          margin: 0 10px;
          padding: 5px 15px;
          text-transform: uppercase;
          font-size: 0.8rem;
          letter-spacing: 0.1em;
          border: 1px solid rgba(0,0,0,0.1);
          border-radius: 20px;
          transition: var(--transition-fast);
        }
        .filter-btn.active { background: var(--color-primary); color: white; border-color: var(--color-primary); }
        
        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 20px;
        }
        .gallery-item {
          height: 350px;
          border-radius: 10px;
          overflow: hidden;
        }
        .gallery-item img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.6s ease; }
        .gallery-item:hover img { transform: scale(1.1); }
        
        .video-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(400px, 1fr)); gap: 40px; }
        .video-container { position: relative; padding-bottom: 56.25%; height: 0; border-radius: 10px; overflow: hidden; background: #000; }
        .video-container iframe { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }
        .video-title { margin-top: 15px; font-size: 1.2rem; }
        
        @media (max-width: 768px) {
          .hero-title { font-size: 2.5rem; }
          .video-grid { grid-template-columns: 1fr; }
          .gallery-grid { grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); }
        }
      `}</style>
        </main>
    );
};

export default Gallery;
