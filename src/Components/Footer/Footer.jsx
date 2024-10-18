import React from "react";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <footer>
        <div className="w-full pt-[2rem] md:pt-[6rem]  bg-black text-white flex justify-center ">
          <div className="w-[90%]">
            <div className="flex  justify-between ">
              <div className="">
                <img src="/Assets/logo.png" alt="" />
              </div>
              <div className="flex text-white text-[1.4rem] gap-3">
                <FaInstagram />
                <FaLinkedin /> <FaXTwitter />
              </div>
            </div>
            <div className="flex items-center justify-between mt-[3rem] flex-wrap">
              <div className="flex flex-col gap-3 items-start">
                <h2>Our programs</h2>
                <button>Car Subscription</button>
                <button>Vroom ride</button>
                <button>Car rental deals</button>
                <button>Vroom status program</button>
              </div>
              <div className="flex flex-col gap-3 items-start">
                <h2>For Business</h2>
                <button>Register my business</button>
                <button>Mobility for Business Travel</button>
                <button>Business car alternatives</button>
                <button>Travel agencies</button>
              </div>
              <div className="flex flex-col gap-3 items-start">
                <h2>About us</h2>
                <button>Vroom Group</button>
                <button>Vroom News</button>
                <button>Investor Relations</button>
                <button>Careers</button>
              </div>
            </div>
    
                <div className="flex justify-around md:justify-between flex-wrap items-end h-[10rem] pb-4 ">
                    <h2>Help</h2>
                    <h2>Rental Information</h2>
                    <h2>Vroom For Business</h2>
                    <h2>Vroom Partners</h2>
                    <h2>Vroom Magazine</h2>
                    <h2>Terms & conditions</h2>
                </div>

          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
