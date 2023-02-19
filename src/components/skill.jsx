import React from 'react'

const Skill = ({item}) => {
  return (
    <div className=' w-[20%] sm:w-[25%] text-center  h-[100px]  '>
        <img className='m-auto  bg-gray-200 p-2 rounded-full' src={item.icon} alt={item.name} />
        <span className='font-bold'>{item.name}</span>
    </div>
  )
}

export default Skill