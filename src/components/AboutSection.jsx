import React from 'react';
import aboutThumb from '../assets/images/OIG4 (2).jpeg';
import aboutIcon from '../assets/images/about4.png';
import { motion } from 'framer-motion';

const AboutSection = () => {
    return (
        <div className="about-area about-us-area" style={{ backgroundColor: '#020617', padding: '100px 0', position: 'relative' }}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-6 mb-5 mb-lg-0">
                        <div className="about-thumb" style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
                            <motion.img
                                src={aboutThumb}
                                alt="Modern Technology"
                                className="img-fluid"
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8 }}
                                viewport={{ once: true }}
                                style={{ 
                                    borderRadius: '24px', 
                                    position: 'relative', 
                                    zIndex: 2,
                                    maxWidth: '100%',
                                    boxShadow: '0 20px 60px rgba(255, 60, 0, 0.15)',
                                    border: '2px solid rgba(255, 60, 0, 0.1)'
                                }}
                            />

                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                style={{
                                    position: 'absolute',
                                    bottom: '30px',
                                    right: '30px',
                                    background: 'linear-gradient(135deg, #ff3c00 0%, #ff6a00 100%)',
                                    padding: '15px 30px',
                                    borderRadius: '12px',
                                    color: '#fff',
                                    fontWeight: '700',
                                    zIndex: 3,
                                    boxShadow: '0 10px 30px rgba(255, 60, 0, 0.4)',
                                    backdropFilter: 'blur(10px)',
                                    fontSize: '14px',
                                    letterSpacing: '1px'
                                }}
                            >
                                BEST IT SOLUTION
                            </motion.div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="section-title text-left">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                            >
                                <h5 className="section-sub-title" style={{ color: '#ff3c00', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '15px', fontWeight: 'bold' }}>
                                    druvamoksh COMPANY
                                </h5>
                                <h1 className="section-main-title" style={{ fontSize: '48px', fontWeight: '700', marginBottom: '10px', color: '#fff', lineHeight: '1.2' }}>
                                    Essential IT Solutions For
                                </h1>
                                <h1 className="section-main-title" style={{ fontSize: '48px', fontWeight: '700', marginBottom: '25px', color: '#fff', lineHeight: '1.2' }}>
                                    Modern <span style={{ color: '#ff3c00' }}>Businesses.</span>
                                </h1>
                                <p className="section-title-descr" style={{ color: '#94a3b8', fontSize: '18px', lineHeight: '1.6', marginBottom: '30px' }}>
                                    We deliver adaptable, future-ready IT infrastructure tailored to the needs of evolving businesses. At Druva Moksh, we design intelligent systems that simplify operations and scale with your vision.
                                </p>
                            </motion.div>
                        </div>

                        <motion.div
                            className="about-box d-flex align-items-center"
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                            style={{
                                backgroundColor: '#0f172a',
                                padding: '20px 30px',
                                borderRadius: '16px',
                                border: '1px solid rgba(255, 255, 255, 0.05)',
                                marginBottom: '30px',
                                display: 'inline-flex',
                                alignItems: 'center'
                            }}
                        >
                            <div className="about-icon" style={{ marginRight: '20px' }}>
                                <img src={aboutIcon} alt="about4" style={{ width: '50px' }} />
                            </div>
                            <div className="about-tiltle">
                                <h3 style={{ margin: 0, fontSize: '20px', fontWeight: '600', color: '#fff' }}>Cloud Based Solution</h3>
                            </div>
                        </motion.div>

                        <motion.div
                            className="about-text"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            viewport={{ once: true }}
                            style={{ marginBottom: '40px' }}
                        >
                            <p style={{ color: '#cbd5e1', fontSize: '16px', lineHeight: '1.6' }}>
                                Druva Moksh empowers your business with secure, scalable, and agile cloud technologies—enabling seamless collaboration, real-time data access, and efficient resource management.
                            </p>
                        </motion.div>

                        <motion.div
                            className="druvamoksh-btn"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            viewport={{ once: true }}
                        >
                            <a href="/about" style={{
                                backgroundImage: 'linear-gradient(90deg, #ff3c00 0%, #ff6a00 100%)',
                                padding: '15px 35px',
                                borderRadius: '30px',
                                color: '#fff',
                                fontWeight: '700',
                                textDecoration: 'none',
                                display: 'inline-block',
                                fontSize: '15px',
                                letterSpacing: '1px',
                                boxShadow: '0 10px 20px rgba(255, 60, 0, 0.2)'
                            }}>
                                EXPLORE MORE
                            </a>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;
