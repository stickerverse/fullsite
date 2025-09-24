import React from 'react';
import { CloseIcon } from './icons';
import { FILTER_CATEGORIES, FILTER_COLORS } from '../constants';

interface FilterSidebarProps {
    isOpen: boolean;
    onClose: () => void;
}

const FilterSection: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <div className="py-6 border-b border-gray-200 last:border-b-0">
        <h3 className="font-extrabold text-lg text-zinc-900 mb-4">{title}</h3>
        {children}
    </div>
);

const SidebarContent: React.FC = () => (
    <>
        <FilterSection title="Categories">
            <ul className="space-y-3">
                {FILTER_CATEGORIES.map(category => (
                    <li key={category.id}>
                        <label className="flex items-center space-x-3 cursor-pointer group">
                            <input type="checkbox" className="h-5 w-5 rounded border-gray-300 text-pink-600 focus:ring-pink-500"/>
                            <span className="text-gray-700 group-hover:text-pink-600 transition-colors">{category.name}</span>
                        </label>
                    </li>
                ))}
            </ul>
        </FilterSection>

        <FilterSection title="Color">
            <div className="flex flex-wrap gap-3">
                {FILTER_COLORS.map(color => (
                    <button
                        key={color.id}
                        aria-label={color.name}
                        title={color.name}
                        className="w-8 h-8 rounded-full border-2 border-transparent focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-1 transition"
                        style={{ background: color.hex }}
                    >
                        {color.id === 'white' && <span className="block w-full h-full rounded-full border border-gray-300"></span>}
                    </button>
                ))}
            </div>
        </FilterSection>

        <FilterSection title="Price Range">
            <div className="flex items-center space-x-2">
                <span className="text-gray-500">$</span>
                <input type="number" defaultValue="0" className="w-full p-2 border border-gray-300 rounded-md text-center" aria-label="Minimum price"/>
                <span className="text-gray-500">-</span>
                <span className="text-gray-500">$</span>
                <input type="number" defaultValue="50" className="w-full p-2 border border-gray-300 rounded-md text-center" aria-label="Maximum price"/>
            </div>
            <input type="range" min="0" max="50" defaultValue="50" className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer mt-4 accent-pink-600" />
        </FilterSection>
    </>
);

export const FilterSidebar: React.FC<FilterSidebarProps> = ({ isOpen, onClose }) => {
    return (
        <>
            {/* Mobile Drawer */}
            <div
                className={`fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity lg:hidden ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                onClick={onClose}
                aria-hidden="true"
            ></div>
            <aside
                className={`fixed top-0 left-0 h-full w-80 bg-white z-50 shadow-xl transform transition-transform lg:hidden ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
                role="dialog"
                aria-modal="true"
                aria-labelledby="filter-heading"
            >
                <div className="flex flex-col h-full">
                    <div className="flex justify-between items-center p-4 border-b border-gray-200">
                        <h2 id="filter-heading" className="text-xl font-bold">Filters</h2>
                        <button onClick={onClose} aria-label="Close filters">
                            <CloseIcon className="w-6 h-6" />
                        </button>
                    </div>
                    <div className="flex-grow p-6 overflow-y-auto">
                        <SidebarContent />
                    </div>
                    <div className="p-6 border-t border-gray-200">
                        <button className="w-full bg-zinc-800 text-white font-black py-3 rounded-lg hover:bg-pink-600 transition-colors">Apply Filters</button>
                    </div>
                </div>
            </aside>

            {/* Desktop Sidebar */}
            <aside className="hidden lg:block w-72 flex-shrink-0 border-r border-gray-200">
                <div className="sticky top-[176px] h-[calc(100vh-176px)] overflow-y-auto p-6">
                    <h2 className="text-2xl font-black mb-4">Filters</h2>
                    <SidebarContent />
                </div>
            </aside>
        </>
    );
};
