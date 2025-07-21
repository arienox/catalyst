import React from 'react';
import { motion } from 'framer-motion';
import { Tattoo } from '../types';

interface TattooCardProps {
  tattoo: Tattoo;
}

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const TattooCard: React.FC<TattooCardProps> = ({ tattoo }) => {
  return (
    <motion.div
      className="group relative overflow-hidden rounded-lg shadow-lg border border-brand-border"
      variants={cardVariants}
      layout
    >
      <img
        src={tattoo.imageUrl}
        alt={tattoo.title}
        className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      <div className="absolute bottom-0 left-0 p-6 w-full translate-y-1/4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-in-out">
        <h3 className="text-xl font-bold text-brand-text">{tattoo.title}</h3>
        <p className="text-brand-primary font-medium">{tattoo.style}</p>
      </div>
    </motion.div>
  );
};

export default TattooCard;
