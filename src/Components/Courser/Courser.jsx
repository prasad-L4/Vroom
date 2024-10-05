import { useGSAP } from '@gsap/react'
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
const Courser = () => {
    const courserRef = useRef(null);

    useEffect(() => {
      const handleMouseMove = (event) => {
        gsap.to(courserRef.current, {
          x: event.clientX,
          y: event.clientY,
          duration: 0.3, // Adjust for smoother transition
          ease: 'back.out',
        });
      };
  
      // Add the event listener on component mount
      document.addEventListener('mousemove', handleMouseMove);
  
      // Clean up the event listener on component unmount
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
      };
    }, []);
  return (
    <>
   <div>
      {/* Element to be animated */}
      <div 
        ref={courserRef} 
        style={{
          width: '50px',
          height: '50px',
          backgroundColor: 'red',
          position: 'absolute',
          borderRadius: '50%',
          pointerEvents: 'none' // Ensures the element doesn't interfere with clicking
        }}
       className='relative z-50'></div>
    </div>
      
    </>
  )
}

export default Courser
