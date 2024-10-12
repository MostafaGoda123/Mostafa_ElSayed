import React from 'react'
import EduSkills from './EduSkills'
import EduDegree from './EduDegree'


const Education = () => {

  return (
    <main id='education' className='flex flex-col gap-8'>
      <EduSkills />
      <EduDegree />
    </main>
  )
}

export default Education
