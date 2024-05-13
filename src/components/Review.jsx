import React from 'react'
import quote from "../../public/images/quote.png"
import ellipse from "../../public/images/Ellipse1.png"

function Review() {
  return (
    <div className='w-full pt-36 md:pt-64 py-10 md:py-20 text-white  bg-light-black'>
        <div className=' w-full xl:w-[60%] md:px-20 xl:mx-auto'>
        <div className='flex px-2 gap-4 md:gap-4 xl:gap-8'>
            <img className='xl:w-16 md:w-12 md:h-12 xl:h-16 w-10 h-10 ' src={quote} alt="" />
            <div className='w-full  '>
                <p className='w-[85%] md:w-[100%] xl:w-[90%] leading-none tracking-tight  text-justify text-sm md:text-2xl  xl:text-2xl '>I’ve been to a few different places before but nothing compares to this. The flexible schedule is great.</p>
                <div className='flex gap-2 md:gap-4 items-center mt-5 md:mt-10 '>
                    <div className='rounded-full w-12 h-12 bg-black'>
                        <img src={ellipse} alt="" />
                    </div>
                    <div>
                        <h1>Manya Bansal</h1>
                        <h2>CEO</h2>
                    </div>


                </div>
            </div>
            </div>
        </div>



    </div>
  )
}

export default Review