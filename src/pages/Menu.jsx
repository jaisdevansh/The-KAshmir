import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Star, ShoppingBag } from 'lucide-react';
import { MENU_DATA } from '../data/menuData';
import Button from '../components/Button';
import './Menu.css';

const Menu = () => {
    const [activeCategory, setActiveCategory] = useState('Biryani');
    const [searchQuery, setSearchQuery] = useState('');

    const filteredItems = MENU_DATA.find(cat => cat.category === activeCategory)?.items.filter(item =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
    ) || [];

    return (
        <div className="menu-experience-page">
            <section className="hero-standard">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <span className="section-label">Indulge in Royalty</span>
                        <h1 className="text-gold-gradient">The Royal Menu</h1>
                        <p className="hero-desc">Explore the curated heirloom recipes of Kashmir, perfected over generations and served with royal hospitality.</p>
                    </motion.div>
                </div>
            </section>

            <section className="menu-explorer section-padding-top">
                <div className="container">
                    {/* Integrated Search and Tabs */}
                    <div className="menu-navigation-bar glass">
                        <div className="luxury-tabs">
                            {MENU_DATA.map(cat => (
                                <button
                                    key={cat.category}
                                    className={`luxury-tab-btn ${activeCategory === cat.category ? 'active' : ''}`}
                                    onClick={() => setActiveCategory(cat.category)}
                                >
                                    {cat.category}
                                </button>
                            ))}
                        </div>
                        <div className="luxury-search-box">
                            <Search size={18} className="text-gold" />
                            <input
                                type="text"
                                placeholder="Find a dish..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                    </div>

                    <AnimatePresence mode='wait'>
                        <motion.div
                            key={activeCategory + searchQuery}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.4 }}
                            className="luxury-menu-grid"
                        >
                            {filteredItems.length > 0 ? (
                                filteredItems.map((item, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: idx * 0.05 }}
                                        className="luxury-menu-card"
                                    >
                                        <div className="menu-card-visual">
                                            <img src={item.image} alt={item.name} loading="lazy" />
                                            <div className="price-tag">{typeof item.price === 'number' ? `₹${item.price}` : item.price}</div>
                                        </div>
                                        <div className="menu-card-details">
                                            <div className="details-header">
                                                <Star className="text-gold" size={14} fill="var(--color-gold)" />
                                                <h3>{item.name}</h3>
                                            </div>
                                            <p className="item-desc">{item.desc}</p>
                                            <Button variant="primary" className="btn-luxury-sm w-full">
                                                <ShoppingBag size={14} className="mr-2" /> Add to Order
                                            </Button>
                                        </div>
                                    </motion.div>
                                ))
                            ) : (
                                <div className="no-items">
                                    <p>Our royal kitchens couldn't find matches for "{searchQuery}".</p>
                                </div>
                            )}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </section>
        </div>
    );
};

export default Menu;
