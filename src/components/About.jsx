import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const Counter = ({ start, end, suffix, duration }) => {
    const [currentValue, setCurrentValue] = React.useState(start);

    React.useEffect(() => {
        const increment = end / (duration * 1000 / 50); // Calculate increment value
        let value = start;

        const interval = setInterval(() => {
            value += increment;
            if (value >= end) {
                clearInterval(interval);
                value = end; // Ensure the final value is exact
            }
            setCurrentValue(Math.round(value));
        }, 50);

        return () => clearInterval(interval); // Cleanup interval
    }, [start, end, duration]);

    return (
        <span className="text-3xl sm:text-5xl lg:text-7xl font-bold text-numbPurple">
            {currentValue}
            {suffix}
        </span>
    );
};

const About = () => {
    const { ref, inView } = useInView({ triggerOnce: true });

    return (
        <section
            id="about"
            className="min-h-[70vh] md:min-h-screen gradient-bg text-white flex flex-col items-center justify-center py-6 px-4 sm:px-8"
        >
            {/* Heading */}
            <div className="text-center mb-8 sm:mb-12">
                <h2 className="text-2xl md:text-3xl lg:text-[40px] font-MutatorSans font-semibold mb-4">
                    The Fastest way to grow through the algorithm.
                </h2>
                <hr className="w-1/5 sm:w-1/5 lg:w-[11%] border-t-2 border-white mx-auto my-3 lg:my-6"></hr>
                <p className="text-base sm:text-lg lg:text-xl text-gray-400">
                    Discover what makes us stand out.
                </p>
            </div>

            {/* Counters */}
            <div
                ref={ref}
                className="flex flex-wrap justify-center items-center gap-12 lg:gap-20 mt-8 sm:mt-12"
            >
                {/* Videos Created */}
                {inView && (
                    <div className="flex flex-col items-center text-center md:mr-8 lg:mr-20">
                        <Counter start={0} end={86} suffix="" duration={0.9} />
                        <p className="mt-2 text-sm sm:text-base lg:text-lg text-gray-300">
                            Videos Created
                        </p>
                    </div>
                )}
                {/* Videos Generated */}
                {inView && (
                    <div className="flex flex-col items-center text-center">
                        <Counter
                            start={0}
                            end={400}
                            suffix={<span className="text-[26px] sm:text-[44px] lg:text-[64px]">M+</span>}
                            duration={1.3}
                        />
                        <p className="mt-2 text-sm sm:text-base lg:text-lg text-gray-300">
                            Engagement Pool
                        </p>
                    </div>
                )}
                {/* Total Watchtime */}
                {inView && (
                    <div className="flex flex-col items-center text-center">
                        <Counter
                            start={0}
                            end={288}
                            suffix={<span className="text-2xl sm:text-4xl lg:text-6xl">k Hrs+</span>}
                            duration={1.6}
                        />
                        <p className="mt-2 text-sm sm:text-base lg:text-lg text-gray-300">
                            Total Watchtime
                        </p>
                    </div>
                )}
            </div>
        </section>
    );
};

export default About;
