import { useGSAP } from '@gsap/react';
import React, { useEffect, useState } from 'react'
import gsap from 'gsap'
const Banner = () => {
    const [scrollY, setScrollY] = useState(0);
    const [bgColor, setBgColor] = useState("transparent");
    const [textTransform, setTextTransform] = useState(0);
    const [videoScale, setVideoScale] = useState(1);
    const [showText, setShowText] = useState(true);
    const [showMdal, setshowModal] = useState(false);
  const [show, setshow] = useState(false)
  
    useEffect(() => {
      const handleScroll = () => {
        const scrolled = window.scrollY;
        setScrollY(scrolled);
  
        const calculatedScale = 1 - scrolled * 0.001;
        setVideoScale(calculatedScale);
  
        if (scrolled > 0) {
          setBgColor("black");
        } else {
          setBgColor("transparent");
        }
  
        const calculatedTextTransform = -scrolled * 5.5;
        setTextTransform(
          calculatedTextTransform > 0 ? 0 : calculatedTextTransform
        );
      };
      const timeout= setTimeout(() => {
         setshow(true)
       }, 3000);
      const interval = setInterval(() => {
        setShowText((prevShowText) => !prevShowText);
      }, 4000);
  
      window.addEventListener("scroll", handleScroll);
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
        clearInterval(interval);
        clearTimeout(timeout)
      };

    }, []);

  return (
    <div>
         <section
    className="video-sec relative overflow-hidden  md:pt-0 md:mt-[rem] z-0"
    style={{ backgroundColor: bgColor }}
  >
   {
    show&& <div
    className={`absolute top-1/4 px-14 z-10 text-white transition-opacity ${
      showText ? "opacity-100" : "opacity-0"
    }`}
    style={{
      transform: `translateY(${textTransform}px)`,
      transition: "opacity 1s ease-in-out, transform 0.5s ease-in-out",
    }}
  >
 <div
  className={`first duration-1000 ease-in-out ${show ? 'opacity-100 translate-y-0  opacity 1s ease-in-out, transform 0.5s ease-in-out ' : 'opacity-0 translate-y-10'}`}
>
  <h2 className="vdo-title text-[17px] sm:mt-0 mt-[-1rem] sm:text-[25px] font-ubuntu md:text-[28px] lg:text-[54px] bg-gradient-to-r from-gray-400 to-black bg-clip-text text-transparent drop-shadow-lg  mb-4">
    Easy and Fast 
    Way To Rent A cars
    <br />
 With US
  </h2>
  <p className="mb-6 mt-[-1rem] sm:mt-[2rem] lg:mt-[3rem] text-[9px] sm:text-[14px] md:text-[20px] lg:text-[22px] bg-gradient-to-r from-gray-400 to-black bg-clip-text text-transparent drop-shadow-lg">
  Discover our exceptional selection of rental vehicles
  tailored to your <span className="bg-gradient-to-r from-blue-400 to-blue-700 bg-clip-text text-transparent drop-shadow-lg">preferences</span>. <br />
  Whether you're planning a quick getaway or an extended vacation.
</p>
<button  className="vdo-icon bg-transparent w-[140px] h-[50px] hover:bg-[#21C8ED] hidden md:block text-[13px] font-[700] border-[0.568px] border-white mt-[2rem] hover:bg- transition-colors duration-500 text-white  py-2 px-4">
          CONTACT US
        </button>
</div>
  </div>
   }

 
    <div
      className={`absolute top-1/4 px-14 z-10 text-white transition-opacity ${
        showText ? "opacity-0" : "opacity-100"
      }`}
      style={{
        transform: `translateY(${textTransform}px)`,
        transition: "opacity 0.5s ease-in-out, transform 0.5s ease-in-out",
      }}
    >
      <div className="scnd">
        <h2 className="vdo-title text-[17px]mt-[-2rem] sm:mt-0 mt-[-1rem] sm:text-[25px] md:text-[28px] lg:text-[54px] font-ubuntu mb-4 bg-gradient-to-r from-gray-400 to-black bg-clip-text text-transparent drop-shadow-lg">
        Find Your Perfect Car
        At The Best <br /> Price 
          Only With Us
        </h2>
        <p className="mb-6 mt-[-1rem] sm:mt-[2rem] lg:mt-[3rem] text-[9px] sm:text-[14px] text-bold md:text-[20px] lg:text-[22px] bg-gradient-to-r from-gray-400 to-black bg-clip-text text-transparent drop-shadow-lg">
  Embark on thrilling adventures, face challenges, and explore <span className='bg-gradient-to-r from-blue-400 to-blue-700 bg-clip-text text-transparent drop-shadow-lg'>endless</span> <br />
  opportunities. Unite, compete, and rise to the top.
</p>
   <button  className="vdo-icon bg-transparent w-[140px] h-[50px] hover:bg-[#21C8ED] hidden md:block text-[13px] font-[700] border-[0.568px] border-white mt-[2rem] hover:bg- transition-colors duration-500 text-white  py-2 px-4">
          CONTACT US
        </button>
     
      </div>
    </div>
    

    {/* video section */}
    <video
      autoPlay
      
      muted
      className="video w-full relative z-0"
      style={{ transform: `scale(${videoScale})` }}
    >
      <source src='/Assets/video/videos.mp4' type="video/mp4" />
    </video>

  </section>
    </div>
  )
}

export default Banner
