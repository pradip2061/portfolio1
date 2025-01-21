import React, { useEffect } from 'react'
import 'aos/dist/aos.css';
import AOS from 'aos';
function Pcard({language,projectname,projectdetail,code,project}) {
      useEffect(() => {
              AOS.init({
                duration: 1000,
                offset:120,
                once:false  
              });
            }, []);
  return (
    <div className=' w-60 border-2 border-white flex flex-col items-center gap-y-5 p-5 md:flex-row md:w-[40rem] md:gap-x-10 lg:flex lg:flex-row lg:w-[54rem] lg:gap-x-20'  data-aos='fade-up'>
    <div className='w-40 h-40 border-2 border-white overflow-hidden md:w-80 md:h-60 lg:w-80 lg:h-80 '>
    <img src={project} alt='no image'/>
    </div>
    <div className='flex flex-col items-center  lg:w-96 lg:h-60 lg:justify-center'>
        <h1 className=' text-3xl font-Nunito text-orange lg:text-[3rem]'>{projectname}</h1>
        <h1 className='text-white text-lg font-Nunito ml-5 lg:text-2xl lg:mt-3'>{projectdetail}</h1>
        <div className='flex flex-wrap gap-x-3  mt-5  gap-y-1 pl-5 lg:gap-y-2'>
        {
            language.map((item,index)=>
                <div className='border-2 border-orange text-white p-1 hover:bg-orange  lg:p-3 lg:text-lg' key={index}>{item}</div>
            )
        }
        <a href={code} className='text-orange text-lg font-Nunito border-2 border-white h-7 p-1 flex items-center hover:bg-white lg:p-3 lg:text-lg'>code</a>
        </div>
        
    </div>

    </div>
  )
}

export default Pcard