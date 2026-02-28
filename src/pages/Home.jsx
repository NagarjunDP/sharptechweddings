import React from 'react';
import Hero from '../components/home/Hero';
import AboutV2 from '../components/home/AboutV2';
import ServiceCards from '../components/home/ServiceCards';
import PortfolioMasonry from '../components/home/PortfolioMasonry';
import OurFilms from '../components/home/OurFilms';
import DropboxTeasers from '../components/home/DropboxTeasers';
import WhyVadhaiyaan from '../components/home/WhyVadhaiyaan';
import TestimonialsSlider from '../components/home/TestimonialsSlider';
import InstagramFeed from '../components/home/InstagramFeed';
import CtaBanner from '../components/home/CtaBanner';

const Home = () => {
    return (
        <main className="home-page">
            <Hero />
            <AboutV2 />
            <ServiceCards />
         
          
            <WhyVadhaiyaan />
            <TestimonialsSlider />
            
            <CtaBanner />
        </main>
    );
};

export default Home;
