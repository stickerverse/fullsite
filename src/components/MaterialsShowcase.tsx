
import React from 'react';
import { Material } from '../types';
import MaterialCard from './MaterialCard';

interface MaterialsShowcaseProps {
  materials: Material[];
}

const MaterialsShowcase: React.FC<MaterialsShowcaseProps> = ({ materials }) => {
  return (
    <section className="bg-slate-50 py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-zinc-900 mb-4">Sticker Materials</h2>
            <p className="text-lg text-zinc-700">
                Explore our durable materials, from vinyl and crystal-clear transparents to iridescent holographic, brushed metallic, glitter, prismatic, and more. Discover the exact finish and feel that brings your design to life.
            </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {materials.map((material) => (
            <MaterialCard key={material.id} material={material} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MaterialsShowcase;
