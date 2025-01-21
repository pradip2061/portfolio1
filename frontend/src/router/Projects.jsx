import React, { useEffect } from 'react'
import Pcard from '../components/Pcard'
import img from '../assets/project.jpg'
import 'aos/dist/aos.css';
import AOS from 'aos';
function Projects() {
  const language=['React','MongoDb','Next.js','express.js']
   useEffect(() => {
          AOS.init({
            duration: 1000,
            offset:120,
            once:false  
          });
        }, []);
  return (
    <div className='bg-darkblue h-screen flex flex-col items-center gap-y-10 border-2 border-t-orange border-l-0 border-r-0 md:h-full md:pb-20' id='project'>
    <h1 className='text-3xl underline font-Nunito text-white mt-20 lg:mt-20' data-aos='fade-up'>Projects</h1>
      <Pcard projectname="MovieHub" projectdetail="this is movie website from where you can search,add movie in just seconds." language={language} code="http://github.com" project={img}/>
    </div>
  )
}

export default Projects