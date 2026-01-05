import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import FeatureSection from '../components/FeatureSection';
import AboutSection from '../components/AboutSection';
import ProjectSection from '../components/ProjectSection';
import BrandSection from '../components/BrandSection';
import Footer from '../components/Footer';

import BrandIntro from '../components/BrandIntro';

const Home = () => {
    return (
        <div style={{ backgroundColor: '#020617', color: '#fff', overflowX: 'hidden' }}>
            <BrandIntro />
            <Navbar />
            <HeroSection />
            <FeatureSection />
            <AboutSection />
            <ProjectSection />
            <BrandSection />
            <Footer />
        </div>
    );
};

export default Home;
