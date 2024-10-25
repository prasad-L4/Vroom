import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Courser = () => {
    const ctx1 = useRef(null);
    const cursorSize = 50; 

 

    useEffect(() => {
      
        gsap.set(".ball", { xPercent: -50, yPercent: -50 });
        let targets = gsap.utils.toArray(".ball");
        window.addEventListener("mousemove", (e) => {
            gsap.to(targets, {
                duration: 0.5,
                x: e.clientX,
                y: e.clientY,
                ease: "power1.out",
                overwrite: "auto",
                stagger: 0.02,
                
                border:2
            });
        });

  
     

    

       
    }, []);

    return (
        <div className="ball pointer-events-none bg-transplant w-[3rem] outline-4 z-50 h-[3rem] fixed top-0 left-0 rounded-full"></div> 
    );
}

export default Courser;
