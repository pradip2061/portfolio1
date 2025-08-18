import React, { useEffect } from 'react'
import Nav from '../components/Nav'
import { TypeAnimation } from 'react-type-animation';
import { MdArrowRight } from "react-icons/md";
import About from './About';
import Skill from './Skill';
import Projects from './Projects'
import Contact from './Contact';
import Footer from '../components/Footer';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { ArrowRight, Download, Sparkles } from 'lucide-react';
import about from '../assets/about.jpg'
function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 120,
      once: false  
    });
  }, []);

  return (
    <>

      {/* Hero / Home Section */}
      <div
        className="w-full h-screen  scroll-smooth relative overflow-y-hidden 
        bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 lg:pt-10 
        md:flex-row md:gap-x-40 md:items-start md:pb-56 md:h-full 
        lg:flex-row lg:justify-center lg:gap-x-[36rem] lg:h-full "
        id="home"
      >
        {/* Background pattern */}
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)",
            backgroundSize: "20px 20px",
          }}
        ></div>
        <div className="inline-flex items-center px-4 py-2 ml-20  bg-primary-900/30 rounded-full  text-primary-300 text-sm font-medium  mt-4 lg:mt-16 animate-fade-in lg:ml-40">
              <Sparkles size={16} className="mr-2" />
              Available for freelance work
            </div>
        {/* Hero content */}
        <div className='flex   flex-col-reverse lg:flex-row justify-between   pt-12 lg:px-40  lg:pt-20 items-center'>
   <div
  className="max-w-xl flex flex-col justify-center relative z-10 "
  data-aos="fade-up"
>
<div className="font-bold  text-2xl lg:text-[3rem] text-white w-max pb-6 ml-14 lg:ml-0">
  <TypeAnimation
    sequence={[
      'I am a MERN Developer',
      2000,
      'I am a UI/UX Designer',
      2000,
    ]}
    wrapper="span"
    speed={50}
    repeat={Infinity}
  />
</div>



  {/* Subheading */}
  <h1 className="lg:mt-5  text-lg lg:text-2xl text-gray-300 font-Nunito lg:text-white leading-relaxed  px-5 pl-10 lg:px-0">
    A passionate Full-Stack Developer crafting beautiful and functional web experiences that solve real-world problems through code.
  </h1>

  {/* Buttons */}
  <div className="flex flex-wrap gap-4 mt-10 ml-8 lg:ml-0">
    <button className="group  px-2 lg:px-6 py-3 bg-primary-500 text-white rounded-xl hover:bg-primary-600 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 font-medium">
      More About Me
      <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-200" />
    </button>
    <button className="  px-2 lg:px-6 py-3 border-2 border-gray-600 text-gray-300 hover:border-primary-500 hover:text-primary-500 hover:shadow-lg hover:-translate-y-1 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 font-medium">
      <Download size={20} />
      Download CV
    </button>
  </div>
</div>

<div className="relative w-[200px] h-[200px] lg:w-[280px] lg:h-[280px] flex items-center justify-center pb-10">
  {/* Rotating Ring */}
  <div className="absolute w-full h-full rounded-full border-4 border-transparent border-t-orange border-b-orange animate-spin-slow"></div>
  {/* Image */}
  <img
    src={about}
    alt="profile"
    className=" w-44 h-44 lg:w-64 lg:h-64 object-cover rounded-full relative z-10"
  />
<span className="absolute hidden lg:flex -bottom-10 text-lg font-semibold text-white animate-show-name z-20">
  I&apos;M <span className='text-orange'>PRADIP KUMAR SINGH</span>
</span>
</div>
        </div>
      </div>
    </>
  )
}

export default Home
