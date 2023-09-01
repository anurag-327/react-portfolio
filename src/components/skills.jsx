import React from 'react'
import Skill from './skill';
const Skills = () => {
  const skills=[ 
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
        "name": "TailwindCSS",
        "icon": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/48px-Tailwind_CSS_Logo.png"
    }, 
    {
        "name": "ReactJS",
        "icon": "https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/000000/external-react-a-javascript-library-for-building-user-interfaces-logo-color-tal-revivo.png"
    },
    {
        "name": "NextJS",
        "icon": "https://cdn.icon-icons.com/icons2/2389/PNG/512/next_js_logo_icon_145038.png"
    },
    {
        "name": "NodeJS",
        "icon": "https://img.icons8.com/color/48/000000/nodejs.png"
    },
    {
        "name": "ExpressJS",
        "icon": "https://img.icons8.com/fluency/48/000000/node-js.png"
    },
    {
        "name": "Rest API",
        "icon": "https://img.icons8.com/nolan/48/api-settings.png"
    },
    {
        "name": "GraphQl API",
        "icon": "https://seeklogo.com/images/G/graphql-logo-97CBBB6D51-seeklogo.com.png"
    },
    {
        "name": "MongoDB",
        "icon": "https://img.icons8.com/color/48/000000/mongodb.png"
    },
    
    
    {
        "name": "Appwrite",
        "icon": "https://seeklogo.com/images/A/appwrite-logo-D33B39992A-seeklogo.com.png"
    },
    {
        "name": "Supabase",
        "icon": "https://seeklogo.com/images/S/supabase-logo-DCC676FFE2-seeklogo.com.png"
    },
    {
        "name": "Firebase",
        "icon": "https://seeklogo.com/images/F/firebase-logo-402F407EE0-seeklogo.com.png"
    },
    {
        "name": "Pocketbase",
        "icon": "https://seeklogo.com/images/P/pocketbase-logo-CA73994F09-seeklogo.com.png"
    },
    {
        "name": "Git VCS",
        "icon": "https://img.icons8.com/color/48/000000/git.png"
    },
    {
        "name": "GitHub",
        "icon": "https://img.icons8.com/small/48/null/github.png"
    },
    {
        "name": "C++",
        "icon": "https://img.icons8.com/color/48/000000/c-plus-plus-logo.png"
    },
    {
        "name": "Solidity",
        "icon": "https://img.icons8.com/color-glass/48/null/solidity.png"
    },
    {
        "name": "Smart Contracts",
        "icon": "https://img.icons8.com/external-outline-lafs/48/null/external-ic_smart_contract-blockchain-outline-lafs.png"
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
