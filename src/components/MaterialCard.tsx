
import React, { useState, useRef } from 'react';
import { Material, PriceTier } from '../types';

interface MaterialCardProps {
  material: Material;
}

const MaterialCard: React.FC<MaterialCardProps> = ({ material }) => {
  const [selectedPrice, setSelectedPrice] = useState<PriceTier | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };
  
  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-lg flex flex-col overflow-hidden h-full">
      <div className="aspect-square w-full overflow-hidden">
        <img src={material.imageUrl} alt={material.title} className="w-full h-full object-cover" />
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
            <div>
                <h3 className="text-2xl font-black text-zinc-900">{material.title}</h3>
                <p className="text-slate-500">{material.subtitle}</p>
            </div>
            <a href="#" className="text-blue-600 font-semibold hover:underline">From ${Math.min(...material.prices.map(p => p.price))}</a>
        </div>
        
        <ul className="my-4 space-y-1">
            {material.prices.map((tier, index) => (
                <li key={index} className={`rounded-md transition-colors ${selectedPrice?.quantity === tier.quantity ? 'bg-yellow-100' : 'hover:bg-slate-50'}`}>
                    <label className="flex justify-between items-center p-3 cursor-pointer">
                         <div className="flex items-center">
                            <input
                                type="radio"
                                name={`price-${material.id}`}
                                className="h-4 w-4 text-yellow-500 border-slate-300 focus:ring-yellow-400"
                                checked={selectedPrice?.quantity === tier.quantity}
                                onChange={() => setSelectedPrice(tier)}
                            />
                            <span className="ml-3 text-zinc-800">{tier.quantity} pcs</span>
                        </div>
                        <div className="flex items-center">
                            <span className="font-bold text-zinc-900 mr-2">${tier.price}</span>
                            {tier.discount && <span className="text-sm font-bold text-green-600 bg-green-100 px-2 py-0.5 rounded-full">-{tier.discount}%</span>}
                        </div>
                    </label>
                </li>
            ))}
        </ul>
        
        <div className="mt-auto pt-4 border-t border-slate-200">
            <ul className="text-sm text-slate-600 space-y-2 mb-4">
                {material.features.map((feature, i) => <li key={i} className="italic">• {feature}</li>)}
            </ul>
            <input type="file" ref={fileInputRef} className="hidden" />
            <button
                onClick={handleUploadClick}
                disabled={!selectedPrice}
                className={`w-full font-bold py-3 px-6 rounded-lg text-lg transition-all duration-300
                ${!selectedPrice 
                    ? 'bg-slate-200 text-slate-500 cursor-not-allowed' 
                    : 'bg-yellow-400 text-white hover:bg-yellow-500 shadow-md hover:shadow-lg transform hover:-translate-y-1'}`
                }
            >
                Upload file
            </button>
        </div>
      </div>
    </div>
  );
};

export default MaterialCard;
