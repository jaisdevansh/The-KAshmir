import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ShoppingBag } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Experience', path: '/' },
        { name: 'The Menu', path: '/menu' },
        { name: 'Legacy', path: '/about' },
        { name: 'Catering', path: '/catering' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav className={`navbar-luxury ${isScrolled ? 'navbar-scrolled' : ''}`}>
            <div className="container navbar-inner">
                <NavLink to="/" className="navbar-brand">
                    <img
                        src="/logo.png"
                        alt="The Kashmir House"
                        className="brand-logo"
                        onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'block';
                        }}
                    />
                    <div className="brand-fallback" style={{ display: 'none' }}>
                        <span className="logo-text-luxury">KASHMIR HOUSE</span>
                    </div>
                </NavLink>

                <div className="nav-items-luxury">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.name}
                            to={link.path}
                            className={({ isActive }) => `luxury-link ${isActive ? 'active' : ''}`}
                        >
                            {link.name}
                            <span className="link-dot" />
                        </NavLink>
                    ))}
                    <button className="navbar-toggle-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <Menu size={24} />
                    </button>
                    <NavLink to="/menu" className="luxury-cta">
                        <ShoppingBag size={18} />
                        <span>Order Now</span>
                    </NavLink>
                </div>
            </div>

            {/* Immersive Menu Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="immersive-menu-overlay"
                    >
                        <button className="menu-close-btn" onClick={() => setIsMenuOpen(false)}>
                            <X size={40} />
                        </button>
                        <div className="menu-overlay-content">
                            <motion.div
                                initial={{ y: 50, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                className="menu-overlay-links"
                            >
                                {navLinks.map((link, idx) => (
                                    <NavLink
                                        key={link.name}
                                        to={link.path}
                                        className="overlay-link"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        <span className="link-num">0{idx + 1}</span>
                                        <span className="link-text">{link.name}</span>
                                    </NavLink>
                                ))}
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
