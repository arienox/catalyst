import React from 'react';
import { motion } from 'framer-motion';

const AboutPage: React.FC = () => {
  return (
    <motion.div
      className="py-12 px-4 sm:px-6 lg:px-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-display text-brand-text mb-2">About The Artist</h2>
        <p className="max-w-2xl mx-auto text-brand-text-secondary">
          The story behind the ink.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12 items-center">
        <motion.div 
          className="md:col-span-2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img 
            src="https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/800x1000/101010/F5F5F5/png?text=Artist" 
            alt="The tattoo artist" 
            className="rounded-lg shadow-lg object-cover w-full h-full border-2 border-brand-border"
          />
        </motion.div>
        <div className="md:col-span-3 text-brand-text-secondary space-y-6">
          <p className="text-lg leading-relaxed">
            Welcome to Inked Soul, where skin becomes a canvas and tattoos tell stories. Our lead artist, [Artist's Name], has been mastering the craft for over a decade. With a passion for intricate designs and a commitment to quality, we specialize in a range of styles from bold Neo-Traditional to delicate Fine Line work.
          </p>
          <p className="leading-relaxed">
            Our philosophy is simple: every tattoo should be a collaboration between the artist and the client. We believe in creating a comfortable, safe, and inspiring environment where your vision can come to life. We use only the highest quality, vegan-friendly inks and state-of-the-art equipment to ensure your art is not only beautiful but also timeless.
          </p>
          <p className="leading-relaxed">
            Whether you're coming in for your first tattoo or adding to a collection, we're here to guide you through the process and create a piece of art you'll cherish forever.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
