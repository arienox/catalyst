import React from 'react';
import { motion } from 'framer-motion';
import BackToHome from '../components/BackToHome';

const ShopPage: React.FC = () => {
  return (
    <div className="relative">
      <BackToHome />
      <motion.div
        className="min-h-screen flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center max-w-2xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-display text-brand-text mb-4 tracking-wider">Shop</h2>
          <p className="text-lg text-brand-text-secondary font-sans">
            Merchandise and prints will be available here soon.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default ShopPage;
