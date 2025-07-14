import React from 'react';
import { ExternalLink } from 'lucide-react';
import interview from '../assets/interview.png'
const  Projects =() => {
  const projects = [
    {
      title: 'Interview Website',
      description: 'A full-stack interview website with React, Node.js, and MongoDB',
      image: interview,
      technologies: ['React', 'Node.js', 'MongoDB'],
      link: 'https://interview-website-nine.vercel.app/',
    }
  ];

  return (
    <section id="project" className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Featured Projects</h2>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-5 lg:px-0">
          {projects.map(({ title, description, image, technologies, link }) => (
            <div key={title} className="bg-white rounded-lg shadow-md overflow-hidden hover:scale-105 transform transition duration-300">
              <img src={image} alt={title} className="w-full h-40 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>
                <p className="text-gray-700 mb-4 text-sm">{description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {technologies.map((tech) => (
                    <span key={tech} className="bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={link}
                  className="text-orange-500 font-medium hover:text-orange-600 inline-flex items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project <ExternalLink size={16} className="ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects