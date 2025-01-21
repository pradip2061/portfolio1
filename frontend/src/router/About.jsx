import React, { useEffect } from 'react'
import img from '../assets/about.jpg'
import 'aos/dist/aos.css';
import AOS from 'aos';
function About() {
  useEffect(() => {
      AOS.init({
        duration: 1000,
        offset:120,
        once:false 
      });
    }, []);
  return (
    <div className='bg-darkblue flex flex-col border-2 border-t-white w-full h-screen items-center gap-y-10 md:h-full md:pb-40 lg:gap-y-1 overflow-y-hidden  overflow-x-hidden lg:h-screeb lg:pb-20' id='about'>
        <h1 className='text-3xl text-white font-Nunito underline mt-16'>About Me</h1>
        <div className='flex flex-col  items-center md:flex-row  md:ml-40 lg:flex  lg:flex-row lg:mt-20 lg:gap-x-[8rem]  '>
            <div className='lg:ml-[45rem]' data-aos='fade-up'>
                <img src={img} className='w-60 h-60 border-2 border-white  md:w-72 lg:w-96 lg:h-72'/>
            </div>
            <div className='  w-screen flex  items-center gap-x-10  px-10 ' data-aos='fade-up'>
            <div className=" flex  justify-center items-center relative lg:mb-28">
  <div className="absolute inset-y-0 left-1/2 w-0.5 h-60 bg-orange lg:h-80  "></div>
  <div className="flex flex-col space-y-16 relative mt-5 lg:mt-10 lg:space-y-26 ">
    <div className="relative">
      <div className="h-4 w-4 rounded-full bg-white border-2 border-orange"></div>
      <div className="absolute left-6 transform -translate-x-1/2 top-1/2 w-5 h-0.5 bg-orange"></div>
    </div>
    <div className="relative">
      <div className="h-4 w-4 rounded-full bg-white border-2 border-orange"></div>
      <div className="absolute left-6 transform -translate-x-1/2 top-1/2 w-5 h-0.5 bg-orange"></div>
    </div>
    <div className="relative">
      <div className="h-4 w-4 rounded-full bg-white border-2 border-orange"></div>
      <div className="absolute left-6 transform -translate-x-1/2 top-1/2 w-5 h-0.5 bg-orange"></div>
    </div>
  </div>
</div>
<div className='text-white flex flex-col lg:gap-y-8  lg:mb-28'>
<h1 className='text-2xl font-Nunito mt-16 lg:text-4xl '>A Full stack developer</h1>
<h1 className=' text-lg font-Nunito mt-5 lg:text-2xl  '> My name is <span className='text-lg font-Nunito text-orange lg:text-2xl'>Pradip Kumar Singh</span> from nepal.
</h1>
<div>
<h1 className='text-lg font-Nunito mt-9 lg:text-2xl '>Graduate in BTECHCSE from <span className='text-orange'>Quantum University</span></h1>
<h1 className='text-lg font-Nunito lg:text-2xl '>Roorkee Dehradhun,India</h1>
</div>

            </div>
            </div>
        </div>
        
    </div>
  )
}

export default About