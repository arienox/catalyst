import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const BackToHome: React.FC = () => {
  return (
    <Link 
      to="/" 
      className="absolute top-6 left-6 sm:top-8 sm:left-8 flex items-center gap-2 text-brand-text-secondary hover:text-brand-primary transition-colors duration-300 z-10"
    >
      <ArrowLeft size={20} />
      <span className="font-sans text-sm">Home</span>
    </Link>
  );
};

export default BackToHome;
