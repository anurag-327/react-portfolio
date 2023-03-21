import React, { useState } from 'react'
import Switch from "react-switch";
import { forwardRef } from "react";
import './toggle.css'
function Navbar({},ref) {
    // const {aboutRef,skillsRef,projectsRef,contactRef}=ref;
    // console.log(ref)
    // console.log(document.getElementById("about"))
    function openDrawer()
    {
        const x=document.getElementById("navDrawer").classList.toggle("sm:hidden")
    }
  return (
    <div className='flex sm:flex-col shadow-md  justify-between bg-white fixed top-0 w-[100%] p-4 font-poppins z-10 '>
        <div className='flex  gap-20 sm:gap-5 justify-between items-center'>
            <div>
            <span className='text-3xl font-extrabold ml-5 sm:ml-0 '>Anurag</span>
            </div>
            {/* <div >
            <label for="theme" class="theme">
	<span class="theme__toggle-wrap">
		<input id="theme" class="theme__toggle" type="checkbox" role="switch" name="theme" value="dark"/>
		<span class="theme__fill"></span>
		<span class="theme__icon">
			<span class="theme__icon-part"></span>
			<span class="theme__icon-part"></span>
			<span class="theme__icon-part"></span>
			<span class="theme__icon-part"></span>
			<span class="theme__icon-part"></span>
			<span class="theme__icon-part"></span>
			<span class="theme__icon-part"></span>
			<span class="theme__icon-part"></span>
			<span class="theme__icon-part"></span>
		</span>
	</span>
</label>
            </div> */}
            <div className='flex gap-8 items-center'>
            <div>
                <button onClick={() =>document.getElementById('contact').scrollIntoView({ behavior: "smooth" })} className='border-2 border-orange-500 px-2 py-1 bg-orange-400 text-white rounded-lg shadow-md shadow-orange-400'>Contact</button>
            </div>
            <div className='sm:block hidden'>
                <button onClick={openDrawer}><i className="fa-solid fa-bars"></i></button>
            </div>
        </div>
            
        </div>
        <div id="navDrawer" className=' sm:hidden navDrawer       z-50 sm:p-5   right-0 ' >
                <ul className='flex sm:flex-col sm:gap-4 sm:text-center gap-20 text-xl font-semibold'>
                    <li onClick={() =>document.getElementById('about').scrollIntoView({ behavior: "smooth" })} className='hover:text-orange-600 cursor-pointer'>About Me</li>
                    <li onClick={() =>document.getElementById('projects').scrollIntoView({ behavior: "smooth" })} className='hover:text-orange-600 cursor-pointer'>Projects</li>
                    <li onClick={() =>document.getElementById('skills').scrollIntoView({ behavior: "smooth" })} className='hover:text-orange-600 cursor-pointer'>Skills</li>
                    <li  className='hover:text-orange-600 cursor-pointer'><a href="https://drive.google.com/file/d/1E8kZZE0KjLXOQJPW9Dph_6MRHwyT9N6r/view?usp=sharing" target="blank" ><i className="fa-regular mr-1 fa-file"></i>Resume</a></li>
                </ul>
        </div>
        
        
    </div>
  )
}

export default forwardRef(Navbar)