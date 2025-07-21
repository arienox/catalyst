import React from 'react';
import ImageGrid from '../components/ImageGrid';
import BackToHome from '../components/BackToHome';
import { tattooData } from '../data/mock-data';

const PortfolioPage: React.FC = () => {
  return (
    <div className="relative">
      <BackToHome />
      <div className="text-center pt-24 pb-12 px-4">
        <h2 className="text-4xl md:text-5xl font-display text-brand-text mb-2 tracking-wider">Tattoo Portfolio</h2>
        <p className="max-w-2xl mx-auto text-brand-text-secondary font-sans">
          A collection of custom tattoos, each with a unique story.
        </p>
      </div>
      <ImageGrid items={tattooData} />
    </div>
  );
};

export default PortfolioPage;
