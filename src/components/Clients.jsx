import React from "react";
import { motion } from "framer-motion";
import crc1 from '../assets/crc1.jpg';
import crc2 from '../assets/crc2.jpg';
import crc3 from '../assets/crc3.jpg';
import crc4 from '../assets/crc4.jpg';
import crc5 from '../assets/crc5.jpg';
import crc6 from '../assets/crc6.jpg';
import crc7 from '../assets/crc7.jpg';
import crc8 from '../assets/crc8.jpg';

const clients = [
    {
        name: "Andy Stauring",
        image: crc1,
        instagram: "https://instagram.com/client1",
    },
    {
        name: "Serge Gatauri",
        image: crc2,
        instagram: "https://instagram.com/client2",
    },
    {
        name: "Ankit Arora",
        image: crc3,
        instagram: "https://instagram.com/client3",
    },
    {
        name: "Kenneth Corbin",
        image: crc4,
        instagram: "https://instagram.com/client4",
    },
    {
        name: "Dominy kas",
        image: crc5,
        instagram: "https://instagram.com/client4",
    },
    {
        name: "Yorgen",
        image: crc6,
        instagram: "https://instagram.com/client4",
    },
    {
        name: "Naz",
        image: crc7,
        instagram: "https://instagram.com/client4",
    },
    {
        name: "Omar",
        image: crc8,
        instagram: "https://instagram.com/client4",
    },
    // Add more clients as needed
];

const Clients = () => {
    return (
        <section
            id="clients"
            className="min-h-screen gradient-bg text-white flex flex-col items-center justify-center"
        >
            {/* Heading */}
            <h2 className="text-3xl lg:text-4xl font-bold mb-32">
                Trusted By :
            </h2>

            {/* Scrolling Container */}
            <div className="relative w-full max-w-6xl overflow-hidden">
                {/* Blur Effects */}
                <div className="absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-black to-transparent z-10"></div>
                <div className="absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-black to-transparent z-10"></div>

                {/* Scroller */}
                <motion.div
                    className="flex space-x-16 bg-transparent h-32 items-center"
                    style={{
                        animation: "scroll 50s linear infinite", // Use CSS animation for seamless scrolling
                        width: `${clients.length * 60}%`,
                    }}
                >
                    {/* Duplicate the list to create seamless scrolling */}
                    {clients.concat(clients).map((client, index) => (
                        <a
                            href={client.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            key={index}
                            className="flex items-center bg-cardPurple rounded-full p-2 pr-8 w-[370px] whitespace-nowrap transform hover:-translate-y-2 transition-transform duration-300"
                        >
                            <img
                                src={client.image}
                                alt={client.name}
                                className="w-20 h-20 rounded-full"
                            />
                            <p className="text-gray-300 text-xl mx-auto font-semibold">{client.name}</p>
                        </a>
                    ))}
                </motion.div>
            </div>

            {/* Add the CSS for seamless animation */}
            <style>
                {`
    @keyframes scroll {
        0% {
            transform: translateX(0%);
        }
        100% {
            transform: translateX(-50%);
        }
    }
    `}
            </style>

        </section>


    );
};

export default Clients;
