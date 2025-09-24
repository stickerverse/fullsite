
import React from 'react';
import { type CartItemType } from '../types';
import { TrashIcon } from './icons/Icons';

interface CartItemProps {
    item: CartItemType;
    onQuantityChange: (id: number, quantity: number) => void;
    onRemove: (id: number) => void;
}

const CartItem: React.FC<CartItemProps> = ({ item, onQuantityChange, onRemove }) => {
    
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newQuantity = parseInt(e.target.value, 10);
        if (!isNaN(newQuantity)) {
            onQuantityChange(item.id, newQuantity);
        }
    };
    
    return (
        <div className="flex flex-col md:flex-row items-center justify-between py-4 border-b border-gray-200 gap-4">
            <div className="flex items-center gap-4 w-full md:w-auto">
                <img src={item.imageUrl} alt={item.name} className="w-24 h-24 object-cover rounded-md" />
                <div>
                    <h3 className="font-bold text-lg text-zinc-800">{item.name}</h3>
                    {item.description.map((desc, index) => (
                        <p key={index} className="text-sm text-gray-600">{desc}</p>
                    ))}
                </div>
            </div>

            <div className="flex items-center justify-between w-full md:w-auto md:gap-8">
                <div className="text-center">
                    <label htmlFor={`quantity-${item.id}`} className="text-xs text-gray-500 block mb-1">Quantity</label>
                    <input
                        id={`quantity-${item.id}`}
                        type="number"
                        value={item.quantity}
                        onChange={handleInputChange}
                        min="1"
                        className="w-20 p-2 border border-gray-300 rounded-md text-center"
                    />
                </div>

                <div className="text-center">
                    <p className="text-xs text-gray-500">Price/piece</p>
                    <p className="font-semibold text-zinc-700 mt-1">${item.pricePerPiece.toFixed(2)}</p>
                </div>

                <div className="text-center">
                    <p className="text-xs text-gray-500">Total</p>
                    <p className="font-bold text-zinc-800 mt-1">${(item.quantity * item.pricePerPiece).toFixed(2)}</p>
                </div>

                <button onClick={() => onRemove(item.id)} className="text-gray-500 hover:text-red-600 transition-colors self-end md:self-center pb-1 md:pb-0">
                    <TrashIcon className="w-6 h-6" />
                </button>
            </div>
        </div>
    );
};

export default CartItem;
