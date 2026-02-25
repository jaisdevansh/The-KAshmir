import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star } from 'lucide-react';
import './Loader.css';

const Loader = ({ onComplete }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onComplete();
        }, 3500);
        return () => clearTimeout(timer);
    }, [onComplete]);

    return (
        <motion.div
            className="loader-overlay"
            exit={{
                clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
                transition: { duration: 1.2, ease: [0.77, 0, 0.175, 1] }
            }}
        >
            <div className="loader-inner">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="loader-logo"
                >
                    <Star className="loader-star" size={64} />
                    <h1 className="loader-title">THE KASHMIR HOUSE</h1>
                </motion.div>

                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
                    className="loader-line"
                />

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 2.2 }}
                    className="loader-tagline"
                >
                    AN HEIRLOOM OF ROYAL FLAVOURS
                </motion.p>
            </div>

            <div className="loader-bg-glow" />
        </motion.div>
    );
};

export default Loader;
