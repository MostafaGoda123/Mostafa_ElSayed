import React from 'react'
import edu from '../images/kindpng_2158189.png'
import { languagesDone as skills } from '../Data/EducationData'

const EduSkills = () => {

   // let skills = [
      // {name:'Html'          , percentage:'100%' },
      // {name:'CSS'           , percentage:'90%' },
      // {name:'Bootstrap'     , percentage:'75%' },
      // {name:'JavaScript'    , percentage:'90%' },
      // {name:'React'         , percentage:'85%' },
      // {name:'Tailwind'      , percentage:'75%' },
      // {name:'Material Ui'   , percentage:'60%' },
   // ]

   return (
      <section className="container flex flex-col md:flex-row gap-5 md:gap-0">
         <div className="flex-1">
            <img src={edu} alt="" className='w-full' />
         </div>
         <div className="flex-1 flex flex-col justify-center items-center gap-4 md:gap-8">
            <h1 className='font-bold text-3xl text-fuchsia-800'>Education</h1>
            <h2 className='font-semibold text-xl md:text-3xl'>Coding Statistics and Certifications</h2>
            <ul className='flex flex-col gap-2 md:gap-4 w-full text-xl font-semibold'>
               {skills.map((skill) => (
               <li key={skill.name} className='flex items-center gap-3'>
                  <p className='text-center w-24 md:w-28'>{skill.name}</p>
                  <div className='flex-1 w-full h-8 rounded-md bg-fuchsia-800 bg-opacity-75'><div className={`bg-fuchsia-800 rounded-md h-full`} style={{width:`${skill.percentDone}%`}}></div></div>
               </li>
               ))}
            </ul>
         </div>
      </section>
   )
}

export default EduSkills
