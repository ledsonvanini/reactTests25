import React from 'react'

function Controls({toggleZoom, frameZoom}) {
    return (
        <div className='absolute top-3 right-3'>
            <button className='text-2xl text-pink-400 cursor-pointer' onClick={toggleZoom}>
                <i className={frameZoom ? "bx bxs-zoom-out" : "bx bxs-zoom-in"}></i>
            </button>
            <button className='text-2xl text-pink-400 cursor-pointer' onClick={frameZoom}>
                <i className="bx bx-x-circle"></i>
            </button>
        </div>
    )
}

export default Controls
