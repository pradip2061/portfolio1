import React, { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import { Code2, GraduationCap, MapPin } from "lucide-react";
import about from "../assets/own.webp";

function About() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 120,
      once: false,
    });
  }, []);

  return (
    <section
      id="about"
      className="py-16 sm:py-20 font-Nunito bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
    >
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12 sm:mb-16 text-white">
          About <span className="text-orange-400">Me</span>
        </h2>

        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          {/* Left - Image */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative w-64 h-80 sm:w-72 sm:h-96 lg:w-[28rem] lg:h-[34rem]">
              <img
                src={about}
                alt="Working at desk"
                className="rounded-2xl shadow-2xl w-full h-full object-cover"
              />
              <div className="absolute -bottom-5 -right-5 bg-orange-400 text-white p-4 sm:p-6 rounded-2xl">
                <Code2 size={28} className="sm:size-32" />
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="w-full lg:w-1/2">
            <div className="space-y-8">
              {/* Full Stack */}
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-1 bg-orange-400 h-12 sm:h-16 rounded-full mt-1"></div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 text-white ">
                    A Full Stack Developer
                  </h3>
                  <p className="text-gray-300 text-lg sm:text-base  font-mono">
                    Passionate about creating innovative web solutions and
                    bringing ideas to life through code.
                  </p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-1 bg-orange-400 h-12 sm:h-16 rounded-full mt-1"></div>
                <div>
                  <h4 className="text-lg sm:text-xl font-semibold mb-2 flex flex-wrap items-center gap-2 text-white">
                    <MapPin size={18} className="text-orange-400" />
                    My name is{" "}
                    <span className="text-orange-400 ">Pradip Kumar Singh</span>{" "}
                    from Nepal
                  </h4>
                  <p className="text-gray-300 text-lg sm:text-base  font-mono">
                    Based in the beautiful landscapes of Nepal, I bring a unique
                    perspective to web development.
                  </p>
                </div>
              </div>

              {/* Education */}
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-1 bg-orange-400 h-12 sm:h-16 rounded-full mt-1"></div>
                <div>
                  <h4 className="text-lg sm:text-xl mb-2 flex flex-wrap items-center gap-2 text-white font-bold ">
                    <GraduationCap size={18} className="text-orange-400" />
                    Graduate in BTECH CSE from{" "}
                    <span className="text-orange-400 ">Quantum University</span>
                  </h4>
                  <p className="text-gray-300 text-lg sm:text-base  font-mono">
                    Roorkee Dehradhun, India - Equipped with strong technical
                    foundations and modern development practices.
                  </p>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-8 mt-10 sm:mt-12 pt-8 sm:pt-12">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-orange-400 mb-1 sm:mb-2">
                  5+
                </div>
                <div className="text-gray-300 text-sm sm:text-base">
                  Projects
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-orange-400 mb-1 sm:mb-2">
                  2+
                </div>
                <div className="text-gray-300 text-sm sm:text-base">
                  Years Exp
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-orange-400 mb-1 sm:mb-2">
                  100%
                </div>
                <div className="text-gray-300 text-sm sm:text-base">
                  Satisfaction
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
