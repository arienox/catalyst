import React from 'react';
import { motion } from 'framer-motion';

const ContactPage: React.FC = () => {
  return (
    <motion.div
      className="py-12 px-4 sm:px-6 lg:px-8 text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-display text-brand-text mb-4">Get In Touch</h2>
        <p className="text-lg text-brand-text-secondary mb-8">
          Ready to start your next tattoo project? We'd love to hear from you.
        </p>
        <div className="bg-brand-surface border border-brand-border rounded-lg p-8">
          <p className="text-brand-text">
            Our contact form is coming soon. In the meantime, please reach out to us via our social media channels or email.
          </p>
          <p className="text-brand-primary mt-4">
            contact@inkedsoul.com
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactPage;
