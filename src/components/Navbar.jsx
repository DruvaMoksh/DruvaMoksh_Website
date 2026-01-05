import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import footerLogo from '../assets/images/footer-logo.png';

const Navbar = () => {
    const [isSticky, setIsSticky] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <div id="sticky-header" className={`druvamoksh_nav_manu ${isSticky ? 'sticky' : ''}`}>
                <div className="container-fluid">
                    <div className="row d-flex align-items-center">
                        <div className="col-lg-2">
                            <div className="logo">
                                <Link className="logo_img" to="/" title="druvamoksh">
                                    <img src={logo} alt="logo" />
                                </Link>
                                <Link className="main_sticky" to="/" title="druvamoksh">
                                    <img src={footerLogo} alt="astute" />
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <nav className="druvamoksh_menu">
                                <ul className="nav_scroll">
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="/about">About Us</Link></li>
                                    <li><Link to="/projects">Projects</Link></li>
                                    <li><Link to="/contact">Contact</Link></li>
                                </ul>
                            </nav>
                        </div>
                        <div className="col-lg-2 d-none d-lg-block">
                            {/* Optional Header Button from original code (commented out there too) */}
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Menu (simplified for React) */}
            <div className="mobile-menu-area d-sm-block d-md-block d-lg-none">
                {/* Logic for mobile menu would go here or use a library. 
                     For now, keeping the structure but it needs a toggle to be functional in React 
                     without the jQuery MeanMenu plugin. */}
                <div className="mobile-menu">
                    <button className="btn btn-primary" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>Menu</button>
                    {isMobileMenuOpen && (
                        <nav className="druvamoksh_menu">
                            <ul className="nav_scroll">
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/about">About Us</Link></li>
                                <li><Link to="/projects">Projects</Link></li>
                                <li><Link to="/contact">Contact</Link></li>
                            </ul>
                        </nav>
                    )}
                </div>
            </div>
        </>
    );
};

export default Navbar;
