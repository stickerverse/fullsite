import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import DieCutDesigner from './pages/DieCutDesigner';
import CheckoutPage from './pages/CheckoutPage';
import SafeShopWrapper from './SafeShopWrapper';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/shop" element={<SafeShopWrapper />} />
      <Route path="/" element={
        <Layout>
          <HomePage />
        </Layout>
      } />
      <Route path="/designer" element={
        <Layout>
          <DieCutDesigner />
        </Layout>
      } />
      <Route path="/checkout" element={
        <Layout>
          <CheckoutPage />
        </Layout>
      } />
    </Routes>
  );
};

export default App;