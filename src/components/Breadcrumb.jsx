import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Breadcrumb = ({ title, pageName }) => {
    return (
        <div className="breadcumb-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="breadcumb-content text-center"> {/* Centered for better look or keep left if preferred */}
                            <motion.h4
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                {title}
                            </motion.h4>
                            <ul className="breadcumb-list d-flex justify-content-center align-items-center gap-2" style={{ listStyle: 'none', padding: 0 }}>
                                <li><Link to="/">Home</Link></li>
                                <li className="list-arrow">&gt;</li>
                                <li>{pageName || title}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Breadcrumb;
