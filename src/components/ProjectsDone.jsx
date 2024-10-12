/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import ProjectsData from '../Data/ProjectsData'
import { FaGithub } from 'react-icons/fa'

const ProjectsDone = () => {

   let projects = ProjectsData.DUMMY_PROJECTS

   return (
      <section className="container">
         <h1 className="text-center text-5xl font-semibold mb-5">My Projects</h1>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects.map((project) => (
               <div key={project.projectTitle} className="duration-300 hover:scale-105 p-4 rounded-xl border-2 border-fuchsia-800">
                  <h3 className='font-semibold text-xl text-fuchsia-800'>{project.projectTitle}</h3>
                  {/* <p className="text-lg my-4 h-20">{project.description.split(" ").slice(0,20).join(" ")}...</p> */}
                  <p className="text-lg my-4 h-20">{project.description}</p>
                  <div className="flex justify-between items-center">
                     <a target='_blank' href={project.sourceLink} className="text-3xl duration-300 hover:scale-110" rel="noreferrer"><FaGithub /></a>
                     <a target='_blank' href={project.liveLink} className="text-lg font-bold bg-fuchsia-800 text-white px-2 rounded-lg duration-300 hover:scale-110" rel="noreferrer">Live</a>
                  </div>
               </div>
            ))}
         </div>
         <a className='block w-fit px-4 py-2 bg-fuchsia-800 rounded-xl border-[3px] border-fuchsia-800 text-white text-xl font-semibold ms-auto me-auto mt-5 duration-300 hover:bg-transparent hover:text-fuchsia-800' href="https://github.com/MostafaGoda123?tab=repositories" target='_blank'>More Project</a>
      </section>
   )
}

export default ProjectsDone
