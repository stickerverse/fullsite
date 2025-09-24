
import React, { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from './Icons';
import { GalleryImage } from '../types';

interface ProductGalleryProps {
    images: GalleryImage[];
}

const ProductGallery: React.FC<ProductGalleryProps> = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToNext = () => {
        const isLastSlide = currentIndex === images.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (slideIndex: number) => {
        setCurrentIndex(slideIndex);
    };

    if (!images || images.length === 0) {
        return <div>No images to display.</div>;
    }

    return (
        <div className="w-full sticky top-28">
            <div className="relative aspect-square w-full">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
                    >
                        <img
                            src={image.src}
                            alt={image.alt}
                            className="w-full h-full object-cover rounded-2xl"
                        />
                    </div>
                ))}

                <button
                    onClick={goToPrevious}
                    className="absolute top-1/2 -translate-y-1/2 left-4 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition"
                    aria-label="Previous image"
                >
                    <ChevronLeftIcon className="h-6 w-6" />
                </button>
                <button
                    onClick={goToNext}
                    className="absolute top-1/2 -translate-y-1/2 right-4 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition"
                    aria-label="Next image"
                >
                    <ChevronRightIcon className="h-6 w-6" />
                </button>
            </div>
            <div className="flex justify-center mt-4 space-x-2">
                {images.map((_, slideIndex) => (
                    <button
                        key={slideIndex}
                        onClick={() => goToSlide(slideIndex)}
                        className={`h-3 w-3 rounded-full transition ${currentIndex === slideIndex ? 'bg-gray-800' : 'bg-gray-300'}`}
                        aria-label={`Go to slide ${slideIndex + 1}`}
                    ></button>
                ))}
            </div>
        </div>
    );
};

export default ProductGallery;
