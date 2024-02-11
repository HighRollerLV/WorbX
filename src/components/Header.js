import React, { useState } from 'react';
import { IoMdClose } from 'react-icons/io';

const Header = () => {
    const [showContactForm, setShowContactForm] = useState(false);

    return (
        <>
            <header className="flex justify-between items-center bg-black text-white px-8">
                <img src="/images/worbexLogo.jpg" alt="Worbex Logo" className="w-20 h-20" />
                <nav>
                    <ul className="flex items-center justify-center space-x-4">
                        <li><a href="#products" className="hover:underline hover:underline-offset-8">Products</a></li>
                        <li><a href="#learn" className="hover:underline hover:underline-offset-8">Learn</a></li>
                        <li><a href="#company" className="hover:underline hover:underline-offset-8">Company</a></li>
                        <li><a href="#login" className="hover:underline hover:underline-offset-8">Log In</a></li>
                    </ul>
                </nav>
                <button
                    className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200"
                    onClick={() => setShowContactForm(!showContactForm)}>
                    Contact Us
                </button>
            </header>
            {showContactForm && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white p-8 rounded-lg shadow-lg space-y-4 relative">
                        <button
                            className="absolute top-0 right-0 mt-4 mr-4 text-black text-2xl"
                            onClick={() => setShowContactForm(false)}>
                            <IoMdClose />
                        </button>
                        <h2 className="text-xl font-bold">Contact Us</h2>
                        <form>
                            <div className="space-y-2">
                                <input type="text" placeholder="Name" className="w-full px-4 py-2 border rounded focus:border-black focus:outline-none" />
                                <input type="email" placeholder="Email" className="w-full px-4 py-2 border rounded focus:border-black focus:outline-none" />
                                <input type="tel" placeholder="Phone Number" className="w-full px-4 py-2 border rounded focus:border-black focus:outline-none" />
                                <textarea placeholder="Your Message" className="w-full px-4 py-2 border rounded focus:border-black focus:outline-none"></textarea>
                            </div>
                            <button type="submit" className="mt-4 bg-black text-white px-4 py-2 rounded hover:bg-gray-800 focus:outline-none">
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



