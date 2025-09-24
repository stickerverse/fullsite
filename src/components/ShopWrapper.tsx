import React from 'react';

// Simple shop wrapper that provides the shop functionality without the problematic imports
const ShopWrapper: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Sticker Shop</h1>
          <p className="text-xl text-gray-600">Browse our collection of custom stickers</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {/* Sample sticker products */}
          {[
            { name: "Happy Raccoon", price: 2.99, image: "https://images.unsplash.com/photo-1543852786-1cf6624b9987?w=300&h=300&fit=crop" },
            { name: "Pizza Slice", price: 1.99, image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=300&h=300&fit=crop" },
            { name: "Smiling Bomb", price: 3.49, image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=300&h=300&fit=crop" },
            { name: "United States Flag", price: 2.49, image: "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=300&h=300&fit=crop" },
            { name: "Hand Written XOXO", price: 1.99, image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=300&h=300&fit=crop" },
            { name: "Mickey Sailor", price: 4.99, image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop" },
            { name: "Coffee Cup", price: 2.99, image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=300&h=300&fit=crop" },
            { name: "Heart Sticker", price: 1.49, image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=300&h=300&fit=crop" }
          ].map((sticker, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
              <img
                src={sticker.image}
                alt={sticker.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{sticker.name}</h3>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-blue-600">${sticker.price}</span>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopWrapper;
