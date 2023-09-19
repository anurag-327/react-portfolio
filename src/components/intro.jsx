import React from 'react'
import vector1 from "../assets/vector1.svg"
import vector2 from "../assets/vector2.svg"
import vector4 from "../assets/vector4.svg"
import vector5 from "../assets/vector5.jpg"
import vector6 from "../assets/blob-haikei.png"
import vector7 from "../assets/layered-waves-haikei.png"
import boy from "../assets/boy.png"
import boy2 from "../assets/boy2.png"
import boy3 from "../assets/boy3.jpeg"
import {Crown} from "phosphor-react"
import Typewriter from 'typewriter-effect/dist/core';
import { LinkedinLogo,GithubLogo } from 'phosphor-react'
import {TwitterLogo} from "phosphor-react"
import GitHubIcon from '@mui/icons-material/GitHub';

// import resume from "../assets/projectimages/Resume_2023.pdf"
const Intro = () => {
  return (
    <div className='relative top-20  h-auto min-h-[70vh] sm:h-auto sm:bg-contain   overflow-hidden p-2 bg-cover  bg-[url("./assets/vector3.svg")]   sm:bg-[url("./assets/vector1.svg")]  bg-no-repeat  '>
    <div className='  sm:flex-col  flex justify-center items-center  '>
      <div className='w-[50%]  sm:w-[100%] py-6 flex flex-col gap-5 justify-center items-center '>
        <div className='text-2xl  flex flex-col gap-2 font-bold font-poppins text-center'>
            <h2 className=' shadow-blue-100'>Hi<span className='text-orange-600'>!</span> There I am</h2>
            <h2 className='text-7xl text-blue-800 sm:font-sign font-mono '>Anurag</h2>
        </div>
        <div className='flex gap-2  justify-center items-center p-2 border-2 border-black rounded-md'> 
              <Crown size={44} color="#b8e458" weight="fill" />
              <span className='font-semibold text-lg'>I'm a web Developer</span>
        </div>
        <div className='flex gap-5'>
          <a title='github' target="blank" href="https://github.com/anurag-327" ><GithubLogo size={44} color="#000000" weight="fill" /></a>
          <a title='linkedin' target="blank" href="https://www.linkedin.com/in/anuragsr327" > <LinkedinLogo size={44} color="#000000" weight="fill" /></a>
          <a title='twitter' target="blank" href="https://twitter.com/itsAnurag_sri" >  <TwitterLogo size={44} color="#000000" weight="fill" /></a>
          <a title='codechef' target="blank" href="https://www.codechef.com/users/anurag_cp273" >  <img width="40" height="40" src="https://img.icons8.com/ios-filled/50/codechef.png" alt="codechef"/></a>
          <a title='Linktree' target="blank" href="https://linktr.ee/anurag_srivastav?utm_source=linktree_profile_share&ltsid=6f79a06a-88a1-4310-87a2-82366e1aacba" > <img className='w-10 h-10 rounded-full' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAflBMVEVD5mAAAABE6mJF7GIFEAcoiTlG72Q80Fc7zFUzsElA3VwxqEYtnEElgDUNKxI8zVU1tkw2uk4faiwQOBc4v1BC418PMxUSPxo5xVIKIQ4slz8wpEQzr0kRPBkdYikbXScjeTMhcjAZVSMWTCAHFwo+11oIGgsKIw8DCQQURh2xeDCyAAAD/ElEQVR4nO3c6XLaMBSGYVtKBDGBkhCzZSMLLbn/GyyGUC86RxaEwed0vuenMzB6R/UumiQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADQBeOauh7RmZnx56hukXU9pvMyN2kTCpVBoX4o1O8/K8yttymu0OTmAsP7MZOlA++CJarQXY8uMsIfMtki9RNjCt0yTSf5hYZ5OpN/FsNvJkYUutti6/RiIz1VPtqP/6ae2F7oHvebJxcc7ElGh4Bx7XDTWugGh+3CZ3FSFtxVE9sKy0DZs5hPqwkPlcSWwmpgmj5ffODRJvWGSmK40D3V/zTrYOxRnpsRZWKw0I6bf5slAk/9Jpl5Een8kBgqtHf+Bz8kFn7440zT/ndioNA+UB98F5doX6hxpmlvn8gX0oFp+uJf3HbLZCN6pL3dZLCFXOAoEzeJxj/QVBK5QjunP/Qs8VCTUIeawtqwhVyg0NOFMa9sIl1oe/QH3o3IGdyydOJmbchCwwS+SjvIVNh7csi/M0sUcjN4L/qBv1uRg17k3mVLmjOBK9GB28QhOezpwNvUpwOHwgP3zyJibDbk5qX4wMPTiBPdKggsn0ecwH9IJ5PzD5xxbpQEbhOJ+6EIYzWB/PV00Fzwid5nmXNBwC9VgcUlJ302YPWUBRY3jFdH9F3Jux1st3uBEenPWnCgZTnuhtEzSxz/NV0HzofXAZGFoa8YzrsNNP4V9bkNuv0HjEIUohCFKEQhClGIQhSiEIVnKrziLeKe1WwWge/ourB4L8qKfmz64ALf0nFfyBGPvvU87K5yx+yiWl5YVHGBzJspfYncC6g+t3M+Kkvk3pP2LbmMraDh3WjJMc8Rd8vcuMRrRYlc4PfLF+7NlJ7E4AwWtM8is+KkDOQT5S/EKLi31kA+8U1BoqOXRdUD+UTZC6IKzLov/w0vd7i57/xlU5hjlgr3/XFzsyhucXCNeY8O5BPlLfEu0avZmUA+UeJC/R3DBbKrLLh98UPqXeHXUTNY8H9Lsvd1wVEfYUKPNhC4PTIxiRJ/3ZVN6bEGA/lZnIr7IbRtv1SjcbO4EnfSoK9lIpZy0YkSr22ok331YptdJ0MlSgykZrESmC1v65bljuYnSr0AbyZW90F/YX6/8sFGotTAZmJtHwwWNhIl/x6hem9YP4qGC2uJsm+Dy8TGaaKlsJIoO7BMbJ4H2wr/nfrlP6vZJ3on+tbC71mUH7hP9E/07YW7RA2BRSKx6j6iMHFP0vfBA0vc3cUUJkbctegRogpVQ6F+KNQPhfqhUD8U6odC/VCoHwr1Q6F+KNQPhfqhUD8U6odC/darYd1q3fWQzk3c/6wDAAAAAAAAAAAAAAAAAAAAAAAAAACUv7GSNuX5wnCUAAAAAElFTkSuQmCC" alt="linktree"/>  </a>
           
        </div>
        <div className='flex gap-5 '>
          <a href="https://drive.google.com/file/d/1aSjBAzQjDKjuZcIXPm3Ivly2vMbuFVR1/view?usp=sharing" target="blank" className=' p-2 bg-orange-400 text-white text-xl border-2 rounded-lg shadow-md shadow-gray-400 border-gray-600'><i className="fa-solid text-black mr-2 fa-file"></i>My Resume</a>
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