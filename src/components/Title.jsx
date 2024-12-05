import React from "react";
import { motion } from "framer-motion"; // For animations

const Title = () => {
  return (
    <section id="title" className="min-h-screen flex flex-col justify-center items-center gradient-bg px-4 sm:px-8">
      {/* Row for "Grow With Binary" */}
      <div className="flex flex-wrap justify-center items-center space-x-2 lg:space-x-3 lg:mt-32">
        {/* Normal Text */}
        <motion.h1
          className="text-gray-300 font-bold inline-block mb-3 text-4xl sm:text-4xl md:text-6xl"
          style={{ fontFamily: "'MutatorSans', sans-serif", fontWeight: 560 }}
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.8, ease: 'easeIn' }} // Duration and ease-in
        >
          Grow With
        </motion.h1>

        {/* Gradient Text */}
        <motion.h1
          className="inline-block mb-3 text-4xl sm:text-4xl md:text-6xl"
          style={{
            fontFamily: "'MutatorSans', sans-serif",
            fontWeight: 560,
            background: 'linear-gradient(90deg, #c96af8, #3d004e)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2.2, ease: 'easeIn' }} // Longer duration for gradient text
        >
          Binary
        </motion.h1>
      </div>

      {/* Paragraph */}
      <motion.p
        className="text-gray-400 text-center max-w-4xl mt-6 text-sm lg-:text-3xl md:text-xl leading-6"
        style={{ fontFamily: "'Roboto', Arial, sans-serif", fontWeight: 450, lineHeight: '1.5rem' }}
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2.8, ease: 'easeIn' }} // Slightly slower for paragraph
      >
        We help Entrepreneurs start and grow their personal brands and account handles to attract quality leads
        and increase revenue, whether by starting a new brand or optimizing an existing one.
      </motion.p>
    </section>
  );
};


export default Title;
