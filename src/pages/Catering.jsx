import React from 'react';
import { motion } from 'framer-motion';
import { ChefHat, Star, Users, MessageSquare } from 'lucide-react';
import Button from '../components/Button';
import './Catering.css';

const Catering = () => {
    const packages = [
        {
            name: 'Royal Mini Gatherings',
            pax: '10 - 15 Pax',
            image: 'https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&q=80&w=800',
            features: ['Signature Wazwan Tarami', 'Biryani Choice', '2 Starters', '1 Dessert']
        },
        {
            name: 'Grand Celebration',
            pax: '20 - 50 Pax',
            image: 'https://images.unsplash.com/photo-1555243811-92f754b26715?auto=format&fit=crop&q=80&w=800',
            features: ['Full Wazwan Spread', 'Multiple Biryani Varieties', '4 Starters', '2 Desserts', 'Welcome Drinks']
        },
        {
            name: 'Wedding & Bulk Orders',
            pax: '50+ Pax',
            image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800',
            features: ['Customized Menu', 'Live Counters', 'Premium Server Staff', 'Traditional Copper Service']
        },
    ];

    return (
        <div className="catering-experience-page">
            <section className="hero-standard">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center"
                    >
                        <span className="section-label">Celebrate in Style</span>
                        <h1 className="text-gold-gradient">Royal Catering</h1>
                        <p className="hero-desc">Bring the legendary flavours and hospitality of Kashmir to your special occasions.</p>
                    </motion.div>
                </div>
            </section>

            <section className="catering-packages section-padding">
                <div className="container">
                    <div className="luxury-packages-grid">
                        {packages.map((pkg, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.2 }}
                                viewport={{ once: true }}
                                className="catering-luxury-card highlight-glow"
                            >
                                <div className="card-image-wrap">
                                    <img src={pkg.image} alt={pkg.name} />
                                    <div className="card-overlay-dark" />
                                    <span className="pkg-badge">{pkg.pax}</span>
                                </div>
                                <div className="card-body">
                                    <div className="body-header">
                                        <Users className="text-gold" size={20} />
                                        <h3>{pkg.name}</h3>
                                    </div>
                                    <ul className="luxury-features">
                                        {pkg.features.map((feat, fIdx) => (
                                            <li key={fIdx}>
                                                <Star size={14} className="text-gold" />
                                                <span>{feat}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <Button variant="secondary" className="w-full">Enquire Now</Button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="catering-booking section-padding bg-maroon">
                <div className="container booking-grid">
                    <div className="booking-info">
                        <h2 className="text-gold-gradient">Request a Royal Quote</h2>
                        <p>Tell us about your event, and our royal catering manager will get in touch with a curated menu proposal.</p>
                        <div className="catering-features-list">
                            <div className="feat-item">
                                <span className="text-gold">✔</span>
                                <span>Authentic Wazwan copper service available.</span>
                            </div>
                            <div className="feat-item">
                                <span className="text-gold">✔</span>
                                <span>Professional uniformed staff.</span>
                            </div>
                            <div className="feat-item">
                                <span className="text-gold">✔</span>
                                <span>Full setup and decoration support.</span>
                            </div>
                        </div>
                    </div>

                    <div className="booking-form-wrap glass">
                        <form className="luxury-form-clean">
                            <div className="input-group-luxury">
                                <input type="text" placeholder="Your Name" required />
                            </div>
                            <div className="input-group-luxury">
                                <input type="tel" placeholder="Phone Number" required />
                            </div>
                            <div className="input-row-luxury">
                                <input type="date" required />
                                <input type="number" placeholder="Guest Count" required />
                            </div>
                            <textarea placeholder="Tell us about your event requirements..." rows="4"></textarea>
                            <div className="form-buttons">
                                <Button variant="primary" className="w-full">Submit Request</Button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Catering;
