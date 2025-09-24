import React from 'react';
import { useLocation } from 'react-router-dom';
import Navigation from './Navigation';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();

  const shouldShowHeader = !location.pathname.startsWith('/checkout') && location.pathname !== '/';
  const shouldShowFooter = !location.pathname.startsWith('/checkout');

  return (
    <div className="min-h-screen flex flex-col">
      {shouldShowHeader && <Navigation />}
      <main className="flex-grow">
        {children}
      </main>
      {shouldShowFooter && <Footer />}
    </div>
  );
};

export default Layout;