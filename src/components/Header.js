// Header.jsx
import React from 'react';

const Header = () => {
    return (
        <header className="flex justify-center items-center bg-black text-white px-8 gap-64">
            <img src="/images/worbexLogo.jpg" alt="Worbex Logo" className="w-20 h-20" />
            <nav>
                <ul className="flex items-center justify-center space-x-4">
                    <li><a href="#products" className="hover:underline">Products</a></li>
                    <li><a href="#learn" className="hover:underline">Learn</a></li>
                    <li><a href="#company" className="hover:underline">Company</a></li>
                    <li><a href="#login" className="hover:underline">Log In</a></li>
                </ul>
            </nav>
            <button className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200">
                Contact Us
            </button>
        </header>
    );
};

export default Header;

