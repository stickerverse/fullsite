
import React, { useState } from 'react';
import { FaqItem } from '../types';
import { ChevronDownIcon } from './Icons';

interface FaqAccordionProps {
    faqs: FaqItem[];
}

const AccordionItem: React.FC<{ faq: FaqItem; isOpen: boolean; onClick: () => void; }> = ({ faq, isOpen, onClick }) => {
    return (
        <div className="border-t border-gray-200">
            <button
                onClick={onClick}
                className="flex justify-between items-start w-full py-5 text-left text-gray-800"
            >
                <h4 className="text-lg font-bold">{faq.question}</h4>
                <ChevronDownIcon className={`w-6 h-6 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen' : 'max-h-0'}`}
            >
                <p className="pb-5 pr-10 text-gray-600">{faq.answer}</p>
            </div>
        </div>
    );
};

const FaqAccordion: React.FC<FaqAccordionProps> = ({ faqs }) => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const handleClick = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div>
            {faqs.map((faq, index) => (
                <AccordionItem
                    key={index}
                    faq={faq}
                    isOpen={openIndex === index}
                    onClick={() => handleClick(index)}
                />
            ))}
        </div>
    );
};

export default FaqAccordion;
