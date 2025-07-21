import React from 'react';
import { motion } from 'framer-motion';
import { tattoos } from '../data/mock-data';
import TattooCard from './TattooCard';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const PortfolioGrid: React.FC = () => {
  return (
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4 sm:p-6 lg:p-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {tattoos.map((tattoo) => (
        <TattooCard key={tattoo.id} tattoo={tattoo} />
      ))}
    </motion.div>
  );
};

export default PortfolioGrid;
