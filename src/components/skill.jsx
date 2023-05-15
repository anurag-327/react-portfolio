import React from 'react'

const Skill = ({item}) => {
  return (
    <div className=' w-[20%] sm:w-[25%] text-center  h-[100px]  '>
        <img className='m-auto w-16 h-16  bg-gray-200 p-2 rounded-full object-contain' src={item.icon} alt={item.name} />
        <span className='font-bold'>{item.name}</span>
    </div>
  )
}

export default Skill