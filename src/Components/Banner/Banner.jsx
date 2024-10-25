import { useGSAP } from "@gsap/react";
import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { TiTick } from "react-icons/ti";
const Banner = () => {
  const [scrollY, setScrollY] = useState(0);
  const [bgColor, setBgColor] = useState("transparent");
  const [textTransform, setTextTransform] = useState(0);
  const [videoScale, setVideoScale] = useState(1);
  const [showText, setShowText] = useState(true);
  const [show, setshow] = useState(false);
  const [clicked, setclicked] = useState(false);
  const [alert, setAlert] = useState(false)

  const handleClicked = () => {
    setclicked(!clicked);
  };
  const handleClose=()=>{
    setclicked(false)
    setAlert(true);


    const timer = setTimeout(() => {
      setAlert(false);
    }, 2000);


    return () => clearTimeout(timer);
 
  }
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
    const timeout = setTimeout(() => {
      setshow(true);
    }, 3000);
    const interval = setInterval(() => {
      setShowText((prevShowText) => !prevShowText);
    }, 4000);

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);
useGSAP(()=>{
  gsap.from('.modal',{
    opacity:0,
    duration:.5,
  
    scale:0,
  
  })
  gsap.from('.alert',{
    x:-60,
 
    
  })
},[clicked])

  return (
    <div className="bg-black">
      <section
        className="video-sec relative overflow-hidden  md:pt-0 md:mt-[rem] z-0"
        style={{ backgroundColor: bgColor }}
      >
        {show && (
          <div
            className={`absolute top-1/4 px-14 z-10 text-white transition-opacity ${
              showText ? "opacity-100" : "opacity-0"
            }`}
            style={{
              transform: `translateY(${textTransform}px)`,
              transition: "opacity 1s ease-in-out, transform 0.5s ease-in-out",
            }}
          >
            <div
              className={`first duration-1000 ease-in-out ${
                show
                  ? "opacity-100 translate-y-0  opacity 1s ease-in-out, transform 0.5s ease-in-out "
                  : "opacity-0 translate-y-10"
              }`}
            >
              <h2 className="vdo-title text-[17px] sm:mt-0 mt-[-1rem] sm:text-[25px] font-ubuntu md:text-[28px] lg:text-[54px] bg-gradient-to-r from-gray-400 to-black bg-clip-text text-transparent drop-shadow-lg  mb-4">
                Easy and Fast Way To Rent A cars
                <br />
                With US
              </h2>
              <p className="mb-6 mt-[-1rem] sm:mt-[2rem] lg:mt-[3rem] text-[9px] sm:text-[14px] md:text-[20px] lg:text-[22px] bg-gradient-to-r from-gray-400 to-black bg-clip-text text-transparent drop-shadow-lg">
                Discover our exceptional selection of rental vehicles tailored
                to your{" "}
                <span className="bg-gradient-to-r from-blue-400 to-blue-700 bg-clip-text text-transparent drop-shadow-lg">
                  preferences
                </span>
                . <br />
                Whether you're planning a quick getaway or an extended vacation.
              </p>
              <button
                onClick={handleClicked}
                className="vdo-icon bg-transparent w-[140px] h-[50px] hover:bg-white hover:text-black hidden sm:block text-[13px] font-[700] border-[0.568px] border-white mt-[2rem] hover:bg- transition-colors duration-500 text-white  py-2 px-4"
              >
                RENT NOW
              </button>
            </div>
          </div>
        )}

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
              Find Your Perfect Car At The Best <br /> Price Only With Us
            </h2>
            <p className="mb-6 mt-[-1rem] sm:mt-[2rem] lg:mt-[3rem] text-[9px] sm:text-[14px] text-bold md:text-[20px] lg:text-[22px] bg-gradient-to-r from-gray-400 to-black bg-clip-text text-transparent drop-shadow-lg">
              Embark on thrilling adventures, face challenges, and explore{" "}
              <span className="bg-gradient-to-r from-blue-400 to-blue-700 bg-clip-text text-transparent drop-shadow-lg">
                endless
              </span>{" "}
              <br />
              opportunities. Unite, compete, and rise to the top.
            </p>
            <button
              onClick={handleClicked}
              className="vdo-icon bg-transparent w-[140px] h-[50px] hover:bg-white hover:text-black hidden sm:block text-[13px] font-[700] border-[0.568px] border-white mt-[2rem] hover:bg- transition-colors duration-500 text-white  py-2 px-4"
            >
              RENT NOW
            </button>
          </div>
        </div>

        {clicked && (
          <div className=" modal absolute lg:h-[7rem] sm:block hidden inset-0 z-[10000] flex items-start  justify-center bg-black ">
          {/* Modal content */}
          <div className="modal bg-gradient-to-b from-black to-gray-900 text-gray-400  p-6 pb-8 w-[100%] md:w-[100%] lg:w-[100%] flex flex-wrap justify-center gap-3 items-center z-[9999]">
            <div className="flex flex-col  w-auto">
              <label htmlFor="">PICK UP AT</label>
              <input
                className="border-2 focus:outline-green-500 bg-gray-800 w-[16rem] h-[3rem] pl-3"
                type="text"
                placeholder="Location"
              />
            </div>
            <div className="flex flex-col w-auto">
              <label htmlFor="">PICKUP DATE & TIME</label>
              <input
                className="border-2 bg-gray-800 focus:outline-green-500 w-[16rem] h-[3rem] pl-3"
                type="datetime-local"
              />
            </div>
            <div className="flex flex-col w-auto">
              <label htmlFor="">WHAT IS YOUR TIME ESTIMATE?</label>
              <input
                className="border-2 bg-gray-800 focus:outline-green-500 w-[16rem] h-[3rem] pl-3"
                type="text"
                placeholder=""
              />
            </div>
            <div className="flex flex-col w-auto">
              <label htmlFor="">CONTACT NUMBER</label>
              <input
                className="border-2 bg-gray-800 focus:outline-green-500 w-[16rem] h-[3rem] pl-3"
                type="tel"
                placeholder="Contact"
              />
            </div>

            {/* Button to book */}
            <button
              onClick={handleClose}
              className="border-1 bg-transparent text-white border-2 w-[7rem] h-[3rem] mt-5"
            >
              BOOK
            </button>

       
          </div>
        </div>
        )}
        {
          alert&&  <div className="alert">
            <div className=" w-[15rem] h-[3rem] rounded-full bg-green-500 text-black flex justify-center items-center ">
              <h4 className="text-white">success!!!!!</h4>

            </div>
          </div>
        }

        {/* video section */}
        <video
          autoPlay
          muted
          className="video w-full relative z-0"
          style={{ transform: `scale(${videoScale})` }}
        >
          <source src="/Assets/video/videos.mp4" type="video/mp4" />
        </video>
      </section>
    </div>
  );
};

export default Banner;
