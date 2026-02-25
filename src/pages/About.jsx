import React from 'react';
import { motion } from 'framer-motion';
import { History, Award, ShieldCheck, Heart, Star } from 'lucide-react';
import './About.css';

const About = () => {
    const timeline = [
        { year: 'Early Days', title: 'The Beginning', desc: 'Starting with a passion for preserving the authentic recipes of Kashmiri Wazwan.' },
        { year: '2015', title: 'The Kashmir House', desc: 'Opening our flagship restaurant, bringing royal flavors to a wider audience.' },
        { year: '2020', title: 'Expansion', desc: 'Growing our presence and refining our culinary techniques across multiple locations.' },
        { year: 'Present', title: 'Firdaus Biryani Launch', desc: 'Introducing our premium biryani sub-brand, inspired by royal Mughlai traditions.' },
    ];

    return (
        <div className="about-experience-page">
            <section className="hero-standard">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <span className="section-label">A Legacy of Flavours</span>
                        <h1 className="text-gold-gradient">Our Story of Royal Taste</h1>
                        <p className="hero-desc">Journey through the heritage and tradition of The Kashmir House—where every dish is an heirloom.</p>
                    </motion.div>
                </div>
            </section>

            <section className="craft-story section-padding">
                <div className="container">
                    <div className="story-luxury-grid">
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: -50 }}
                            viewport={{ once: true }}
                            className="story-visual"
                        >
                            <div className="visual-frame">
                                <img src="https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?auto=format&fit=crop&q=80&w=1000" alt="Authentic Wazwan" />
                                <div className="frame-overlay" />
                                <div className="est-badge">Est. 1990</div>
                            </div>
                        </motion.div>

                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: 50 }}
                            viewport={{ once: true }}
                            className="story-content-luxury"
                        >
                            <span className="accent-label">The Art of Wazwan</span>
                            <h2>Kashmiri Wazwan Culture</h2>
                            <p>Wazwan is more than just a meal; it's a celebration of Kashmiri hospitality and culinary artistry. At The Kashmir House, we take pride in serving authentic Wazwan prepared by skilled 'Wazas' using copper vessels and traditional methods.</p>

                            <div className="luxury-perks">
                                <div className="perk-item">
                                    <div className="perk-icon"><ShieldCheck size={20} /></div>
                                    <div>
                                        <h4>Traditional Methods</h4>
                                        <p>Slow-cooked in authentic copper 'Deghs'.</p>
                                    </div>
                                </div>
                                <div className="perk-item">
                                    <div className="perk-icon"><Heart size={20} /></div>
                                    <div>
                                        <h4>Prepared with Passion</h4>
                                        <p>Recipes guarded for generations.</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <section className="legacy-timeline section-padding">
                <div className="container">
                    <div className="timeline-header text-center">
                        <h2 className="text-gold-gradient">Our Journey Through Time</h2>
                    </div>

                    <div className="royal-timeline">
                        {timeline.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className={`timeline-block ${idx % 2 === 0 ? 'left' : 'right'}`}
                            >
                                <div className="timeline-card-luxury glass">
                                    <span className="royal-year">{item.year}</span>
                                    <h3>{item.title}</h3>
                                    <p>{item.desc}</p>
                                </div>
                                <div className="timeline-central-dot">
                                    <Star size={12} fill="var(--color-gold)" />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="quality-pillars section-padding bg-maroon-dark">
                <div className="container">
                    <div className="pillars-grid">
                        <motion.div whileHover={{ y: -10 }} className="pillar-card-glass glass">
                            <Award size={40} className="text-gold" />
                            <h3>Premium Ingredients</h3>
                            <p>We source only the finest spices directly from Kashmiri valleys.</p>
                        </motion.div>
                        <motion.div whileHover={{ y: -10 }} className="pillar-card-glass glass">
                            <ShieldCheck size={40} className="text-gold" />
                            <h3>Strict Hygiene</h3>
                            <p>Military-grade hygiene standards in our royal kitchens.</p>
                        </motion.div>
                        <motion.div whileHover={{ y: -10 }} className="pillar-card-glass glass">
                            <History size={40} className="text-gold" />
                            <h3>Royal Tradition</h3>
                            <p>Original heirloom recipes passed down through generations.</p>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
