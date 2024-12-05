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
];

const Clients = () => {
    return (
        <section
            id="clients"
            className="min-h-screen gradient-bg text-white flex flex-col items-center justify-center px-4"
        >
            {/* Heading */}
            <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold mb-12 md:mb-24">
                Trusted By :
            </h2>

            {/* Scrolling Container */}
            <div className="relative w-full max-w-6xl overflow-hidden">
                {/* Blur Effects */}
                <div className="absolute top-0 left-0 h-full w-12 md:w-24 bg-gradient-to-r from-black to-transparent z-10"></div>
                <div className="absolute top-0 right-0 h-full w-12 md:w-24 bg-gradient-to-l from-black to-transparent z-10"></div>

                {/* Scroller */}
                <motion.div
                    className="flex space-x-8 md:space-x-16 bg-transparent h-28 md:h-32 items-center"
                    style={{
                        animation: "scroll 50s linear infinite",
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
                            className="flex items-center bg-cardPurple rounded-full md:rounded-lg px-20 py-2 pl-2 md:pl-4 md:pr-8 w-[350px] md:w-[370px] whitespace-nowrap transform hover:-translate-y-2 transition-transform duration-300"
                        >
                            <img
                                src={client.image}
                                alt={client.name}
                                className="w-12 h-12 md:w-20 md:h-20 rounded-full"
                            />
                            <p className="text-gray-300 text-base md:text-2xl pl-4 md:pr-20 md:pl-8 font-semibold ">
                                {client.name}
                            </p>
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
