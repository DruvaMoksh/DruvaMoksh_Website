import React from 'react';
import { motion } from 'framer-motion';
import feature1 from '../assets/images/feature1.png';
import feature2 from '../assets/images/feature2.png';
import feature3 from '../assets/images/feature3.png';
import feature4 from '../assets/images/feature4.png';
import feature5 from '../assets/images/feature5.png';
import './Carousel3D.css';

const FeatureSection = () => {
    const features = [
        { img: feature1, title: "Machine Learning", text: "Smarter decisions powered by real-world predictive data." },
        { img: feature2, title: "Deep Learning Neural Nets:", text: "Neural networks that learn and evolve like humans." },
        { img: feature3, title: "Retrieval Augmented Gen", text: "AI that retrieves and generates answers with precision." },
        { img: feature4, title: "Fine-Tuning LLMs", text: "Domain-tuned LLMs & AI apps. Precise. Scalable. Smart." },
        { img: feature5, title: "Agentic Architecture", text: "Autonomous AI that plans, reasons, and executes." }
    ];

    const radius = 220;

    return (
        <div className="feature-area" style={{ overflow: 'hidden', padding: '100px 0', backgroundColor: '#020617' }}>
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center mb-5">
                        <h5 style={{ color: '#ff3c00', fontSize: '14px', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: 'bold' }}>
                            Why Choose Us
                        </h5>
                        <h2 style={{ fontSize: '36px', fontWeight: '700', color: '#fff', marginTop: '10px' }}>
                            Our Core <span style={{ color: '#ff3c00' }}>Features</span>
                        </h2>
                    </div>
                </div>

                <div className="carousel-container" style={{ marginTop: '50px' }}>
                    <div className="carousel">
                        {features.map((feature, index) => {
                            const angle = index * 72;
                            return (
                                <div
                                    className="carousel-item feature-single-box"
                                    key={index}
                                    style={{
                                        transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
                                        backgroundColor: '#0f172a',
                                        padding: '30px 20px',
                                        borderRadius: '20px',
                                        border: '1px solid rgba(255,255,255,0.05)',
                                        textAlign: 'center',
                                        boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
                                    }}
                                >
                                    <div className="feature-icon mb-4" style={{
                                        background: 'rgba(255, 60, 0, 0.1)',
                                        width: '80px',
                                        height: '80px',
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        margin: '0 auto'
                                    }}>
                                        <img src={feature.img} alt={feature.title} style={{ width: '40px', filter: 'brightness(0) invert(1)' }} />
                                        {/* Assuming icons might be dark, inverting them or checking opacity */}
                                    </div>
                                    <div className="feature-content">
                                        <h3 className="feature-title" style={{ fontSize: '18px', marginBottom: '15px', color: '#fff', fontWeight: '600' }}>{feature.title}</h3>
                                        <p className="feature-text" style={{ fontSize: '14px', color: '#94a3b8', lineHeight: '1.6' }}>{feature.text}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeatureSection;
