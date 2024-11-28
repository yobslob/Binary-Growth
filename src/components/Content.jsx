import React, { useState } from "react";

const Content = () => {
    const [activeContent, setActiveContent] = useState("short");

    return (
        <section
            id="content"
            className="min-h-screen gradient-bg text-white flex flex-col items-center justify-center"
        >
            {/* Buttons */}
            <div className="flex space-x-36 mb-32">
                <button
                    onClick={() => setActiveContent("short")}
                    className={`px-16 py-2 rounded-xl text-md bord ${activeContent === "short"
                        ? "bg-cyan-700 text-white"
                        : "bg-black text-gray-400"
                        } transform hover:-translate-y-1 transition-transform duration-300`}
                >
                    Short Form Content
                </button>
                <button
                    onClick={() => setActiveContent("long")}
                    className={`px-16 py-2 rounded-xl text-md bord ${activeContent === "long"
                        ? "bg-cyan-700 text-white"
                        : "bg-black text-gray-400"
                        } transform hover:-translate-y-1 transition-transform duration-300`}
                >
                    Long Form Content
                </button>
            </div>

            {/* Content */}
            <div className="text-center max-w-3xl">
                {activeContent === "short" && (<>
                    <p className="text-3xl mb-8 font-semibold">
                        Our Shorts Will Outperform <span className="text-custPurple">Your Current Shorts</span><br></br>
                        In Views by 10% Within 30 Days,<br></br>
                        Or We Will Give You A Full Refund
                    </p>
                    <p className="text-md font-light">
                        We will put this in a legally-binding contract with no BS or funny business
                    </p>
                    <div className="bord">
                        <a
                            href="#contact"
                        >
                            BOOK A CALL
                        </a>
                    </div>
                </>)}
                {activeContent === "long" && (<>
                    <p className="text-3xl mb-12 font-semibold">
                        Get your Channel's Watch Time<br></br>
                        increased by 15%, With a <span className="text-custPurple">Youtube Lead Engine</span><br></br>
                        (or You don't pay)
                    </p>
                    <p className="text-md font-light">
                        We will put this in a legally-binding contract with no BS or funny business
                    </p>
                    <div className="bord">
                        <a
                            href="#contact"
                        >
                            BOOK A CALL
                        </a>
                    </div>
                </>)}
            </div>
        </section>
    );
};

export default Content;
