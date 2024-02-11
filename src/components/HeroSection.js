import React from 'react';

const HeroSection = () => {
    return (
        <div className="relative bg-gray-900 text-white">
            {/* Background Image */}
            <img src="/images/heroBg3.jpg" alt="Background" className="w-full h-full object-cover opacity-60"/>

            {/* Overlay Content */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center p-4">
                <h1 className="text-5xl font-bold mb-4">Innovative Design and Solutions.</h1>
                <p className="text-xl mb-8">We will create the best design and bring the greatest solutions for your problems.</p>
                <button className="border-black border-2 bg-transparent hover:bg-black text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out">
                    Get started — it's free
                </button>
            </div>
        </div>
    );
};

export default HeroSection;



