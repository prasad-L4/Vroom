import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Courser = ({ hoverRef }) => {
    const cursorRef = useRef(null);
    const ctx1 = useRef(null);
    const cursorSize = 50; 

    const mouseMoveHandler = (e) => {
        const { clientX, clientY } = e;
        ctx1.current.mouseMove(
            clientX - cursorSize / 2,
            clientY - cursorSize / 2
        );
    };

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

  
        const hoverTextEffect = () => {
            const elements = hoverRef.current.querySelectorAll(".letter"); 
            elements.forEach((letter) => {
                letter.addEventListener("mouseenter", () => {
                    gsap.to(letter, {
                        scale: 1.2,
                        
                        duration: 0.3,
                        ease: "power1.out",
                    });
                    gsap.to('.ball', { 
                        backgroundColor: 'white', 
                        mixBlendMode: 'difference', 
                        border: '1px solid black', 
                        scale: 7 
                      });
                });
                letter.addEventListener("mouseleave", () => {
                    gsap.to(letter, {
                        scale: 1,
                  
                        duration: 0.3,
                        ease: "power1.out",
                    });
                    gsap.to('.ball',{
                      
                        border:1,
                        scale:1
                    })
                });
            });
        };

    
        if (hoverRef.current) {
            const text = hoverRef.current.innerText;
            hoverRef.current.innerHTML = '';

            text.split('').forEach((char, index) => {
                const span = document.createElement('span');
                span.classList.add('letter');
                span.innerText = char === ' ' ? '\u00A0' : char; 
                hoverRef.current.appendChild(span);
            });

            hoverTextEffect();
        }

        return () => {
            window.removeEventListener("mousemove", mouseMoveHandler);
        };
    }, [hoverRef]);

    return (
        <div className="ball bg-white w-[3rem] outline-4 z-50 h-[3rem] fixed top-0 left-0 rounded-full"></div> 
    );
}

export default Courser;
