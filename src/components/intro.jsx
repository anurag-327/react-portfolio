import React from 'react'
import vector1 from "../assets/vector1.svg"
import vector2 from "../assets/vector2.svg"
import vector4 from "../assets/vector4.svg"
import vector5 from "../assets/vector5.jpg"
import vector6 from "../assets/blob-haikei.png"
import vector7 from "../assets/layered-waves-haikei.png"
import boy from "../assets/boy.png"
import boy2 from "../assets/boy2.png"
import {Crown} from "phosphor-react"
import Typewriter from 'typewriter-effect/dist/core';
import { LinkedinLogo,GithubLogo } from 'phosphor-react'
import {TwitterLogo} from "phosphor-react"
import GitHubIcon from '@mui/icons-material/GitHub';


const Intro = () => {
  return (
    <div className='relative top-16  h-auto min-h-[70vh] sm:h-auto sm:bg-contain   overflow-hidden p-2 bg-cover  bg-[url("./assets/vector3.svg")]   sm:bg-[url("./assets/vector1.svg")]  bg-no-repeat  '>
    <div className='  sm:flex-col  flex justify-center items-center  '>
      <div className='w-[50%]  sm:w-[100%] py-6 flex flex-col gap-5 justify-center items-center '>
        <div className='text-2xl  flex flex-col gap-2 font-bold font-poppins text-center'>
            <h2 className=' shadow-blue-100'>Hi<span className='text-orange-600'>!</span> There I am</h2>
            <h2 className='text-7xl text-blue-800 font-sign '>Anurag</h2>
        </div>
        <div className='flex gap-2  justify-center items-center p-2 border-2 border-black rounded-md'> 
              <Crown size={44} color="#b8e458" weight="fill" />
              <span className='font-semibold text-lg'>I'm a web Developer</span>
        </div>
        <div className='flex gap-5'>
          <a title='github' target="blank" href="https://github.com/anurag-327" ><GithubLogo size={44} color="#000000" weight="fill" /></a>
          <a title='linkedin' target="blank" href="https://www.linkedin.com/in/anuragsr327" > <LinkedinLogo size={44} color="#000000" weight="fill" /></a>
          <a title='twitter' target="blank" href="https://twitter.com/itsAnurag_sri" >  <TwitterLogo size={44} color="#000000" weight="fill" /></a>
          
         
           
        </div>
        <div className='flex gap-5 '>
          <a href="https://drive.google.com/file/d/1vudDrPhmCdolo387w_br9femw87DNCnL/view?usp=sharing" target="blank" className=' p-2 bg-orange-400 text-white text-xl border-2 rounded-lg shadow-md shadow-gray-400 border-gray-600'><i className="fa-solid text-black mr-2 fa-file"></i>My Resume</a>
          {/* <button className=' p-1 text-xl border-2 rounded-lg shadow-md shadow-gray-400 border-gray-600'>About Me</button> */}
          
        </div>
        
      </div>
      <div className='  flex sm:w-[100%]  w-[50%] bg-contain bg-[url("./assets/splash.png") bg-no-repeat    '>
          <img className='object-cover  h-full  bg-cover bg-[url("./assets/splash.png")]   m-auto' src={boy2}/>
      </div>
    </div>
    {/* <div className=' top-[1%] w-[100vw] h-[90vh]  absolute'>
      <img className='object-cover w-full h-full' src={vector7} />

    </div> */}
     {/* <div className='flex gap-2 top-[40%] left-[45%] absolute justify-center items-center p-2 border-2 border-black rounded-md'> 
              <Crown size={44} color="#000000" weight="fill" />
              <span className='font-semibold text-lg'>I'm a web Developer</span>
        </div> */}
      {/* <img className='absolute  -z-10 object-contain top-[-85%]  rotate-[40deg]  ' src={vector1} /> */}
    </div>
  )
}

export default Intro