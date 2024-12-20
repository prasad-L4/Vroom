import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import Banner from "../Banner/Banner";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Courser from "../Courser/Courser";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const titleRef = useRef(null);
  const Blurref = useRef(null);
  const testiRef = useRef(null);
  const wrapperRef = useRef(null);
  const sliderRef = useRef(null);
  const hoverRef = useRef();
  const component = useRef();
  const slider = useRef();
  const car = [
    {
      img: "/Assets/images/carbanner.jpg ",
      title: "     RENTAL CARS FOR BUSINESS CUSTOMERS",
      text: "    Take advantage of benefits and preferential rates.",
    },
    {
      img: "/Assets/images/carbanner-1.jpg",
      title: "DRIVE LIKE A BOSS",
      text: "Experience the ultimate freedom and luxury on every drive.",
    },
  ];
  const carbanners = [
    {
      id: 1,
      img: "/Assets/images/carbanner-2.jpg ",
      title: "    YOUR AIRPORT TRANSFER",
      text: "    Vroom times more comfort with Vroom ride.",
      discount: "20% Discount",
    },
    {
      id: 2,
      img: "/Assets/images/carbanner-3.jpg",
      title: "YOUR AIRPORT TRANSFER",
      text: "Reliable rides, right when you land",
      discount: "10% Discount",
    },
  ];

  useLayoutEffect(() => {
    const onLoad = () => {
      gsap.from(titleRef.current, {
        opacity: 0,
        duration: 1,
        delay: 0.1,
        scale: 0,
        y: 50,

        scrollTrigger: {
          trigger: "#promis",
          start: "top 90%",
          end: "top 50%",
          scrub: 1,
        },
      });
      ScrollTrigger.refresh();
    };

    window.addEventListener("load", onLoad);

    return () => {
      window.removeEventListener("load", onLoad);
    };
  }, []);

  useEffect(() => {
    const breakText = () => {
      if (Blurref.current) {
        const textContent = Blurref.current.textContent;
        const splitText = textContent.split("");
        Blurref.current.innerHTML = "";
        splitText.forEach((elem) => {
          const span = document.createElement("span");
          span.className = "a";
          span.textContent = elem === " " ? "\u00A0" : elem;
          Blurref.current.appendChild(span);
        });
      }
    };
    breakText();
    gsap.from(".a", {
      opacity: 0.1,
      stagger: 0.1,
      duration: 1,
      delay: 1,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: Blurref.current,
        scrub: 3,
        start: "top bottom",
        end: "bottom 10%",
      },
    });
    // testimonail;
    const testiElements = document.querySelectorAll(".testimonial");
    testiElements.forEach((testiElement) => {
      const splitElement = testiElement.textContent.split("");
      let clutter = "";
      splitElement.forEach((char) => {
        clutter += `<span style="display:inline-block">${char}</span>`;
      });
      testiElement.innerHTML = clutter;
      gsap.from(testiElement.querySelectorAll("span"), {
        y: 50,
        opacity: 0,
        duration: 0.5,
        delay: 0.5,
        stagger: 0.05,
        scrollTrigger: {
          trigger: testiElement,
          start: "top 80%",
          end: "top 10%",
          scrub: 1,
        },
      });

      gsap.set('.splitcard-1', { x: '0%', rotate: 0 });
gsap.set('.splitcard-2', { x: '0%', rotate: 0 });
gsap.set('.split-text', { opacity: 0 });
      gsap.to('.splitcard-1',{
        x:'-100%',
        duration: 1.5,
        rotate:-50,
        scrollTrigger:{
          trigger:'.page-main',
          scrub:1,
          start:'top 10%',
          end:'top -40%',
          immediateRender: false,
          
        }
      })
      gsap.to('.splitcard-2',{
        x:'100%',
        duration: 1.5,
        rotate:50,
        scrollTrigger:{
          trigger:'.page-main',
          scrub:1,
          start:'top 10%',
          end:'top -40%',
          immediateRender: false,
        }
      })
      gsap.to('.split-text',{
        opacity:1,
        duration:1,
        
        scrollTrigger:{
          trigger:'.page-main',
          scrub:1,
          start:'top -5%',
          end:'top 10%'
        }
      })
      ScrollTrigger.refresh();
      gsap.to('.page-main',{
       scrollTrigger:{
        trigger:'.page-main',
        pin:true,
        top:'top 0%',
        end:'top 80%'
       }
        
      })
  
    });
  }, []);
  useGSAP(() => {
    gsap.from(".banner-card", {
      x: -190,
      opacity: 0,
      scrollTrigger: {
        trigger: ".banner-card",
        start: "top 90%",
        end: "top 10%",
        scrub: 1,
      },
    });

    const banner = document.querySelectorAll(".banner-main");
    banner.forEach((elm) => {
      gsap.from(elm, {
        x: -190,
        opacity: 0,
        stagger: 4,
        scrollTrigger: {
          trigger: ".banner-main",
          start: "top 80%",
          end: "top 10%",
          scrub: 1,
        },
      });
    });
  });

  return (
    <>
      <Banner />

      <main className="bg-black overflow-x-hidden ">
        {/* Why Choose Us section */}
        <section className="">
          <div className="flex flex-col justify-center items-center w-[100%]">
            <div
              id="promis"
              className="text-white flex justify-center items-center flex-col overflow- text-[1rem] sm:text-[2.4rem] pt-[4rem] w-[90%]  "
            >
              <h2
                ref={titleRef}
                className="promis-title text-[2rem] text-center sm:text-[5rem] mt-[-2rem] font-Rajdhani"
              >
                Your Journey, Our Promise
              </h2>
              <p
                ref={Blurref}
                className="text w-[80%]   md:w-full p-4 pt-6 text-white-700 font-Rajdhani font-medium  mt-5 mb-5 "
                style={{
                  wordWrap: "break-word",
                  overflowWrap: "break-word",
                  wordBreak: "break-word",
                  hyphens: "auto",
                  textJustify: "inter-word",
                }}
              >
                At Vroom, our journey is built on trust, and our promise is
                hassle-free car rentals. From economy to luxury vehicles, we
                offer the perfect ride for every need. Enjoy transparent pricing
                with no hidden fees and easy online booking. We provide flexible
                pickup and drop-off, and our team is always ready to assist
                whenever you need help. Our sanitized, well-maintained fleet
                ensures a safe and comfortable experience. At Vroom, your
                journey is our promise—smooth, simple, and convenient.
              </p>
            </div>
          </div>

          <div className="overflow-hidden">
            {car.map((item, index) => (
              <div
                key={index}
                className="banner-main relative flex justify-center w-full mt-10"
              >
                <img
                  src={item.img}
                  alt=""
                  className="w-[90%]  mt-4 rounded-2xl "
                />
                <div className="banner-text absolute inset-0 flex sm:gap-6 flex-col justify-center text-start items-start pl-9 md:pl-[7rem] sm:pt-[3rem] pt-5 pb-2 text-white">
                  <h2 className=" md:text-[3vw] sm:text-[1.5rem] text-[1.1rem] font-bold mb-2 bg-gradient-to-r from-gray-400 to-black bg-clip-text text-transparent drop-shadow-lg">
                    {item.title}
                  </h2>
                  <p className="mb-4 text-[.5rem] sm:text-2xl bg-gradient-to-r from-gray-400 to-black bg-clip-text text-transparent drop-shadow-lg">
                    {item.text}
                  </p>
                  <button className="bg-gradient-to-t from-black to-gray-800 hover:from-gray-900 hover:to-black text-white sm:text-[1.2rem] text-[.7rem] font-bold py-2 px-4 rounded shadow-lg transition-all duration-200">
                    <span className="bg-gradient-to-r from-gray-400 to-gray-700 bg-clip-text text-transparent">
                      Register Now For Free
                    </span>
                  </button>
                </div>
              </div>
            ))}

            <div className="flex justify-center items-center flex-wrap mt-[4rem] w-full gap-4">
              {carbanners.map((item, id) => (
                <div
                  key={id}
                  className="banner-card  flex justify-center items-center w-[90%] md:w-[48%] "
                >
                  <img
                    src={item.img}
                    alt=""
                    className="w-full h-full object-cover rounded-2xl"
                  />
                  <div className="absolute top-0 md:top-2 left-0 w-full h-full p-6  md:gap-1 gap-0 flex flex-col justify-end items-start text-white">
                    <div className="outline text-[.7vw] outline-gray-500">
                      <p className=" font-bold">GET</p>
                      <h2 className="text-[2vw] font-bold bg-gradient-to-r from-gray-400 to-black bg-clip-text text-transparent drop-shadow-lg">
                        {item.discount}
                        <br />
                        Discount
                      </h2>
                    </div>
                    <h2 className="mt-2 text-[1.1rem] font-bold  md:text-2xl bg-gradient-to-r from-gray-400 to-black bg-clip-text text-transparent drop-shadow-lg">
                      {item.title}
                    </h2>
                    <p className="mt-1 text-[.5rem] md:text-[.8rem]  bg-gradient-to-r from-gray-400 to-black bg-clip-text text-transparent drop-shadow-lg ">
                      {item.text}
                    </p>
                    <button className="bg-gradient-to-t from-black to-gray-800 hover:from-gray-900 hover:to-black text-white sm:text-[1.2rem] text-[.7rem] font-bold py-2 px-4 rounded shadow-lg transition-all duration-200 mt-4">
                      <span className="bg-gradient-to-r from-gray-400 to-gray-700 bg-clip-text text-transparent">
                        Book Now
                      </span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* testimonial */}
        <section className="w-full">
          <h2 className="testimonial text-center text-white text-[2rem] md:text-[4rem] pt-3 mt-[4rem] sm:mt-8 font-thin">
          Explore!
          </h2>
             <div className="page-main  flex justify-center items-center  ">
             <div className="relative flex justify-center overflow-hidden items-center w-[100%] mt-[rem] sm:mt-[2rem]">
  <div className="flex w-[90%]  justify-center items-center h-[25rem] md:h-screen">
    <img className="splitcard-1 w-[50%] h-[16rem] sm:h-[19rem]  md:h-full object-cover rounded-l-2xl" src="/Assets/images/splitcard-1.jpg" alt="" />
    <img className="splitcard-2 w-[50%] h-[16rem] sm:h-[19rem]  md:h-full  object-cover rounded-r-2xl" src="/Assets/images/splitcard-2.jpg" alt="" />
  </div>
  
  {/* Text over the image */}
  <div className="split-text absolute inset-0 flex flex-col justify-center items-center  opacity-0 text-center text-white">
    <h2 className="md:text-4xl font-bold font-Satisfy bg-gradient-to-r from-blue-400 to-blue-900 bg-clip-text text-transparent  drop-shadow-lg">Drive Your Dream Car Today</h2>
    <p className=" mt-3 font-Satisfy sm:text-[1rem] text-[.7rem]">
      Affordable car rentals for every occasion.<br />
      Whether it’s a weekend getaway or a daily city commute,<br /> we've got you covered.
    </p>
  </div>
</div>
             </div>
   
        </section>

        <section className="flex w-[100%] mt-[2rem] md:mt-[6rem] justify-center items-center">
          <div className="text-white mt-[4rem] flex-wrap lg:flex-nowrap p-5  flex justify-between w-[90%]  items-center bg-gradient-to-b from-black to-gray-900 rounded-xl shadow-lg">
            <div className="lg:w-[30%] bg-">
              <h2 className="text-[2rem] md:text-[3rem]">
                DRIVE FIRST <br />
                CLASS.PAY <br />
                ECONOMY
              </h2>
              <p className="mt-4">
                Premium vehicles without premium prices. We have over 222,000
                rental vehicles in our fleet, which hosts models from some of
                the best car manufacturers in the world, including German
                favorites such as BMW, Mercedes, Audi and more
              </p>
            </div>
            <div className="lg:w-[60%] flex flex-col  lg:mt-0 mt-7 gap-3">
              <div className="flex w-full flex-wrap lg:justify-center gap-3">
                <button className="border p-2 rounded-2xl bg-white text-black ">
                  Kerala cities
                </button>
                <button className="border p-2 rounded-2xl">Worldwide</button>
                <button className=" border p-2 rounded-2xl">Most booked</button>
                <button className="border p-2 rounded-2xl">
                  Fleet & services
                </button>
              </div>
              <div className="flex flex-wrap lg:justify-evenly mt-3 gap-4">
                <div className=" flex flex-col gap-2">
                  <h4>Kochi</h4>
                  <h4>Clicut</h4>
                  <h4>Trivandrum</h4>
                  <h4>Kollam</h4>
                  <h4>Malappuram</h4>
                </div>
                <div className=" flex flex-col gap-2">
                  <h4>Thiruvalla</h4>
                  <h4>Pathanamthitta</h4>
                  <h4>kottayam</h4>
                  <h4>Alappuzha</h4>
                  <h4>manjeri</h4>
                </div>
                <div className=" flex flex-col gap-2">
                  <h4>Kondotty</h4>
                  <h4>Kakkanad</h4>
                  <h4>kottayam</h4>
                  <h4>Alappuzha</h4>
                  <h4>Thurakkal</h4>
                </div>
                <div className=" flex flex-col gap-2">
                  <h4>Kzi</h4>
                  <h4>Edakkara</h4>
                  <h4>Thirur</h4>
                  <h4>Edappally</h4>
                  <h4>Rmka</h4>
                </div>
              </div>
              <h3 class="lg:text-center mt-[2rem] lg:mt-[4rem] text-[2rem] relative inline-block group">
                <span class="relative">
                  Car Rental Worldwide
                  <span class="block absolute bottom-0 left-0 w-0 h-[2px] bg-current transition-all duration-800 ease-in-out group-hover:w-full"></span>
                </span>
              </h3>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
