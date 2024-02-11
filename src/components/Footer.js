// Footer.jsx
import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-black text-white py-8">
            <div className="container mx-auto px-8">
                <div className="flex justify-between items-center">
                    {/* Replace Logo ReactComponent with img tag */}
                    <img src="/images/worbexLogo.jpg" alt="Worbex Logo" className="w-12 h-12" />
                    <nav>
                        <ul className="flex space-x-4">
                            <li><a href="#privacy" className="hover:underline">Privacy Policy</a></li>
                            <li><a href="#terms" className="hover:underline">Terms of Use</a></li>
                            <li><a href="#contact" className="hover:underline">Contact Us</a></li>
                        </ul>
                    </nav>
                </div>
                <div className="text-center pt-4">
                    <p>&copy; {new Date().getFullYear()} Worbex. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

