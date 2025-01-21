import React, { useState,useRef,useEffect } from 'react'
import { RiMenu3Fill } from "react-icons/ri";
import{motion} from "framer-motion"
function Nav() {
  const[show,setShow]=useState(false)
  const shows=()=>{
     setShow(true)
  }
  const[link,setLink]=useState('home')
  useEffect(() => {
    if (show) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    // Cleanup to avoid side effects
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [show]);
const links=(link)=>{
setLink(link)
setShow(false)
}
 

  return (
    <div className='h-16 flex  gap-x-20  fixed border-b-2 border-white z-50 w-screen  justify-center items-center bg-transparent backdrop-blur md:gap-x-96 lg:gap-x-64 '>
    
    <div>
       <h1 className='text-2xl font-Nunito text-white lg:text-4xl'>pradip <span className='text-orange'>kumar</span></h1>
    </div>
    <div className='hidden lg:flex gap-20 text-lg font-bold'>
    <a className={`${link=='home'?'text-orange':'text-white'}  px-2 rounded-2xl hover:border  border-orange active:text-orange`} href='#home' onClick={()=>links('home')}>home</a>
            <a className={`${link=='project'?'text-orange':'text-white'}  px-2 rounded-2xl hover:border  border-orange  active:text-orange`} href='#project' onClick={()=>links('project')}> projects </a>
            <a className={`${link=='skill'?'text-orange':'text-white'} px-2 rounded-2xl hover:border  border-orange  active:text-orange`} href='#skill' onClick={()=>links('skill')}>skills</a>
            <a className={`${link=='contact'?'text-orange':'text-white'} px-2 rounded-2xl hover:border  border-orange active:text-orange`} href='#contact' onClick={()=>links('contact')}>contact</a>
    </div>

   <div className='flex items-center gap-x-4'>
   <a href='#contact'><button className='font-Nunito text-lg border-2  border-orange text-white p-1 hover:bg-orange mt-2 '>Hire Me!</button></a>
        <div className=' lg:hidden hover:border rounded-full p-1 '>
        <RiMenu3Fill className='text-2xl text-white' onClick={shows}/>
        </div>
    </div>
    { show?
      <div className=' absolute w-screen h-[50rem] z-50   mt-[44rem]  bg-transparent backdrop-blur'>
  <motion.div  animate={{ width:show?"250px":"0px" ,transition:{
    duration:4,
    type:"spring",
    damping:9
  }}}
    className='absolute  h-screen gap-8 text-lg font-bold  tracking-wide flex flex-col    items-center p-10 bg-darkblue shadow-sm shadow-white ' >
            <h1 className='text-white text-lg mr-48 mb-10' onClick={()=>setShow(false)}>X</h1>
            <a className={`${link=='home'?'text-orange':'text-white'}  px-2 rounded-2xl hover:border  border-orange active:text-orange`} href='#home' onClick={()=>links('home')}>home</a>
            <a className={`${link=='project'?'text-orange':'text-white'} px-2 rounded-2xl hover:border  border-orange  active:text-orange`} href='#project' onClick={()=>links('project')}> projects </a>
            <a className={`${link=='skill'?'text-orange':'text-white'} px-2 rounded-2xl hover:border  border-orange  active:text-orange`} href='#skill' onClick={()=>links('skill')}>skills</a>
            <a className={`${link=='contact'?'text-orange':'text-white'} px-2 rounded-2xl hover:border  border-orange  active:text-orange`} href='#contact' onClick={()=>links('contact')}>contact</a>
        </motion.div>
        </div>:null
      }
    </div>
  )
}

export default Nav