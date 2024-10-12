/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import logo from '../images/Logo0.png'
import { FaBars } from 'react-icons/fa'
import { IoClose } from 'react-icons/io5'
import { CiLight } from 'react-icons/ci'
import { MdDarkMode } from 'react-icons/md'

const Navbar = () => {

   const [allColors, setAllColors] = useState([
      {active : true  , name:"black"  , codeValue:'#000'},
      {active : false , name:"orange" , codeValue:'#EA580C'},
      {active : false , name:"green"  , codeValue:'#16A34A'},
      {active : false , name:"red"    , codeValue:'#DC2626'},
      {active : false , name:"blue"   , codeValue:'#2563EB'},
      {active : false , name:"gray"   , codeValue:'#4B5563'},
      {active : false , name:"pink"   , codeValue:'#DB2777'},
      {active : false , name:"yellow" , codeValue:'#CA8A04'},
   ])
   const [lightMode, setLightMode] = useState(true)
   const [openMenuColors, setOpenMenuColors] = useState(false)
   const [openMenu, setOpenMenu] = useState(false)
   const [allLinks, setAllLinks] = useState([ 
      {active: true , toHref:"home" , name:"Home"}, 
      {active: false , toHref:"education" , name:"Education"}, 
      {active: false , toHref:"projects" , name:"Projects"}, 
      {active: false , toHref:"getInTouch" , name:"Get In Touch"}, 
   ])
   function handleClickOnColors(nameActive) {
      let newAllColors = allColors ;
      newAllColors = newAllColors.map((color) => color.name === nameActive ? {active : true , name:color.name , codeValue:color.codeValue}:{active : false , name:color.name , codeValue:color.codeValue});
      newAllColors.map((color) => color.active? document.documentElement.style.setProperty('--mainColor', color.codeValue):"")
      setAllColors(newAllColors);
   }
   function handleClick(nameActive) {
      let newAllLinks = allLinks;
      newAllLinks = newAllLinks.map((link) => link.name === nameActive ? {active: true , toHref:link.toHref , name:link.name} : {active: false , toHref:link.toHref , name:link.name});
      setAllLinks(newAllLinks);
   }
   useEffect(() => {
      if ( lightMode ) {
         document.documentElement.style.setProperty('--mainBg', '#EDF9FE')
         let newAllColors = allColors;
         newAllColors[0].name = 'black';
         newAllColors[0].codeValue = '#000';
         newAllColors.map((color) => { 
            if (color.active) {
               document.documentElement.style.setProperty('--mainColor', color.codeValue)
               handleClickOnColors(color.name)
            } 
         })
         setAllColors(newAllColors);
      }else {
         document.documentElement.style.setProperty('--mainBg', '#001F3F')
         let newAllColors = allColors;
         newAllColors[0].name = 'white';
         newAllColors[0].codeValue = '#fff';
         newAllColors.map((color) =>{ 
            if (color.active) {
               document.documentElement.style.setProperty('--mainColor', color.codeValue)
               handleClickOnColors(color.name)
            } 
         })
         setAllColors(newAllColors);
      }
   }, [allColors,lightMode])

   return (
      <nav className={`fixed top-0 left-0 w-full h-[10vh] shadow-md z-50 ${lightMode?'bg-[#EDF9FE]':"bg-[#001F3F]"}`} >
         <div className="container h-full flex items-center justify-between">
            <img src={logo} alt="GWP" className='h-[6vh]' />
            <section className='flex items-center gap-5'>
               <ul className='hidden md:flex gap-5 text-xl font-semibold'>
                  {allLinks.map((link) => (
                     <li key={link.name}><a onClick={()=>handleClick(link.name)} className={`p-2 rounded-lg ${link.active && "border-b-[3px] border-fuchsia-800"} duration-300 hover:text-white hover:bg-fuchsia-800`} href={`#${link.toHref}`}>{link.name}</a></li>
                  ))}
               </ul>
               <div className="allColors">
                  {allColors.map((color,index) => color.active ? <div key={index} onClick={()=>setOpenMenuColors(true)} className={`w-8 h-8 rounded-full`} style={{background:color.codeValue}}></div>:"" )}
                  {openMenuColors && <div onClick={()=>setOpenMenuColors(false)} className='bg-black bg-opacity-25 w-[100vw] h-[90vh]  absolute top-[10vh] left-0'>
                     <ul className='absolute top-14 right-[10%] bg-neutral-200 flex gap-3 py-4 justify-center w-40 flex-wrap rounded-lg'>
                        {allColors.map((color) => <li key={color.name} onClick={()=>handleClickOnColors(color.name)} className={`${color.active?"opacity-100":"opacity-50"} cursor-pointer w-14 h-14 hover:opacity-100 duration-300 rounded-lg`} style={{background:color.codeValue}}></li>)}
                     </ul>
                     </div>}
               </div>
               <div onClick={()=>setLightMode(!lightMode)} className="dark-night w-8 h-8 bg-fuchsia-800 text-2xl rounded-md cursor-pointer flex justify-center items-center text-white">
                  {lightMode ? <CiLight /> : <MdDarkMode />}
               </div>
               <div className='md:hidden relative'>
                  {openMenu ? <IoClose onClick={()=>setOpenMenu(false)} className='cursor-pointer duration-300 text-3xl font-semibold text-fuchsia-800' /> : <FaBars onClick={()=>setOpenMenu(true)} className='cursor-pointer duration-300 text-3xl font-semibold text-fuchsia-800' />}
                  {openMenu && <ul onClick={()=>setOpenMenu(false)} className='flex flex-col bg-black bg-opacity-50 absolute top-10 right-0 gap-5 text-xl font-semibold py-5 px-3 rounded-xl w-40'>
                     {allLinks.map((link) => (
                        <li key={link.name}><a onClick={()=>handleClick(link.name)} className={`p-2 rounded-lg ${link.active && "border-b-[3px] border-fuchsia-800 text-white"} duration-300 hover:text-white hover:bg-fuchsia-800`} href={`#${link.toHref}`}>{link.name}</a></li>
                     ))}
                  </ul> }
               </div>
            </section>
         </div>
      </nav>
   )
}

export default Navbar
