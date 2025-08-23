"use client";
import React from "react";
import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Frontend",
    skills: ["React", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Backend",
    skills: ["Node.js","Express", "MongoDB",],
  },
  {
    title: "Mobile",
    skills: ["React Native"],
  },
  {
    title: "Tools & Others",
    skills: ["Git", "AWS", "Firebase"],
  },
];

// Card container animation (staggered children)
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // delay between cards
    },
  },
};

// Card animation
const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

// Skill item hover animation
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const Skill = () => {
  return (
    <section
      id="skill"
      className="w-full py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex flex-col items-center font-nunito"
    >
      {/* Main Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-extrabold text-white mb-16 relative"
      >
        Skills
        <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-orange-500 rounded-full"></span>
      </motion.h1>

      {/* Skill Categories */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-7xl px-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {skillCategories.map((category) => (
          <motion.div
            key={category.title}
            variants={cardVariants}
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(249,115,22,0.4)" }}
            className="bg-gray-800 border border-gray-700 rounded-2xl p-8 shadow-md transition-all
            w-full max-w-sm mx-auto"
          >
            {/* Title */}
            <h2 className="text-xl md:text-2xl font-bold text-orange-400 mb-4 text-center">
              {category.title}
            </h2>

            {/* Skills */}
            <motion.ul className="space-y-3">
              {category.skills.map((skill) => (
                <motion.li
                  key={skill}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gray-700 rounded-lg px-4 py-3 text-gray-200 font-medium 
                  hover:bg-orange-500 hover:text-black transition text-center cursor-pointer"
                >
                  {skill}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skill;
