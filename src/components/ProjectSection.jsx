import React from 'react';
import { motion } from 'framer-motion';
import project1 from '../assets/images/colaborators/lynora.jpeg';
import project2 from '../assets/images/colaborators/axelerate.jpeg';
import project4 from '../assets/images/colaborators/sensurair.jpeg';
import project5 from '../assets/images/colaborators/music.jpeg';
import project6 from '../assets/images/colaborators/vaanmegam.jpeg';
import project9 from '../assets/images/colaborators/playfulpython.jpeg';
import project10 from '../assets/images/colaborators/queerink.jpeg';




const ProjectSection = () => {
    const projects = [
        { img: project1, title: "Lynora: Posts", link: "/projects" },
        { img: project2, title: "Axelerate Fintech", link: "/projects" },
        { img: project1, title: "Solverminds Solutions", link: "/projects" },
        { img: project2, title: "Moonshot Sys", link: "/projects" },
        { img: project6, title: "Vaan Megam Networks", link: "/projects" },
        { img: project4, title: "Vyoma Systems", link: "/projects" },
        { img: project5, title: "Music Temple", link: "/projects" },
        { img: project9, title: "Python Tips & Tricks", link: "/projects" },
        { img: project4, title: "SENSurAir Pvt Ltd", link: "/projects" },
        { img: project10, title: "IIT Madras: Posts", link: "/projects" },
        { img: project2, title: "Baapstore", link: "/projects" }
    ];

    const marqueeProjects = [...projects, ...projects, ...projects];

    return (
        <div className="project-area" style={{ overflow: 'hidden', backgroundColor: '#020617', padding: '100px 0 30px' }}>
            <div className="container-fluid">
                <div className="row project align-items-center mb-5" style={{ padding: '0 5%' }}>
                    <div className="col-lg-6">
                        <div className="section-title text-left">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                            >
                                <h5 className="section-sub-title" style={{ color: '#ff3c00', fontSize: '14px', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: 'bold' }}>druvamoksh PROJECT</h5>
                                <h1 className="section-main-title" style={{ color: '#ff3c00', fontSize: '48px', fontWeight: '700' }}>Company <span style={{ color: '#ff3c00' }}>Collaborators</span></h1>
                            </motion.div>
                        </div>
                    </div>
                </div>

                {/* Marquee Container */}
                <div className="marquee-container" style={{
                    position: 'relative',
                    width: '100%',
                    overflow: 'hidden',
                    maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
                    WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
                }}>
                    <motion.div
                        className="track d-flex"
                        style={{ gap: '30px', width: 'max-content' }}
                        animate={{ x: ["0%", "-33.33%"] }}
                        transition={{
                            repeat: Infinity,
                            ease: "linear",
                            duration: 30
                        }}
                    >
                        {marqueeProjects.map((project, index) => (
                            <div
                                key={index}
                                className="project-card-wrapper"
                                style={{ minWidth: '350px', flex: '0 0 auto' }}
                            >
                                <div className="project-single-box" style={{
                                    height: '100%',
                                    backgroundColor: '#0f172a',
                                    padding: '20px',
                                    borderRadius: '16px',
                                    border: '1px solid rgba(255,255,255,0.05)'
                                }}>
                                    <div className="project-thumb" style={{ overflow: 'hidden', borderRadius: '10px' }}>
                                        <img
                                            src={project.img}
                                            alt={project.title}
                                            style={{
                                                width: '100%',
                                                height: '220px',
                                                objectFit: 'cover',
                                                transition: 'transform 0.5s'
                                            }}
                                            className="hover-scale"
                                        />
                                    </div>
                                    <div className="project-content" style={{ marginTop: '20px' }}>
                                        <h3 className="project-title" style={{ fontSize: '18px', margin: 0 }}>
                                            <a href={project.link} style={{ textDecoration: 'none', color: '#fff', fontWeight: '600' }}>
                                                {project.title}
                                            </a>
                                        </h3>
                                        {/* <span style={{ fontSize: '14px', color: '#ff3c00', marginTop: '5px', display: 'block' }}>See Details</span> */}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default ProjectSection;
