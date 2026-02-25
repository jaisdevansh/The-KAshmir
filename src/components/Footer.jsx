import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Instagram, Facebook, MessageCircle } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-content">
                <div className="footer-brand">
                    <h2 className="footer-logo">THE KASHMIR HOUSE</h2>
                    <p className="footer-tagline">Royal Kashmiri Wazwan & Firdaus Biryani</p>
                    <div className="social-links">
                        <a href="#" aria-label="Facebook"><Facebook size={20} /></a>
                        <a href="#" aria-label="Instagram"><Instagram size={20} /></a>
                        <a href="https://wa.me/919910559269" aria-label="WhatsApp" target="_blank" rel="noopener noreferrer"><MessageCircle size={20} /></a>
                    </div>
                </div>

                <div className="footer-links">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/menu">Our Menu</Link></li>
                        <li><Link to="/about">Our Story</Link></li>
                        <li><Link to="/catering">Catering</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                    </ul>
                </div>

                <div className="footer-contact">
                    <h3>Contact Us</h3>
                    <ul>
                        <li><MapPin size={18} className="text-gold" /> <span>Galleria Market, Crossing Republik, Greater Noida</span></li>
                        <li><Phone size={18} className="text-gold" /> <span>+91 99105 59269</span></li>
                        <li><Mail size={18} className="text-gold" /> <span>info@thekashmirhouse.com</span></li>
                    </ul>
                </div>

                <div className="footer-hours">
                    <h3>Opening Hours</h3>
                    <p>Mon - Sun: 11:00 AM - 11:00 PM</p>
                    <p className="footer-delivery">Available for Home Delivery & Takeaway</p>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <p>&copy; {new Date().getFullYear()} The Kashmir House. All rights reserved. | <Link to="/privacy">Privacy Policy</Link></p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
