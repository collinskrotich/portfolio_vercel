import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import {HiOutlineChevronDoubleUp} from 'react-icons/hi'

const Contact = () => {
  return (
    <div id='contact' className='w-full lg:h-screen'>
        <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
            <p className='text-xl tracking-widest uppercase text-blue-500'>Contact</p>
            <h2 className='py-4'>Get In Touch</h2>
            <div className='grid lg:grid-cols-5 gap-8'>

    {/* left */}
    <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4' >
        <div className='lg:p-4 h-full'>
                <div>
                    <img className='rounded-xl hover:scale-105 ease-in duration-300' src = '/../professor.webp' alt='professor'/>
                </div>
                <div>
                    <h2 className='py-2'>Collins Rotich</h2>
                    <p>Full-Stack Developer</p>
                    <p>{"I am available for consultancy & freelance or full-time positions. Contact me and let's talk."}</p>
                </div>       
        <div>
                <p className='uppercase pt-8'>Connect With Me</p>
                <div className='flex items-center justify-between py-4'>

                        <a href='https://www.linkedin.com/in/collins-rotich/' target="_blank" rel="noopener noreferrer">
                                <div className='rounded-full shadow-lg shadow-gray-100 p-6 cursor-pointer hover:scale-105 ease-in duration-300'>                                  
                                    <FaLinkedinIn/>                                 
                                </div>
                        </a>

                        <a href='https://github.com/collinskrotich' target="_blank" rel="noopener noreferrer">
                                <div className='rounded-full shadow-lg shadow-gray-100 p-6 cursor-pointer hover:scale-105 ease-in duration-300'>
                                    <FaGithub/>
                                </div>
                        </a>
                        <a href='mailto:collinsrotich001@gmail.com' target="_blank" rel="noopener noreferrer">
                                <div className='rounded-full shadow-lg shadow-gray-100 p-6 cursor-pointer hover:scale-105 ease-in duration-300'>
                                    <AiOutlineMail/>
                                </div>
                        </a>

                        <a href='tel:+254712036043' target="_blank" rel="noopener noreferrer">
                                <div className='rounded-full shadow-lg shadow-gray-100 p-6 cursor-pointer hover:scale-105 ease-in duration-300'>
                                    <BsFillPersonLinesFill/>
                                </div>
                        </a>
                            
                </div>
        </div>
    </div>
    </div>

    {/* right */}

    <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
        <div className='p-4'>
            <form>
                <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                    <div className='flex flex-col'>
                        <label className='uppercase text-sm py-2'>NAME</label>
                        <input className='border-2 rounded-lg p-3 flex border-gray-300' type='text'/>
                    </div>

                    <div className='flex flex-col'>
                        <label className='uppercase text-sm py-2'>Phone Number</label>
                        <input className='border-2 rounded-lg p-3 flex border-gray-300' type='text'/>
                    </div>
                </div>

                    <div className='flex flex-col py-2'>
                        <label className='uppercase text-sm py-2'>Email</label>
                        <input className='border-2 rounded-lg p-3 flex border-gray-300' type='email'/>
                    </div>

                    <div className='flex flex-col'>
                        <label className='uppercase text-sm py-2'>SUBJECT</label>
                        <input className='border-2 rounded-lg p-3 flex border-gray-300' type='text'/>
                    </div>

                    <div className='flex flex-col py-2'>
                        <label className='uppercase text-sm py-2'>MESSAGE</label>
                        <textarea className='border-2 rounded-lg p-3 border-gray-300 rows=' rows='10' ></textarea>
                    </div>

                    <button className='w-full p-4 text-gray-100 mt-4'>Send message</button>               
            </form>
        </div>
    </div>
</div>
        <div className='flex justify-center py-12'>
            <Link href='/'>
                <div className='rounded-full shadow-lg shadow-gray-100 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <HiOutlineChevronDoubleUp className='text-blue-700' size={30}/>
                </div>
                </Link>
                
        </div>
</div>
</div>
  )
}

export default Contact