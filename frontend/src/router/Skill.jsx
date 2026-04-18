import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code2,
  Award,
  Atom,
  ExternalLink,
  Github,
  ChevronDown,
} from "lucide-react";

// Project Images
import interviewwebsite from "../assets/interview.png";
import busticket from "../assets/bus ticket book.png";
import vidshare from "../assets/vidshare.png";
import blog from "../assets/blog.png";
import taskmanager from "../assets/task.png";
import anonic from "../assets/anonic.jpg"
import js from "../assets/js.jpg"

const tabs = [
  { id: "projects", label: "Projects", icon: Code2 },
  { id: "certificates", label: "Certificates", icon: Award },
  { id: "techstack", label: "Tech Stack", icon: Atom },
];

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
      "A video-sharing platform like TikTok/YouTube built with MERN and Cloudinary integration.",
    image: vidshare,
    technologies: ["MERN Stack", "Tailwind CSS", "Cloudinary"],
    liveUrl: "https://reel-website-6bav.vercel.app",
    githubUrl: "https://github.com/pradip2061/reel-website",
  },
  {
    id: 4,
    title: "Blog Platform",
    description:
      "A blogging platform with authentication, markdown editor, and comment system.",
    image: blog,
    technologies: ["MERN Stack", "Tailwind CSS", "JWT Auth"],
    liveUrl: "https://personal-blog-delta-ashen.vercel.app/",
    githubUrl: "https://github.com/pradip2061/PersonalBlog",
  },
  {
    id: 5,
    title: "Task Manager",
    description:
      "A collaborative task manager with weekly progress tracking and teamwork features.",
    image: taskmanager,
    technologies: ["MERN Stack", "Tailwind CSS", "Socket.io"],
    liveUrl: "https://task-manager-vert-sigma.vercel.app/",
    githubUrl: "https://github.com/pradip2061/Task-Manager",
  },
];

const certificatesData = [
  {
    id: 1,
    title: "Anonic",
    subtitle: "Mastering full stack Development",
    image:anonic,
  },

  {
    id: 2,
    title: "JavaScript Bootcamp",
    subtitle: "The Complete Js  Bootcamp",
    image:js
  }
];

