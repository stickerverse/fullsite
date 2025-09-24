
import React, { useState } from 'react';
import CartItem from './CartItem';
import BillingForm from './BillingForm';
import ShippingOptions from './ShippingOptions';
import OrderSummary from './OrderSummary';
import { type CartItemType } from '../types';

const Checkout: React.FC = () => {
    const [cartItems, setCartItems] = useState<CartItemType[]>([
        {
            id: 1,
            name: 'Die Cut Sticker',
            description: ['Vinyl / Glossy', '2" x 2"'],
            imageUrl: 'https://picsum.photos/seed/sticker1/100/100',
            quantity: 57,
            pricePerPiece: 0.46
        }
    ]);
    const [shippingCost, setShippingCost] = useState(0);

    const handleQuantityChange = (id: number, newQuantity: number) => {
        setCartItems(items =>
            items.map(item =>
                item.id === id ? { ...item, quantity: Math.max(1, newQuantity) } : item
            )
        );
    };

    const handleRemoveItem = (id: number) => {
        setCartItems(items => items.filter(item => item.id !== id));
    };

    const subtotal = cartItems.reduce((acc, item) => acc + item.quantity * item.pricePerPiece, 0);
    const total = subtotal + shippingCost;

    return (
        <div>
            <div className="bg-gray-200 py-6">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-medium text-zinc-800" style={{ fontFamily: "'FuturaPT', sans-serif" }}>Checkout</h1>
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
                <div className="bg-white shadow-sm rounded-lg p-6">
                    {cartItems.map(item => (
                        <CartItem
                            key={item.id}
                            item={item}
                            onQuantityChange={handleQuantityChange}
                            onRemove={handleRemoveItem}
                        />
                    ))}
                </div>

                <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
                    <div className="lg:col-span-7">
                        <BillingForm />
                    </div>
                    <div className="lg:col-span-5">
                        <div className="space-y-8">
                           <ShippingOptions selectedShipping={shippingCost} onSelectShipping={setShippingCost} />
                           <OrderSummary subtotal={subtotal} shippingCost={shippingCost} total={total} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
