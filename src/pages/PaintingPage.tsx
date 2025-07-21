import React from 'react';
import { motion } from 'framer-motion';
import BackToHome from '../components/BackToHome';
import ImageGrid from '../components/ImageGrid';
import { paintingData } from '../data/mock-data';

const PaintingPage: React.FC = () => {
  return (
    <div className="relative">
      <BackToHome />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center pt-24 pb-12 px-4">
          <h2 className="text-4xl md:text-5xl font-display text-brand-text mb-4 tracking-wider">Painting Gallery</h2>
          <p className="text-lg text-brand-text-secondary font-sans">
            Original paintings and flash art.
          </p>
        </div>
        <ImageGrid items={paintingData} emptyMessage="The painting gallery is being curated. Please check back soon." />
      </motion.div>
    </div>
  );
};

export default PaintingPage;
