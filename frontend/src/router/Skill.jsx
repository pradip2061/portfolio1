"use client";
import React from "react";
import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React / Next.js", level: 90, color: "bg-orange" },
      { name: "Tailwind / CSS", level: 88, color: "bg-orange" },
      { name: "JavaScript / TypeScript", level: 85, color: "bg-orange" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js / Express", level: 82, color: "bg-orange" },
      { name: "MongoDB / SQL", level: 78, color: "bg-orange" },
      { name: "REST & GraphQL APIs", level: 75, color: "bg-orange" },
    ],
  },
  {
    title: "Mobile Development",
    skills: [
      { name: "React Native", level: 80, color: "bg-orange" },
      { name: "Flutter", level: 70, color: "bg-orange" },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git & GitHub", level: 85, color: "bg-orange" },
      { name: "Docker", level: 70, color: "bg-orange" },
      { name: "Figma", level: 75, color: "bg-orange" },
    ],
  },
  {
    title: "Others",
    skills: [
      { name: "Data Analytics", level: 72, color: "bg-orange" },
      { name: "UI/UX Design", level: 74, color: "bg-orange" },
      { name: "Problem Solving", level: 80, color: "bg-orange" },
    ],
  },
];

const Skill = () => {
  return (
    <section
      id="skill"
      className="w-full py-20 bg-gray-900 flex flex-col items-center"
    >
      {/* Main Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold text-white mb-16 relative"
      >
        Skills
        <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-orange-500 rounded-full"></span>
      </motion.h1>

      {/* Loop through categories */}
      <div className="flex flex-col gap-16 w-full max-w-6xl px-6">
        {skillCategories.map((category, i) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col gap-8"
          >
            {/* Category Title */}
            <h2 className="text-2xl md:text-3xl font-semibold text-white">
              {category.title}
            </h2>

            {/* Skills Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.03 }}
                  className="bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  {/* Title & Percentage */}
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg md:text-xl font-semibold text-white">
                      {skill.name}
                    </h3>
                    <span className="text-white font-bold text-lg">
                      {skill.level}%
                    </span>
                  </div>

                  {/* Progress Bar */}
                  <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                    <motion.div
                      className={`h-3 rounded-full ${skill.color}`}
                      initial={{ width: "0%" }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1.2, ease: "easeInOut" }}
                      viewport={{ once: false, amount: 0.6 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skill;
