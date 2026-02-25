import React from 'react';
import { motion } from 'framer-motion';
import './Button.css';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      className={`btn-luxury btn-${variant} ${className}`}
      {...props}
    >
      <span className="btn-content">{children}</span>
      <div className="btn-shimmer-effect" />
    </motion.button>
  );
};

export default Button;
