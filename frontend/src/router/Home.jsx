import React, { useEffect } from 'react'
import Nav from '../components/Nav'
import { TypeAnimation } from 'react-type-animation';
import img from "../assets/own.webp"
import { MdArrowRight } from "react-icons/md";
import About from './About';
import Skill from './Skill';
import Projects from './Projects';
import Contact from './Contact';
import Footer from '../components/Footer';
import 'aos/dist/aos.css';
import AOS from 'aos';

function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset:120,
      once:false  
    });
  }, []);
  return (
    <>
<Nav/>
<div className='w-full h-screen  flex flex-col  items-center justify-center  scroll-smooth relative overflow-y-hidden  bg-darkblue    pt-10  md:flex-row  md:gap-x-40  md:items-start md:pb-56 md:h-full lg:flex-row  lg:justify-center lg:gap-x-[36rem] lg:h-full lg:pb-40' id='home' >
<div className='w-80  flex flex-col  justify-center pl-10  md:mt-52 lg:mb-[8rem] ' data-aos='fade-up'>
    <div className=' h-8 text-xs  lg:text-lg w-max '>
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'I am Developer',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'I am Designer',
        1000,
        'I am  Creator',
        1000,
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '3em', display: 'inline-block', fontWeight:'bold', color:'white' }}
      repeat={Infinity}
    />
    </div>
    <h1 className='text-3xl text-white lg:mt-5 font-Nunito'>From Nepal</h1>
    <div className='flex items-center'>
   <a href='#about'> <button className=' bg-orange text-white  mt-5  w-24 py-1 font-Nunito  tracking-wide text-lg border-2 border-white hover:border-black'>more info</button></a>
    <MdArrowRight  className='text-white text-3xl mt-5 '/>
    </div>
    
    </div>
    <img src={img} className=" w-56 h-60 rounded-oval animate-animate border-4 border-white  md: mt-40 md:w-52 md:h-56 lg:mb-20 lg:w-72 lg:h-72"alt='no image' data-aos='fade-up'/>
</div>
<About/>
<Skill/>
<Projects/>
<Contact/>
<Footer/>
    </>
    

  )
}

export default Home