import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";
import { MdOutlinePhoneInTalk, MdOutlineMailOutline } from "react-icons/md";
const About = () => {
  const calculateScale = () => {
    const screenWidth = window.innerWidth; 
    if (screenWidth < 600) {
      return "10rem"; 
    } else {
      return "30rem";
    }
  };
  useGSAP(() => {
    gsap.to(".title-text", {
      opacity: 0,
      backgroundColor: "transparent",
      scrollTrigger: {
        trigger: ".title-main",
        start: "top 0%",
        end: "top -10%",
        scrub: 1,
      },
    });
    gsap.to(".vdeosec", {
      width: window.innerWidth* 0.9,
      height: calculateScale(),

      top: 50,
      backgroundColor: "black",
      scrollTrigger: {
        trigger: ".title-main",
        start: "top 0%",
        end: "top -20%",
        scrub: 1,
        pin: true,
        scroller: "body",
      },
    });
    gsap.to(".video", {
      opacity: 3,
      width: "100%",
      scrollTrigger: {
        trigger: ".title-main",
        start: "top 0%",
        end: "top -50%",
        scrub: 1,
        pin: true,
        scroller: "body",
      },
    });
    gsap.to("h2 span", {
      opacity: 0,

      scrollTrigger: {
        trigger: ".title-main",
        start: "top 0%",
        end: "top -10%",
        scrub: 1,
      },
    });
    gsap.from(".story-title  span", {
      opacity: 0,
      duration: 1,
      delay: 0.2,
      stagger: 1,
      ease: true,
      scrollTrigger: {
        trigger: ".story-main",
        start: "top 50%",
        end: "top 30%",
        scrub: 1,
      },
    });
    gsap.from(".abt-card", {
      x: -150,
      duration: 0.1,

      scrollTrigger: {
        trigger: ".abt-card",
        start: "top 80%",
        end: "top 30%",
        scrub: 1,
      },
    });

    gsap.to(".abt-img1", {
      translateX: "100%",

      rotate: -30,
      duration: 1,
      scale: 0.3,
      scrollTrigger: {
        trigger: ".card-swipe",
        start: "top -10%",
        end: "top -80%",
        marker: true,
        scrub: 1,
        scroller: "body",
        pin: true,
      },
    });

    gsap.to(".abt-img2", {
      translateX: "-90%",

      translateY: "-35%",
      rotate: 30,
      scale: 0.3,
      duration: 1,
      scrollTrigger: {
        trigger: ".card-swipe",
        start: "top -10%",
        end: "top -80%",
        scrub: 1,
        scroller: "body",
      },
    });
    gsap.to(".abt-img3", {
      translateX: "-80%",

      translateY: "45%",
      rotate: -30,
      scale: 0.3,
      duration: 1,
      scrollTrigger: {
        trigger: ".card-swipe",
        start: "top -10%",
        end: "top -80%",
        scrub: 1,
        scroller: "body",
      },
    });
    gsap.to(".abt-img4", {
      translateY: "-40%",
      translateX: "80%",
      rotate: 30,
      scale: 0.3,
      duration: 1,
      scrollTrigger: {
        trigger: ".card-swipe",
        start: "top -10%",
        end: "top -80%",
        scrub: 1,
        scroller: "body",
      },
    });

    gsap.to(".abt-img5", {
      translateX: "70%",

      translateY: "45%",
      rotate: -30,
      scale: 0.3,
      duration: 1,
      scrollTrigger: {
        trigger: ".card-swipe",
        start: "top -10%",
        end: "top -80%",
        scrub: 1,
        scroller: "body",
      },
    });
    gsap.to(".swiper-card-text", {
      opacity: 1,
      delay: 2,
      scale: 1,
      duration: 1,
      scrollTrigger: {
        trigger: ".card-swipe",
        start: "top -10%",
        end: "top -80%",
        scrub: 1,
        scroller: "body",
      },
    });
    gsap.from('.cntct-sec',{
      y:150,
      duration:1,
      scrollTrigger: {
        trigger: ".cntct-sec",
        start: "top 0%",
        end: "top -80%",
        scrub: 1,
        scroller: "body",
      },
    })
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

  const profileCards = [
    { img: "/Assets/images/abt-pro-1.jpg" },
    { img: "/Assets/images/abt-pro-2.jpg" },
    { img: "/Assets/images/abt-pro-3.jpg" },
    { img: "/Assets/images/abt-pro-4.jpg" },
    { img: "/Assets/images/abt-pro-5.jpg" },
  ];
  const testimonialdatas = [
    {
      img: "/Assets/images/pic-1.jpg",
      name: "JOHN WICK",
      trip: "5,722 Trips",
      star: "⭐⭐⭐⭐⭐",
      text: "Renting a luxury car from this service was the highlight of my trip! The car was in immaculate condition, and driving it felt like a dream. The staff provided top-notch service, making the whole experience unforgettable.",
    },
    {
      img: "/Assets/images/pic-3.jpg",
      name: "KATHERIN",
      trip: "2,722 Trips",
      star: "⭐⭐⭐⭐⭐",
      text: "The comfort and features were outstanding. Plus, the pick-up and drop-off were seamless. Highly recommend for anyone seeking a premium experience",
    },
    {
      img: "/Assets/images/pic-2.jpg",
      name: "VINCENT",
      trip: "3,322 Trips",
      star: "⭐⭐⭐⭐",
      text: "I rented a luxury sedan for a business trip, and it made quite an impression! The car was sleek, sophisticated, and drove like a dream. There was a slight delay during pick-up, but overall, I was very satisfied..",
    },
    {
      img: "/Assets/images/pic-4.jpg",
      name: "LAGARTHA",
      trip: "1,573 Trips",
      star: "⭐⭐⭐⭐⭐",
      text: "The service I received was outstanding! The team was attentive and made sure I had everything I needed for my luxury rental. The car was beautiful and performed flawlessly. I’ll be returning for my next trip",
    },

  
  ];
  return (
    <>
      <main style={{overflowX:'hidden'}} className="bg-black overflow-hidden  ">
        <div  className="title-sec w-[100%]  overflow-hidden  flex justify-center items-center">
          <div  className="titile-main w-[90%] overflow-hidden md:h-[30rem] lg:h-[40rem]    mt-5">
            <h2 className=" flex flex-col gap-3  text-gray-400 items-center text-[1.6rem] md:text-[2rem] lg:text-[3rem] font-Rajdhani font-bold">
              Discover Our Story:A <br />{" "}
              <div  className="vdeosec  bg-white z-50 w-[10rem] md:w-[12rem] flex justify-center  items-center h-[6rem] pt-3  relative text-black rounded-xl p-2">
                {" "}
                <h3 className=" title-text  text-center"> Video</h3>{" "}
                <video
                  autoPlay
                  loop
                  muted
                  className="video absolute h-[15rem] lg:w-full md:h-[20rem] rounded-xl  lg:h-full right-[10%] opacity-0 md:top-[-4rem] lg:top-0 left-[.3%] z-99"
                  //   style={{ transform: `scale(${videoScale})` }}
                >
                  <source src="/Assets/video/abt.mp4" type="video/mp4" />
                </video>
              </div>
              <span className="title-text-2 text-center  ">
                Story of Excellence in Car Rental Services
              </span>{" "}
            </h2>
            <div className="bg-gradient-to-b from-black overflow-x-hidden to-gray-950 rounded-xl text-[2rem] mt-7 lg:mt-[6rem] sm:p-3 font-Rajdhani">
  <marquee behavior="scroll" direction="left">
  <img className="inline-block" src="/Assets/images/gif.gif" alt="" />
    <h2 className="text-white inline-block mr-10">Welcome to Vroom - Your Trusted Car Rental Service</h2>
    <h2 className="text-white inline-block mr-10">Who We Are: Dedicated to Providing the Best Car Rental Experience</h2>
    <h2 className="text-white inline-block mr-10">Our Mission: Quality, Reliability, and Convenience for Every Journey</h2>
    <h2 className="text-white inline-block mr-10">Why Choose Vroom: Top Cars, Great Prices, Excellent Service</h2>
    <h2 className="text-white inline-block">Contact Us: Let Us Help You Get On the Road Today!</h2>
  
  </marquee>
</div>
          </div>
        </div>

        <section className="story-main text-white w-[100%] flex  flex-col justify-center  items-center">
          <h3 className="story-title text-center text-[2rem] md:text-[3rem] md:p-0 p-    pt-3">
            <span>From</span> <span>Roadmap</span> <span>to</span>{" "}
            <span>Reality</span> <span>: Our Story</span>{" "}
          </h3>
          <div className="abt-card flex flex-col gap-3 overflow-x-hidden  lg:flex-row w-[90%] bg-gradient-to-b from-black to-gray-950 rounded-xl p-5 mx-auto">
            <div className="w-full lg:w-[50%] gap-3 flex flex-col ">
              <h4 className="text-[1.3rem] md:text-[2rem]">
                Driven by Vision, Fueled by Growth
              </h4>
              <p className="text-justify p-2 text-sm md:text-base">
                What started as a vision to simplify car rentals has become a
                trusted name in the industry. From a small fleet, we've grown to
                offer seamless and affordable services, embracing technology
                while staying true to our values of customer satisfaction and
                reliability. Our passion for innovation drives us to deliver the
                best rental experience, making every journey smoother and more
                enjoyable.
              </p>
              <h4 className="text-[1.3rem] md:text-[2rem]">
                Paving the Way to Excellence
              </h4>
              <p className="text-justify p-2 text-sm md:text-base">
                We began with a simple goal: to make car rentals easy,
                affordable, and reliable. Over time, our small fleet has grown,
                and we’ve embraced new technologies to serve our customers
                better. Today, we continue to prioritize convenience and
                customer satisfaction, ensuring every trip is smooth and
                hassle-free.
              </p>
            </div>

            <img
              className="rounded-3xl w-full lg:w-[50%] object-cover h-auto"
              src="/Assets/images/abtcard.jpg"
              alt="About Us"
            />
          </div>
        </section>
        <section className=" overflow-x-hidden">
          <div className="card-swipe text-white relative overflow-hidden  h-screen  items-center flex justify-center ">
            <div className="swiper-card-text opacity-0 flex flex-col w-[80%] md:w-[40%] justify-center items-center">
              <h3 className=" sm:text-[1.4rem] md:text-[2rem] text-center">
                The People Behind the Wheel of Our Success
              </h3>
              <p className="text-center text-[.8rem] md:text-[1rem]">
                Our team is the driving force behind everything we do, committed
                to delivering exceptional service every step of the way. With
                diverse expertise and a shared passion for excellence, we work
                together to ensure your experience is smooth, reliable, and
                unforgettable. Meet the people who make your journey possible!
              </p>
            </div>

            <div className=" flex justify-center items-center  ">
              <img
                className="abt-img1 hidden sm:block w-[10rem] h-[10rem] sm:w-[15rem] sm:h-[15rem]  md:w-[20rem] md:h-[20rem]  lg:w-[30rem]  absolute object-cover rounded-3xl lg:h-[30rem]"
                src="/Assets/images/abt-pro-1.jpg"
                alt=""
                style={{
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              />
              <img
                className="abt-img2 w-[10rem] h-[10rem] sm:w-[15rem] sm:h-[15rem] md:w-[20rem] md:h-[20rem] lg:w-[30rem]  rounded-3xl object-cover absolute lg:h-[30rem]"
                src="/Assets/images/abt-pro-2.jpg"
                alt=""
                style={{
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              />
              <img
                className="abt-img3 w-[10rem] h-[10rem] sm:w-[15rem] sm:h-[15rem] md:w-[20rem] md:h-[20rem] lg:w-[30rem]  rounded-3xl object-cover absolute lg:h-[30rem]"
                src="/Assets/images/abt-pro-3.jpg"
                alt=""
                style={{
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              />
              <img
                className="abt-img4 w-[10rem] h-[10rem] sm:w-[15rem] sm:h-[15rem]  md:w-[20rem] md:h-[20rem] lg:w-[30rem]  rounded-3xl object-cover absolute lg:h-[30rem]"
                src="/Assets/images/abt-pro-4.jpg"
                alt=""
                style={{
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              />
              <img
                className="abt-img5  w-[10rem] h-[10rem] sm:w-[15rem] sm:h-[15rem] md:w-[20rem] md:h-[20rem] lg:w-[30rem]  rounded-3xl object-cover absolute lg:h-[30rem]"
                src="/Assets/images/abt-pro-5.jpg"
                alt=""
                style={{
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              />
            </div>
          </div>
        </section>
        <div>
          

          <div>
          <div className="testi flex justify-center overflow-hidden flex-wrap sm:mt-[6rem]  gap-5 w-[100%] ">
      {testimonialdatas.map((item, index) => (
        <div
          key={index}
          className="testi-cards  flex-wrap justify-center items-center w-[90%] sm:w-[80%]  md:w-[20rem] lg:w-[22rem]  p-3 gap-1 bg-gradient-to-b from-black to-gray-900 rounded-xl shadow-lg "
        >
          <div className="inset-0 bg-gray-800 opacity-15 pointer-events-none rounded-xl"></div>

          <img
            className="w-[100%] sm:w-full md:h-[16rem] h-[10rem] sm:h-[18rem] flex justify-center items-center  object-cover rounded-lg shadow-lg object-center"
            src={item.img}
            alt={item.name}
          />
          <h2 className=" sm:text-lg font-semibold mt-1 text-white">{item.name}</h2>
          <h6 className="text-sm text-gray-300">{item.trip}</h6>
          <h4 className="text-white mt-2">
            <span className="text-[.5rem] sm:text-[1rem] text-yellow-500">{item.star}</span>
          </h4>
          <p className="text-[.8rem] text-gray-300 mt-4 pb-3 text-start">{item.text}</p>
        </div>
      ))}
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
        </div>
      </main>
    </>
  );
};

export default About;
