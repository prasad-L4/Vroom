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

  const hoverRef = useRef();
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
        duration: 0.1,
        delay: 0.1,
        y: 50,
        scrollTrigger: {
          trigger: "#promis",
          start: "top 90%",
          end: "top 10%",
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
      scrollTrigger: {
        trigger: Blurref.current,
        scrub: true,
        start: "top bottom",
        end: "bottom 70%",
      },
    });
  }, []);
  useGSAP(() => {
    gsap.from(".banner-card", {
      x: -90,
      opacity: 0,
      scrollTrigger: {
        trigger: ".banner-card",
        start: "top 90%",
        end: "top 10%",
        scrub: 1,
      },
    });
    gsap.from(".banner-main", {
      x: -90,
      opacity: 0,
      scrollTrigger: {
        trigger: ".banner-main",
        start: "top 80%",
        end: "top 10%",
        scrub: 1,
      },
    });
  });

  return (
    <>
      <Banner />

      <main className="bg-black  min-h-screen">
        {/* Why Choose Us section */}
        <section className="flex justify-center flex-col text-center">
          <div
            id="promis"
            className="text-white flex justify-center items-center flex-col overflow-hidden text-[1rem] sm:text-[2.4rem] pt-[4rem] w-full max-w-3xl mx-auto" // Set width and max width with margin auto for centering
          >
            <h2
              ref={titleRef}
              className="promis-title text-[2rem] sm:text-[5rem] mt-[-2rem] font-ubuntu"
            >
              Your Journey, Our Promise
            </h2>
            <p
              ref={Blurref}
              className="text w-[80%]  md:w-full  pt-6 text-white mt-5 mb-5 text-center "
              style={{
                overflowWrap: "break-word",
                wordWrap: "break-word",
              }}
            >
              At Vroom, our journey is built on trust, and our promise is
              hassle-free car rentals. From economy to luxury vehicles, we offer
              the perfect ride for every need. Enjoy transparent pricing with no
              hidden fees and easy online booking. We provide flexible pickup
              and drop-off, and our team is always ready to assist whenever you
              need help. Our sanitized, well-maintained fleet ensures a safe and
              comfortable experience. At Vroom, your journey is our
              promise—smooth, simple, and convenient.
            </p>
          </div>
          <div>
            <Courser hoverRef={hoverRef} />
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
                  <h2
                    ref={hoverRef}
                    className=" md:text-[3vw] sm:text-[1.5rem] text-[1.1rem] font-bold mb-2 bg-gradient-to-r from-gray-400 to-black bg-clip-text text-transparent drop-shadow-lg"
                  >
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
                  className="banner-card relative flex justify-center items-center w-[90%] md:w-[48%] "
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
      </main>
    </>
  );
};

export default Home;
