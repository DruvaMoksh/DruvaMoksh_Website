import React from 'react';
import { motion } from 'framer-motion';
// Using blog/project images as service placeholders since specific high-res service images are missing
import service1 from '../assets/images/blog1.png';
import service2 from '../assets/images/blog2.png';
import service3 from '../assets/images/blog3.png';
import service4 from '../assets/images/project1.png';
import serviceIcon from '../assets/images/inner/service-icon.png';

const ServiceGrid = () => {
    const services = [
        { title: "IT Management", text: "Marketing repurpose success tech sapien maximus design.", img: service1 },
        { title: "Digital Marketing", text: "Marketing repurpose success tech sapien maximus design.", img: service2 },
        { title: "Web Development", text: "Marketing repurpose success tech sapien maximus design.", img: service3 },
        { title: "App Development", text: "Marketing repurpose success tech sapien maximus design.", img: service4 }
    ];

    return (
        <div className="sservice-area style-two">
            <div className="container">
                <div className="row align-items-center mb-5">
                    <div className="col-lg-12">
                        <div className="section-title text-center">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                            >
                                <h5 className="section-sub-title">SOLUTEK COMPANY</h5>
                                <h1 className="section-main-title">How Professional IT Services</h1>
                                <h1 className="section-main-title">Can Drive <span>Success.</span></h1>
                            </motion.div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {services.map((service, index) => (
                        <motion.div
                            className="col-xl-3 col-lg-4 col-md-6"
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ y: -10, transition: { duration: 0.3 } }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                        >
                            <div className="single-service-box" style={{
                                padding: '30px',
                                background: '#fff',
                                boxShadow: '0 0 20px rgba(0,0,0,0.05)',
                                borderRadius: '10px',
                                marginBottom: '30px',
                                textAlign: 'center'
                            }}>
                                <div className="service-thumb mb-3">
                                    <img src={service.img} alt="thumb" className="img-fluid" style={{ borderRadius: '5px', height: '200px', width: '100%', objectFit: 'cover' }} />
                                </div>
                                {/* <div className="service-icon mb-3">
                                    <img src={serviceIcon} alt="icon" />
                                </div> */}
                                <div className="service-content">
                                    <h3 className="service-title" style={{ fontSize: '20px', fontWeight: '600', marginBottom: '15px' }}>
                                        {service.title}
                                    </h3>
                                    <p className="service-text" style={{ color: '#666', marginBottom: '20px' }}>
                                        {service.text}
                                    </p>
                                    <div className="service-btn">
                                        <a href="#" style={{ color: '#d21e2b', fontWeight: '600', textDecoration: 'none' }}>
                                            READ MORE
                                        </a>
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

export default ServiceGrid;
