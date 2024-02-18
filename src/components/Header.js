import React, { useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import { FaBars } from 'react-icons/fa'; // For the burger menu icon

const Header = () => {
    const [showContactForm, setShowContactForm] = useState(false);
    const [isNavVisible, setIsNavVisible] = useState(false); // State to toggle navigation visibility

    return (
        <>
            <header className="flex justify-between items-center bg-british text-white px-8 py-4 relative z-20">
                {/*Mobile Menu*/}
                <img src="/images/WorbXTitle.jpg" alt="Worbex Logo" className="w-24 h-20" />
                <button
                    className="md:hidden z-30 text-white"
                    onClick={() => setIsNavVisible(!isNavVisible)}>
                    {isNavVisible ? <IoMdClose size={24} className="text-white hover:text-gray-500" /> : <FaBars size={24} className="text-white hover:text-gray-500"/>}
                </button>
                <div className={`fixed inset-0 bg-black bg-opacity-75 z-10 ${isNavVisible ? 'flex' : 'hidden'} items-center justify-center transition-opacity duration-500 ease-in-out`}>
                    <div className="bg-british w-full h-screen flex items-center justify-center p-8 space-y-4 relative">
                        <nav>
                            <ul className="flex flex-col items-center justify-center space-y-4">
                                <li><a href="#products" className="text-white hover:underline hover:underline-offset-8">Products</a></li>
                                <li><a href="#learn" className="text-white hover:underline hover:underline-offset-8">Learn</a></li>
                                <li><a href="#company" className="text-white hover:underline hover:underline-offset-8">Company</a></li>
                                <li><a href="#login" className="text-white hover:underline hover:underline-offset-8">Log In</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
                {/*Desktop Menu*/}
                <nav className="hidden md:block">
                    <ul className="flex items-center justify-center space-x-4">
                        <li><a href="#products" className="hover:underline hover:underline-offset-8">Products</a></li>
                        <li><a href="#learn" className="hover:underline hover:underline-offset-8">Learn</a></li>
                        <li><a href="#company" className="hover:underline hover:underline-offset-8">Company</a></li>
                        <li><a href="#login" className="hover:underline hover:underline-offset-8">Log In</a></li>
                    </ul>
                </nav>
                <button
                    className="bg-white text-british px-4 py-2 rounded hover:bg-gray-200 hidden md:block"
                    onClick={() => setShowContactForm(!showContactForm)}>
                    Contact Us
                </button>
            </header>
            {/*Contact Us Form */}
            {showContactForm && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-british p-8 rounded-lg shadow-lg space-y-4 relative">
                        <button
                            className="absolute top-0 right-0 mt-4 mr-4 text-white hover:text-gray-500 text-2xl"
                            onClick={() => setShowContactForm(false)}>
                            <IoMdClose />
                        </button>
                        <h2 className="text-xl font-bold text-white">Contact Us</h2>
                        <form>
                            <div className="space-y-2">
                                <input type="text" placeholder="Name" className="w-full px-4 py-2 border rounded" />
                                <input type="email" placeholder="Email" className="w-full px-4 py-2 border rounded" />
                                <input type="tel" placeholder="Phone Number" className="w-full px-4 py-2 border rounded" />
                                <textarea placeholder="Your Message" className="w-full px-4 py-2 border rounded"></textarea>
                            </div>
                            <button type="submit" className="mt-4 bg-white text-black px-4 py-2 rounded hover:bg-gray-500">
                                Send
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
};

export default Header;





