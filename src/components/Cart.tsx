import React from 'react';
import { CartItem } from '../types';
import { XIcon } from './Icons';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onRemoveItem: (id: string) => void;
}

const Cart: React.FC<CartProps> = ({ isOpen, onClose, items, onRemoveItem }) => {
    const subtotal = items.reduce((sum, item) => sum + item.quantity.price, 0);

    return (
        <>
            {/* Overlay */}
            <div 
                className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} 
                onClick={onClose}
                aria-hidden="true"
            ></div>

            {/* Cart Panel */}
            <div 
                className={`fixed top-0 right-0 h-full w-full max-w-md bg-white z-50 shadow-2xl transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
                role="dialog"
                aria-modal="true"
                aria-labelledby="cart-heading"
            >
                <div className="flex flex-col h-full">
                    {/* Header */}
                    <div className="flex justify-between items-center p-6 border-b">
                        <h2 id="cart-heading" className="text-2xl font-bold text-gray-800">Your Cart</h2>
                        <button onClick={onClose} className="p-1 rounded-full hover:bg-gray-100 transition-colors" aria-label="Close cart">
                            <XIcon className="h-6 w-6 text-gray-600" />
                        </button>
                    </div>

                    {/* Items */}
                    <div className="flex-grow p-6 overflow-y-auto">
                        {items.length === 0 ? (
                            <p className="text-gray-500 text-center mt-8">Your cart is empty.</p>
                        ) : (
                            <ul className="space-y-6">
                                {items.map(item => (
                                    <li key={item.id} className="flex space-x-4 items-start">
                                        <div className="w-24 h-24 bg-gray-100 rounded-md flex-shrink-0 border">
                                            <img src={item.image || galleryImages[0].src} alt="Sticker Preview" className="w-full h-full object-contain p-1" />
                                        </div>
                                        <div className="flex-grow">
                                            <h3 className="font-bold text-gray-800">Custom Die Cut Sticker</h3>
                                            <p className="text-sm text-gray-500">{item.size.name}, {item.shape.name}</p>
                                            <p className="text-sm text-gray-500">{item.material.name}, {item.finish}</p>
                                            <p className="text-sm text-gray-500">Quantity: {item.quantity.amount}</p>
                                        </div>
                                        <div className="text-right flex-shrink-0">
                                            <p className="font-bold text-gray-800">${item.quantity.price.toFixed(2)}</p>
                                            <button onClick={() => onRemoveItem(item.id)} className="text-xs text-red-500 hover:underline mt-2">Remove</button>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>

                    {/* Footer */}
                    {items.length > 0 && (
                        <div className="p-6 border-t">
                            <div className="flex justify-between items-center mb-4">
                                <span className="text-lg font-medium text-gray-600">Subtotal</span>
                                <span className="text-xl font-bold text-gray-900">${subtotal.toFixed(2)}</span>
                            </div>
                            <button className="w-full bg-yellow-400 text-black font-extrabold py-3 px-6 rounded-lg text-lg hover:bg-yellow-500 transition-colors duration-300">
                                Checkout
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

// Add a default image in case one isn't provided.
const galleryImages = [
    { src: 'https://stickerapp.com/media/2000x2000/cb074be4de/pixiedust-stickers-howdy-2000x2000.png/m/2400x0/filters:quality(60)' }
];


export default Cart;
