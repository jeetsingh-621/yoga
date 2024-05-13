import React, { useEffect, useState } from 'react'
import logo from '../../public/images/logo.png'
import { SlHandbag } from "react-icons/sl";

function Navbar() {
  const [showNavBar, setShowNavBar] = useState(false);
  const toggleNavBar = () => {
    setShowNavBar((prevState) => !prevState);
  };
  // useEffect(() => {
  //   if (showNavBar) {
  //     document.body.classList.add("overflow-hidden");
  //   } else {
  //     document.body.classList.remove("overflow-hidden");
  //   }
  //   return () => {
  //     document.body.classList.remove("overflow-hidden");
  //   };
  // }, [showNavBar]);
  return (
    <div className='max-w-[1400px] relative'>
    <div className='w-full max-w-[1400px] mx-auto fixed  top-0 left- z-[999] bg-lightwhite md:py-6 py-3 px-0 md:px-4 border-b-[0.2px] border-light-orange'>
      <div className='w-full flex items-center justify-between '>
        <div onClick={toggleNavBar} className=" w-full  max-w-11 p-2  z-[2000] ">
          <div
            className={`flex  flex-col w-full cursor-pointer z-[300] ${showNavBar
              ? "gap-0   justify-between   h-6 w-6 ms-0"
              : "gap-[5px]  h-full"
              }`}
          >
            <span
              className={`bg-black ms-auto h-[3px] rounded-xl duration-500 ${showNavBar ? "w-6 rotate-45 translate-y-[11px]" : "w-7"
                }`}
            ></span>
            <span
              className={`bg-black h-[3px] rounded-xl duration-500 ${showNavBar ? "w-0" : "w-5 "
                }`}
            ></span>
            <span
              className={`bg-black ms-auto h-[3px] rounded-xl duration-500 ${showNavBar ? "w-6 -rotate-45 -translate-y-[10px]" : "w-7"
                }`}
            ></span>
          </div>
        </div>
        <div className='w-fit ml-16  px-2'>
          <img className='w-24' src={logo} alt="" />
        </div>
        <div className='hidden md:block hover:bg-light-orange duration-300 cursor-pointer px-5 py-2 rounded-xl'>
          <div className=' w-fit flex items-center gap-2 font-["Excon"]'>
            <SlHandbag />
            <h3 className='font-[600] text-xl'>Cart</h3>

          </div>
        </div>
      </div>

      <div className=''>
        <div
          className={`flex w-full overflow-hidden flex-col items-center justify-center gap-4 sm:gap-6 font-semibold transition-all duration-500 bg-ebony
           ${showNavBar
            ? "w-full max-h-[400px]  z-[100] py-10"
            : "max-h-0"
            }`}
        >
          <ul className="navul px-8 w-full sm:flex flex flex-col gap-8 items-center justify-center font-semibold text-lg lg:gap-10 md:gap-4  sm:text-xl  sm:font-semibold">
            {["Why Namaste", "Features", "Update", "Blog"].map((item, index) => (
              <li className="relative  hover:text-[#CA9277] hover:scale-110 duration-300 hover:underline hover:underline-offset-8" key={index}>
                {item}
              </li>
            ))}

            <div className="sm:flex flex hover:text-white duration-300 hover:bg-[#CA9277] gap-2 items-center  px-5 py-2 rounded-lg">
              <button>Sign Up</button>
              {/* <FaArrowRightLong /> */}
            </div>
          </ul>
        </div>

      </div>
    </div>
    </div>
  )
}

export default Navbar