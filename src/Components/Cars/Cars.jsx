import React, { useEffect, useState } from "react";

const Cars = () => {
  const [scrollY, setScrollY] = useState(0);
  const [bgColor, setBgColor] = useState("transparent");
  const [textTransform, setTextTransform] = useState(0);
  const [videoScale, setVideoScale] = useState(1);
  const [showText, setShowText] = useState(true);
  const [show, setShow] = useState(false);

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
      setShow(true);
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

  return (
    <main>
      <div>
        <section
          className="video-sec relative overflow-hidden md:pt-0 md:mt-[rem] z-0"
          style={{ backgroundColor: bgColor }}
        >
          {/* Video Section */}
          <div className="relative w-full h-full">
            <div
              className="absolute top-0 left-0 h-full w-full z-10"
              style={{
                background:
                  "linear-gradient(to right, rgba(0, 0, 0, 1), transparent)",
              }}
            ></div>

            {/* Video */}
            <video
              autoPlay
              loop
              muted
              className="video w-full h-full relative z-0"
              style={{ transform: `scale(${videoScale})` }}
            >
              <source src="/Assets/video/carsec.mp4" type="video/mp4" />
            </video>
          </div>

          {/* Text Overlay */}
          {show && (
            <div
              className={`absolute top-1/4 px-14 z-20 text-white transition-opacity ${
                showText ? "opacity-100" : "opacity-0"
              }`}
              style={{
                transform: `translateY(${textTransform}px)`,
                transition:
                  "opacity 1s ease-in-out, transform 0.5s ease-in-out",
              }}
            >
              <h2 className="vdo-title text-[17px] font-semibold sm:mt-0 mt-[-1rem] sm:text-[25px] font-Rajdhani md:text-[28px] lg:text-[54px] mb-4">
                Easy and Fast Way To Rent A Cars
                <br />
                With US
              </h2>
              <p className="mb-6 mt-[-1rem] sm:mt-[2rem] lg:mt-[3rem] text-[9px] sm:text-[14px] md:text-[20px] lg:text-[22px]">
                Discover our exceptional selection of rental vehicles tailored
                to your{" "}
                <span className="bg-gradient-to-r from-blue-400 to-blue-700 bg-clip-text text-transparent drop-shadow-lg">
                  preferences
                </span>
                . <br />
                Whether you're planning a quick getaway or an extended vacation.
              </p>
              <button className="vdo-icon bg-transparent w-[140px] h-[50px] hover:bg-[#21C8ED] hidden md:block text-[13px] font-[700] border-[0.568px] border-white mt-[2rem] transition-colors duration-500 text-white py-2 px-4">
                RENT A CAR
              </button>
            </div>
          )}

          {/* Second Text Overlay */}
          <div
            className={`absolute top-1/4 px-14 z-20 text-white transition-opacity ${
              showText ? "opacity-0" : "opacity-100"
            }`}
            style={{
              transform: `translateY(${textTransform}px)`,
              transition:
                "opacity 0.5s ease-in-out, transform 0.5s ease-in-out",
            }}
          >
            <h2 className="vdo-title text-[17px] mt-[-2rem] font-semibold sm:mt-0  sm:text-[25px] md:text-[28px] lg:text-[54px] font-Rajdhani mb-4">
              Find Your Perfect Car At The Best <br /> Price Only With Us
            </h2>
            <p className="mb-6 mt-[-1rem] sm:mt-[2rem] lg:mt-[3rem] text-[9px] sm:text-[14px] text-bold md:text-[20px] lg:text-[22px]">
              Embark on thrilling adventures, face challenges, and explore{" "}
              <span className="bg-gradient-to-r from-blue-400 to-blue-700 bg-clip-text text-transparent drop-shadow-lg">
                endless
              </span>{" "}
              <br />
              opportunities. Unite, compete, and rise to the top.
            </p>
            <button className="vdo-icon bg-transparent w-[140px] h-[50px] hover:bg-[#21C8ED] hidden md:block text-[13px] font-[700] border-[0.568px] border-white mt-[2rem] transition-colors duration-500 text-white py-2 px-4">
              Rent A Car
            </button>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Cars;
