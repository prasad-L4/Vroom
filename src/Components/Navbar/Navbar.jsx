import { useEffect, useRef, useState } from "react";
import { CiMenuFries } from "react-icons/ci"; 
import { CgClose } from "react-icons/cg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [sideBar, setSideBar] = useState(false);

  const navList = [{name:"Home",path:'/'}, {name:"About Us",path:'/about'}, {name:"Subscription",path:'/subscription'}, {name:"Cars",path:'/cars'}];
  useGSAP(() => {
    gsap.from(".navbar", {
      y: 35,
      duration: 1,
      delay: 0.2,
      stagger: 0.3,
      ease: true,
    });
  });
  useEffect(() => {
    if (sideBar) {
      gsap.from(".sidebar", {
        x: 250,
        duration: 1,
        delay: 0.5,
        stagger: 0.3,
        ease: "power3.out",
      });
    }
  }, [sideBar]);

  const sideref = useRef(null);

  return (
    <>
      <nav  className="bg-black w-full  pt-3 h-[5rem] ">
        <div className="flex justify-between h-[3rem]  font-Rajdhani sm:px-0 px-3 sm:justify-around text-white items-center overflow-hidden py-3">
          <img
            className="w-[100px] h-[50px]"
            src="/Assets/logo.png"
            alt="Logo"
          />
          {navList.map((item, index) => (     
            <ul
              key={index}
              className="navbar    sm:block hidden font-bold overflow-hidden"
            >
             <Link to={item.path}><li>{item.name}</li> </Link> 
            </ul>
          ))}
          <button
            onClick={() => setSideBar(!sideBar)}
            className="sm:hidden block"
          >
            <CiMenuFries size={24} />
          </button>
        </div>
      </nav>

      {/* Sidebar modal */}
      {sideBar && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-20"
            onClick={() => setSideBar(false)}
          ></div>

          {/* Sidebar */}
          <nav style={{zIndex:'9999'}} className="mainsidebar fixed top-0 right-0 bg-black w-[250px] h-full z-50 transform transition-transform duration-300 ease-in-out">
            <div className="flex justify-end p-3 text-[2rem]">
              <button
                onClick={() => setSideBar(false)}
                className="text-white flex "
              >
                <CgClose />
              </button>
            </div>

            <div className="flex flex-col items-start justify-center gap-10 p-4">
              {navList.map((item, index) => (
                <ul className="sidebar mt-4">
                 <Link to={item.path}>
                 <li
                     onClick={() => setSideBar(false)}
                    key={index}
                    ref={sideref}
                    className="my-2 bg-gradient-to-r from-gray-400 to-gray-700 bg-clip-text text-transparent text-[2rem] font-semibold w-[250px]"
                  >
                    {item.name}
                  </li> </Link>
                  <hr className="border-white " />
                </ul>
              ))}
            </div>
          </nav>
        </>
      )}
    </>
  );
};

export default Navbar;
