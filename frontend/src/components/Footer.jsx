import React from 'react'
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
function Footer() {
  return (
    <div className='bg-darkpurple h-52 flex flex-col items-center  gap-5 lg:gap-1 lg:h-40 lg:justify-center'>
        <div className='flex gap-x-10 mt-3'>
           <a href="https://www.facebook.com/pardip.singh.35728466"><FaFacebook className='text-3xl text-fadedark'/></a> 
           <a href="https://www.linkedin.com/in/pradip-kumar-singh-74a076303/"><FaLinkedin className='text-3xl text-fadedark'/></a> 
           <a href="https://github.com/pradip2061"> <FaGithub className='text-3xl text-fadedark'/></a> 
        </div>
        <h1 className='text-lg font-Nunito  text-fadedark lg:p-5'>@2024 pradip kumar.All rights reserved</h1>
    </div>
  )
}

export default Footer