import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MenuIcon, SearchIcon, UserIcon, CartIcon } from './icons/Icons';

const NavLink: React.FC<{ to: string; children: React.ReactNode }> = ({ to, children }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <li>
      <Link 
        to={to} 
        className={`text-white text-lg font-extrabold tracking-wider p-1 hover:text-yellow-300 transition-colors ${
          isActive ? 'text-yellow-300' : ''
        }`}
      >
        {children}
      </Link>
    </li>
  );
};

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-zinc-900 text-white shadow-md">
      <div className="mx-auto px-3">
        {/* Desktop Header */}
        <div className="hidden lg:flex items-center justify-between h-20">
          {/* Left Nav */}
          <div className="flex-1 flex justify-start">
            <nav>
              <ul className="flex items-center gap-8">
                <NavLink to="/shop">Shop</NavLink>
                <NavLink to="/designer">Designer</NavLink>
              </ul>
            </nav>
          </div>

          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/">
              <img src="https://i.postimg.cc/KvvNMK89/stickerverselogo.png" alt="Sticker App" className="h-14 w-auto" />
            </Link>
          </div>
          
          {/* Right Nav & Icons */}
          <div className="flex-1 flex justify-end">
            <nav className="flex items-center gap-8">
               <ul className="flex items-center gap-8">
                <NavLink to="/checkout">Checkout</NavLink>
              </ul>
               <div className="flex items-center gap-6">
                  <button aria-label="Search" className="hover:text-yellow-300 transition-colors"><SearchIcon className="w-8 h-8" /></button>
                  <button aria-label="Account" className="hover:text-yellow-300 transition-colors"><UserIcon className="w-8 h-8" /></button>
                  <button aria-label="Cart" className="relative hover:text-yellow-300 transition-colors">
                    <CartIcon className="w-8 h-8" />
                    <span className="absolute -top-2 -right-2 bg-yellow-400 text-zinc-900 text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">1</span>
                  </button>
              </div>
            </nav>
          </div>
        </div>

        {/* Mobile & Tablet Header */}
        <div className="lg:hidden flex items-center justify-between h-16">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            <MenuIcon className="h-8 w-8" />
          </button>
          <Link to="/">
             <img src="https://i.postimg.cc/KvvNMK89/stickerverselogo.png" alt="Sticker App" className="h-10 w-auto" />
          </Link>
          <div className="flex items-center gap-4">
            <button aria-label="Search"><SearchIcon className="w-7 h-7" /></button>
            <button aria-label="Cart" className="relative">
              <CartIcon className="w-7 h-7" />
              <span className="absolute -top-1 -right-1 bg-yellow-400 text-zinc-900 text-xs font-bold rounded-full h-4 w-4 flex items-center justify-center">1</span>
            </button>
          </div>
        </div>
      </div>
       {isMenuOpen && (
        <nav className="lg:hidden bg-zinc-800 p-4">
          <ul className="flex flex-col gap-4">
              <NavLink to="/shop">Shop</NavLink>
              <NavLink to="/designer">Designer</NavLink>
              <NavLink to="/checkout">Checkout</NavLink>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;