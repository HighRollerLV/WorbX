import React from 'react';
import TextAnimation from "./TextAnimation";

const HeroSection = () => {
    return (
        <div className="relative bg-gray-900 text-white mt-20">
            {/* Background Image */}
            <img src="/images/heroBg3.jpg" alt="Background" className="w-full h-[80vh] lg:h-full object-cover opacity-60"/>

            {/* Overlay Content */}
            <div className="absolute inset-0 flex items-center justify-center p-4">
                <div className="text-center">
                    <TextAnimation />
                    <p className="text-sm md:text-lg lg:text-xl mb-8">We will create the best design and bring the greatest solutions for your problems.</p>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;




