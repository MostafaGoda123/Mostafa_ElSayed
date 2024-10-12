import { useFormik } from 'formik'
import React from 'react'
import { FaLocationDot } from 'react-icons/fa6'
import { IoCall } from 'react-icons/io5'
import { SiGmail } from 'react-icons/si'

const GetLeaveMessage = () => {

   let formik = useFormik({
      initialValues:{
         firstName:"",
         lastName:"",
         email:"",
         phone:"",
         message:"",
      },validate:handleValidation
      ,onSubmit:handleSubmit
   })
   function handleValidation(values) {
      let errors = {}
         if (!values.firstName) errors.firstName = "error"
         if (!values.lastName) errors.lastName = "error"
         if (!values.email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) errors.email = "error"
         if (values.phone.split("").length !== 11) errors.phone = "error"
         if (values.message.split(" ").length < 10) errors.message = "error"
      return errors
   }
   function handleSubmit() {
      window.location.reload();
   }

   return (
      <section className="container border-2 border-fuchsia-800 rounded-xl flex flex-col md:flex-row">
         <div className="flex-1 p-5 md:p-8">
            <h2 className="text-3xl font-semibold">Get In Touch</h2>
            <p className="my-5 text-xl text-neutral-700">I would love to hear from you, so whether you need a quote, have a question or just want to say hello, please feel free to drop me a line.</p>
            <ul className="flex flex-col gap-5 text-lg md:text-2xl">
               <li className='flex items-center'><FaLocationDot className='p-3 bg-fuchsia-800 rounded-full text-white text-5xl me-4' />Egypt, Mansoura</li>
               <li className='flex items-center'><SiGmail className='p-3 bg-fuchsia-800 rounded-full text-white text-5xl me-4' />mostafagoda390@gmail.com</li>
               <li className='flex items-center'><IoCall className='p-3 bg-fuchsia-800 rounded-full text-white text-5xl me-4' />+20 1552153227</li>
            </ul>
         </div>
         <div className="flex-1 p-5 md:p-8">
            <h2 className="text-3xl font-semibold mb-5">Leave A Message</h2>
            <form onSubmit={formik.handleSubmit} className="grid grid-cols-1 lg:grid-cols-2 gap-5">
               <input onBlur={formik.handleBlur} onChange={formik.handleChange} type="text" className={`font-semibold text-xl bg-transparent border-2 border-neutral-400 p-2 rounded-md text-fuchsia-800 duration-300 focus:bg-fuchsia-800 focus:bg-opacity-10 outline-none ${formik.errors.firstName && formik.touched.firstName ? 'bg-red-300 bg-opacity-25' : '' }`} placeholder='first name' id='firstName' name='firstName' />
               <input onBlur={formik.handleBlur} onChange={formik.handleChange} type="text" className={`font-semibold text-xl bg-transparent border-2 border-neutral-400 p-2 rounded-md text-fuchsia-800 duration-300 focus:bg-fuchsia-800 focus:bg-opacity-10 outline-none ${formik.errors.lastName && formik.touched.lastName ? 'bg-red-300 bg-opacity-25' : '' }`} placeholder='Last name' id='lastName' name='lastName' />
               <input onBlur={formik.handleBlur} onChange={formik.handleChange} type="email" className={`font-semibold text-xl bg-transparent border-2 border-neutral-400 p-2 rounded-md text-fuchsia-800 duration-300 focus:bg-fuchsia-800 focus:bg-opacity-10 outline-none ${formik.errors.email && formik.touched.email ? 'bg-red-300 bg-opacity-25' : '' }`} placeholder='Email' id='email' name='email' />
               <input onBlur={formik.handleBlur} onChange={formik.handleChange} type="tel" className={`font-semibold text-xl bg-transparent border-2 border-neutral-400 p-2 rounded-md text-fuchsia-800 duration-300 focus:bg-fuchsia-800 focus:bg-opacity-10 outline-none ${formik.errors.phone && formik.touched.phone ? 'bg-red-300 bg-opacity-25' : '' }`} placeholder='Phone' id='phone' name='phone' />
               <textarea onBlur={formik.handleBlur} onChange={formik.handleChange} type="text" className={`font-semibold text-xl bg-transparent border-2 border-neutral-400 p-2 rounded-md text-fuchsia-800 duration-300 focus:bg-fuchsia-800 focus:bg-opacity-10 outline-none resize-none lg:col-span-2 h-32 ${formik.errors.message && formik.touched.message ? 'bg-red-300 bg-opacity-25' : '' }`} placeholder='Message' id='message' name='message' />
               <button type='submit' className={`px-4 py-2 bg-fuchsia-800 rounded-xl border-[3px] border-fuchsia-800 text-white text-xl font-semibold w-full duration-300 hover:bg-transparent hover:text-fuchsia-800 ${formik.isValid ? "" : "opacity-50 cursor-not-allowed"}`} disabled={!formik.isValid}>Send Message</button>
            </form>
         </div>
      </section>
   )
}

export default GetLeaveMessage
