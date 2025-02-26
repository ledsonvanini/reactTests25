import React, { useState } from 'react'
import { macBookModels } from '../data'

function Macbook() {
  const [selectedChip, setSelectedChip] = useState(0)
  const [selectedColor, setSelectedColor] = useState(0)

  const currentMacbook = macBookModels[selectedChip]
  const currentColor = currentMacbook.colors[selectedColor]

  const handleSelectedChip = (index) => {
    setSelectedChip(index)
  }

  return (
    <div className="flex flex-col items-center justify-around bg-white p-8 h-full">
      <h1 className="2xl:text-4xl xl:text-3xl md:text-2xl font-semibold text-gray-800 mb-8">
        Choose Your new MacBbook Air
      </h1>
      <div className="flex">
        {macBookModels.map((mac, index) => (
          <button key={index}
            className={`2xl:w-36 md:w-26 w28 2xl:h-18 md:h-14 h-14 p-1 flex flex-col justify-evenly items-center border 
            ${index === 0 ? "rounded-l-xl" : "rounded-r-xl"}  ${index === selectedChip ? 'border-2 border-blue-400 text-white' : 'border-gray-600'}`}
            onClick={() => { handleSelectedChip(index) }}

          >
            <span className="2xl:text-lg xl:text-sm text-xs font-bold text-gray-800">With {mac.name} chip</span>
            <span className="2xl:text-base xl:text-sm text-xs text-gray-600">{mac.price}</span>
          </button>

        ))}
      </div>
      <div className="flex flex-col 2xl:p4 md:items-start items-center">
        <div className="w-80 h-64 2xl:mb-0 mb-8">
          <img
            src={currentColor.img} 
            alt={`MacBook Air with ${currentMacbook.name} chip`}
            className='2xl:w-72 xl:w-52 h-full 2xl:mt-0 sm:mt-6'
          />
          </div>
          <span className="2xl:text-lg xl:text-sm font-medium text-gray-800 mb-2 text-center md:text-left">
            {currentColor.label}
          </span>
          <div className="flex space-x-2 mb-4 md:text-left md:justify-start justify-center">
            {currentMacbook.colors.map((color, index) => (
              <button key={index}
              style={{backgroundColor: color.bg}}
              className={`2xl:w-6 sm:w-5 w-4 2xl:h-6 sm:h-5 bg-[#2e3641] rounded-full border hover:border-blue-500
                ${selectedColor === index ? 'border-2 border-blue-400' : 'border-transparent'}
                `}
                onClick={() => setSelectedColor(index)}
                ></button>
            ))}
            
          </div>
            <img src={currentMacbook.icon} alt={`Apple ${currentMacbook.name} chip`} className="w-12 h-12 2xl:mb-2 xl:mb-2" />
            <div className="2xl:mb-4 xl:mb-2 text-center md:text-left">
              {currentMacbook.specs.map((spec,index) => (
                <p key={index}
                
                className="2xl:text-lg xl:text-base font-semibold text-gray-800 mb-0 5">{spec}</p>

              ))}
            </div>
            <button type="button" 
            className="w-min text-sm py-1 px-3 bg-blue-400 rounded-full text-white mt-4 md:mt-0">
              Buy
            </button>
        </div>
      
    </div>
  )
}

export default Macbook
Macbook