import React from 'react'
import { FaBootstrap, FaHtml5, FaJs, FaReact } from 'react-icons/fa'
import { IoLogoCss3 } from 'react-icons/io'
import { RiTailwindCssFill } from 'react-icons/ri'

const ProjectSkills = () => {

   const programmingSkills = [
      { icon:<FaHtml5 />           , name:"Html"         },
      { icon:<IoLogoCss3 />        , name:"CSS"          },
      { icon:<FaJs />              , name:"JavaScript"   },
      { icon:<FaReact />           , name:"React"        },
      { icon:<FaBootstrap />       , name:"Bootstrap"    },
      { icon:<RiTailwindCssFill /> , name:"TailwindCss"  },
   ]

   return (
      <section>
      <h1 className="text-center text-5xl font-semibold mb-5">Programming Skills</h1>
      <section className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
         {programmingSkills.map((skill)=>(
            <div key={skill.name} className="p-10 border-[3px] border-fuchsia-800 rounded-xl text-8xl hover:cursor-pointer flex justify-center items-center hover:relative">
               {skill.icon}
               <p className="absolute top-2 right-2 text-lg text-neutral-700">{skill.name}</p>
            </div>
         ))}
      </section>
      </section>
   )
}

export default ProjectSkills
