import React from 'react';
import { motion } from 'framer-motion';
// Using actual project images found in assets/images
import project1 from '../assets/images/project1.png';
import project2 from '../assets/images/project2.png';
import project3 from '../assets/images/project3.png';
import project4 from '../assets/images/project4.png';
import project5 from '../assets/images/project5.png';
// reusing project1 or using another available image for the 6th slot
import projectThumb from '../assets/images/project-thu.png';

const ProjectGrid = () => {
    const projects = [
        { title: "Software Management", cat: "Marketing , Software", img: project1 },
        { title: "Web Development", cat: "Marketing , Software", img: project2 },
        { title: "Platform Integration", cat: "Marketing , Software", img: project3 },
        { title: "Network Security", cat: "Marketing , Software", img: project4 },
        { title: "Digital Marketing", cat: "Marketing , Software", img: project5 },
        { title: "Product & Design", cat: "Marketing , Software", img: projectThumb }
    ];

    // Simple filter logic could be added here, but for now displaying all as per request "expand on..."
    // The original HTML used Isotope for filtering. Implementing complex filtering might be overkill unless requested.
    // I will stick to a grid display first.

    return (
        <div className="case-study-area" style={{ padding: '80px 0' }}>
            <div className="container">
                <div className="row justify-content-center mb-5">
                    <div className="col-lg-12">
                        {/* Filter buttons could go here */}
                    </div>
                </div>
                <div className="row">
                    {projects.map((project, index) => (
                        <motion.div
                            className="col-lg-4 col-md-6 mb-4"
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            whileHover={{ y: -5 }}
                            transition={{ duration: 0.4 }}
                        >
                            <div className="case-study-single-box" style={{ position: 'relative', overflow: 'hidden', borderRadius: '10px' }}>
                                <div className="case-study-thumb">
                                    <img src={project.img} alt={project.title} className="img-fluid" style={{ width: '100%', height: '250px', objectFit: 'cover' }} />
                                </div>
                                <div className="case-study-content" style={{
                                    padding: '20px',
                                    background: '#fff',
                                    borderBottom: '3px solid #d21e2b',
                                    position: 'relative',
                                    zIndex: 2,
                                    marginTop: '-10px',
                                    margin: '0 20px',
                                    borderRadius: '5px',
                                    boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
                                }}>
                                    <div className="case-study-title">
                                        <h5 style={{ fontSize: '14px', color: '#666' }}>{project.cat}</h5>
                                        <h3 style={{ fontSize: '20px', fontWeight: '600' }}>
                                            <a href="#" style={{ textDecoration: 'none', color: '#111' }}>{project.title}</a>
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectGrid;
