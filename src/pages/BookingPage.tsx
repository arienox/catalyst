import React from 'react';
import { motion } from 'framer-motion';
import BackToHome from '../components/BackToHome';

const BookingPage: React.FC = () => {
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
          <h2 className="text-4xl md:text-5xl font-display text-brand-text mb-4 tracking-wider">Booking</h2>
          <p className="text-lg text-brand-text-secondary mb-8 font-sans">
            Ready to start your next tattoo project? Let's talk.
          </p>
          <div className="bg-brand-surface border border-brand-border rounded-lg p-8">
            <p className="text-brand-text font-sans">
              Our booking form is under construction. For inquiries, please reach out via email.
            </p>
            <p className="text-brand-primary mt-4 text-lg">
              booking@catalyst.art
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default BookingPage;
