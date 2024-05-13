import React from 'react'
import image1 from '../../public/images/image1.png';
import { MdKeyboardArrowDown } from "react-icons/md";

function Hero() {
  
  return (
    <div className='w-full mt-24  px-0 md:px-0  py-3  md:py-6 xl:py-0  md:flex flex flex-col md:flex-row items-center justify-between'>
  <div className="left w-full md:w-[60%]   xl:pl-28 pl-0  md:px-4  py-10 lg:py-20 font-['Ranade']">
        <h1 className='lg:text-[62px] xl:text-[72px] md:text-[52px] text-[42px] text-center md:text-left tracking-wide font-bold  leading-none'>    Relax. Recline</h1>
        <h1 className='xl:text-[72px] lg:text-[62px] md:text-[52px] text-[42px] text-center md:text-left tracking-wide font-bold  leading-none'>Wind Down.</h1>
        <p className='text-md leading-tight my-5 w-full  md:w-[60%] text-center md:text-left font-["Excon"]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent</p>

        <div className='w-full text-center md:text-left font-[Ranade]'>
            <button className='px-5 py-2 hover:text-black font-semibold duration-300 hover:bg-light-orange bg-[#303030] my-2 md:my-5 text-[#ffffffe3] rounded-lg'>GET STARTED</button>
        </div>
        <div className='xl:ml-64 hidden xl:block w-16 h-16 bg-[#D9D9D9]'></div>


  </div>
  <div className="right md:w-[40%] relative w-full bg-[#CA9277]  lg:py-20">
    <img className='w-full h-[250px] md:h-[500px]  object-cover md:object-contain md:-translate-x-20 lg:-translate-x-[115px]' src={image1} alt="" />
    <div className='w-12 h-12 md:w-20 md:h-20 right-0 hidden md:flex md:right-10 -bottom-1 md:bottom-20 xl:right-20  hover:scale-105 duration-300  shadow-slate-200 hover:bg-light-black absolute xl:flex items-center justify-center rounded-full bg-white '>
    <MdKeyboardArrowDown className='text-2xl md:text-5xl hover:text-white duration-200' />

  </div>

  </div>
        
    </div>
  )
}

export default Hero