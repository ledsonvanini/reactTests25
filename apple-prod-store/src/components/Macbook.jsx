import React from 'react'

function Macbook() {
  return (
    <div className="flex flex-col items-center justify-around bg-white p-8">
        <h1 className="2xl:text-4xl xl:text-3xl md:text-2xl font-semibold text-gray-800 mb-8">
            Choose Your new MacBbook Air
        </h1>
        <div className="flex">
        <button className="2xl:w-36 md:w-26 w28 2xl:h-18 md:h-12 h-12 flex flex-col justify-evenly items-center border rounded-l-xl">
            <span className="2xl:text-lg xl:text-sm text-xs font-bold text-gray-800">With M2 chip</span>
            <span className="2xl:text-base xl:text-sm text-xs text-gray-600">From $999</span>
        </button>
        <button className="2xl:w-36 md:w-26 w28 2xl:h-18 md:h-12 h-12 flex flex-col justify-evenly items-center border rounded-r-xl">
            <span className="2xl:text-lg xl:text-sm text-xs font-bold text-gray-800">With M3 chip</span>
            <span className="2xl:text-base xl:text-sm text-xs text-gray-600">From $1,999</span>
        </button>
        </div>
    </div>
  )
}

export default Macbook
Macbook