import React from 'react'
import imageWork from '../images/project-cover10.png'

const ProjectWorks = () => {
   return (
      <section className="container flex flex-col gap-5 md:flex-row items-center">
         <div className="flex-1">
            <img src={imageWork} alt="" className='w-full' />
         </div>
         <div className="flex-1 text-center">
            <h1 className="font-semibold text-3xl mb-5">My Recent <span className="text-fuchsia-800">Works</span></h1>
            <p className='text-xl font-semibold md:px-4 lg:px-8'>My works makes use of vast variety of latest technology tools. My best experience is to create React projects and deploy them to web applications using Github Pages.</p>
         </div>
      </section>
   )
}

export default ProjectWorks
