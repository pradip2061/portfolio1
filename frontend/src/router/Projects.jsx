"use client";
import React, { useEffect, useRef, useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";

// Importing project images
import interviewwebsite from "../assets/interview.png";
import busticket from "../assets/bus ticket book.png";
import vidshare from "../assets/vidshare.png";
import blog from "../assets/blog.png";
import taskmanager from "../assets/task.png";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Interview Prep Website",
      description:
        "A MERN-based interview preparation platform with authentication, resources, and practice tests.",
      image: interviewwebsite,
      technologies: ["MERN Stack", "Tailwind CSS", "JWT Auth"],
      liveUrl: "https://interview-website-nine.vercel.app/",
      githubUrl: "https://github.com/pradip2061/Interview-Website",
    },
    {
      id: 2,
      title: "Bus Ticket Booking",
      description:
        "Online bus ticket booking system with seat selection, payments, and booking history.",
      image: busticket,
      technologies: ["MERN Stack", "Tailwind CSS", "Stripe"],
      liveUrl: "https://bus-ticket-b9go.vercel.app/",
      githubUrl: "https://github.com/pradip2061/bus-ticket",
    },
    {
      id: 3,
      title: "VidShare",
      description:
        "A video-sharing platform like TikTok/YouTube built with MERN and cloud storage integration.",
      image: vidshare,
      technologies: ["MERN Stack", "Tailwind CSS", "Cloudinary"],
      liveUrl: "https://reel-website-6bav.vercel.app",
      githubUrl: "https://github.com/pradip2061/reel-website",
    },
    {
      id: 4,
      title: "Blog Platform",
      description:
        "A blogging platform with authentication, markdown editor, and comments system.",
      image: blog,
      technologies: ["MERN Stack", "Tailwind CSS", "JWT Auth"],
      liveUrl: "https://personal-blog-delta-ashen.vercel.app/",
      githubUrl: "https://github.com/pradip2061/PersonalBlog",
    },
    {
      id: 5,
      title: "Task Manager",
      description:
        "A collaborative task manager with real-time updates using WebSockets.",
      image: taskmanager,
      technologies: ["MERN Stack", "Tailwind CSS", "Socket.io"],
      liveUrl: "https://task-manager-vert-sigma.vercel.app/",
      githubUrl: "https://github.com/pradip2061/Task-Manager",
    },
  ];

  const [visibleId, setVisibleId] = useState(null);
  const refs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.intersectionRatio === 1) {
            setVisibleId(Number(entry.target.dataset.id));
          }
        });
      },
      { threshold: [0, 0.5, 1] }
    );

    refs.current.forEach((ref) => ref && observer.observe(ref));
    return () => {
      refs.current.forEach((ref) => ref && observer.unobserve(ref));
    };
  }, []);

  return (
    <section id="projects" className="py-16 sm:py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Heading */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
            My <span className="text-primary-500">Projects</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            Scroll down to explore my MERN stack projects — only the focused card stays clear.
          </p>
        </div>

        {/* Cards */}
        <div className="flex flex-col gap-12 sm:gap-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              ref={(el) => (refs.current[index] = el)}
              data-id={project.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.3 }}
              className={`transition-all duration-500 ${
                visibleId === project.id
                  ? "blur-0 scale-100 opacity-100"
                  : "blur-sm scale-95 opacity-70"
              }`}
            >
              <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl sm:shadow-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
                <div className="flex flex-col lg:flex-row">
                  {/* Image */}
                  <motion.div
                    className="w-full lg:w-1/2"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-52 sm:h-64 md:h-72 lg:h-full object-cover"
                    />
                  </motion.div>

                  {/* Content */}
                  <div className="w-full lg:w-1/2 p-6 sm:p-8 lg:p-12 flex flex-col justify-center text-center lg:text-left">
                    <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-gray-900 dark:text-white">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-5 sm:mb-6 text-base sm:text-lg leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech stack */}
                    <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-6 sm:mb-8">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-white/80 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm border border-gray-200 dark:border-gray-600"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4">
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.liveUrl}
                        className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-all duration-200 font-medium text-sm sm:text-base"
                      >
                        <ExternalLink size={16} className="sm:size-18" />
                        View Live
                      </motion.a>
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.githubUrl}
                        className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-primary-500 hover:text-primary-500 rounded-lg transition-all duration-200 font-medium text-sm sm:text-base"
                      >
                        <Github size={16} className="sm:size-18" />
                        Code
                      </motion.a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
