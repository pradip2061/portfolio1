import React, { useEffect } from 'react'
import{motion} from 'framer-motion'
import 'aos/dist/aos.css';
import AOS from 'aos';
function Skill() {
  useEffect(() => {
        AOS.init({
          duration: 1000,
          offset:120,
          once:false  
        });
      }, []);
  return (
    <div className='w-full bg-darkblue flex flex-col gap-y-10  items-center p-10  md:pt-20' id='skill'>
        <h1 className='text-3xl text-white underline font-Nunito mt-10 lg:mt-20' data-aos='fade-up'>SKILLS</h1>
        <div className='flex flex-col gap-y-12  md:flex-row md:flex-wrap md:justify-center md:gap-x-10 md:gap-y-10  lg:flex lg:flex-row lg:flex-wrap lg:flex-grow-0 lg:gap-20 lg:ml-48 lg:justify-start '>
            <div className='flex flex-col gap-y-4' data-aos='fade-up'>
                <div className='w-60 h-40 border-2 border-white flex flex-col items-center justify-center gap-y-5 lg:w-80 lg:h-60'>
                    <h1 className='border-4 border-white text-orange p-2 lg:p-4;'>84%</h1>
                    <h1 className='text-xl text-white lg:text-3xl'>web development</h1>
                </div>
                <div className="w-full bg-orange rounded-full h-2 mx-auto max-w-xl">
        <motion.div
          className="bg-white h-2 rounded-full"
          initial={{ width: "0%" }} 
          whileInView={{ width: "84%" }} 
          transition={{ duration: 1.5, ease: "easeInOut" }} 
          viewport={{ once: false, amount: 0.5 }} 
        ></motion.div>
      </div>
            </div>

            <div className='flex flex-col gap-y-4' data-aos='fade-up'>
            <div className='w-60 h-40 border-2 border-white flex flex-col items-center justify-center gap-y-5 lg:w-80 lg:h-60'>
            <h1 className='border-4 border-white text-orange p-2  lg:p-4'>72%</h1>
            <h1 className='text-xl text-white lg:text-3xl'>App Development</h1>
            </div>
            <div className="w-full bg-orange rounded-full h-2 mx-auto max-w-xl">
        <motion.div
          className="bg-white h-2 rounded-full"
          initial={{ width: "0%" }} 
          whileInView={{ width: "72%" }} 
          transition={{ duration: 1.5, ease: "easeInOut" }} 
          viewport={{ once: false, amount: 0.5 }} 
        ></motion.div>
      </div>
            </div>

            <div className='flex flex-col gap-y-4' data-aos='fade-up'>
            <div className='w-60 h-40 border-2 border-white flex flex-col items-center justify-center gap-y-5 lg:w-80 lg:h-60'>
            <h1 className='border-4 border-white text-orange p-2  lg:p-4'>70%</h1>
            <h1 className='text-xl text-white lg:text-3xl'>UI/UX Design</h1>
            </div>
            <div className="w-full bg-orange rounded-full h-2 mx-auto max-w-xl">
        <motion.div
          className="bg-white h-2 rounded-full"
          initial={{ width: "0%" }} 
          whileInView={{ width: "70%" }} 
          transition={{ duration: 1.5, ease: "easeInOut" }} 
          viewport={{ once: false, amount: 0.5 }} 
        ></motion.div>
      </div>
            </div>

            <div className='flex flex-col gap-y-4' data-aos='fade-up'>
            <div className='w-60 h-40 border-2 border-white flex flex-col items-center justify-center gap-y-5 lg:w-80 lg:h-60'>
            <h1 className='border-4 border-white text-orange p-2  lg:p-4' >75%</h1>
            <h1 className='text-xl text-white lg:text-3xl'>Data Analytics</h1>
            </div>
            <div className="w-full bg-orange rounded-full h-2 mx-auto max-w-xl">
        <motion.div
          className="bg-white h-2 rounded-full"
          initial={{ width: "0%" }} 
          whileInView={{ width: "75%" }} 
          transition={{ duration: 1.5, ease: "easeInOut" }} 
          viewport={{ once: false, amount: 0.5 }} 
        ></motion.div>
      </div>
            </div>
        </div>
    </div>
  )
}

export default Skill