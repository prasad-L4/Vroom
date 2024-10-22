import { useGSAP } from "@gsap/react";
import React, { useEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { MdOutlinePhoneInTalk, MdOutlineMailOutline } from "react-icons/md";

const Subscription = () => {
  const cards = [
    {
      img: "/Assets/images/cardimg-1.jpg",
      title: "Customize your subscription",
      text: "Configure car subscription, select pick-up date and location and complete booking online or via the Vroom site.",
    },
    {
      img: "/Assets/images/cardimg2.jpg",
      title: "Pick up your car",
      text: "Pick up your car at your caring Vroom station, where convenience meets excellence. From the moment you arrive,  stress-free process tailored to your needs",
    },
    {
      img: "/Assets/images/cardimg-3.jpg",
      title: "Adapt your subscription digitally",
      text: "If your needs should change, you can simply adjust your subscription via the app e.g., pause or swap your vehicle.",
    },
    {
      img: "/Assets/images/cardimg-4.jpg",
      title: "Return the car at any time",
      text: "You cancel your subscription simply by returning the vehicle to a Vroom station",
    },
  ];

  useGSAP(() => {
    gsap.from(".stay-card", {
      x: -80,
      duration: 1.5,
      delay: 1.7,
      opacity: 0,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".stay-card",
        start: "top 90%",
        end: "top 60%",
        scrub: 1,
      },
    });
    gsap.from(".stay-title", {
      duration: 1,
      delay: 0.5,
      opacity: 0,
      scrollTrigger: {
        trigger: ".stay-card",
        start: "top 90%",
        end: "top 60%",
        scrub: 1,
      },
    });
    gsap.from(".stay-text", {
      x: -60,
      duration: 1.5,
      delay: 1,
      opacity: 0,
      scrollTrigger: {
        trigger: ".stay-card",
        start: "top 90%",
        end: "top 60%",
        scrub: 1,
      },
    });
    gsap.from(".stay-btn", {
      x: 90,
      duration: 1.7,
      delay: 1.2,
      opacity: 0,
      scrollTrigger: {
        trigger: ".stay-card",
        start: "top 90%",
        end: "top 60%",
        scrub: 1,
      },
    });
    gsap.from(".banner-title", {
      x: -90,
      duration: 1.7,
      delay: 0.5,
      opacity: 0,
    });
    gsap.from(".sub-banner-card", {
      scale: 0,
      duration: 1.9,
      delay: 1.5,
      opacity: 0,
      ease: "power2.out",
    });

    gsap.from(".adv-texts", {
      scale: 0,
      opacity: 0,
      duration: 1,
      delay: 1,
      scrollTrigger: {
        trigger: ".adv-sec",
        start: "top 90%",
        end: "top 60%",
        scrub: 1,
      },
    });
    gsap.from(".wrk-cards", {
      x: -180,
      duration: 1,
      delay: 1,
      opacity: 0,
      stagger: 1,
      scrollTrigger: {
        trigger: ".wrk-cards",
        start: "top 90%",
        end: "top 60%",
        scrub: 1,
      },
    });

    gsap.from(".bus-acnt-sec", {
      scale: 0,
      duration: 2.6,
      delay: 1.7,
      opacity: 0,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".bus-acnt-sec",
        start: "top 90%",
        end: "top 60%",
        scrub: 1,
      },
    });
    gsap.from('.call-btns',{
      y:120,
      duration:1,
      delay:1,
      opacity:0,
      scrollTrigger: {
        trigger: ".call-btns",
        start: "top 90%",
        end: "top 60%",
        scrub: 1,
      },
    })
  });

  return (
    <>
      <main className="bg-black text-white">
        <div>
          <div className="w-[100%] flex justify-center items-center flex-col">
            <div className=" flex flex-col justify-center w-[90%] ">
              <h2 className="banner-title font-Rajdhani font-semibold text-[1.7rem] sm:text-[2rem] md:text-[3rem] bg-gradient-to-r from-gray-400 to-gray-900 bg-clip-text text-transparent drop-shadow-lg">
                Why choose a Vroom+ Car Subscription?
              </h2>
              <div className="sub-banner-card overflow-hidden transition-none mt-[2rem] flex bg-gradient-to-t from-black to-gray-800 shadow-lg rounded-lg lg:h-[40rem] gap-4 lg:flex-nowrap flex-wrap">
                <div className="w-[100%] lg:w-[50%]">
                  <img
                    className="w-[100%]  lg:h-[40rem]"
                    src="/Assets/images/sub-banner.jpg"
                    alt=""
                  />
                </div>
                <div className="  w-[100%] flex flex-col pb-4 justify-center items-center lg:w-[50%] ">
                  <h2 className="text-[1.2rem] sm:text-[2rem] p-2 font-Rajdhani md:text-[3.5rem] bg-gradient-to-r from-gray-400 to-gray-900 bg-clip-text text-transparent drop-shadow-lg">
                    Join the Club for Exclusive Deals & Updates!
                  </h2>
                  <p className="w-full text-[.7rem] sm:text-[1.1rem] text-justify font-inter p-3 text-gray-500">
                    Unlock unbeatable offers and stay ahead with the latest
                    updates on our premium car rentals. From exclusive discounts
                    to early access on new fleet arrivals, our newsletter keeps
                    you in the driver’s seat. Whether you need a sleek ride for
                    your next trip or want to save on rentals, we’ve got you
                    covered. Join the club today and enjoy more benefits every
                    time you hit the road
                  </p>
                  <button className="outline-1 rounded-md p-2 md:text-[1.1rem] mt-2  bg-gradient-to-r from-blue-600 to-blue-900 drop-shadow-lg">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>

            <div className=" stay-card w-[90%] overflow-hidden  p-4 mt-4 sm:mt-[5rem] rounded-md bg-gradient-to-t from-black to-gray-800 shadow-lg  flex lg:flex-row flex-col  justify-around  items-start md:items-center">
              <div className=" w-full lg:w-[60%] overflow-x-hidden ">
                <h3 className="stay-title text-[1.5rem] sm:text-[2rem] bg-gradient-to-r from-blue-500 to-blue-900  bg-clip-text text-transparent drop-shadow-lg  ">
                  Stay flexible with a Vroom + car subscription
                </h3>
                <p className="stay-text sm:text-[1.2rem] text-[.8rem] pt-6 text-justify bg-gradient-to-r from-gray-400 to-gray-700 bg-clip-text text-transparent drop-shadow-lg">
                  Experience the freedom of driving without the commitment of
                  ownership with our flexible DriveEasy car subscription. Select
                  the perfect vehicle from our exclusive lineup, ranging from
                  efficient sedans to spacious and stylish SUVs. Tailor your
                  subscription with various coverage options and mileage plans
                  to suit your lifestyle. Need to adjust your vehicle for
                  different months? With DriveEasy, you can easily switch cars
                  or even pause your subscription whenever necessary, offering
                  you unparalleled convenience and flexibility!
                </p>
              </div>
              <button className="stay-btn outline-1 h-[2.7rem] md:text-[1.3rem] w-[100%] sm:w-[16rem] lg:mt-0 mt-6 bg-gradient-to-r from-blue-500 to-blue-900 drop-shadow-lg ">
                Find Your Car
              </button>
            </div>

            <div className="w-[100%] ">
              <div className="adv-sec flex justify-center  w-[100%] mt-4 sm:mt-[6rem]">
                <div className="flex  justify-start gap-6 lg:gap-0 sm:justify-around w-[90%] md:flex-nowrap flex-wrap  ">
                  <div className="adv-texts flex sm:text-[1rem] text-[.8rem] flex-col font-ubuntu text-gray-500 gap-2">
                    <h2 className=" text-[1.5rem] font-Rajdhani  bg-gradient-to-r from-gray-400 to-gray-700 bg-clip-text text-transparent drop-shadow-lg">No purchasing costs</h2>
                    <p>No down payment</p>
                    <p> No financing charges</p>
                    <p>No vehicle depreciation</p>
                  </div>
                  <div className="adv-texts flex flex-col sm:text-[1rem] text-[.8rem] text-gray-500 gap-2">
                    <h2 className="text-[1.5rem]  bg-gradient-to-r from-gray-400 to-gray-700 bg-clip-text text-transparent drop-shadow-lg">Stay flexible</h2>
                    <p>Available now</p>
                    <p>Possibility of pausing the</p>
                    <p>subscription for up to 3 months</p>
                  </div>
                  <div className="adv-texts flex flex-col sm:text-[1rem] text-[.8rem] text-gray-500 text-justify gap-2">
                    <h2 className="text-[1.5rem]  bg-gradient-to-r from-gray-400 to-gray-700 bg-clip-text text-transparent drop-shadow-lg">Fully customizable</h2>
                    <p>Variety of coverage options for best protection</p>
                    <p>Flexible mileage packages for your needs</p>
                    <p>Choose your ride: from economy sedan to luxury SUV</p>
                  </div>
                </div>
              </div>

              {/* how it works cards */}
              <div className="flex overflow-hidden justify-center mt-6 sm:mt-[6rem] items-center w-[100%]">
                <div className="wrk-cards  w-[90%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {cards.map((items, index) => (
                    <div
                      className="wrk-card flex flex-col sm:w-full w-[100%] p-4 bg-gradient-to-t from-black to-gray-800 shadow-lg rounded-xl transform transition-transform duration-300 hover:scale-105"
                      key={index}
                    >
                      <img
                        className="w-full h-[10rem] sm:h-[14rem] object-cover object-top md:object-center rounded-xl"
                        src={items.img}
                        alt={items.title}
                      />
                      <h2 className="mt-6 text-[1rem] sm:text-[1.5rem] font-Rajdhani bg-gradient-to-r from-blue-400 to-blue-700  bg-clip-text text-transparent drop-shadow-lg ">
                        {items.title}
                      </h2>
                      <p className=" text-justify text-[.7rem] sm:text-[1rem] font-ubuntu  bg-gradient-to-r from-gray-400 to-gray-700 bg-clip-text text-transparent drop-shadow-lg">
                        {items.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <section className="w-[100%] flex  flex-col items-center justify-center mt-3 sm:mt-[6rem]">
                <div className="bus-acnt-sec flex justify-center items-center    flex-wrap-reverse w-[90%]">
                  <div className="w-[100%] md:w-[50%] p-3 ">
                    <h2 className="text-[1.5rem] sm:text-[2.5rem] font-Rajdhani bg-gradient-to-r from-gray-400 to-gray-900 bg-clip-text text-transparent drop-shadow-lg">
                      COMPANIES CAN SAVE EXTRA!
                    </h2>
                    <p className="font-ubuntu text-gray-600 text-[.7rem] sm:text-[1rem] text-justify">
                      We close the gap between monthly rentals and your
                      purchased fleet. Make your company fleet more flexible now
                      and benefit from immediately available cars in a car
                      subscription with monthly cancellation option.
                    </p>
                    <h3 className="font-ubuntu bg-gradient-to-r from-blue-400 to-blue-700 mt-2 bg-clip-text text-transparent drop-shadow-lg">
                      Sign up for a business acount and get an extra 100 km per
                      month
                    </h3>
                    <button className="flex items-center align-baseline outline-1 p-3 h-[2rem] mt-3 rounded-2xl font-Rajdhani bg-gradient-to-r from-blue-600 to-blue-900 drop-shadow-lg">
                      {" "}
                      Sign up{" "}
                    </button>
                  </div>
                  <div className=" w-[100%] md:w-[50%]">
                    <img
                      className=" md:h-[25rem] w-[40rem] object-cover rounded-2xl"
                      src="/Assets/images/sub-banner-1.jpg"
                      alt=""
                    />
                  </div>
                </div>

                <div className="call-btns mt-[4rem] overflow-hidden ">
                  <h2 className="text-[2.5rem] text-center font-Rajdhani bg-gradient-to-r from-gray-400 to-gray-900 bg-clip-text text-transparent drop-shadow-lg">
                    Do you have any further questions?
                  </h2>
                  <div className=" flex gap-4 mt-[3rem] flex-wrap justify-center">
                    <button className="flex justify-center items-center gap-2  w-[90%] sm:w-[20rem] text-[1rem] sm:text-[1.5rem] font-Rajdhani h-[3rem] rounded-md  bg-gradient-to-r from-blue-600 to-blue-900 drop-shadow-lg">
              
                      <span>
                        <MdOutlinePhoneInTalk />
                      </span>
                      Call US
                    </button>
                    <button className="flex justify-center items-center gap-2  w-[90%] sm:w-[20rem] h-[3rem] font-Rajdhani text-[1rem] sm:text-[1.5rem] rounded-md bg-gradient-to-r from-blue-600 to-blue-900 drop-shadow-lg">
                      <span>
                        <MdOutlineMailOutline />
                      </span>{" "}
                      Email US
                    </button>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Subscription;
