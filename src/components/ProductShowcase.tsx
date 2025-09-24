
import React from 'react';
import { Product } from '../types';
import ProductCard from './ProductCard';

interface ProductShowcaseProps {
  products: Product[];
}

const ProductShowcase: React.FC<ProductShowcaseProps> = ({ products }) => {
  return (
    <section className="bg-slate-50 py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
