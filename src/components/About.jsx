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
        <span className="text-4xl lg:text-5xl font-bold text-blue-600">
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
            className="min-h-screen gradient-bg text-white flex flex-col items-center justify-center py-20"
        >
            {/* Heading */}
            <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-extrabold mb-4">
                    About Our Journey
                </h2>
                <p className="text-lg lg:text-xl text-gray-400">
                    Discover what makes us stand out.
                </p>
            </div>

            {/* Counters */}
            <div
                ref={ref}
                className="flex flex-col lg:flex-row justify-center items-center gap-12"
            >
                {/* Videos Created */}
                {inView && (
                    <div className="flex flex-col items-center">
                        <Counter start={0} end={86} suffix="" duration={2} />
                        <p className="mt-2 text-gray-400 text-center">Videos Created</p>
                    </div>
                )}
                {/* Videos Generated */}
                {inView && (
                    <div className="flex flex-col items-center">
                        <Counter start={0} end={400} suffix="M+" duration={2.5} />
                        <p className="mt-2 text-gray-400 text-center">Videos Generated</p>
                    </div>
                )}
                {/* Total Watchtime */}
                {inView && (
                    <div className="flex flex-col items-center">
                        <Counter start={0} end={288} suffix="k Hrs+" duration={3} />
                        <p className="mt-2 text-gray-400 text-center">Total Watchtime</p>
                    </div>
                )}
            </div>
        </section>
    );
};

export default About;
