import React from 'react'
import man from "../assets/man.png"
import { DotsThreeOutline } from 'phosphor-react'
import Typewriter from 'typewriter-effect';

const About = () => {
  return (
    <div id="about" className='w-[90%] sm:w-[95%]  sm:shadow-sm  m-auto border rounded-2xl mt-16 p-10 sm:p-2 shadow-lg'>
        <h1 className='text-center text-blue-800 text-4xl   font-bold'>About Me</h1>
        <div className='flex flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row mt-5 '>
            <div className='w-[50%] sm:w-[100%]  p-8 flex flex-col gap-2 justify-center '>
                  <span className='text-5xl sm:text-2xl font-bold text-violet-500'><Typewriter
                    options={{
                    strings: [" Hi I am Anurag"],
                    autoStart: true,
                    loop: true,
                    
                    }}
                  /></span>
                  <p className=' text-md font-mono break-words'> I am a web developer currently in 2<sup>nd</sup> year pursuing B-Tech in Computer Science and Enginnering from KNIT Sultanpur. </p>
                  <div className='flex gap-5 m-auto'>
                    <a href="https://drive.google.com/file/d/1r0aS6mOnpbjtYLTyTYzaFBS6hUoze2l4/view?usp=sharing"  target="blank" className='p-1 font-semibold bg-pink-200 border border-black rounded-lg'>Resume</a>
                    <button onClick={() =>document.getElementById('contact').scrollIntoView({ behavior: "smooth" })} className='p-1 font-semibold border bg-orange-300 border-black rounded-lg'>Contact Me</button>
                  </div>
                  <div className='text-end font-sign text-4xl font-bold'>
                    <p>Anurag</p>
                  </div>
            </div>
            <div className='w-[50%] sm:w-[100%] font-mono'>
                <div className='w-[80%] sm:w-[90%] max-w-[500px] h-auto  rounded-2xl m-auto bg-gray-800'>
                    <div className='div-header border-b border-gray-100'>
                        <DotsThreeOutline className='ml-4' size={60} color="#b8e458" weight="fill" />
                    </div>
                    <div className='text-white text-lg sm:text-sm sm:font-extralight p-3'>
                        <p className='text-blue-300 '>function aboutme () &#123; </p>
                        <p className='text-pink-400 ml-1 lg:ml-3 xl:ml-3 2xl:ml-5'>name:"Anurag Srivastav";</p>
                        <p className='text-orange-300 ml-1 lg:ml-3 xl:ml-3 2xl:ml-5 '>education:"Undergrad. at KNIT Sultanpur";</p>
                        <p className='ml-1 lg:ml-3 xl:ml-3 2xl:ml-5'>skill:"Web Developer";</p>
                        <p className='text-yellow-200 ml-1 lg:ml-3 xl:ml-3 2xl:ml-5'>skillsLearning:"Web 3.0, React";</p>
                        <p className='text-blue-300 ml-1 lg:ml-3 xl:ml-3 2xl:ml-3'>&#125;</p>

                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About