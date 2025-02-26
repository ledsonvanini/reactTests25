import React, { useEffect, useState } from 'react'

const PageTransition = ({activePage, children}) => {
    const [currentPage, setCurrentPage] = useState(activePage)
    const [transitioning, setTransitioning] = useState(false)

    useEffect(()=>{
     if(currentPage !== activePage){
        setTransitioning(true)
        setTimeout(()=>{
            setCurrentPage(activePage)
            setTransitioning(false)
        }, 200)
     }   
    }, [activePage, currentPage])

  return (
    <div style={{backgroundImage:'url(images/pages-bg.png)'}} className="relative w-full h-full overflow-hidden">
        <div 
            className={`absolute w-full h-full transition-transform duration-500
                ${transitioning ? '-translate-y-full': 'translate-y-0'}`}>            
            {children[currentPage]}
        </div>
    </div>
  )
}

export default PageTransition