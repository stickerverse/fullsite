import React, { useState, useEffect } from 'react';
import type { StickerGridItemData } from '../types';
import { CloseIcon } from './icons';

export const QuickViewModal: React.FC<{ sticker: StickerGridItemData; onClose: () => void; }> = ({ sticker, onClose }) => {
    const [quantity, setQuantity] = useState(1);
    const [isAdded, setIsAdded] = useState(false);

    useEffect(() => {
        const handleEsc = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };
        window.addEventListener('keydown', handleEsc);
        document.body.style.overflow = 'hidden';

        return () => {
            window.removeEventListener('keydown', handleEsc);
            document.body.style.overflow = 'auto';
        };
    }, [onClose]);

    useEffect(() => {
        // Reset state when a new sticker is viewed
        setQuantity(1);
        setIsAdded(false);
    }, [sticker]);

    const handleQuantityChange = (amount: number) => {
        setQuantity(prev => Math.max(1, prev + amount));
    };
    
    // Placeholder function to simulate adding to cart
    const handleAddToCart = () => {
        if (isAdded) return;
        
        console.log(`Added ${quantity} of "${sticker.name}" to cart.`);
        setIsAdded(true);
        
        setTimeout(() => {
            setIsAdded(false);
        }, 2000); // Reset button state after 2 seconds
    };

    if (!sticker) return null;

    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-60 z-50 flex justify-center items-center p-4 transition-opacity duration-300 animate-fade-in"
            onClick={onClose}
            aria-modal="true"
            role="dialog"
        >
            <div
                className="bg-white rounded-xl shadow-2xl w-full max-w-4xl m-4 relative flex flex-col md:flex-row max-h-[90vh] transform transition-transform duration-300 scale-95 animate-scale-in"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-900 z-10 transition-colors"
                    aria-label="Close product quick view"
                >
                    <CloseIcon className="w-8 h-8" />
                </button>

                <div className="w-full md:w-1/2 p-8 bg-gray-100 flex items-center justify-center rounded-t-xl md:rounded-l-xl md:rounded-tr-none">
                    <img src={sticker.imgSrc} alt={sticker.alt} className="max-w-full max-h-full h-64 md:h-auto object-contain" />
                </div>

                <div className="w-full md:w-1/2 p-8 flex flex-col overflow-y-auto">
                    <h2 className="text-3xl font-black uppercase text-zinc-900">{sticker.name}</h2>
                    <p className="text-3xl font-bold text-zinc-800 my-4">{sticker.price}</p>
                    
                    <div className="text-gray-600 space-y-2 mb-6">
                        <p><span className="font-bold">Size:</span> {sticker.size}</p>
                        <p>{sticker.description}</p>
                    </div>

                    <div className="mt-auto pt-6 border-t">
                        <div className="flex items-center gap-4 mb-4">
                            <label htmlFor="quantity" className="font-bold text-zinc-800">Quantity:</label>
                            <div className="flex items-center border border-gray-300 rounded-lg">
                                <button 
                                    onClick={() => handleQuantityChange(-1)} 
                                    className="px-4 py-2 text-xl font-bold text-gray-700 rounded-l-lg hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed" 
                                    aria-label="Decrease quantity"
                                    disabled={quantity <= 1}
                                >-</button>
                                <input
                                    id="quantity"
                                    type="text"
                                    value={quantity}
                                    readOnly
                                    className="w-16 text-center text-lg font-bold border-l border-r border-gray-300 focus:outline-none"
                                    aria-label="Current quantity"
                                />
                                <button 
                                    onClick={() => handleQuantityChange(1)} 
                                    className="px-4 py-2 text-xl font-bold text-gray-700 rounded-r-lg hover:bg-gray-200 transition-colors" 
                                    aria-label="Increase quantity"
                                >+</button>
                            </div>
                        </div>

                        <button 
                            onClick={handleAddToCart}
                            className={`w-full font-black py-3 px-6 rounded-lg transition-all duration-300 text-lg uppercase transform active:scale-95
                            ${isAdded 
                                ? 'bg-green-500 text-white cursor-default' 
                                : 'bg-zinc-800 text-white hover:bg-pink-600'
                            }`}
                            disabled={isAdded}
                        >
                            {isAdded ? 'Added to Cart!' : 'Add to Cart'}
                        </button>
                    </div>
                </div>
            </div>
             <style>{`
                @keyframes scaleIn {
                    from { transform: scale(0.95); opacity: 0; }
                    to { transform: scale(1); opacity: 1; }
                }
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                .animate-scale-in { animation: scaleIn 0.2s ease-out forwards; }
                .animate-fade-in { animation: fadeIn 0.2s ease-out forwards; }
            `}</style>
        </div>
    );
};
