import React from 'react';
import DarkroomHero from '../components/DarkroomHero';
import { StickerCardsCarousel } from '../components/StickerCardsCarousel';
import MaterialsShowcase from '../components/MaterialsShowcase';
import InfoSection from '../components/InfoSection';
import { materials, infoSections } from '../constants';

const HomePage: React.FC = () => {
  return (
    <div className="bg-black min-h-screen">
      <DarkroomHero />
      <StickerCardsCarousel />
      <MaterialsShowcase materials={materials} />
      <InfoSection {...infoSections[0]} />
      <InfoSection {...infoSections[1]} imagePosition="right" />
      <InfoSection {...infoSections[2]} />
      <InfoSection {...infoSections[3]} imagePosition="right" />
    </div>
  );
};

export default HomePage;