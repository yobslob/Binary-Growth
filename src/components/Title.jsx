import React from "react";
import { motion } from "framer-motion"; // For animations

const Title = () => {
  return (
    <section
      className="min-h-screen flex flex-col justify-center items-center gradient-bg"
    >
      {/* Row for "Grow With Binary" */}
      <div className="flex space-x-3 mt-10">
        <h1 className="normal-text">Grow With</h1>
        <h1 className="gradient-text">Binary</h1>
      </div>

      {/* Paragraph with fade-in animation */}
      <p
        className="text-lg lg:text-l greyOut text-gray-300 text-center px-2 max-w-5xl mt-4"
      >
        We help Entrepreneurs start and grow their personal brands and account handles to attract quality leads
        and increase revenue, whether by starting a new brand or optimizing an existing one.
      </p>
    </section>


  );
};

export default Title;
