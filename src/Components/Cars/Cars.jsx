import { useGSAP } from "@gsap/react";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


const Cars = () => {
  const [scrollY, setScrollY] = useState(0);
  const [bgColor, setBgColor] = useState("transparent");
  const [textTransform, setTextTransform] = useState(0);
  const [videoScale, setVideoScale] = useState(1);
  const [showText, setShowText] = useState(true);
  const [show, setShow] = useState(false);
  const carcardsRef = useRef(null);

  const CarCards = [
    {
      img: "/Assets/images/carcard-1.jpg",
      title: "Porsche 911 gt3",
      seats: "4",
      Rent: "$1000",
      star: "⭐⭐⭐⭐⭐",
      model: "2023-model",
      km: "7000km",
      about:
        "Porsche is a luxury German brand known for its high-performance sports cars, blending precision engineering with iconic design.",
    },
    {
      img: "/Assets/images/carcard-3.jpg",
      title: "Lexus lc 500",
      seats: "4",
      Rent: "$800",
      star: "⭐⭐⭐⭐⭐",
      model: "2023-model",
      km: "9000km",
      about:
        "The Lexus LC 500 is a stunning luxury coupe that combines bold design, a powerful V8 engine, and exceptional craftsmanship for an exhilarating driving experience",
    },
    {
      img: "/Assets/images/carcard-4.jpg",
      title: "Porsche Panamera g3",
      seats: "4",
      Rent: "$1500",
      star: "⭐⭐⭐⭐⭐",
      model: "2022-model",
      km: "1000km",
      about:
        "The Porsche Panamera is a luxurious high-performance sports sedan that seamlessly blends dynamic driving with refined comfort.",
    },
    {
      img: "/Assets/images/carcard-2.jpg",
      title: "BMW XM",
      seats: "4",
      Rent: "$500",
      star: "⭐⭐⭐⭐⭐",
      model: "2023-model",
      km: "2000km",
      about:
        "The BMW XM is a high-performance plug-in hybrid SUV that combines bold styling, cutting-edge technology, and impressive power for both luxury and dynamic driving",
    },
    {
      img: "/Assets/images/carcard-5.jpg",
      title: "Audi rs7",
      seats: "4",
      Rent: "$700",
      star: "⭐⭐⭐⭐⭐",
      model: "2022-model",
      km: "5000km",
      about:
        "The Audi RS 7 is a high-performance luxury sportback, blending aggressive design, a powerful V8 engine, and advanced technology for an exhilarating yet refined driving experience",
    },
    {
      img: "/Assets/images/carcard-2.jpg",
      title: "BMW XM",
      seats: "4",
      Rent: "$500",
      star: "⭐⭐⭐⭐⭐",
      model: "2023-model",
      km: "2000km",
      about:
        "The BMW XM is a high-performance plug-in hybrid SUV that combines bold styling, cutting-edge technology, and impressive power for both luxury and dynamic driving",
    },
    {
      img: "/Assets/images/carcard-4.jpg",
      title: "Porsche Panamera g3",
      seats: "4",
      Rent: "$1500",
      star: "⭐⭐⭐⭐⭐",
      model: "2022-model",
      km: "1000km",
      about:
        "The Porsche Panamera is a luxurious high-performance sports sedan that seamlessly blends dynamic driving with refined comfort.",
    },
  ];

  const slider = [
    {
      img: "/Assets/images/slidercard1.jpg",
      title: "BMW i4",
      star: "⭐⭐⭐⭐⭐",
    },
    {
      img: "/Assets/images/slidercard2.jpg",
      title: "Benz S class",
      star: "⭐⭐⭐⭐⭐",
    },
    {
      img: "/Assets/images/slidercard3.jpg",
      title: "Lexus",
      star: "⭐⭐⭐⭐⭐",
    },
    {
      img: "/Assets/images/slidercard1.jpg",
      title: "Lexus",
      star: "⭐⭐⭐⭐⭐",
    },
    {
      img: "/Assets/images/slidercard1.jpg",
      title: "Benz A class",
      star: "⭐⭐⭐⭐⭐",
    },
  ];
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
  useGSAP(() => {
    gsap.from("video", {
      scale: 0,
      duration: 1,
      delay: 0.5,
    });
  });

  const cardBlocks = document.querySelectorAll(".cards");

  cardBlocks.forEach((cardBlock) => {
    cardBlock.style.paddingBottom = `${Math.max(
      cardBlock.children.length,
      1
    )}em`;

    Array.from(cardBlock.children).forEach(
      (card, i) => (card.style.transform = `translateY(${i}em)`)
    );
  });

  const sliderRef = useRef(null);

  useEffect(() => {
    // GSAP Animation for infinite horizontal scrolling
    const sliderWidth = sliderRef.current.scrollWidth - sliderRef.current.clientWidth;
    
    gsap.to(sliderRef.current, {
      x: -sliderWidth, 
      duration: 15, 
      ease: 'linear',
      repeat: -1, // Infinite loop
    });

  }, []);

  return (
    <main className="bg-black ">
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

        <section className="w-[100%] flex justify-center ">
          <div className="w-[90%] ">
            <h2 className="bg-gradient-to-r from-gray-400 text-[1.8rem] md:text-[3rem] mt-[3rem] font-semibold to-gray-700 bg-clip-text text-transparent drop-shadow-lg ">
              Explore Our Fleet: Find the Perfect Car for Your Journey
            </h2>

            <div className="container max-w-[100%] mx-auto">
              <div className=" w-full p-4 rounded-xl ">
                <div className="cards p-6 rounded-xl ">
                  {CarCards.map((item, index) => (
                    <div
                      key={index}
                      className="card sticky top-4  w-full   grid grid-cols-1 md:grid-cols-2 items-start gap-4 h-auto bg-gradient-to-b from-black to-gray-950 rounded-xl"
                    >
                      <div className="md:w-full">
                        <img
                          className="md:h-[32rem] h-auto object-cover rounded-xl"
                          src={item.img}
                          alt=""
                        />
                      </div>
                      <div className="text-gray-300 p-4 font-Rajdhani flex flex-col">
                        <h2 className="text-[1.6rem] md:text-[3rem]">
                          {item.title}
                        </h2>
                        <p className=" text-[.8rem] md:text-[1.1rem] font-ubuntu">
                          {item.about}
                        </p>
                        <h4 className=" text-[.8rem] md:text-[1.2rem]">
                          {item.star}{" "}
                        </h4>
                        <p className="text-[.9rem] md:text-[2rem]">
                          {item.seats} seats
                        </p>
                        <h6 className="text-[1rem] md:text-[1.5rem]">
                          {item.km}
                        </h6>
                        <h6 className="text-[1rem] md:text-[1.5rem]">
                          {item.model}
                        </h6>
                        <h5 className="text-[2.6rem]">{item.Rent}/-</h5>
                        <button className="bg-slate-800 w-28 h-14 rounded-xl">
                          Book Now
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
    
        <div className="overflow-hidden w-full">
      <div ref={sliderRef} className="flex flex-row w-auto space-x-6">
        {slider.map((item, index) => (
          <div  
            key={index} 
            className=" w-[90%] md:w-[30rem] flex-shrink-0 text-center gap-2  bg-gradient-to-b from-black to-gray-950 rounded-xl p-4  font-Rajdhani text-gray-400"
           
          >
            <img className="w-full rounded-lg" src={item.img} alt={item.title} />
            <h2 className="text-xl font-bold mt-4">{item.title}</h2> {/* h2 element */}
            <p className="text-base mt-2">{item.star}</p> {/* p element */}
            <button className="outline w-full h-8 mt-2 rounded-md">BookNow</button>
          </div>
        ))}
      </div>
    </div>
       
      </div>
    </main>
  );
};

export default Cars;
