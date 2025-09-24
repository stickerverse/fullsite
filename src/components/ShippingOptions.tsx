
import React from 'react';

interface ShippingOptionProps {
    value: number;
    title: string;
    date: string;
    cost: string;
    selected: boolean;
    onSelect: (value: number) => void;
}

const ShippingOption: React.FC<ShippingOptionProps> = ({ value, title, date, cost, selected, onSelect }) => {
    return (
        <label className={`flex items-center justify-between p-3 border cursor-pointer rounded-md transition-all ${selected ? 'border-blue-500 bg-blue-50 ring-2 ring-blue-500' : 'border-gray-200 bg-white hover:bg-gray-50'}`}>
            <div className="flex items-center">
                <input
                    type="radio"
                    name="shipping_type"
                    checked={selected}
                    onChange={() => onSelect(value)}
                    className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                />
                <div className="ml-3">
                    <span className="text-md font-semibold text-zinc-800">{title}</span>
                    <p className="text-sm text-gray-500">{date}</p>
                </div>
            </div>
            <div className="flex items-center">
                 <span className={`text-md font-semibold ${cost === 'Free' ? 'text-green-600' : 'text-zinc-800'}`}>{cost}</span>
                 <img src="https://d6ce0no7ktiq.cloudfront.net/images/web/checkout/fedex.png" alt="FedEx" className="h-6 ml-4"/>
            </div>
        </label>
    )
}


interface ShippingOptionsProps {
    selectedShipping: number;
    onSelectShipping: (cost: number) => void;
}

const ShippingOptions: React.FC<ShippingOptionsProps> = ({selectedShipping, onSelectShipping}) => {
    return (
        <div className="bg-white shadow-sm rounded-lg p-4 md:p-6">
            <h2 className="text-2xl font-medium text-zinc-800 mb-4" style={{ fontFamily: "'FuturaPT', sans-serif" }}>Estimated delivery date</h2>
            <div className="space-y-3">
                <ShippingOption 
                    value={0}
                    title="Free"
                    date="September 8-9"
                    cost="Free"
                    selected={selectedShipping === 0}
                    onSelect={onSelectShipping}
                />
                <ShippingOption 
                    value={43}
                    title="Express handling"
                    date="September 4-5"
                    cost="$43.00"
                    selected={selectedShipping === 43}
                    onSelect={onSelectShipping}
                />
            </div>
        </div>
    );
};

export default ShippingOptions;
