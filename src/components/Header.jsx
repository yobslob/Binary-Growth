import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            <div className="absolute top-0 w-full h-32 bg-gradient-to-b from-purple-500/50 to-transparent blur-2xl animate-fadeDown z-60"></div>
            <header className="fixed top-0 left-0 w-full h-20 bg-gradient-to-b from-black to-transparent backdrop-blur-[2px] z-50 py-4 sm:py-6">
                <div className="container h-20 mx-auto lg:mx-0 px-6 sm:px-6 md:px-12 flex items-center justify-between">
                    {/* Logo */}
                    <div className="text-xl sm:text-3xl sm:pb-3 font-bold">
                        <ScrollLink
                            to="home"
                            smooth={true}
                            duration={900}
                            className="text-white mr-2 cursor-pointer"
                        >
                            Binary
                        </ScrollLink>
                        <ScrollLink
                            to="home"
                            smooth={true}
                            duration={900}
                            className="text-custPurple cursor-pointer"
                        >
                            Growth
                        </ScrollLink>
                    </div>

                    {/* Navigation Menu - Visible on larger screens */}
                    <nav className="hidden lg:flex whitespace-nowrap space-x-6 md:space-x-10 md:mx-auto md:pr-12">
                        <ScrollLink
                            to="title"
                            smooth={true}
                            duration={900}
                            className="text-white hover:text-purple-600 transition-colors duration-300 ease-in-out cursor-pointer"
                        >
                            Home
                        </ScrollLink>
                        <ScrollLink
                            to="clients"
                            smooth={true}
                            duration={900}
                            className="text-white hover:text-purple-600 transition-colors duration-300 ease-in-out cursor-pointer"
                        >
                            Previous Clients
                        </ScrollLink>
                        <ScrollLink
                            to="reviews"
                            smooth={true}
                            duration={900}
                            className="text-white hover:text-purple-600 transition-colors duration-300 ease-in-out cursor-pointer"
                        >
                            Contact
                        </ScrollLink>
                        <ScrollLink
                            to="content"
                            smooth={true}
                            duration={900}
                            className="text-white hover:text-purple-600 transition-colors duration-300 ease-in-out cursor-pointer"
                        >
                            Our Work
                        </ScrollLink>
                        <ScrollLink
                            to="reviews"
                            smooth={true}
                            duration={900}
                            className="text-white hover:text-purple-600 transition-colors duration-300 ease-in-out cursor-pointer"
                        >
                            About Us
                        </ScrollLink>
                    </nav>

                    {/* Book a Call Button */}
                    <div
                        className="hidden lg:block absolute right-8 top-3/4 transform -translate-y-1/2 bg-transparent border border-white animate-pulse whitespace-nowrap rounded-lg px-5 py-1 cursor-pointer text-white text-xs md:text-base"
                        style={{
                            animation: "border-gradient 3s infinite",
                        }}
                    >
                        <a href="#booking">
                            Book A Call
                        </a>
                    </div>

                    {/* Hamburger Icon - Visible on smaller screens */}
                    <div className="lg:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-white absolute top-10 right-3 focus:outline-none"
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
                                    d={
                                        isMenuOpen
                                            ? "M6 18L18 6M6 6l12 12"
                                            : "M4 6h16M4 12h16M4 18h16"
                                    }
                                />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <nav className="lg:hidden fixed top-8 right-7 w-1/4 bg-transparent backdrop-blur-[3px] shadow-md">
                        <div className="flex flex-col items-center space-y-3 py-4 animate-fadeIn">
                            <ScrollLink
                                to="home"
                                smooth={true}
                                duration={900}
                                className="text-white hover:text-blue-600 cursor-pointer"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Home
                            </ScrollLink>
                            <ScrollLink
                                to="about"
                                smooth={true}
                                duration={900}
                                className="text-white hover:text-blue-600 cursor-pointer"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                About
                            </ScrollLink>
                            <ScrollLink
                                to="clients"
                                smooth={true}
                                duration={900}
                                className="text-white hover:text-blue-600 cursor-pointer"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Clients
                            </ScrollLink>
                            <ScrollLink
                                to="reviews"
                                smooth={true}
                                duration={900}
                                className="text-white hover:text-blue-600 cursor-pointer"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Reviews
                            </ScrollLink>
                            <a
                                href="#booking"
                                className="bg-transparent border border-white text-white px-4 py-2 rounded-lg"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Book a Call
                            </a>
                        </div>
                    </nav>
                )}
            </header>
        </>
    );
};

export default Header;
