import React from 'react';
import { CATEGORIES } from '../constants';
import { StarIcon, ThumbsUpIcon, ClockIcon, PaletteIcon } from './icons';

const categoryIcons: { [key: string]: React.FC<{ className?: string }> } = {
    featured: StarIcon,
    popular: ThumbsUpIcon,
    latest: ClockIcon,
    'by artists': PaletteIcon,
};

export const CategoriesBar: React.FC = () => {
    return (
        <div className="sticky top-16 lg:top-20 bg-white z-40 shadow-md">
            {/* Mobile View */}
            <div className="lg:hidden border-b">
                <nav className="flex justify-around items-start">
                    {CATEGORIES.map(category => {
                        const Icon = categoryIcons[category.name.toLowerCase()];
                        const isActive = category.name.toLowerCase() === 'featured';
                        return (
                            <a href={category.href} key={category.name} className="relative flex flex-col items-center flex-shrink-0 space-y-1 p-3 pt-4 group text-center w-1/4">
                                {Icon && <Icon className={`h-8 w-8 mb-2 ${isActive ? 'text-zinc-900' : 'text-gray-600'} group-hover:text-zinc-900 transition-colors`} />}
                                <span className={`text-sm font-extrabold uppercase tracking-wider ${isActive ? 'text-zinc-900' : 'text-gray-600'} group-hover:text-zinc-900 transition-colors`}>{category.name}</span>
                                {isActive && <div className="absolute bottom-0 left-0 w-full h-2 bg-yellow-400"></div>}
                            </a>
                        );
                    })}
                </nav>
            </div>

            {/* Desktop View */}
            <div className="hidden lg:block border-b">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <nav className="flex justify-between items-center h-24">
                        <img src="https://stickerapp.com/media/200x115/95570fc805/sticker-shop-logo-200.png/m" alt="Sticker shop logo" className="h-10"/>
                        <div className="flex items-center space-x-12">
                            {CATEGORIES.map(category => {
                                 const isActive = category.name.toLowerCase() === 'featured';
                                return (
                                <a href={category.href} key={category.name} className="relative text-xl font-extrabold uppercase tracking-wider text-zinc-900 group py-2">
                                    <span>{category.name}</span>
                                    <span className={`absolute bottom-0 left-0 w-full h-2 bg-yellow-400 transform transition-transform duration-300 ease-out origin-left ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
                                </a>
                            )})}
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    );
};