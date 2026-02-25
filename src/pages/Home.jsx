import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChefHat, Star, ArrowRight, MousePointer2 } from 'lucide-react';
import Button from '../components/Button';
import './Home.css';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
    const containerRef = useRef(null);
    const heroRef = useRef(null);

    useEffect(() => {
        // GSAP Scroll Animations for story sequence
        const storyLines = gsap.utils.toArray('.story-text-line');
        storyLines.forEach((line) => {
            gsap.fromTo(line,
                { opacity: 0, y: 50, filter: 'blur(10px)' },
                {
                    opacity: 1,
                    y: 0,
                    filter: 'blur(0px)',
                    scrollTrigger: {
                        trigger: line,
                        start: 'top 85%',
                        end: 'bottom 60%',
                        scrub: 1,
                    }
                }
            );
        });

        // Parallax depth for images
        gsap.utils.toArray('.parallax-img').forEach((img) => {
            gsap.to(img, {
                y: -100,
                ease: 'none',
                scrollTrigger: {
                    trigger: img,
                    scrub: true
                }
            });
        });
    }, []);

    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const [currentImage, setCurrentImage] = React.useState(0);
    const heroImages = [
        "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&q=80&w=1000", // Royal Wazwan Tarami
        "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&q=80&w=1000", // Signature Seekh Kebabs
        "https://images.unsplash.com/photo-1541529086526-db283c563270?auto=format&fit=crop&q=80&w=1000", // Saffron Mutton Pilaf
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % heroImages.length);
        }, 4000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="home-experience" ref={containerRef}>
            {/* Progress Bar */}
            <motion.div className="progress-bar" style={{ scaleX }} />

            {/* Cinematic Hero */}
            <section className="hero-cinematic" ref={heroRef}>
                <div className="hero-overlay" />
                <div className="container hero-inner">
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                        className="hero-content-luxury"
                    >
                        <div className="luxury-badge">
                            <span className="shimmer-text">Est. 1990</span>
                        </div>
                        <h1 className="hero-title">
                            A Royal Feast <br />
                            <span className="text-gold-gradient">From The Valleys</span>
                        </h1>
                        <p className="hero-subtitle">Experience the heirloom recipes of Kashmir, crafted for modern royalty.</p>
                        <div className="hero-actions">
                            <Button variant="primary" className="btn-luxury">Enter The Experience</Button>
                            <Button variant="outline" className="btn-luxury-outline">Reserve a Table</Button>
                        </div>
                    </motion.div>

                    <div className="hero-visual-3d">
                        <div className="visual-wrapper">
                            <AnimatePresence mode="wait">
                                <motion.img
                                    key={currentImage}
                                    src={heroImages[currentImage]}
                                    alt="Royal Delicacy"
                                    initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                                    exit={{ opacity: 0, scale: 1.1, rotate: 5 }}
                                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                                    className="main-3d-img floating-bowl"
                                />
                            </AnimatePresence>
                            <div className="gold-ring-animation" />
                            <div className="spice-particles">
                                {[...Array(6)].map((_, i) => (
                                    <div key={i} className={`particle p-${i + 1}`} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="scroll-indicator">
                    <div className="mouse">
                        <div className="wheel" />
                    </div>
                    <span>Explore History</span>
                </div>
            </section>

            {/* Scroll Story Sequence */}
            <section className="story-sequence">
                <div className="story-block dark-bg">
                    <div className="container">
                        <div className="story-text-container">
                            <h2 className="story-text-line">Crafted with Tradition</h2>
                            <h2 className="story-text-line">Perfected by Time</h2>
                            <h2 className="story-text-line text-gold-gradient">Served for Royalty</h2>
                        </div>
                    </div>
                </div>

                <div className="story-block split-immersion">
                    <div className="container split-grid">
                        <div className="split-visual">
                            <div className="parallax-container">
                                <img
                                    src="https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&q=80&w=1200"
                                    className="parallax-img"
                                    alt="Royal Kashmiri Roast"
                                />
                            </div>
                        </div>
                        <div className="split-content">
                            <span className="section-label">Our Legacy</span>
                            <h3>The Art of Wazwan</h3>
                            <p>Every tarami we serve is a testament to the master chefs of Kashmir. Seven signature dishes, one royal experience.</p>
                            <Button variant="secondary" className="btn-minimal">Our Full Story <ArrowRight size={16} /></Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Signature Experience Spotlight */}
            <section className="signature-spotlight">
                <div className="container">
                    <div className="spotlight-header text-center">
                        <h2 className="reveal-up active">The Signature Selection</h2>
                        <p className="reveal-up active">Handpicked icons of our culinary heritage.</p>
                        <span className="scarcity-tag">Limited Royal Platters Daily</span>
                    </div>

                    <div className="spotlight-grid">
                        <motion.div whileHover={{ y: -20 }} className="spotlight-card luxury-card highlight-glow">
                            <div className="card-image-wrap">
                                <img src="https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&q=80&w=800" alt="Platter" />
                                <div className="card-overlay-gold" />
                                <span className="card-badge-luxury">Chef Recommended</span>
                            </div>
                            <div className="card-body">
                                <Star className="text-gold" size={20} />
                                <h4>Wazwan Tarami</h4>
                                <p>The ultimate 7-dish ceremonial platter.</p>
                                <span className="price">₹1,600</span>
                            </div>
                        </motion.div>

                        <motion.div whileHover={{ y: -20 }} className="spotlight-card luxury-card">
                            <div className="card-image-wrap">
                                <img src="https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?auto=format&fit=crop&q=80&w=800" alt="Biryani" />
                                <div className="card-overlay-gold" />
                                <span className="card-badge-luxury">Most Ordered</span>
                            </div>
                            <div className="card-body">
                                <Star className="text-gold" size={20} />
                                <h4>Firdaus Royal Biryani</h4>
                                <p>Saffron-infused masterpiece with prime meat.</p>
                                <span className="price">₹649</span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Royal Catering Section */}
            <section className="catering-luxury">
                <div className="catering-noise" />
                <div className="container catering-grid">
                    <div className="catering-info">
                        <h2>Celebrate in <br /><span className="text-gold-gradient">Royal Style</span></h2>
                        <p>From intimate kitty parties to grand weddings, bring the royal warmth of Kashmir to your guests.</p>
                        <div className="catering-stats">
                            <div className="stat-item">
                                <span className="stat-num">1000+</span>
                                <span className="stat-label">Royal Guests</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-num">500+</span>
                                <span className="stat-label">Events Hosted</span>
                            </div>
                        </div>
                    </div>
                    <div className="catering-form-wrap glass">
                        <form className="luxury-form">
                            <div className="input-group">
                                <input type="text" placeholder=" " id="name" required />
                                <label htmlFor="name">Your Name</label>
                            </div>
                            <div className="input-group">
                                <input type="tel" placeholder=" " id="phone" required />
                                <label htmlFor="phone">Phone Number</label>
                            </div>
                            <div className="input-group">
                                <select id="event">
                                    <option value="">Event Type</option>
                                    <option value="kitty">Kitty Party</option>
                                    <option value="birthday">Birthday</option>
                                    <option value="wedding">Wedding</option>
                                </select>
                            </div>
                            <Button variant="primary" className="btn-shimmer w-full">Request Royal Catering</Button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
