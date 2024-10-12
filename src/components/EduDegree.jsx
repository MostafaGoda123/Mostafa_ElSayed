import React from 'react'
import Engineering_Faculty from '../images/Engineering Faculty.png'

const EduDegree = () => {
   return (
      <section className="container">
         <h1 className='text-3xl font-semibold text-center mb-4'>Degree Pursuing</h1>
         <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
            <img src={Engineering_Faculty} alt="" className='rounded-full border-4 border-fuchsia-800 p-8 w-72' />
            <div className='flex-1 border-2 border-fuchsia-800 rounded-xl p-5 flex flex-col gap-5 font-semibold'>
               <h1 className='text-3xl text-fuchsia-800'>Engineering College, Mansoura</h1>
               <h1 className='text-xl'>Department of Computer and Control System</h1>
               <ul className='flex flex-col gap-3 text-lg list-disc ms-5'>
                  <li>I joined my college in 2021.</li>
                  <li>I finished my first and second years with excellent grades, and my third with very good grades.</li>
               </ul>
            </div>
         </div>
      </section>
   )
}

export default EduDegree
