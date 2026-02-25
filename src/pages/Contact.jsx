import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, MessageCircle, Instagram, Facebook } from 'lucide-react';
import Button from '../components/Button';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact-experience-page">
            <section className="hero-standard">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center"
                    >
                        <span className="section-label">Find Us</span>
                        <h1 className="text-gold-gradient">Get In Touch</h1>
                        <p className="hero-desc">Visit the House of Kashmir or reach out for enquiries and royal catering.</p>
                    </motion.div>
                </div>
            </section>

            <section className="contact-details section-padding">
                <div className="container">
                    <div className="contact-luxury-grid">
                        <div className="contact-info-luxury">
                            <div className="info-card-luxury glass">
                                <div className="info-item-luxury">
                                    <MapPin className="text-gold" size={24} />
                                    <div>
                                        <h3>Address</h3>
                                        <p>Shop No. 12, Galleria Market, Crossing Republik, Greater Noida, UP 201009</p>
                                    </div>
                                </div>
                                <div className="info-item-luxury">
                                    <Phone className="text-gold" size={24} />
                                    <div>
                                        <h3>Phone Number</h3>
                                        <p>+91 99105 59269</p>
                                    </div>
                                </div>
                                <div className="info-item-luxury">
                                    <Mail className="text-gold" size={24} />
                                    <div>
                                        <h3>Email Address</h3>
                                        <p>info@thekashmirhouse.com</p>
                                    </div>
                                </div>
                                <div className="info-item-luxury">
                                    <Clock className="text-gold" size={24} />
                                    <div>
                                        <h3>Opening Hours</h3>
                                        <p>Mon - Sun: 11:00 AM - 11:00 PM</p>
                                    </div>
                                </div>
                            </div>

                            <div className="social-connect">
                                <h3>Follow The House</h3>
                                <div className="social-icons-luxury">
                                    <a href="#" className="glass"><Instagram size={20} /></a>
                                    <a href="#" className="glass"><Facebook size={20} /></a>
                                    <a href="https://wa.me/919910559269" className="glass"><MessageCircle size={20} /></a>
                                </div>
                            </div>
                        </div>

                        <div className="contact-form-luxury glass p-lg">
                            <h2 className="text-gold">Send a Message</h2>
                            <form className="luxury-form-clean">
                                <div className="input-group-luxury">
                                    <input type="text" placeholder="Your Name" required />
                                </div>
                                <div className="input-group-luxury">
                                    <input type="tel" placeholder="Phone Number" required />
                                </div>
                                <textarea placeholder="Your Message..." rows="6" required></textarea>
                                <Button variant="primary" className="w-full">Submit Message</Button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <section className="google-map-luxury">
                <iframe
                    title="Google Map Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.218559146194!2d77.42128351508107!3d28.619155782424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cefe23c9e68f7%3A0xddc15b823e10e092!2sGalleria%20Market!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                    width="100%"
                    height="500"
                    style={{ border: 0, filter: 'grayscale(0.5) contrast(1.2) brightness(0.9)' }}
                    allowFullScreen=""
                    loading="lazy"
                ></iframe>
            </section>
        </div>
    );
};

export default Contact;
