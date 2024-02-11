// HeroSection.jsx
import React from 'react';

const HeroSection = () => {
    return (
        <div className="relative">
            {/* Background Image */}
            <img src="/images/heroSection1.jpg" alt="Background" className="w-full h-[1400px] object-fill"/>

            {/* Overlay Content */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center p-4">
                <h1 className="text-5xl font-bold text-gray-600 mb-4">Innovative Design and Solutions.</h1>
                <p className="text-xl text-gray-600 mb-8">We will create the best design and bring the greatest solutions for your problems.</p>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Get started — it's free
                </button>
            </div>
        </div>
    );
};

export default HeroSection;

