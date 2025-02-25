import React from 'react'
import { items } from '../data'

function Home() {
  return (
    <div className="w-full h-full grid grid-cols-2 grid-rows-2 gap-4 bg-gray-50">
     
      {items.map((item, index) => (
      <div key={index} className="flex flex-col flex-grow items-center justify-center bg-white  ">
        <span className="text-xl font-bold bg-gradient-to-b from-red-500 to-yellow-300 bg-clip-text text-transparent tracking-wide mb-12">
          {item.label}
        </span>
        <img src={item.img} alt="iPhone"
          className='max-w-[65%] max-h-[65%] object-contain'
          draggable='false'
        />
      </div>
  
      ))}
    </div>
  )
}

export default Home
