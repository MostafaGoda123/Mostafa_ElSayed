import React from 'react'
import ProjectWorks from './ProjectWorks'
import ProjectSkills from './ProjectSkills'
import ProjectsDone from './ProjectsDone'

const Projects = () => {
  return (
    <main id='projects' className='flex flex-col gap-8'>
      <ProjectWorks />
      <ProjectSkills />
      <ProjectsDone />
  </main>
  )
}

export default Projects
