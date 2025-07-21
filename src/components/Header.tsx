import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  const activeLinkStyle = {
    color: '#C0A062', // brand-primary
  };

  return (
    <motion.header 
      className="py-6 px-4 sm:px-6 lg:px-8 sticky top-0 z-50 bg-brand-background/80 backdrop-blur-lg border-b border-brand-border"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="container mx-auto flex justify-between items-center">
        <NavLink to="/">
          <h1 className="text-3xl md:text-4xl font-display text-brand-primary tracking-wider">
            Inked Soul
          </h1>
        </NavLink>
        <nav>
          <ul className="flex items-center space-x-4 md:space-x-6 text-sm font-medium tracking-wide">
            <li><NavLink to="/" className="text-brand-text hover:text-brand-primary transition-colors duration-300" style={({ isActive }) => isActive ? activeLinkStyle : undefined}>Portfolio</NavLink></li>
            <li><NavLink to="/about" className="text-brand-text-secondary hover:text-brand-primary transition-colors duration-300" style={({ isActive }) => isActive ? activeLinkStyle : undefined}>About</NavLink></li>
            <li><NavLink to="/contact" className="text-brand-text-secondary hover:text-brand-primary transition-colors duration-300" style={({ isActive }) => isActive ? activeLinkStyle : undefined}>Contact</NavLink></li>
          </ul>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;
