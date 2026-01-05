import React from 'react';
import { Link } from 'react-router-dom';
import footerLogo from '../assets/images/footer-logo.png';

const Footer = () => {
    return (
        <div className="footer-area">
            <div className="container">
                <div className="row footer">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="footer-widget">
                            <div className="footer-logo">
                                <Link to="/"><img src={footerLogo} alt="footer-logo" /></Link>
                            </div>
                            <p className="footer-widget-text">Discover the brilliance behind IT services — where your vision meets global networks to deliver tailored software solutions that drive value and innovation..</p>
                            <div className="footer-social">
                                <div className="footer-widget-social">
                                    <a href="https://www.linkedin.com/in/druvamoksh-druvamoksh-9b5053365/"><i className="fab fa-linkedin-in"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Other widgets commented out in original code */}
                </div>
                <div className="row copyright">
                    <div className="col-lg-6 col-md-6 col-sm-6">
                        <div className="-copyright-text">
                            <p>© Copyright 2025 By Druva Moksh</p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6">
                        <div className="copyright-list">
                            <ul>
                                <li><Link to="#">Privacy Policy</Link></li>
                                <li><Link to="#">Supports</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
