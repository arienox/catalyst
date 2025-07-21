import React from 'react';
import { motion } from 'framer-motion';
import { PortfolioItem } from '../types';
import ImageCard from './ImageCard';

interface ImageGridProps {
  items: PortfolioItem[];
  emptyMessage?: string;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const ImageGrid: React.FC<ImageGridProps> = ({ items, emptyMessage = "This gallery is empty for now. Check back later!" }) => {
  if (items.length === 0) {
    return (
      <div className="text-center py-20 px-4">
        <p className="text-brand-text-secondary font-sans">{emptyMessage}</p>
      </div>
    );
  }

  return (
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4 sm:p-6 lg:p-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {items.map((item) => (
        <ImageCard key={item.id} item={item} />
      ))}
    </motion.div>
  );
};

export default ImageGrid;
