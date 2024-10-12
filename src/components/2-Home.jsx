import React from 'react'
import homeLogo from '../images/logo.png'
import logo from '../images/Logo0.png'
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

const Home = () => {
  return (
    <main id='home' className='h-[100vh] pt-[14vh] pb-10'>
      <div className="container h-full flex md:items-center flex-col-reverse md:flex-row">
        <article className='mainColor flex-1 flex flex-col gap-4 md:gap-8 font-semibold text-3xl'>
          <p>Hi There !</p>
          <p>I'm <span className='text-fuchsia-800'>Mostafa ElSayed</span></p>
          <img src={logo} alt="" className='ms-60 -mt-4 -mb-2 w-20' />
          <p>I am a <span className="text-fuchsia-800">FrontEnd - React</span></p>
          <p className='text-xl'>Feel free to <span className="text-fuchsia-800">connect</span> with me.</p>
          <div className="icons flex gap-5 text-4xl">
            <a target='_blank' href="https://github.com/MostafaGoda123"><FaGithub className='cursor-pointer duration-300 hover:text-fuchsia-800 hover:scale-110' /></a>
            <a target='_blank' href="https://www.linkedin.com/in/--mostafa-el-sayed--/"><FaLinkedin className='cursor-pointer duration-300 hover:text-fuchsia-800 hover:scale-110' /></a>
            <a target='_blank' href="https://www.x.com"><FaTwitter className='cursor-pointer duration-300 hover:text-fuchsia-800 hover:scale-110' /></a>
            <a target='_blank' href="https://www.instagram.com"><FaInstagram className='cursor-pointer duration-300 hover:text-fuchsia-800 hover:scale-110' /></a>
            <a target='_blank' href="https://mostafagada111@gmail.com"><MdEmail className='cursor-pointer duration-300 hover:text-fuchsia-800 hover:scale-110' /></a>
          </div>
        </article>
        <div className="image flex-1">
          <img src={homeLogo} alt="" className='w-full'/>
        </div>
      </div>
    </main>
  )
}

export default Home
