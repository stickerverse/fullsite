
import React, { useState } from 'react';
import Checkbox from './ui/Checkbox';
import { CreditCardIcon, PayPalIcon } from './icons/Icons';

interface OrderSummaryProps {
    subtotal: number;
    shippingCost: number;
    total: number;
}

const OrderSummary: React.FC<OrderSummaryProps> = ({ subtotal, shippingCost, total }) => {
    const [useCoupon, setUseCoupon] = useState(false);
    const [useGiftCard, setUseGiftCard] = useState(false);
    const [selectedPayment, setSelectedPayment] = useState('card');

    return (
        <div className="bg-white shadow-sm rounded-lg p-4 md:p-6 space-y-4">
            <h2 className="text-2xl font-medium text-zinc-800" style={{ fontFamily: "'FuturaPT', sans-serif" }}>Summary and payment</h2>
            
            <div className="space-y-2 text-lg">
                <div className="flex justify-between font-semibold text-zinc-800">
                    <span>Total amount <span className="text-gray-500 font-normal">(USD)</span></span>
                    <span>${total.toFixed(2)}</span>
                </div>
                 <div className="flex justify-between text-sm text-gray-600">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                </div>
                 <div className="flex justify-between text-sm text-gray-600">
                    <span>Shipping</span>
                    <span>{shippingCost > 0 ? `$${shippingCost.toFixed(2)}` : 'Free'}</span>
                </div>
            </div>

            <div className="pt-2">
                <Checkbox id="have-coupon" label="Coupon code" checked={useCoupon} onChange={(e) => setUseCoupon(e.target.checked)} />
                 {useCoupon && (
                    <div className="flex mt-2">
                        <input type="text" placeholder="Coupon code: XXXXXX" className="flex-grow p-2 border border-gray-300 rounded-l-md focus:ring-blue-500 focus:border-blue-500"/>
                        <button className="bg-green-500 text-white px-4 py-2 rounded-r-md hover:bg-green-600 font-semibold uppercase text-sm">Redeem</button>
                    </div>
                )}
            </div>
            <div>
                 <Checkbox id="have-giftcard" label="Gift Card" checked={useGiftCard} onChange={(e) => setUseGiftCard(e.target.checked)} />
                 {useGiftCard && (
                    <div className="flex mt-2">
                        <input type="text" placeholder="Gift Card: STAPP-XXXXXXXX-XXXX" className="flex-grow p-2 border border-gray-300 rounded-l-md focus:ring-blue-500 focus:border-blue-500"/>
                        <button className="bg-green-500 text-white px-4 py-2 rounded-r-md hover:bg-green-600 font-semibold uppercase text-sm">Redeem</button>
                    </div>
                )}
            </div>

            <div className="border-t pt-4 space-y-2">
                <PaymentOption 
                    id="card" 
                    label="Credit card" 
                    icon={<CreditCardIcon className="w-8" />} 
                    selected={selectedPayment === 'card'} 
                    onSelect={() => setSelectedPayment('card')}
                />
                <PaymentOption 
                    id="paypal" 
                    label="PayPal" 
                    icon={<PayPalIcon className="w-8" />}
                    selected={selectedPayment === 'paypal'} 
                    onSelect={() => setSelectedPayment('paypal')}
                />
            </div>
            
            <div className="text-xs text-gray-500 pt-2">
                By continuing I accept the <a href="#" className="text-blue-600 hover:underline">Terms & Conditions</a> and <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>.
            </div>

             <button className="w-full bg-yellow-400 text-zinc-900 font-bold text-lg py-3 rounded-full hover:bg-yellow-500 transition-colors uppercase">
                Pay
            </button>
        </div>
    );
};

interface PaymentOptionProps {
    id: string;
    label: string;
    icon: React.ReactNode;
    selected: boolean;
    onSelect: () => void;
}

const PaymentOption: React.FC<PaymentOptionProps> = ({ id, label, icon, selected, onSelect }) => (
    <div 
        onClick={onSelect} 
        className={`flex items-center p-3 border rounded-md cursor-pointer transition-all ${selected ? 'border-blue-500 bg-blue-50 ring-2 ring-blue-500' : 'border-gray-200 bg-white hover:bg-gray-50'}`}
    >
        <input 
            type="radio" 
            name="payment_method" 
            id={id} 
            checked={selected} 
            readOnly 
            className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
        />
        <div className="ml-4 flex items-center gap-3">
            {icon}
            <label htmlFor={id} className="font-semibold text-zinc-800 cursor-pointer">{label}</label>
        </div>
    </div>
);


export default OrderSummary;
