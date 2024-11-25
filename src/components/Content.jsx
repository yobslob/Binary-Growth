import React, { useState } from "react";

const Content = () => {
    const [activeContent, setActiveContent] = useState("short");

    return (
        <section
            id="content"
            className="min-h-screen gradient-bg text-white flex flex-col items-center justify-center py-20 px-8"
        >
            {/* Buttons */}
            <div className="flex space-x-8 mb-8">
                <button
                    onClick={() => setActiveContent("short")}
                    className={`px-6 py-3 rounded-lg font-bold text-lg ${activeContent === "short"
                        ? "bg-blue-600 text-white"
                        : "bg-gray-800 text-gray-400"
                        } hover:bg-blue-500 transition-colors duration-300`}
                >
                    Short Form Content
                </button>
                <button
                    onClick={() => setActiveContent("long")}
                    className={`px-6 py-3 rounded-lg font-bold text-lg ${activeContent === "long"
                        ? "bg-blue-600 text-white"
                        : "bg-gray-800 text-gray-400"
                        } hover:bg-blue-500 transition-colors duration-300`}
                >
                    Long Form Content
                </button>
            </div>

            {/* Content */}
            <div className="text-center max-w-3xl">
                {activeContent === "short" && (
                    <p className="text-lg text-gray-300">
                        Short form content is ideal for engaging quickly with your audience,
                        offering concise and impactful messages that capture attention
                        effortlessly.
                    </p>
                )}
                {activeContent === "long" && (
                    <p className="text-lg text-gray-300">
                        Long form content dives deeper into topics, providing in-depth
                        information, detailed analysis, and storytelling that resonates on
                        a profound level.
                    </p>
                )}
            </div>
        </section>
    );
};

export default Content;
