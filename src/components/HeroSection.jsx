import React, { useEffect, useRef, useState } from 'react';
import heroThumb from '../assets/images/hero-thumb.png';
import { motion } from 'framer-motion';

const HeroSection = () => {
    const [vantaEffect, setVantaEffect] = useState(null);
    const myRef = useRef(null);

    useEffect(() => {
        if (!vantaEffect) {
            setVantaEffect(window.VANTA.DOTS({
                el: myRef.current,
                mouseControls: false,
                touchControls: false,
                gyroControls: false,
                backgroundColor: 0x020617, // near-black navy
                color: 0xff6a00,           // brand orange
                color2: 0xff6a00,          // keep monochrome accent
                size: 2.80,                 // larger dots like Projects page
                spacing: 35.00,             // higher density
                showLines: false,           // REMOVED THE BURST
                scale: 1.0,
                scaleMobile: 0.8
            }));
        }
        return () => {
            if (vantaEffect) vantaEffect.destroy();
        };
    }, [vantaEffect]);

    return (
        <div
            className="hero-area d-flex align-items-center"
            style={{ position: 'relative', overflow: 'hidden', backgroundColor: '#020617' }}
        >
            <div
                id="hero-bg"
                ref={myRef}
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    zIndex: 1,

                    background: 'transparent' // Let Vanta handle the rendering
                }}
            />
            {/* Ensure content is above the background canvas */}
            <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                <div className="row hero align-items-center">
                    <div className="col-lg-12">
                        <div className="hero-contant">
                            <motion.h5
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                druvamoksh IT SERVICES
                            </motion.h5>
                            <motion.h1
                                initial={{ opacity: 0, x: -100 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1, ease: "easeOut" }}
                                style={{ fontSize: '72px', fontWeight: '800', lineHeight: '1.1', marginBottom: '20px' }}
                            >
                                Intelligence Engineered,<br />
                                <span style={{ color: '#ff3c00' }}>Innovation Delivered.</span>
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.5 }}
                                style={{ fontSize: '20px', maxWidth: '800px', marginBottom: '40px', lineHeight: '1.6' }}
                            >
                                Discover the brilliance behind IT services — where your vision meets global networks to deliver tailored software solutions that drive value and innovation.
                            </motion.p>
                            <motion.div
                                className="druvamoksh-btn"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.8 }}
                            >
                                <a href="/about">EXPLORE MORE
                                    <div className="druvamoksh-hover-btn hover-bx"></div>
                                    <div className="druvamoksh-hover-btn hover-bx2"></div>
                                    <div className="druvamoksh-hover-btn hover-bx3"></div>
                                    <div className="druvamoksh-hover-btn hover-bx4"></div>
                                </a>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
