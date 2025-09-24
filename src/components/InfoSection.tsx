
import React from 'react';

const InfoSection: React.FC = () => {
    const features = [
        {
            title: 'Any shape',
            description: 'Precisely cut to your design',
            icon: 'https://stickerapp.com/media/131x150/117c70d368/icon-cheese-bullet-yellow-dot.svg/m/600x0/filters:quality(60)',
            alt: 'Shape icon'
        },
        {
            title: 'Wide range of materials',
            description: 'Endless possibilities for your design',
            icon: 'https://stickerapp.com/media/131x150/117c70d368/icon-cheese-bullet-yellow-dot.svg/m/600x0/filters:quality(60)',
            alt: 'Materials icon'
        },
        {
            title: 'Add-on Options',
            description: 'Back paper print',
            icon: 'https://stickerapp.com/media/131x150/117c70d368/icon-cheese-bullet-yellow-dot.svg/m/600x0/filters:quality(60)',
            alt: 'Add-on icon'
        }
    ];

    return (
        <div className="bg-white py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                    {features.map((feature, index) => (
                        <div key={index} className="flex items-start space-x-4">
                            <img src={feature.icon} alt={feature.alt} className="w-9 h-auto flex-shrink-0" />
                            <div>
                                <h3 className="text-lg font-bold text-gray-900">{feature.title}</h3>
                                <p className="mt-1 text-base text-gray-500">{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default InfoSection;
