/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import Desha from '../images/Mostafa.png'
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

const GetAboutMe = () => {
   return (
      <section className="container flex items-center gap-8 flex-col md:flex-row">
         <div className="image flex-1 rounded-full flex justify-center">
            <img src={Desha} alt="" className='w-full max-w-96 border-4 border-fuchsia-800 rounded-full'/>
         </div>
         <div className="flex-1 flex flex-col items-center gap-5 md:gap-8">
            <h3 className='font-semibold text-5xl text-fuchsia-800'>About Me</h3>
            <p className='text-xl text-neutral-700 text-center'>Hi there! I’m Mostafa ElSayed, a Front-End Developer dedicated to building beautiful and functional web experiences.
            With a strong background in JavaScript frameworks (React) and a keen eye for design, I specialize in turning creative ideas into high-quality code.</p>
            <div className="icons flex gap-5 text-4xl">
               <a target='_blank' href="https://github.com/MostafaGoda123"><FaGithub className='cursor-pointer duration-300 hover:text-fuchsia-800 hover:scale-110' /></a>
               <a target='_blank' href="https://www.linkedin.com/in/--mostafa-el-sayed--/"><FaLinkedin className='cursor-pointer duration-300 hover:text-fuchsia-800 hover:scale-110' /></a>
               <a target='_blank' href="https://www.x.com"><FaTwitter className='cursor-pointer duration-300 hover:text-fuchsia-800 hover:scale-110' /></a>
               <a target='_blank' href="https://www.instagram.com"><FaInstagram className='cursor-pointer duration-300 hover:text-fuchsia-800 hover:scale-110' /></a>
               <a target='_blank' href="https://mostafagada111@gmail.com"><MdEmail className='cursor-pointer duration-300 hover:text-fuchsia-800 hover:scale-110' /></a>
            </div>
            <a className='block w-fit px-4 py-2 bg-fuchsia-800 rounded-xl border-[3px] border-fuchsia-800 text-white text-xl font-semibold ms-auto me-auto duration-300 hover:bg-transparent hover:text-fuchsia-800' href="https://github.com/MostafaGoda123/Mostafa_CV/blob/main/Mostafa_CV.pdf" target='_blank'>See My Resume</a>
         </div>
      </section>
   )
}

export default GetAboutMe
