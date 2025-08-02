import React from 'react';
import { motion } from 'framer-motion';
import BackToHome from '../components/BackToHome';
import { paintingData } from '../data/mock-data';

const PaintingPage: React.FC = () => {
  const paintingImage = paintingData[0];

  return (
    <div className="relative bg-brand-background">
      <BackToHome />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center pt-24 pb-12 px-4">
          <h2 className="text-4xl md:text-5xl font-display text-brand-text mb-2 tracking-wider">
            {paintingImage.title}
          </h2>
          <p className="max-w-2xl mx-auto text-brand-text-secondary font-sans">
            Original paintings and flash art.
          </p>
        </div>
        <div className="max-w-4xl mx-auto p-4">
          <div className="w-full overflow-y-auto" style={{ maxHeight: '80vh' }}>
            <img
              src={paintingImage.imageUrl}
              alt={paintingImage.title}
              className="w-full h-auto"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default PaintingPage;
