import React, { useEffect } from 'react'
import ContactCard from '../components/ContactCard'
import { IoLocationOutline } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";
import { FiPhoneCall } from "react-icons/fi";
import 'aos/dist/aos.css';
import AOS from 'aos';
function Contact() {
    useEffect(() => {
            AOS.init({
              duration: 1000,
              offset:120,
              once:false  
            });
          }, []);
  return (
    <div className='w-full  bg-darkblue border-2 border-t-white flex flex-col p-10 gap-y-10 items-center border-l-0 border-r-0   lg:justify-center lg:gap-y-28' id='contact'>
    <h1 className='text-3xl text-white font-Nunito underline mt-10'  data-aos='fade-up'>Contact Me</h1>
        <div className='  flex flex-col  gap-y-10  md:flex-row md:gap-x-5 lg:flex lg:flex-row lg:gap-x-10'>
        <ContactCard icon={<IoLocationOutline/>} detail="Surkhet,Nepal" />
        <ContactCard icon={<TfiEmail/>} detail="singhhemanta46..."/>
        <ContactCard icon={<FiPhoneCall/>} detail="+91 7054645789"/>
        </div>
    </div>
  )
}

export default Contact