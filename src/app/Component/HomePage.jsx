"use client"
import React, { useState, useEffect, useCallback } from 'react';

// You can replace these with actual icons from a library
const ChevronLeftIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m15 18-6-6 6-6" />
    </svg>
);

const ChevronRightIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m9 18 6-6-6-6" />
    </svg>
);


export default function HeroSection() {
    const slides = [
        {
            image: 'https://placehold.co/1920x800/6366f1/ffffff?text=Holiday+Sale',
            heading: '10% OFF Till 31st Dec',
            subheading: 'Don\'t miss out on our biggest holiday sale. Get the perfect gifts for your loved ones.',
            cta: 'Shop Sale',
            ctaLink: '#sale',
        },
        {
            image: 'https://placehold.co/1920x800/ec4899/ffffff?text=New+Arrivals',
            heading: 'Winter Collection Has Arrived',
            subheading: 'Stay warm and fashionable with our latest winter styles. Cozy sweaters, stylish coats, and more.',
            cta: 'Explore New In',
            ctaLink: '#new-arrivals',
        },
        {
            image: 'https://placehold.co/1920x800/22c55e/ffffff?text=Free+Shipping',
            heading: 'Free Shipping On Orders Over $50',
            subheading: 'Enjoy free shipping on all orders over $50. Stock up on your favorite styles today!',
            cta: 'Start Shopping',
            ctaLink: '#shop',
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = useCallback(() => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }, [currentIndex, slides.length]);

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    }

    useEffect(() => {
        const slideInterval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
        return () => clearInterval(slideInterval);
    }, [nextSlide]);


    return (
        <div className="h-[50vh] md:h-[80vh] w-full m-auto relative group">
            <div
                style={{ backgroundImage: `url(${slides[currentIndex].image})` }}
                className="w-full h-full bg-center bg-cover duration-500"
            >
                {/* Overlay for better text readability */}
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                
                <div className="relative h-full flex flex-col items-center justify-center text-center text-white px-4">
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight animate-fade-in-down">
                        {slides[currentIndex].heading}
                    </h1>
                    <p className="text-lg md:text-xl max-w-2xl mb-8 animate-fade-in-up">
                        {slides[currentIndex].subheading}
                    </p>
                    <a
                        href={slides[currentIndex].ctaLink}
                        className="bg-white text-gray-900 font-bold py-3 px-8 rounded-full hover:bg-gray-200 transition-transform transform hover:scale-105 duration-300 animate-fade-in-up"
                    >
                        {slides[currentIndex].cta}
                    </a>
                </div>
            </div>

            {/* Left Arrow */}
            <div className="hidden group-hover:block absolute top-1/2 -translate-y-1/2 left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                <ChevronLeftIcon onClick={prevSlide} className="w-8 h-8" />
            </div>

            {/* Right Arrow */}
            <div className="hidden group-hover:block absolute top-1/2 -translate-y-1/2 right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                <ChevronRightIcon onClick={nextSlide} className="w-8 h-8" />
            </div>

            {/* Dots */}
            <div className="absolute bottom-5 left-0 right-0 flex justify-center space-x-2">
                {slides.map((slide, slideIndex) => (
                    <div
                        key={slideIndex}
                        onClick={() => goToSlide(slideIndex)}
                        className={`cursor-pointer h-3 w-3 rounded-full transition-all duration-300 ${currentIndex === slideIndex ? 'bg-white w-6' : 'bg-white/50'}`}
                    ></div>
                ))}
            </div>
             <style jsx global>{`
                @keyframes fade-in-down {
                    0% {
                        opacity: 0;
                        transform: translateY(-20px);
                    }
                    100% {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                @keyframes fade-in-up {
                    0% {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    100% {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                .animate-fade-in-down {
                    animation: fade-in-down 0.8s ease-out forwards;
                }
                .animate-fade-in-up {
                    animation: fade-in-up 0.8s ease-out 0.2s forwards;
                }
             `}</style>
        </div>
    );
}

