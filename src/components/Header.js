import React, {useState, useEffect} from 'react';
import {IoMdClose} from 'react-icons/io';
import {FaBars} from 'react-icons/fa'; // For the burger menu icon

const Header = ({heroSectionRef, itemsSectionRef, offersSectionRef, companyMembersRef}) => {
    const [showContactForm, setShowContactForm] = useState(false);
    const [isNavVisible, setIsNavVisible] = useState(false); // State to toggle mobile navigation visibility
    const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
    const [visible, setVisible] = useState(true); // State to show/hide the header on scroll

    // Effect to handle scroll event for showing/hiding header
    useEffect(() => {
        const handleScroll = () => {
            // Current scroll position
            const currentScrollPos = window.scrollY;

            // Set visibility based on scroll direction
            setVisible((prevScrollPos > currentScrollPos && currentScrollPos > 0) || currentScrollPos < 10);

            // Update the previous scroll position
            setPrevScrollPos(currentScrollPos);
        };

        // Add and remove the scroll listener
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScrollPos, visible]);

    const scrollToSection = (ref) => {
        window.scrollTo({
            top: ref.current.offsetTop,
            behavior: 'smooth',
        });
        setIsNavVisible(false); // Close the mobile menu upon clicking a link
    };

    return (
        <>
            <header
                className={`flex justify-between w-full items-center bg-british text-white px-8 fixed z-30 transition-all duration-300 ${visible ? 'top-0' : '-top-full'}`}>
                {/* Mobile Menu */}
                <img src="/images/WorbXTitle.jpg" alt="Worbex Logo" className="w-24 h-20"/>
                <button
                    className="md:hidden z-30 text-white top-7 right-5 "
                    onClick={() => setIsNavVisible(!isNavVisible)}>
                    {isNavVisible ? <IoMdClose size={24} className="text-white hover:text-gray-500"/> :
                        <FaBars size={24} className="text-white hover:text-gray-500"/>}
                </button>
                <div
                    className={`fixed inset-0 bg-black bg-opacity-75 z-20 ${isNavVisible ? 'flex' : 'hidden'} items-center justify-center transition-opacity duration-500 ease-in-out`}>
                    <div
                        className="bg-british w-full h-screen flex flex-col items-center justify-center p-8 space-y-4 relative">
                        <nav>
                            <ul className="flex flex-col items-center justify-center space-y-6">
                                <li>
                                    <button onClick={() => scrollToSection(heroSectionRef)}
                                            className="text-white hover:underline hover:underline-offset-8 text-4xl">Home
                                    </button>
                                </li>
                                <li>
                                    <button onClick={() => scrollToSection(itemsSectionRef)}
                                            className="text-white hover:underline hover:underline-offset-8 text-4xl">Items
                                    </button>
                                </li>
                                <li>
                                    <button onClick={() => scrollToSection(offersSectionRef)}
                                            className="text-white hover:underline hover:underline-offset-8 text-4xl">Offers
                                    </button>
                                </li>
                                <li>
                                    <button onClick={() => scrollToSection(companyMembersRef)}
                                            className="text-white hover:underline hover:underline-offset-8 text-4xl">Team
                                    </button>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                {/* Desktop Menu */}
                <nav className="hidden md:block z-20">
                    <ul className="flex items-center justify-center space-x-4">
                        <li>
                            <button onClick={() => scrollToSection(heroSectionRef)}
                                    className="hover:underline hover:underline-offset-8">Home
                            </button>
                        </li>
                        <li>
                            <button onClick={() => scrollToSection(itemsSectionRef)}
                                    className="hover:underline hover:underline-offset-8">Items
                            </button>
                        </li>
                        <li>
                            <button onClick={() => scrollToSection(offersSectionRef)}
                                    className="hover:underline hover:underline-offset-8">Offers
                            </button>
                        </li>
                        <li>
                            <button onClick={() => scrollToSection(companyMembersRef)}
                                    className="hover:underline hover:underline-offset-8">Team
                            </button>
                        </li>
                    </ul>
                </nav>
                <button
                    className="bg-white text-british px-4 py-2 rounded hover:bg-gray-200 hidden md:block"
                    onClick={() => setShowContactForm(!showContactForm)}>
                    Contact Us
                </button>
            </header>
            {/* Contact Us Form */}
            {showContactForm && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-british p-8 rounded-lg shadow-lg space-y-4 relative">
                        <button
                            className="absolute top-0 right-0 mt-4 mr-4 text-white hover:text-gray-500 text-2xl"
                            onClick={() => setShowContactForm(false)}>
                            <IoMdClose/>
                        </button>
                        <h2 className="text-xl font-bold text-white">Contact Us</h2>
                        <form>
                            <div className="space-y-2">
                                <input type="text" placeholder="Name" className="w-full px-4 py-2 border rounded"/>
                                <input type="email" placeholder="Email" className="w-full px-4 py-2 border rounded"/>
                                <input type="tel" placeholder="Phone Number"
                                       className="w-full px-4 py-2 border rounded"/>
                                <textarea placeholder="Your Message"
                                          className="w-full px-4 py-2 border rounded"></textarea>
                            </div>
                            <button type="submit"
                                    className="mt-4 bg-white text-black px-4 py-2 rounded hover:bg-gray-500">
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



