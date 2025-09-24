import React from 'react';
import Checkout from '../components/Checkout';

const CheckoutPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <main className="flex-grow bg-gray-50">
        <Checkout />
      </main>
    </div>
  );
};

export default CheckoutPage;