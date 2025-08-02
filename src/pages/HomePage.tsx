import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import maskImage from '../assets/mask without bg 1.jpg';

const navItems = [
  { path: '/tattoo', label: '. TATTOO .' },
  { path: '/painting', label: '. PAINTING .' },
  { path: '/booking', label: '. BOOKING .' },
  { path: '/shop', label: '. SHOP .' },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.5,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
    }
  },
};

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 relative overflow-hidden">
      <motion.img
        src={maskImage}
        alt="Catalyst mask logo"
        className="w-40 h-40 object-contain mb-8"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      />
      <motion.h1
        className="text-2xl text-brand-primary tracking-[0.2em] mb-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        *CATALYST*
      </motion.h1>
      
      <motion.nav
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <ul className="space-y-6 text-center">
          {navItems.map((item) => (
            <motion.li key={item.path} variants={itemVariants}>
              <Link
                to={item.path}
                className="inline-block text-xl text-brand-primary tracking-widest hover:text-brand-text hover:scale-105 transition-all duration-300 ease-in-out"
              >
                {item.label}
              </Link>
            </motion.li>
          ))}
        </ul>
      </motion.nav>
    </div>
  );
};

export default HomePage;
