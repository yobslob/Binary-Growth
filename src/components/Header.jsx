import React, { useState } from "react";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 w-full h-16 bg-gradient-to-b from-headPurple to-transparent animate-fadeBackground backdrop-blur-[1.4px] z-50 py-6">
            <div className="container h-20 ml-12 flex items-center justify-between">
                {/* Logo */}
                <div className="text-2xl pb-5 font-bold">
                    <a href="#home" className="text-white mr-2">
                        Binary
                    </a>
                    <a href="#home" className="text-custPurple">
                        Growth
                    </a>
                </div>

                {/* Navigation Menu - Visible on larger screens */}
                <nav className="hidden text-l lg:flex whitespace-nowrap space-x-10 mx-auto pr-44 pb-1">
                    <a href="#home" className="text-white hover:text-purple-600 transition-colors duration-300 ease-in-out">
                        Home
                    </a>
                    <a href="#clients" className="text-white hover:text-purple-600 transition-colors duration-350 ease-in-out">
                        Previous Clients
                    </a>
                    <a href="#reviews" className="text-white hover:text-purple-600 transition-colors duration-350 ease-in-out">
                        Contact
                    </a>
                    <a href="#content" className="text-white hover:text-purple-600 transition-colors duration-350 ease-in-out">
                        Our Work
                    </a>
                    <a href="#reviews" className="text-white hover:text-purple-600 transition-colors duration-350 ease-in-out">
                        About us
                    </a>
                </nav>

                {/* Book a Call Button */}
                <div className="hidden border lg:block">
                    <a
                        href="#contact"
                    >
                        BOOK A CALL
                    </a>
                </div>

                {/* Hamburger Icon - Visible on smaller screens */}
                <div className="lg:hidden">
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="text-gray-800 focus:outline-none"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                            />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <nav className="lg:hidden bg-white/90 backdrop-blur-md shadow-md">
                    <div className="flex flex-col items-center space-y-4 py-4">
                        <a
                            href="#about"
                            className="text-gray-700 hover:text-blue-600"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            About
                        </a>
                        <a
                            href="#services"
                            className="text-gray-700 hover:text-blue-600"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Services
                        </a>
                        <a
                            href="#clients"
                            className="text-gray-700 hover:text-blue-600"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Clients
                        </a>
                        <a
                            href="#reviews"
                            className="text-gray-700 hover:text-blue-600"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Reviews
                        </a>
                        <a
                            href="#contact"
                            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Book a Call
                        </a>
                    </div>
                </nav>
            )}
        </header>
    );
};

export default Header;
