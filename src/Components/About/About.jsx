import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

const About = () => {
  const calculateScale = () => {
    const screenWidth = window.innerWidth; // Get the current screen width
    if (screenWidth < 600) {
      return "10rem"; // Extra small screens
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
      width: window.innerWidth,
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
      scale: 0,
      duration: 1,

      scrollTrigger: {
        trigger: ".abt-card",
        start: "top 80%",
        end: "top 30%",
        scrub: 1,
      },
    });

    gsap.to('.abt-img1',{
      translateX:'100%',
     
  
  
        rotate:-30,
        duration:1,
   scale:.3,
        scrollTrigger:{
            trigger:'.card-swipe',
            start:'top -10%',
            end:'top -80%',
            marker:true,
            scrub:1,
            scroller:'body',
            pin:true
        }
    })
    
    gsap.to('.abt-img2',{
      translateX:'-90%',
     
      translateY:'-35%',
        rotate:30,
        scale:.3,
        duration:1,
        scrollTrigger:{
            trigger:'.card-swipe',
            start:'top -10%',
            end:'top -80%',
            scrub:1,
            scroller:'body',
           
        }
    })
    gsap.to('.abt-img3',{
      translateX:'-80%',
     
      translateY:'45%',
        rotate:-30,
        scale:.3,
        duration:1,
        scrollTrigger:{
            trigger:'.card-swipe',
            start:'top -10%',
            end:'top -80%',
            scrub:1,
            scroller:'body',
           
        }
    })
    gsap.to('.abt-img4',{
      translateY:'-40%',
       translateX:'80%',
        rotate:30,
        scale:.3,
        duration:1,
        scrollTrigger:{
            trigger:'.card-swipe',
            start:'top -10%',
            end:'top -80%',
            scrub:1,
            scroller:'body',
           
        }
    })
    
    gsap.to('.abt-img5',{
       translateX:'70%',
     
        translateY:'45%',
         rotate:-30,
         scale:.3,
         duration:1,
         scrollTrigger:{
             trigger:'.card-swipe',
             start:'top -10%',
             end:'top -80%',
             scrub:1,
             scroller:'body',
            
         }
     })
     gsap.to('.swiper-card-text',{
     opacity:1,
     delay:2,
     scale:1,
     duration:1,
       scrollTrigger:{
             trigger:'.card-swipe',
             start:'top -10%',
             end:'top -80%',
             scrub:1,
             scroller:'body',
            
         }
     })
  });

  
  const profileCards = [
    { img: "/Assets/images/abt-pro-1.jpg" },
    { img: "/Assets/images/abt-pro-2.jpg" },
    { img: "/Assets/images/abt-pro-3.jpg" },
    { img: "/Assets/images/abt-pro-4.jpg" },
    { img: "/Assets/images/abt-pro-5.jpg" },
  ];


  return (
    <>
      <main className="bg-black ">
        <div className="title-sec w-[100%]  overflow-x-hidden  flex justify-center">
          <div className="titile-main w-[90%] overflow-hidden md:h-[30rem] lg:h-[40rem]    mt-5">
            <h2 className=" flex flex-col gap-3  text-gray-400 items-center text-[1.5rem] md:text-[2rem] lg:text-[3rem] font-Rajdhani font-bold">
              Discover Our Story:A <br />{" "}
              <div className="vdeosec bg-white z-50 w-[10rem] md:w-[12rem] flex justify-center items-center h-[6rem] pt-3  relative text-black rounded-xl p-2">
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
          </div>
        </div>

        <section className="story-main text-white w-[100%] flex  flex-col justify-center  items-center">
          <h3 className="story-title text-center text-[2rem] md:text-[3rem] md:p-0 p-    pt-3">
            <span>From</span> <span>Roadmap</span> <span>to</span>{" "}
            <span>Reality</span> <span>: Our Story</span>{" "}
          </h3>
          <div className="abt-card flex flex-col gap-3  lg:flex-row w-[90%] bg-gradient-to-b from-black to-gray-950 rounded-xl p-5 mx-auto">
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
          <div className="card-swipe text-white relative overflow-hidden  sm:h-screen h-[30rem] items-center flex justify-center ">
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

            <div className=" flex justify-center items-center  " >
              <img
                className="abt-img1 w-[10rem] h-[10rem] sm:w-[15rem] sm:h-[15rem]  md:w-[20rem] md:h-[20rem]  lg:w-[30rem]  absolute object-cover rounded-3xl lg:h-[30rem]"
                src='/Assets/images/abt-pro-1.jpg'
                alt=""
                style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
              />
              <img
                className="abt-img2 w-[10rem] h-[10rem] sm:w-[15rem] sm:h-[15rem] md:w-[20rem] md:h-[20rem] lg:w-[30rem]  rounded-3xl object-cover absolute lg:h-[30rem]"
                src='/Assets/images/abt-pro-2.jpg'
                alt=""
                style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
              />
              <img
                className="abt-img3 w-[10rem] h-[10rem] sm:w-[15rem] sm:h-[15rem] md:w-[20rem] md:h-[20rem] lg:w-[30rem]  rounded-3xl object-cover absolute lg:h-[30rem]"
                 src='/Assets/images/abt-pro-3.jpg'
                alt=""
                style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
              />
              <img
                className="abt-img4 w-[10rem] h-[10rem] sm:w-[15rem] sm:h-[15rem]  md:w-[20rem] md:h-[20rem] lg:w-[30rem]  rounded-3xl object-cover absolute lg:h-[30rem]"
              src='/Assets/images/abt-pro-4.jpg'
                alt=""
                style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
              />
              <img
                className="abt-img5 w-[10rem] h-[10rem] sm:w-[15rem] sm:h-[15rem] md:w-[20rem] md:h-[20rem] lg:w-[30rem]  rounded-3xl object-cover absolute lg:h-[30rem]"
               src='/Assets/images/abt-pro-5.jpg'
                alt=""
                style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default About;
