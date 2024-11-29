import React, { useState } from "react";
import { useInView } from "react-intersection-observer";

const Content = () => {
    const [activeContent, setActiveContent] = useState("short");

    const { ref: blurRef1, inView: blurInView1 } = useInView({ triggerOnce: true });
    const { ref: blurRef2, inView: blurInView2 } = useInView({ triggerOnce: true });
    const { ref: blurRef3, inView: blurInView3 } = useInView({ triggerOnce: true });

    return (
        <>
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
                            }`}
                    >
                        Short Form Content
                    </button>
                    <button
                        onClick={() => setActiveContent("long")}
                        className={`px-16 py-2 rounded-xl text-md bord ${activeContent === "long"
                            ? "bg-cyan-700 text-white"
                            : "bg-black text-gray-400"
                            }`}
                    >
                        Long Form Content
                    </button>
                </div>

                {/* Content */}
                <div className="text-center max-w-5xl">
                    {activeContent === "short" && (
                        <>
                            <p className="text-3xl mb-8 font-semibold animate-popIn">
                                Our Shorts Will Outperform{" "}
                                <span className="text-statePurple">Your Current Shorts</span>
                                <br />
                                In Views by 10% Within 30 Days,
                                <br />
                                Or We Will Give You A Full Refund
                            </p>
                            <p className="text-md font-light animate-popHard">
                                We will put this in a legally-binding contract with no BS or funny
                                business
                            </p>
                            <div className="bord animate-popHard">
                                <a href="#contact">BOOK A CALL</a>
                            </div>
                            {/* Section 1 */}
                            <div className="relative max-w-5xl mx-auto px-4 pt-12 pb-6 mb-28 bg-transparent rounded-lg shadow-lg]">
                                <div
                                    ref={blurRef1}
                                    className={`absolute top-16 left-[24%] w-[570px] h-20 bg-customGradient rounded-full ${blurInView1 ? "animate-fadeIn" : "opacity-0"
                                        } blur-3xl opacity-50 z-[-1]`}
                                ></div>
                                <h2 className="text-4xl font-bold text-white text-center mb-16">Daniel Dalen's Style</h2>
                                <div className="flex justify-between space-x-12">
                                    {/* Iframes */}
                                    <iframe
                                        src="https://player.vimeo.com/video/1004793088?&badge=0&quality=1080p&transparent=0&dnt=1"
                                        title="Reel 1"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        className="w-auto h-[440px] rounded-xl "
                                    ></iframe>
                                    <iframe
                                        src="https://player.vimeo.com/video/1000112241?badge=0&loop=1&quality=1080p&transparent=0&dnt=1"
                                        title="Reel 2"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        className="w-auto h-[440px] rounded-xl"
                                    ></iframe>
                                    <iframe
                                        src="https://player.vimeo.com/video/1000144834?badge=0&loop=1&quality=1080p&transparent=0&dnt=1"
                                        title="Reel 3"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        className="w-auto h-[440px] rounded-xl "
                                    ></iframe>
                                    {/* Add your iframe components here */}
                                </div>
                            </div>

                            {/* Section 2 */}
                            <div className="relative max-w-5xl mx-auto px-4 pt-12 pb-6 mb-28 bg-transparent rounded-lg shadow-lg">
                                <div
                                    ref={blurRef2}
                                    className={`absolute top-16 left-[27%] w-[500px] h-20 bg-customGradient rounded-full ${blurInView2 ? "animate-fadeIn" : "opacity-0"
                                        } blur-3xl opacity-50 z-[-1]`}
                                ></div>
                                <h2 className="text-4xl font-bold text-white text-center mb-16">Motion Graphics</h2>
                                <div className="flex justify-between space-x-12">
                                    {/* Iframes */}
                                    <iframe
                                        src="https://player.vimeo.com/video/1000136232?&badge=0&quality=1080p&transparent=0&dnt=1"
                                        title="Reel 1"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        className="w-auto h-[440px] rounded-xl "
                                    ></iframe>
                                    <iframe
                                        src="https://player.vimeo.com/video/1000135296?badge=0&loop=1&quality=1080p&transparent=0&dnt=1"
                                        title="Reel 2"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        className="w-auto h-[440px] rounded-xl"
                                    ></iframe>
                                    <iframe
                                        src="https://player.vimeo.com/video/1004792092?badge=0&loop=1&quality=1080p&transparent=0&dnt=1"
                                        title="Reel 3"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        className="w-auto h-[440px] rounded-xl "
                                    ></iframe>
                                    {/* Add your iframe components here */}
                                </div>
                            </div>

                            {/* Section 3 */}
                            <div className="relative max-w-5xl mx-auto px-4 pt-12 pb-6 mb-28 bg-transparent rounded-lg shadow-lg">
                                <div
                                    ref={blurRef3}
                                    className={`absolute top-16 left-[22%] w-[600px] h-20 bg-customGradient rounded-full ${blurInView3 ? "animate-fadeIn" : "opacity-0"
                                        } blur-3xl opacity-50 z-[-1]`}
                                ></div>
                                <h2 className="text-4xl font-bold text-white text-center mb-16">Informative shorts</h2>
                                <div className="flex justify-between space-x-12">
                                    {/* Iframes */}
                                    <iframe
                                        src="https://player.vimeo.com/video/1000131679?&badge=0&quality=1080p&transparent=0&dnt=1"
                                        title="Reel 1"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        className="w-auto h-[440px] rounded-xl"
                                    ></iframe>
                                    <iframe
                                        src="https://player.vimeo.com/video/1000131220?badge=0&loop=1&quality=1080p&transparent=0&dnt=1"
                                        title="Reel 2"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        className="w-auto h-[440px] rounded-xl"
                                    ></iframe>
                                    <iframe
                                        src="https://player.vimeo.com/video/1004797784?badge=0&loop=1&quality=1080p&transparent=0&dnt=1"
                                        title="Reel 3"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        className="w-auto h-[440px] rounded-xl "
                                    ></iframe>
                                </div>
                            </div>


                        </>
                    )}
                    {activeContent === "long" && (
                        <>
                            <p className="text-3xl mb-8 font-semibold animate-popIn">
                                Get your Channel's Watch Time
                                <br />
                                increased by 15%, With a{" "}
                                <span className="text-statePurple">Youtube Lead Engine</span>
                                <br />
                                (or You don't pay)
                            </p>
                            <p className="text-md font-light animate-popHard">
                                We will put this in a legally-binding contract with no BS or funny
                                business
                            </p>
                            <div className="bord animate-popHard">
                                <a href="#contact">BOOK A CALL</a>
                            </div>
                            <div className="relative max-w-5xl mx-auto px-4 pt-12 pb-6 mb-28 bg-transparent rounded-lg shadow-lg]">
                                <div
                                    ref={blurRef1}
                                    className={`absolute top-16 left-[24%] w-[570px] h-20 bg-customGradient rounded-full ${blurInView1 ? "animate-fadeIn" : "opacity-0"
                                        } blur-3xl opacity-50 z-[-1]`}
                                ></div>
                                <h2 className="text-4xl font-bold text-white text-center mb-16">Andy Stauring</h2>
                                <div className="flex justify-center">
                                    {/* Iframes */}
                                    <iframe
                                        src="https://www.youtube.com/embed/X88w1QeylRY"
                                        title="I studied under ₹6 Lakhs in BITS Pilani! Here&#39;s How! 2024"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        referrerpolicy="strict-origin-when-cross-origin"
                                        className="w-3/4 h-[380px] rounded-xl "
                                    ></iframe>
                                </div>
                            </div>
                            <div className="relative max-w-5xl mx-auto px-4 pt-12 pb-6 mb-28 bg-transparent rounded-lg shadow-lg]">
                                <div
                                    ref={blurRef2}
                                    className={`absolute top-16 left-[24%] w-[570px] h-20 bg-customGradient rounded-full ${blurInView2 ? "animate-fadeIn" : "opacity-0"
                                        } blur-3xl opacity-50 z-[-1]`}
                                ></div>
                                <h2 className="text-4xl font-bold text-white text-center mb-16">Somrat Dutta</h2>
                                <div className="flex justify-center">
                                    {/* Iframes */}
                                    <iframe
                                        src="https://www.youtube.com/embed/usjAa-QaXp4"
                                        title="7 AI Tools That Can Make You A Millionaire."
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        referrerpolicy="strict-origin-when-cross-origin"
                                        className="w-3/4 h-[380px] rounded-xl "
                                    ></iframe>
                                </div>
                            </div>
                            <div className="relative max-w-5xl mx-auto px-4 pt-12 pb-6 mb-28 bg-transparent rounded-lg shadow-lg]">
                                <div
                                    ref={blurRef3}
                                    className={`absolute top-16 left-[24%] w-[570px] h-20 bg-customGradient rounded-full ${blurInView3 ? "animate-fadeIn" : "opacity-0"
                                        } blur-3xl opacity-50 z-[-1]`}
                                ></div>
                                <h2 className="text-4xl font-bold text-white text-center mb-16">Ankit Arora</h2>
                                <div className="flex justify-center">
                                    {/* Iframes */}
                                    <iframe
                                        src="https://www.youtube.com/embed/PC_OYMJxckU"
                                        title="How To Find Winning Dropshipping Products (To BLOW Up Your Store)"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        referrerpolicy="strict-origin-when-cross-origin"
                                        className="w-3/4 h-[380px] rounded-xl "
                                    ></iframe>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </section>
        </>
    );
};

export default Content;
