import React from "react";

const Footer = () => {
    return (
        <footer className="gradient-bg text-gray-300 pt-12">
            {/* Contact Us */}
            <div className="text-center mb-6">
                <h2 className="text-2xl lg:text-3xl font-bold">Contact Us</h2>
            </div>

            {/* Social Media Icons */}
            <div className="flex justify-center space-x-6 mb-6">
                <a
                    href="https://www.instagram.com/l_kshay22/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group text-gray-400 hover:text-white transition-colors duration-300"
                    aria-label="Instagram"
                >
                    <img
                        src="https://img.icons8.com/ios/50/ffffff/instagram-new--v1.png"
                        alt="Instagram"
                        className="h-6 w-6 transition-opacity group-hover:opacity-50"
                    />
                </a>
                <a
                    href="https://www.x.com/Lkshyon1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group text-gray-400 hover:text-white transition-colors duration-300"
                    aria-label="Twitter"
                >
                    <img
                        src="https://img.icons8.com/ios/50/ffffff/twitterx--v1.png"
                        alt="Twitter"
                        className="h-6 w-6 transition-opacity group-hover:opacity-50"
                    />
                </a>
                <a
                    href="https://www.linkedin.com/in/yogeshnotfound/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group text-gray-400 hover:text-white transition-colors duration-300"
                    aria-label="LinkedIn"
                >
                    <img
                        src="https://img.icons8.com/ios/50/ffffff/linkedin.png"
                        alt="LinkedIn"
                        className="h-6 w-6 transition-opacity group-hover:opacity-50"
                    />
                </a>
            </div>


            {/* Copyright */}
            <div className="text-center text-grey font-medium mb-4 mt-16">
                &copy; {new Date().getFullYear()} Binary Growth. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
