import React, { useEffect } from 'react'
import 'aos/dist/aos.css';
import AOS from 'aos';
function ContactCard({icon,detail}) {
     useEffect(() => {
              AOS.init({
                duration: 1000,
                offset:120,
                once:false  
              });
            }, []);
  return (
    <div className='w-60 h-60 border-2 border-white flex flex-col items-center  justify-center gap-y-5 lg:w-80 lg:h-80 ' data-aos='fade-up'>
    <div className='text-3xl  text-orange lg:text-[4rem]'> {icon}</div>
        <h1 className='text-lg text-wrap text-white font-Nunito lg:text-2xl'>{detail}</h1>
    </div>
  )
}

export default ContactCard