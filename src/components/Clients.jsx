import React from "react";
import { motion } from "framer-motion";

const clients = [
    {
        name: "Client 1",
        image: "https://via.placeholder.com/150",
        instagram: "https://instagram.com/client1",
    },
    {
        name: "Client 2",
        image: "https://via.placeholder.com/150",
        instagram: "https://instagram.com/client2",
    },
    {
        name: "Client 3",
        image: "https://via.placeholder.com/150",
        instagram: "https://instagram.com/client3",
    },
    {
        name: "Client 4",
        image: "https://via.placeholder.com/150",
        instagram: "https://instagram.com/client4",
    },
    // Add more clients as needed
];

const Clients = () => {
    return (
        <section
            id="clients"
            className="min-h-screen gradient-bg text-white flex flex-col items-center justify-center py-20 px-8"
        >
            {/* Heading */}
            <h2 className="text-3xl lg:text-4xl font-extrabold mb-12 text-center">
                Our Clients
            </h2>

            {/* Scrolling Container */}
            <div className="relative w-full max-w-6xl overflow-hidden">
                {/* Blur Effects */}
                <div className="absolute top-0 left-0 h-full w-16 bg-gradient-to-r from-gray-900 to-transparent z-10"></div>
                <div className="absolute top-0 right-0 h-full w-16 bg-gradient-to-l from-gray-900 to-transparent z-10"></div>

                {/* Scroller */}
                <motion.div
                    className="flex space-x-8 items-center"
                    animate={{ x: ["0%", "-100%"] }}
                    transition={{
                        repeat: Infinity,
                        duration: 10,
                        ease: "linear",
                    }}
                    style={{ width: `${clients.length * 20}%` }}
                >
                    {clients.concat(clients).map((client, index) => (
                        <a
                            href={client.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            key={index}
                            className="flex flex-col items-center bg-gray-800 rounded-lg p-4 w-40 h-40 hover:scale-105 transition-transform duration-300"
                        >
                            <img
                                src={client.image}
                                alt={client.name}
                                className="w-20 h-20 rounded-full mb-4"
                            />
                            <p className="text-gray-300">{client.name}</p>
                        </a>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Clients;
