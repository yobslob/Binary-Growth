import React, { useState } from "react";
import { useInView } from "react-intersection-observer";

const Content = () => {
    const [activeContent, setActiveContent] = useState("short");

    const { ref: blurRef1, inView: blurInView1 } = useInView({ triggerOnce: true });
    const { ref: blurRef2, inView: blurInView2 } = useInView({ triggerOnce: true });
    const { ref: blurRef3, inView: blurInView3 } = useInView({ triggerOnce: true });


    return (
        <section
            id="content"
            className="min-h-screen gradient-bg text-white flex flex-col items-center justify-center px-4 sm:px-8 py-6"
        >
            <hr className="w-1/3 sm:w-1/3 lg:w-1/4 border-t-1 border-grey mx-auto mb-16 lg:mb-36"></hr>
            {/* Toggle Buttons */}
            <div className="flex flex-row lg:space-x-44 space-x-12 mb-32">
                <button
                    onClick={() => setActiveContent("short")}
                    className={`whitespace-nowrap rounded-lg px-4 lg:px-12 py-1 cursor-pointer text-xs md:text-base ${activeContent === "short"
                        ? " lg:bg-cyan-700 border border-white animate-border-gradient text-white"
                        : "bg-transparent lg:border lg:border-white lg:animate-border-gradient"
                        }`}
                >
                    Short Form Content
                </button>
                <button
                    onClick={() => setActiveContent("long")}
                    className={` whitespace-nowrap rounded-lg px-4 lg:px-12 py-1 cursor-pointer text-xs md:text-base ${activeContent === "long"
                        ? "lg:bg-cyan-700 border border-white animate-border-gradient text-white"
                        : "bg-transparent lg:border lg:border-white lg:animate-border-gradient"
                        }`}
                >
                    Long Form Content
                </button>
            </div>

            {/* Dynamic Content */}
            <div className="text-center bg-transparent max-w-4xl lg:max-w-full">
                {activeContent === "short" && (
                    <>
                        <p className="text-grey-300 text-xl sm:text-2xl lg:text-3xl mb-9 font-semibold animate-popIn">
                            Our Shorts Will Outperform{" "}
                            <span className="text-statePurple">Your Current Shorts</span>
                            <br />
                            In Views by 10% Within 30 Days,
                            <br />
                            Or We Will Give You A Full Refund
                        </p>
                        <p className="text-sm lg:text-sm font-thin mb-24 animate-popHard">
                            We will put this in a legally-binding contract with no BS or funny
                            business.
                        </p>
                        <div className="bg-transparent border border-white whitespace-nowrap rounded-lg py-3 mx-[30%] lg:mx-[40%] mb-44 animate-popHard ">
                            <a
                                href="#booking"
                                className="bg-transparent lg:px-6 py-2 rounded-lg text-white "
                            >
                                BOOK A CALL
                            </a>
                        </div>
                        {/* Videos Section */}
                        <div className="relative flex flex-col items-center">
                            {/* Heading */}
                            <div
                                ref={blurRef1}
                                className={`absolute top-10 left-[22%] w-[300px] md:w-[570px] h-20 bg-customGradient rounded-full ${blurInView1 ? "animate-fadeIn" : "opacity-0"
                                    } blur-3xl opacity-50 z-[-1]`}
                            ></div>
                            <h1 className="text-xl sm:text-2xl lg:text-4xl font-bold text-center mb-9 sm:mb-10 md:mb-10 lg:mb-11">
                                Daniel Dalen's Style
                            </h1>
                            <div className="flex h-72 bg-transparent flex-wrap justify-center gap-3 lg:gap-12 mb-44 md:mb-36 lg:mb-96">
                                {["1004793088", "1000112241", "1000144834"].map((id) => (
                                    <iframe
                                        key={id}
                                        src={`https://player.vimeo.com/video/${id}?title=0&byline=0&portrait=0&badge=0&quality=1080p&transparent=0&dnt=1`}
                                        title={`Reel ${id}`}
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        className="w-[31%] lg:w-auto sm:w-[31%] xs:h-[350px] lg:h-[430px] h-[400px] rounded-xl"
                                    ></iframe>
                                ))}
                            </div>
                        </div>
                        <div className="relative flex flex-col bg-transparent items-center">
                            {/* Heading */}
                            <div
                                ref={blurRef2}
                                className={`absolute top-10 left-[26%] w-[300px] md:w-[500px] h-20 bg-customGradient rounded-full ${blurInView2 ? "animate-fadeIn" : "opacity-0"
                                    } blur-3xl opacity-50 z-[-1]`}
                            ></div>
                            <h1 className="text-xl sm:text-2xl lg:text-4xl font-bold text-center mb-9 sm:mb-10 md:mb-10 lg:mb-12">
                                Motion Graphics
                            </h1>
                            <div className="flex h-72 bg-transparent flex-wrap justify-center gap-3 lg:gap-12 mb-44 md:mb-36 lg:mb-96">
                                {["1000136232", "1000135296", "1004792092"].map((id) => (
                                    <iframe
                                        key={id}
                                        src={`https://player.vimeo.com/video/${id}?title=0&byline=0&portrait=0&badge=0&quality=1080p&transparent=0&dnt=1`}
                                        title={`Reel ${id}`}
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        className="w-[31%] lg:w-auto sm:w-[31%] sm:h-[380px] lg:h-[430px] h-[400px] rounded-xl"
                                    ></iframe>
                                ))}
                            </div>
                        </div>
                        <div className="relative flex flex-col items-center">
                            {/* Heading */}
                            <div
                                ref={blurRef3}
                                className={`absolute top-10 left-[21%] w-[300px] md:w-[600px] h-20 bg-customGradient rounded-full ${blurInView3 ? "animate-fadeIn" : "opacity-0"
                                    } blur-3xl opacity-50 z-[-1]`}
                            ></div>
                            <h1 className="text-xl sm:text-2xl lg:text-4xl font-bold text-center mb-9 sm:mb-10 md:mb-10 lg:mb-12">
                                Informative Shorts
                            </h1>
                            <div className="flex h-72 bg-transparent flex-wrap justify-center gap-3 lg:gap-12 mb-44 md:mb-36 lg:mb-96">
                                {["1000131679", "1000131220", "1004797784"].map((id) => (
                                    <iframe
                                        key={id}
                                        src={`https://player.vimeo.com/video/${id}?title=0&byline=0&portrait=0&badge=0&quality=1080p&transparent=0&dnt=1`}
                                        title={`Reel ${id}`}
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        className="w-[31%] lg:w-auto sm:w-[31%] sm:h-[380px] lg:h-[430px] h-[400px] rounded-xl"
                                    ></iframe>
                                ))}
                            </div>
                        </div>

                    </>
                )}
                {activeContent === "long" && (
                    <>
                        <p className="text-xl sm:text-2xl lg:text-3xl mb-6 font-semibold animate-popIn">
                            Get your Channel's Watch Time
                            <br />
                            increased by 15%, With a{" "}
                            <span className="text-statePurple">Youtube Lead Engine</span>
                            <br />
                            (or You don't pay)
                        </p>
                        <p className="text-sm lg:text-sm font-thin mb-24 animate-popHard">
                            We will put this in a legally-binding contract with no BS or funny
                            business.
                        </p>
                        <div className="bg-transparent border border-white whitespace-nowrap rounded-lg py-3 mx-[30%] lg:mx-[35%] mb-44 animate-popHard">
                            <a
                                href="#booking"
                                className="bg-transparent px-6 py-2 rounded-lg text-white"
                            >
                                BOOK A CALL
                            </a>
                        </div>
                        {/* Video Section */}
                        <div className="relative max-w-full mx-auto px-4 pt-6 pb-12 bg-transparent rounded-lg shadow-lg">
                            <div
                                ref={blurRef1}
                                className={`absolute top-12 left-[10%] w-[300px] sm:w-[400px] lg:w-[570px] h-20 bg-customGradient rounded-full ${blurInView1 ? "animate-fadeIn" : "opacity-0"
                                    } blur-3xl opacity-50 z-[-1]`}
                            ></div>
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8">Andy Stauring</h2>
                            <div className="flex justify-center">
                                <iframe
                                    src="https://www.youtube.com/embed/X88w1QeylRY"
                                    title="How To Find Winning Dropshipping Products (To BLOW Up Your Store)"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    referrerpolicy="strict-origin-when-cross-origin"
                                    className="w-full sm:w-3/4 h-[220px] sm:h-[380px] md:h-[480px] rounded-xl"
                                ></iframe>
                            </div>
                        </div>
                        <div className="relative max-w-full mx-auto px-4 pt-6 pb-12 bg-transparent rounded-lg shadow-lg">
                            <div
                                ref={blurRef2}
                                className={`absolute top-12 left-[10%] w-[300px] sm:w-[400px] lg:w-[570px] h-20 bg-customGradient rounded-full ${blurInView1 ? "animate-fadeIn" : "opacity-0"
                                    } blur-3xl opacity-50 z-[-1]`}
                            ></div>
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8">Somrat Dutta</h2>
                            <div className="flex justify-center">
                                <iframe
                                    src="https://www.youtube.com/embed/usjAa-QaXp4"
                                    title="I studied under ₹6 Lakhs in BITS Pilani! Here&#39;s How! 2024"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    referrerpolicy="strict-origin-when-cross-origin"
                                    className="w-full sm:w-3/4 h-[220px] sm:h-[380px] md:h-[480px] rounded-xl"
                                ></iframe>
                            </div>
                        </div>
                        <div className="relative max-w-full mx-auto px-0 pt-6 pb-12 bg-transparent rounded-lg shadow-lg">
                            <div
                                ref={blurRef3}
                                className={`absolute top-12 left-[10%] w-[300px] sm:w-[400px] lg:w-[570px] h-20 bg-customGradient rounded-full ${blurInView1 ? "animate-fadeIn" : "opacity-0"
                                    } blur-3xl opacity-50 z-[-1]`}
                            ></div>
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8">Ankit Arora</h2>
                            <div className="flex justify-center">
                                <iframe
                                    src="https://www.youtube.com/embed/PC_OYMJxckU"
                                    title="7 AI Tools That Can Make You A Millionaire."
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    referrerpolicy="strict-origin-when-cross-origin"
                                    className="sm:w-3/4 h-[220px] sm:h-[380px] md:h-[480px] rounded-xl"
                                ></iframe>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </section>
    );
};

export default Content;
