import React from 'react';
import BackToHome from '../components/BackToHome';
import { tattooData } from '../data/mock-data';

const PortfolioPage: React.FC = () => {
  const tattooImage = tattooData[0];

  return (
    <div className="relative bg-brand-background">
      <BackToHome />
      <div className="text-center pt-24 pb-12 px-4">
        <h2 className="text-4xl md:text-5xl font-display text-brand-text mb-2 tracking-wider">
          {tattooImage.title}
        </h2>
        <p className="max-w-2xl mx-auto text-brand-text-secondary font-sans">
          A collection of custom tattoos, each with a unique story.
        </p>
      </div>
      <div className="max-w-4xl mx-auto p-4">
        <div className="w-full overflow-y-auto" style={{ maxHeight: '80vh' }}>
          <img
            src={tattooImage.imageUrl}
            alt={tattooImage.title}
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;
