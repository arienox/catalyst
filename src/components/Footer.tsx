import React from 'react';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-surface border-t border-brand-border mt-12">
      <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <p className="text-brand-text-secondary text-sm mb-4 md:mb-0">
          &copy; {year} Inked Soul. All Rights Reserved.
        </p>
        <div className="flex items-center space-x-6">
          <a href="#" aria-label="Instagram" className="text-brand-text-secondary hover:text-brand-primary transition-colors duration-300">
            <Instagram size={20} />
          </a>
          <a href="#" aria-label="Facebook" className="text-brand-text-secondary hover:text-brand-primary transition-colors duration-300">
            <Facebook size={20} />
          </a>
          <a href="#" aria-label="Twitter" className="text-brand-text-secondary hover:text-brand-primary transition-colors duration-300">
            <Twitter size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
