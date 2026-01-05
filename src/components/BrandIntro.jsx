import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const BrandIntro = ({ onComplete }) => {
    const [showIntro, setShowIntro] = useState(true);

    useEffect(() => {
        // Check session storage to run only once per session
        const hasIntroRun = sessionStorage.getItem('brandIntroShown');

        if (hasIntroRun) {
            setShowIntro(false);
            if (onComplete) onComplete();
            return;
        }

        // Sequence timing (Total ~3.0s)
        // 0.0s: Start
        // 0.2s: Kinetic Reveal (Duration 0.8s) -> Ends at 1.0s
        // 1.2s: Light Sweep (Duration 0.8s) -> Ends at 2.0s
        // 2.4s: Slide Up Exit (Duration 0.8s) -> Ends at 3.2s

        const timer = setTimeout(() => {
            setShowIntro(false);
            sessionStorage.setItem('brandIntroShown', 'true');
            if (onComplete) onComplete();
        }, 2600); // Trigger exit slightly earlier to allow slide animation to play out

        return () => clearTimeout(timer);
    }, [onComplete]);

    return (
        <AnimatePresence>
            {showIntro && (
                <motion.div
                    className="brand-intro-overlay"
                    initial={{ y: 0 }}
                    exit={{ y: '-100vh' }} // Page Turn Upward
                    transition={{
                        duration: 0.8,
                        ease: [0.76, 0, 0.24, 1] // Cinematic "Page Turn" bezier
                    }}
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100vh',
                        backgroundColor: '#000000',
                        zIndex: 9999,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        overflow: 'hidden'
                    }}
                >
                    <div style={{ position: 'relative', textAlign: 'center', width: '100%' }}>
                        <motion.h1
                            // Initial State: Kinetic Entry Setup
                            initial={{
                                opacity: 0,
                                scale: 0.96,
                                x: -20, // Micro slide-in
                                letterSpacing: '8px',
                                backgroundPosition: '200% 0' // Shine off-screen right
                            }}
                            // Animation Sequence
                            animate={{
                                opacity: [0, 1, 1],
                                scale: [0.96, 1, 1], // Stays at 1
                                x: [-20, 0, 0], // Stays at 0
                                letterSpacing: ['8px', '2px', '2px'],
                                backgroundPosition: ['100% 0', '100% 0', '-100% 0']
                            }}
                            transition={{
                                // 1. Kinetic Entrance (Zooop)
                                opacity: { times: [0, 0.2, 1], duration: 2.2, ease: "linear", delay: 0.2 },
                                scale: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }, // Cubic-bezier "zooop"
                                x: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 },
                                letterSpacing: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 },

                                // 2. Light Sweep (Passes once after text settles)
                                backgroundPosition: {
                                    times: [0, 0.4, 0.75], // Wait, Swipe
                                    duration: 2.2,
                                    ease: "easeInOut",
                                    delay: 0.2
                                }
                            }}
                            style={{
                                fontFamily: "'Poppins', sans-serif",
                                fontSize: 'clamp(24px, 5vw, 56px)', // Slightly larger
                                fontWeight: '700', // Bold/Black weight
                                margin: 0,
                                textTransform: 'uppercase',
                                lineHeight: '1',

                                // FRAGMENTHQ STYLE: STEEL / SILVER GRADIENT & SHINE
                                color: 'transparent',
                                backgroundImage: `linear-gradient(
                                    115deg,
                                    #444444 0%,
                                    #777777 25%,
                                    #999999 45%,
                                    #FFFFFF 50%, 
                                    #999999 55%,
                                    #777777 75%,
                                    #444444 100%
                                )`,
                                backgroundSize: '200% 100%', // Large enough to move the shine through
                                WebkitBackgroundClip: 'text',
                                backgroundClip: 'text',

                                // Specular Highlight (Simulated via drop shadow or filter)
                                filter: 'drop-shadow(0px 0px 0px rgba(255,255,255,0))', // Clean, no glow
                                willChange: 'opacity, transform, background-position'
                            }}
                        >
                            Druva Moksh
                        </motion.h1>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default BrandIntro;