const techStackData = [
  {
    name: "HTML",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "JavaScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "Tailwind CSS",
    logo: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
  },
  {
    name: "React",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Node JS",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Express JS",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  {
    name: "MongoDB",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "PostgreSQL",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  {
    name: "TypeScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    name: "Docker",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
];

export default function Skill() {
  const [activeTab, setActiveTab] = useState("projects");
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [showAllCertificates, setShowAllCertificates] = useState(false);

  // Listen from Navbar → open Tech Stack tab automatically
  useEffect(() => {
    const handleTabChange = (e) => {
      setActiveTab(e.detail);
    };

    window.addEventListener("changeSkillTab", handleTabChange);

    return () => {
      window.removeEventListener("changeSkillTab", handleTabChange);
    };
  }, []);

  return (
    <section
      id="skill"
      className="min-h-screen bg-[#0f172a] text-white px-6 py-16 font-sans"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            My <span className="text-orange-400">Portfolio</span>
          </h2>
          <p className="text-gray-400 mt-3 text-lg">
            Projects, Certificates & Tech Stack
          </p>
        </div>

        {/* Tabs */}
        <div className="grid grid-cols-3 gap-3 bg-[#1e293b] border border-gray-700 rounded-2xl p-2">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;

            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`rounded-xl py-4 flex flex-col items-center justify-center gap-2 transition duration-300 ${
                  isActive
                    ? "bg-orange-400 text-black font-semibold"
                    : "text-gray-300 hover:bg-gray-700"
                }`}
              >
                <Icon className="w-5 h-5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Content */}
        <div className="mt-10">
          <AnimatePresence mode="wait">

            {/* PROJECTS */}
            {activeTab === "projects" && (
              <motion.div
                key="projects"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {(showAllProjects ? projects : projects.slice(0, 3)).map(
                  (project) => (
                    <motion.div
                      key={project.id}
                      whileHover={{ y: -8, scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                      className="bg-[#1e293b] border border-gray-700 rounded-2xl overflow-hidden hover:border-orange-400 hover:shadow-2xl transition-all duration-300"
                    >
                      <motion.img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-52 object-cover"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.4 }}
                      />

                      <div className="p-6">
                        <h3 className="text-xl font-bold text-orange-400">
                          {project.title}
                        </h3>

                        <p className="text-gray-300 mt-3 text-sm leading-7">
                          {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mt-4">
                          {project.technologies.map((tech) => (
                            <motion.span
                              key={tech}
                              whileHover={{ scale: 1.08 }}
                              className="px-3 py-1 rounded-full text-xs border border-gray-600 text-gray-300"
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>

                        <div className="flex items-center justify-between mt-6">
                          <motion.a
                            whileHover={{ scale: 1.05 }}
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-orange-400 text-sm font-medium"
                          >
                            Live Demo <ExternalLink size={16} />
                          </motion.a>

                          <motion.a
                            whileHover={{ scale: 1.05 }}
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 border border-orange-400 rounded-lg text-sm hover:bg-orange-400 hover:text-black transition"
                          >
                            Code <Github size={16} />
                          </motion.a>
                        </div>
                      </div>
                    </motion.div>
                  )
                )}

                {projects.length > 3 && (
                  <button
                    onClick={() => setShowAllProjects(!showAllProjects)}
                    className="col-span-full mx-auto px-6 py-3 border border-orange-400 rounded-lg text-orange-400 flex items-center gap-2 hover:bg-orange-400 hover:text-black transition"
                  >
                    {showAllProjects ? "Show Less" : "Show More"}
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-300 ${
                        showAllProjects ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                )}
              </motion.div>
            )}

            {/* CERTIFICATES */}
            {activeTab === "certificates" && (
              <motion.div
                key="certificates"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {(showAllCertificates
                  ? certificatesData
                  : certificatesData.slice(0, 3)
                ).map((cert) => (
                  <motion.div
                    key={cert.id}
                    whileHover={{ y: -8, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className="bg-[#1e293b] border border-gray-700 rounded-2xl overflow-hidden hover:border-orange-400 hover:shadow-2xl transition-all duration-300"
                  >
                    <motion.img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-56 object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.4 }}
                    />

                    <div className="p-5">
                      <h3 className="text-lg font-bold text-orange-400">
                        {cert.title}
                      </h3>

                      <p className="text-gray-300 text-sm mt-2 leading-6">
                        {cert.subtitle}
                      </p>
                    </div>
                  </motion.div>
                ))}

                {certificatesData.length > 3 && (
                  <button
                    onClick={() =>
                      setShowAllCertificates(!showAllCertificates)
                    }
                    className="col-span-full mx-auto px-6 py-3 border border-orange-400 rounded-lg text-orange-400 flex items-center gap-2 hover:bg-orange-400 hover:text-black transition"
                  >
                    {showAllCertificates ? "Show Less" : "Show More"}
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-300 ${
                        showAllCertificates ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                )}
              </motion.div>
            )}

            {/* TECH STACK */}
            {activeTab === "techstack" && (
              <motion.div
                key="techstack"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="max-h-[500px] overflow-y-auto pr-2 custom-scrollbar"
              >
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
                  {techStackData.map((tech, index) => (
                    <motion.div
                      key={index}
                      whileHover={{
                        y: -8,
                        scale: 1.05,
                        rotate: 1,
                      }}
                      transition={{ duration: 0.3 }}
                      className="bg-[#1e293b] border border-gray-700 rounded-xl p-6 flex flex-col items-center justify-center gap-3 hover:border-orange-400 hover:shadow-xl transition-all duration-300"
                    >
                      <motion.img
                        src={tech.logo}
                        alt={tech.name}
                        className="w-14 h-14 object-contain"
                        whileHover={{ rotate: 8, scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                      />

                      <p className="text-sm font-bold text-white text-center">
                        {tech.name}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}