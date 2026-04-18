import React, { useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import "aos/dist/aos.css";
import AOS from "aos";
import { ArrowRight, Download, Sparkles } from "lucide-react";
import about from "../assets/about.jpg";

function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 120,
      once: false,
    });
  }, []);

  return (
    <>
      {/* Hero / Home Section */}
      <div
        id="home"
        className="
          w-full min-h-screen
          scroll-smooth
          relative
          overflow-hidden
          bg-gradient-to-br
          from-gray-900
          via-gray-800
          to-gray-900
          lg:pt-10
          md:pt-10
        "
      >
        {/* Background Pattern */}
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)",
            backgroundSize: "20px 20px",
          }}
        ></div>

        {/* Freelance Badge */}
        <div
          className="
            inline-flex
            items-center
            px-4
            py-2
            bg-primary-900/30
            rounded-full
            text-primary-300
            text-sm
            font-medium
            mt-6
            relative
            z-10
            left-1/2
            -translate-x-1/2
            lg:left-0
            lg:translate-x-0
            lg:ml-40
          "
        >
          <Sparkles size={16} className="mr-2" />
          Available for freelance work
        </div>

        {/* Main Content */}
        <div
          className="
            flex
            flex-col-reverse
            lg:flex-row
            justify-center
            items-center
            text-center
            lg:text-left
            gap-12
            lg:gap-60
            pt-12
            px-6
            md:pt-4
            md:px-10
            lg:px-40
            lg:pt-20
            relative
            z-10
          "
        >
          {/* Left Content */}
          <div
            className="
              max-w-xl
              flex
              flex-col
              justify-center
              items-center
              lg:items-start
            "
            data-aos="fade-up"
          >
            {/* Type Animation */}
            <div className="font-bold text-2xl md:text-4xl lg:text-[3rem] text-white pb-6">
              <TypeAnimation
                sequence={[
                  "I am a MERN Developer",
                  2000,
                  "I am a UI/UX Designer",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </div>

            {/* Subheading */}
            <h1 className="text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-2xl">
              A passionate Full-Stack Developer crafting beautiful and
              functional web experiences that solve real-world problems
              through code.
            </h1>

            {/* Buttons */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-10">
              <button
                className="
                  group
                  px-4
                  lg:px-6
                  py-3
                  bg-orange-500
                  text-white
                  rounded-xl
                  hover:bg-orange-600
                  hover:shadow-lg
                  hover:-translate-y-1
                  transition-all
                  duration-300
                  flex
                  items-center
                  gap-2
                  font-medium
                "
              >
                More About Me

                <ArrowRight
                  size={20}
                  className="
                    group-hover:translate-x-1
                    transition-transform
                    duration-200
                  "
                />
              </button>

              <button
                className="
                  px-4
                  lg:px-6
                  py-3
                  border-2
                  border-gray-600
                  text-gray-300
                  hover:border-orange-500
                  hover:text-orange-500
                  hover:shadow-lg
                  hover:-translate-y-1
                  rounded-xl
                  transition-all
                  duration-300
                  flex
                  items-center
                  gap-2
                  font-medium
                "
              >
                <Download size={20} />
                Download CV
              </button>
            </div>
          </div>

          {/* Right Image Section */}
          <div
            className="
              relative
              w-[220px]
              h-[220px]
              lg:w-[280px]
              lg:h-[280px]
              flex
              items-center
              justify-center
            "
          >
            {/* Rotating Ring */}
            <div
              className="
                absolute
                w-full
                h-full
                rounded-full
                border-4
                border-transparent
                border-t-orange-400
                border-b-orange-400
                animate-spin-slow
              "
            ></div>

            {/* Profile Image */}
            <img
              src={about}
              alt="profile"
              className="
                w-44
                h-44
                lg:w-64
                lg:h-64
                object-cover
                rounded-full
                relative
                z-10
              "
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;