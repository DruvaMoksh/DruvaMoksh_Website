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
            <div className="mobile-menu-area d-sm-block d-md-block d-lg-none" style={{ 
                position: 'fixed', 
                top: 0, 
                left: 0, 
                width: '100%', 
                zIndex: 999,
                background: '#020617',
                padding: '20px'
            }}>
                <div className="mobile-menu" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Link to="/" style={{ display: 'block' }}>
                        <img src={logo} alt="logo" style={{ height: '40px' }} />
                    </Link>
                    <button
                        className="mobile-menu-btn"   // ❗ removed .btn
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        style={{
                            background: '#ff3c00',
                            color: '#fff',
                            marginTop: '7px',
                            marginBottom: '7px',
                            border: 'none',
                            padding: '0 14px',
                            height: '26px',              // 👈 real height control
                            borderRadius: '999px',
                            fontSize: '14px',
                            fontWeight: '600',
                            lineHeight: '1',
                            cursor: 'pointer',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '6px',
                            boxShadow: '0 6px 16px rgba(255, 80, 0, 0.25)',
                            width: 'auto'
                        }}
                        >
                        <span style={{ fontSize: '14px', lineHeight: '1' }}>☰</span>
                        {isMobileMenuOpen ? 'Close' : 'Menu'}
                        </button>

                </div>
                {isMobileMenuOpen && (
                    <nav className="druvamoksh_menu" style={{ 
                        marginTop: '20px',
                        background: '#0f172a',
                        borderRadius: '15px',
                        padding: '20px'
                    }}>
                        <ul className="nav_scroll" style={{ 
                            listStyle: 'none', 
                            padding: 0, 
                            margin: 0 
                        }}>
                            <li style={{ marginBottom: '15px' }}>
                                <Link 
                                    to="/" 
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    style={{ 
                                        color: '#fff', 
                                        textDecoration: 'none', 
                                        fontSize: '18px',
                                        display: 'block',
                                        padding: '10px'
                                    }}
                                >
                                    Home
                                </Link>
                            </li>
                            <li style={{ marginBottom: '15px' }}>
                                <Link 
                                    to="/about" 
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    style={{ 
                                        color: '#fff', 
                                        textDecoration: 'none', 
                                        fontSize: '18px',
                                        display: 'block',
                                        padding: '10px'
                                    }}
                                >
                                    About Us
                                </Link>
                            </li>
                            <li style={{ marginBottom: '15px' }}>
                                <Link 
                                    to="/projects" 
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    style={{ 
                                        color: '#fff', 
                                        textDecoration: 'none', 
                                        fontSize: '18px',
                                        display: 'block',
                                        padding: '10px'
                                    }}
                                >
                                    Projects
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    to="/contact" 
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    style={{ 
                                        color: '#fff', 
                                        textDecoration: 'none', 
                                        fontSize: '18px',
                                        display: 'block',
                                        padding: '10px'
                                    }}
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </nav>
                )}
            </div>
        </>
    );
};

export default Navbar;
