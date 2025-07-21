import React from 'react';
import { motion } from 'framer-motion';
import { PortfolioItem } from '../types';

interface ImageCardProps {
  item: PortfolioItem;
}

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const ImageCard: React.FC<ImageCardProps> = ({ item }) => {
  return (
    <motion.div
      className="group relative overflow-hidden rounded-lg shadow-lg border border-brand-border aspect-[3/4] hover:border-brand-primary transition-colors duration-300"
      variants={cardVariants}
      layout
    >
      <img
        src={item.imageUrl}
        alt={item.title}
        className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      <div className="absolute bottom-0 left-0 p-4 w-full translate-y-1/4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-in-out">
        <h3 className="text-lg font-bold text-brand-text font-sans">{item.title}</h3>
        <p className="text-brand-primary font-medium font-sans text-sm">{item.style}</p>
      </div>
    </motion.div>
  );
};

export default ImageCard;
