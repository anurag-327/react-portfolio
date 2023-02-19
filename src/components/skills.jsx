import React from 'react'
import Skill from './skill';
const Skills = () => {
  const skills=[
   
    {
        "name": "Solidity",
        "icon": "https://img.icons8.com/color-glass/48/null/solidity.png"
    },
    {
        "name": "Smart Contracts",
        "icon": "https://img.icons8.com/external-outline-lafs/48/null/external-ic_smart_contract-blockchain-outline-lafs.png"
    },
    {
        "name": "ExpressJS",
        "icon": "https://img.icons8.com/fluency/48/000000/node-js.png"
    },
    {
        "name": "NodeJS",
        "icon": "https://img.icons8.com/color/48/000000/nodejs.png"
    },
    {
        "name": "Rest API",
        "icon": "https://img.icons8.com/nolan/48/api-settings.png"
    },
    {
        "name": "ReactJS",
        "icon": "https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/000000/external-react-a-javascript-library-for-building-user-interfaces-logo-color-tal-revivo.png"
    },
    {
        "name": "MongoDB",
        "icon": "https://img.icons8.com/color/48/000000/mongodb.png"
    },
    {
        "name": "C++",
        "icon": "https://img.icons8.com/color/48/000000/c-plus-plus-logo.png"
    },
   
    {
        "name": "TailwindCSS",
        "icon": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/48px-Tailwind_CSS_Logo.png"
    },  
    {
        "name": "HTML5",
        "icon": "https://img.icons8.com/color/48/000000/html-5--v1.png"
    },
    {
        "name": "CSS3",
        "icon": "https://img.icons8.com/color/48/000000/css3.png"
    },
    {
        "name": "JavaScript",
        "icon": "https://img.icons8.com/color/48/000000/javascript--v1.png"
    },  
    {
        "name": "Git VCS",
        "icon": "https://img.icons8.com/color/48/000000/git.png"
    },
    {
        "name": "GitHub",
        "icon": "https://img.icons8.com/small/48/null/github.png"
    },
  
     
];




  return (
    <div id="skills" className=' w-[70%]  sm:shadow-sm  rounded-2xl border shadow-lg p-5 mt-10 m-auto sm:w-[95%]'>
        <h1 className='text-center text-blue-800 text-4xl  font-bold'>Skills</h1>
         <div className=' flex mt-10 flex-wrap gap-5 m-auto justify-center'>
            {skills.map((item,index )=> <Skill key={index} item={item}/> )}
         </div>
    </div>
  )
}
export default Skills
