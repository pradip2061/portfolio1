import React from 'react';
import { Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-orange">Get In Touch</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            I’m currently open to new opportunities and collaborations. Feel free to reach out!
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
                <Mail size={24} className="text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Email</h3>
                <p className="text-gray-300">ps6000146@email.com</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
                <Phone size={24} className="text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Phone</h3>
                <p className="text-gray-300">7054645789</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
                <MapPin size={24} className="text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Location</h3>
                <p className="text-gray-300">Surkhet,Nepal</p>
              </div>
            </div>
            <div className="flex space-x-4 pt-4">
              <a
                href="https://github.com/pradip2061"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-orange-500 transition-colors"
              >
                <Github size={24} className="text-white" />
              </a>
              <a
                href="https://www.linkedin.com/in/pradip-kumar-singh-74a076303/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-orange-500 transition-colors"
              >
                <Linkedin size={24} className="text-white" />
              </a>
            </div>
          </div>

          <div className="bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-700 flex flex-col justify-center items-center text-center">
            <p className="text-gray-300 text-lg mb-4">
              Feel free to reach out via email or connect with me on social media.  
              I’m happy to chat about projects, collaborations, or just say hello!
            </p>
            <Mail size={48} className="text-orange-500 mb-2" color='orange' />
            <a
              href="mailto:john.smith@email.com"
              className="text-white font-semibold hover:underline"
            >
              ps6000146@email.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Contact
