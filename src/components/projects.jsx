import React from 'react'
import Project from './project'
import { CaretLeft,CaretRight } from 'phosphor-react'
import passwordmanager  from "../assets/projectimages/passwordmanager.png"
import chatapp  from "../assets/projectimages/chatapp.png"
import ecommerce  from "../assets/projectimages/ecommerce.png"
import codemon  from "../assets/projectimages/codemon2.png"
import carrental  from "../assets/projectimages/carrental.png"
import notes  from "../assets/projectimages/notes.png"
import portfolio  from "../assets/projectimages/portfolio.png"
import netflix  from "../assets/projectimages/netflix.png"
import quicksign from "../assets/projectimages/quicksign.png"
const Projects = () => {
    function scrollleft()
    {
        const slider=document.querySelector(".slider")
        slider.scrollLeft-=400;
    }
    function scrollright()
    {
        const slider=document.querySelector(".slider")
        slider.scrollLeft+=400;
    }
    const projects=[
        {
            id:1,
            name:"Quick Sign",
            description:"OAuth for hassle free signups across multiple platforms",
            toolsused:"React, Express js, Node Js, MongoDB",
            image:quicksign,
            link:"https://github.com/anurag-327/QuickSign"
        },
        {
            id:2,
            name:"Password Manager",
            description:"Password Manager lets user save their passwords securely. ",
            toolsused:"React, Express js, Node Js, MongoDB",
            image:passwordmanager,
            link:"https://github.com/anurag-327/PasswordManager"
        },
        {
            id:3,
            name:"CHAT APP",
            description:"Real time One to One Chat app.",
            toolsused:"React, Express js, Node Js, MongoDB",
            image:chatapp,
            link:"https://github.com/anurag-327/Chat-App"
        },
        {
            id:4,
            name:"E-Commerce Website",
            description:"E-Commmerce Website built On React.",
            toolsused:"React, Express js, Node Js, MongoDB",
            image:ecommerce,
            link:"https://github.com/anurag-327/E-Commerce"
        },
        {
            id:5,
            name:"Codemon",
            description:"Codemon is a web project that helps user compile their code and use platform to solve DSA Problems. ",
            toolsused:"HTML, CSS, JS, EJS, Express js, MongoDB",
            image:codemon,
            link:"https://github.com/anurag-327/Codemon"
        },
        {
            id:6,
            name:"Car Rental System",
            description:"Car Rental System is a Web Project that helps user to rent out cars for short period. ",
            toolsused:"HTML, CSS, JS, EJS, Express js, MongoDB",
            image:carrental,
            link:"https://github.com/anurag-327/Car-Rental-System"
        },
        {
            id:7,
            name:"Google Keep Notes",
            description:"This project is a clone of Google keep notes that gives user flexibility of adding, deleting, updating and restoring deleted notes.",
            toolsused:"HTML, CSS, JS, EJS, Express js, MongoDB",
            image:notes,
            link:"https://github.com/anurag-327/Google-Keep-Notes"
        },
        {
            id:8,
            name:"My Portfolio site",
            description:"My Portfolio website containing details of my Skils, Projects and Educational Details",
            toolsused:"HTML, CSS, JS",
            image:portfolio,
            link:"https://github.com/anurag-327/Portfolio-site"
        },
        {
            id:9,
            name:"Netflix UI Clone",
            description:"clone of Netflix's UI",
            toolsused:"HTML, CSS, JS",
            image:netflix,
            link:"https://github.com/anurag-327/Netflix-UI-clone"
        }
    ]
  return (
    <div id="projects" className=' w-[90%] sm:w-[95%] sm:shadow-sm   box-border relative flex flex-col items-center justify-center  rounded-2xl border shadow-lg p-10 sm:p-1 mt-10 m-auto '>
        <h1 className='text-center text-blue-800 text-4xl  font-bold'>Projects</h1>
         <CaretRight onClick={scrollright} className='cursor-pointer absolute right-0  bg-blue-100 rounded-full p-1' size={36} color="#000000" />
          <div  className=' mt-3  slider scroll-smooth w-full h-full  whitespace-nowrap overflow-x-auto no-scrollbar'>
            {
                 projects.map((item,index) => <Project key={item.id} item={item} />
                )
            }
              <CaretLeft onClick={scrollleft} className=' cursor-pointer absolute left-0 top-[50%] bg-blue-100 rounded-full p-1' size={36} color="#000000"  />
        </div>
    </div>
  )
}

export default Projects