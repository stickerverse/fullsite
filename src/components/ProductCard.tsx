
import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const getProductLink = (productId: string): string => {
  switch (productId) {
    case 'die-cut':
      return '/designer';
    case 'sticker-sheets':
      return '/shop';
    case 'text-decals':
      return '/shop';
    case 'sticker-shop':
      return '/shop';
    default:
      return '/shop';
  }
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <a href={getProductLink(product.id)} className="block bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden group">
      <div className="relative p-6">
        {product.tag && (
          <div className={`absolute top-5 right-5 px-3 py-1 text-sm font-extrabold rounded ${product.tagColor} ${product.tagTextColor}`}>
            {product.tag}
          </div>
        )}
        <div className="flex items-center aspect-[3/1]">
          <img
            src={product.imageUrl}
            alt={product.title}
            className="max-w-[112px] max-h-[112px] object-contain mr-4 group-hover:scale-105 transition-transform duration-300"
          />
          <div className="flex flex-col justify-center">
            <h3 className="text-xl font-black text-zinc-900">{product.title}</h3>
            <p className="text-zinc-600">{product.description}</p>
          </div>
        </div>
      </div>
    </a>
  );
};

export default ProductCard;