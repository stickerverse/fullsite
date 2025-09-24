
import React from 'react';
import type { PromoCardData } from '../types';

export const PromoCard: React.FC<{ card: PromoCardData }> = ({ card }) => {
    const gridSpanClasses = `lg:col-span-${card.gridSpanDesktop} col-span-${card.gridSpanMobile}`;

    return (
        <div className={gridSpanClasses}>
            <a href={card.url} className="block aspect-[4/5] rounded-2xl overflow-hidden relative shadow-lg group">
                <img
                    src={card.imgSrc}
                    alt={card.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white flex flex-col justify-end h-full">
                    <div>
                        <h3 className="text-yellow-400 font-extrabold text-xl uppercase">{card.supertitle}</h3>
                        <p className="text-3xl lg:text-4xl font-black leading-tight">{card.title}</p>
                        {card.description && <p className="mt-2 text-base lg:text-lg opacity-90 hidden md:block">{card.description}</p>}
                    </div>
                </div>
            </a>
        </div>
    );
};
