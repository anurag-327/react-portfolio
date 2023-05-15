import React from 'react'

const Notification = () => {
  return (
    <div className=' w-[80%] sm:w-[100%] mx-auto mt-5 bg-red-500 text-2xl text-white'><marquee width="100%"  direction="left" height="30px">
    Note! Project Api's are hoisted on free tier platforms so there are chances that api's might be inactive sometimes.
    </marquee></div>
  )
}

export default Notification