import React from 'react';
import { FaLinkedin, FaFacebookSquare, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-british py-8">
            <div className="container mx-auto px-4 sm:px-8">
                <div className="flex flex-col items-center space-y-4">
                    <img src="/images/worbexLogo.jpg" alt="Worbex Logo" className="w-12 h-12" />

                    {/* Social Media Icons */}
                    <div className="flex justify-center space-x-4">
                        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-800 ease-in-out duration-500">
                            <FaLinkedin size={24} />
                        </a>
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-950 ease-in-out duration-500">
                            <FaFacebookSquare size={24} />
                        </a>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-600 ease-in-out duration-500">
                            <FaInstagram size={24} />
                        </a>
                        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 ease-in-out duration-500">
                            <FaTwitter size={24} />
                        </a>
                    </div>
                </div>

                <div className="text-center pt-4 mt-4 border-t border-gray-300">
                    <p className="text-white">&copy; {new Date().getFullYear()} Worbex. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;



