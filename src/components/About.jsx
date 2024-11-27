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
        <span className="text-3xl mt-20 lg:text-7xl font-bold text-numbPurple">
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
            className="min-h-screen gradient-bg text-white flex flex-col items-center justify-center py-2"
        >
            {/* Heading */}
            <div className="text-center mb-12">
                <h2 className="text-5xl font-MutatorSans font-semibold lg:text-5xl font-extrabold mb-4">
                    The Fastest way to grow through the algorithm.
                </h2>
                <hr className="w-1/6 border-t-2 border-gray-600 my-6 mx-[40.5%]"></hr>
                <p className="text-lg lg:text-xl text-gray-400">
                    Discover what makes us stand out.
                </p>
            </div>

            {/* Counters */}
            <div
                ref={ref}
                className="flex flex-col lg:flex-row justify-center items-center ml-32 gap-72"
            >
                {/* Videos Created */}
                {inView && (
                    <div className="flex flex-col items-center">
                        <Counter start={0} end={86} suffix="" duration={0.9} />
                        <p className="mt-2 text-gray-300 text-center">Videos Created</p>
                    </div>
                )}
                {/* Videos Generated */}
                {inView && (
                    <div className="flex flex-col ml-10 items-center">
                        <Counter start={0} end={400} suffix={<span className="text-7xl">M+</span>} duration={1.3} />
                        <p className="mt-2 text-gray-300 text-center">Videos Generated</p>
                    </div>
                )}
                {/* Total Watchtime */}
                {inView && (
                    <div className="flex flex-col items-center">
                        <Counter start={0} end={288} suffix={<span className="text-6xl">k Hrs+</span>} duration={1.6} />
                        <p className="mt-2 text-gray-300 text-center">Total Watchtime</p>
                    </div>
                )}
            </div>
        </section>
    );
};

export default About;
