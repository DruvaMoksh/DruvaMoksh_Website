import React, { useEffect, useRef, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

const Contact = () => {
    const [vantaEffect, setVantaEffect] = useState(null);
    const heroRef = useRef(null);

    // Vanta Effect for Hero
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
                            Get In Touch
                        </span>
                        <h1 style={{ fontSize: '64px', fontWeight: '700', marginBottom: '20px', color: '#fff' }}>
                            Contact <span style={{ color: '#ff3c00' }}>Us</span>
                        </h1>
                        <p style={{ maxWidth: '700px', margin: '0 auto', fontSize: '18px', color: '#cbd5e1', lineHeight: '1.6' }}>
                            Have a question or want to work together? We'd love to hear from you.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* --- CONTACT CONTENT --- */}
            <div className="contact-area" style={{ padding: '80px 0' }}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 col-md-12 mb-5">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5 }}
                                style={{
                                    backgroundColor: '#0f172a',
                                    padding: '50px',
                                    borderRadius: '24px',
                                    border: '1px solid rgba(255, 255, 255, 0.05)',
                                    height: '100%',
                                    textAlign: 'center'
                                }}
                            >
                                <h5 style={{ color: '#ff3c00', fontSize: '14px', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '20px', fontWeight: 'bold' }}>
                                    Office Location
                                </h5>
                                <h3 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '15px', color: '#fff' }}>
                                    Visit Our Office
                                </h3>
                                <p style={{ color: '#94a3b8', fontSize: '16px', lineHeight: '1.6', marginBottom: '30px' }}>
                                    D-32/12, Adyar Avenue, IITM,<br />
                                    Chennai-600036
                                </p>

                                <h3 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '15px', color: '#fff' }}>
                                    Email Us
                                </h3>
                                <p style={{ marginBottom: '0' }}>
                                    <a href="mailto:druvamoksh@gmail.com" style={{ textDecoration: 'none', color: '#ff3c00', fontSize: '18px', fontWeight: '500' }}>
                                        druvamoksh@gmail.com
                                    </a>
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="google-map">
                <div className="container-fluid p-0">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.5440046129174!2d80.23773757585742!3d13.00099141423172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526784d51240d7%3A0x8f70d20d7552f072!2sAdyar%20Ave%2C%20Indian%20Institute%20Of%20Technology%2C%20Chennai%2C%20Tamil%20Nadu%20600036!5e0!3m2!1sen!2sin!4v1747566739790!5m2!1sen!2sin"
                        width="100%"
                        height="450"
                        style={{ border: 0, filter: 'grayscale(100%) invert(92%) contrast(83%)' }}
                        // Added grayscale filter for dark mode map feel
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Contact;
