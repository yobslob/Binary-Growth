import React from "react";
import { motion } from "framer-motion"; // For animations

const Title = () => {
  return (
    <section
      className="min-h-screen flex justify-center items-center gradient-bg"

    >
      {/* Heading with fade-in animation */}
      <h1 className="normal-text">Grow With</h1>
      <h1 className="gradient-text">Binary</h1>

      {/* Paragraph with fade-in animation */}
      <p
        className="text-lg lg:text-xl text-gray-300 text-center max-w-2xl"
      >
        Empower your business with the tools and strategies to achieve new heights of success. Join us on the journey to growth.
      </p>
    </section >
  );
};

export default Title;
