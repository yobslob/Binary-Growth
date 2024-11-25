import React from "react";
import { FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="gradient-bg text-white py-12">
            {/* Contact Us */}
            <div className="text-center mb-6">
                <h2 className="text-2xl lg:text-3xl font-bold">Contact Us</h2>
            </div>

            {/* Social Media Icons */}
            <div className="flex justify-center space-x-8 mb-6">
                <a
                    href="https://www.instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors duration-300 text-3xl"
                    aria-label="Instagram"
                >
                    <FaInstagram />
                </a>
                <a
                    href="https://www.twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors duration-300 text-3xl"
                    aria-label="Twitter"
                >
                    <FaTwitter />
                </a>
                <a
                    href="https://www.linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors duration-300 text-3xl"
                    aria-label="LinkedIn"
                >
                    <FaLinkedin />
                </a>
            </div>

            {/* Copyright */}
            <div className="text-center text-gray-500">
                &copy; {new Date().getFullYear()} Binary Growth. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
