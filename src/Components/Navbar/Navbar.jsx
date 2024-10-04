import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";
const Navbar = () => {
  const navList = ["Home", "About", "Service", "Career", "Company"];

  const navgsap = useGSAP(() => {
    gsap.from("li", {
      y: 30,
      duration: 0.5,
      delay: 0.2,
      stagger: 0.3,
    });
  });

  return (
    <>
      <nav className=" bg-black w-full h-[5rem]   ">
        <div className="flex justify-around text-white items-center py-3">
          <img className="w-[50px] h-[50px] " src="/Assets/logo.png" alt="" />

          {navList.map((item, index) => (
            <ul key={index} className=" font-bold overflow-hidden">
              <li>{item}</li>
            </ul>
          ))}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
