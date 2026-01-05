import React, { useEffect, useRef, useState } from 'react';
import Navbar from '../components/Navbar';
import TeamSection from '../components/TeamSection';
import Footer from '../components/Footer';
import aboutThumb from '../assets/images/inner/about-us-thu.png';
import { motion } from 'framer-motion';

const About = () => {
    const [vantaEffect, setVantaEffect] = useState(null);
    const heroRef = useRef(null);

    // Vanta Effect for Hero (Consistent with Projects page)
    useEffect(() => {
        if (!vantaEffect && window.VANTA) {
            setVantaEffect(window.VANTA.DOTS({
                el: heroRef.current,
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                minHeight: 200.00,
                minWidth: 200.00,
                scale: 1.00,
                scaleMobile: 1.00,
                color: 0xff6a00,
                color2: 0xff6a00,
                backgroundColor: 0x020617,
                size: 2.80,
                spacing: 35.00,
                showLines: false
            }));
        }
        return () => {
            if (vantaEffect) vantaEffect.destroy();
        };
    }, [vantaEffect]);

    return (
        <div style={{ backgroundColor: '#020617', color: '#fff', overflowX: 'hidden' }}>
            <Navbar />

            {/* --- HERO SECTION --- */}
            <div ref={heroRef} style={{ padding: '160px 0 100px', textAlign: 'center', position: 'relative', minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span style={{
                            border: '1px solid #ff3c00',
                            borderRadius: '30px',
                            padding: '8px 25px',
                            color: '#ff3c00',
                            textTransform: 'uppercase',
                            fontSize: '14px',
                            letterSpacing: '1px',
                            display: 'inline-block',
                            marginBottom: '20px',
                            fontWeight: '600'
                        }}>
                            About Us
                        </span>
                        <h1 style={{ fontSize: '64px', fontWeight: '700', marginBottom: '20px', color: '#fff' }}>
                            Who <span style={{ color: '#ff3c00' }}>We Are</span>
                        </h1>
                        <p style={{ maxWidth: '700px', margin: '0 auto', fontSize: '18px', color: '#cbd5e1', lineHeight: '1.6' }}>
                            Building adaptable, future-ready IT infrastructures that empower businesses to thrive in a digital world.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* --- CONTENT SECTION --- */}
            <div className="about-us-area" style={{ padding: '80px 0', backgroundColor: '#020617' }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 mb-5 mb-lg-0">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                                style={{
                                    backgroundColor: '#0f172a',
                                    padding: '40px',
                                    borderRadius: '24px',
                                    border: '1px solid rgba(255, 255, 255, 0.05)'
                                }}
                            >
                                <h5 style={{ color: '#ff3c00', fontSize: '14px', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '15px', fontWeight: 'bold' }}>
                                    Druva Moksh Company
                                </h5>
                                <h2 style={{ fontSize: '36px', fontWeight: '700', marginBottom: '20px', lineHeight: '1.3', color: '#fff' }}>
                                    We Equip Clients With The <span style={{ color: '#ff3c00' }}>Right Solution.</span>
                                </h2>
                                <p style={{ color: '#94a3b8', fontSize: '16px', lineHeight: '1.7', marginBottom: '0' }}>
                                    At Druva Moksh, we specialize in building adaptable, future-ready IT infrastructures
                                    that meet the dynamic demands of modern businesses. In today’s ever-evolving digital landscape,
                                    organizations require more than just basic technology—they need systems that can grow, shift,
                                    and respond to change with agility. Our solutions are engineered to be robust and scalable,
                                    helping businesses remain competitive and resilient, no matter the industry or scale.
                                </p>
                            </motion.div>
                        </div>
                        <div className="col-lg-6">
                            <motion.div
                                className="about-us-thumb"
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                                style={{ borderRadius: '24px', overflow: 'hidden', border: '1px solid rgba(255, 255, 255, 0.1)' }}
                            >
                                <img src={aboutThumb} alt="About Us" className="img-fluid" style={{ width: '100%' }} />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Wrap Team Section in dark background if it's transparent, or rely on global overrides */}
            <div style={{ backgroundColor: '#020617', paddingBottom: '80px' }}>
                <TeamSection />
            </div>

            <Footer />
        </div>
    );
};

export default About;
