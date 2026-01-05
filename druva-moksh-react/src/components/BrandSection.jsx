import React from 'react';
import { motion } from 'framer-motion';
import brand1 from '../assets/images/brand-img.png';
import brand2 from '../assets/images/brand-img1.png';
import brand3 from '../assets/images/brand-img2.png';
import brand4 from '../assets/images/brand-img3.png';
import brand5 from '../assets/images/brand-img4.png';
import brand6 from '../assets/images/brand-img6.png';
import brand7 from '../assets/images/brand-img7.png';
import brand8 from '../assets/images/brand-img8.png';
import brand9 from '../assets/images/brand-img9.png';

const BrandSection = () => {
    const brands = [
        brand1, brand2, brand3, brand4, brand5, brand6, brand7, brand8, brand9
    ];

    const marqueeBrands = [...brands, ...brands, ...brands];

    return (
        <div className="brand-area" style={{ padding: '80px 0', backgroundColor: '#020617', overflow: 'hidden', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="marquee-container" style={{
                            position: 'relative',
                            width: '100%',
                            overflow: 'hidden',
                            maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
                            WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
                        }}>
                            <motion.div
                                className="track d-flex align-items-center"
                                style={{ gap: '80px', width: 'max-content' }}
                                animate={{ x: ["0%", "-50%"] }}
                                transition={{
                                    repeat: Infinity,
                                    ease: "linear",
                                    duration: 30
                                }}
                            >
                                {marqueeBrands.map((brand, index) => (
                                    <div key={index} className="brand-box" style={{ flex: '0 0 auto' }}>
                                        <div className="brand-thumb">
                                            {/* Applying a filter to make brands visible on dark background if necessary. 
                                                If logos are black, invert them. If colored, keep opacity. 
                                                Safe bet: Brightness high + grayscale for uniform look, or just slight opacity. */}
                                            <img
                                                src={brand}
                                                alt={`brand-${index}`}
                                                style={{
                                                    opacity: 0.6,
                                                    maxWidth: '140px',
                                                    transition: '0.3s',
                                                    filter: 'brightness(0) invert(1)' // Make white for dark mode
                                                }}
                                                onMouseOver={(e) => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.filter = 'none'; }}
                                                onMouseOut={(e) => { e.currentTarget.style.opacity = '0.6'; e.currentTarget.style.filter = 'brightness(0) invert(1)'; }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BrandSection;
