import React from 'react'

const Project = ({item}) => {
  return (
    <div className='inline-block border-2 rounded-md p-1  shadow-xl   mx-4 w-[50%] sm:w-[100%] md:w-[70%] box-border '>
        <div>
            <img src={item.image} className="rounded-sm" alt={item.name} />
        </div>
        <div className='mt-5 flex sm:text-sm flex-col gap-1 text-center break-words whitespace-pre-wrap'>
            <h2 className='font-bold'>{item.name}</h2>
            <h2 className='font-mono'>{item.description}</h2>
            <p className='font-bold   text-blue-800'>Tools Used: {item.toolsused}</p>
            <a className='p-2 w-[40%] m-auto bg-blue-700 rounded-md text-white' href={item.link} target="blank">Code</a>
        </div>
        
    </div>
  )
}

export default Project