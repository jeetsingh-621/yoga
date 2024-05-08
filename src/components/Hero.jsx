import React from 'react'
import image1 from '../../public/images/image1.png'

function Hero() {
  return (
    <div className='w-full  mx-auto px-2 b  py-3 md:px-0 md:py-6  flex items-center justify-between'>
  <div className="left  w-[60%]  pl-32  px-0 py-20 font-['Ranade']">
        <h1 className='text-[72px] tracking-wide font-bold  leading-none'>    Relax. Recline</h1>
        <h1 className='text-[72px] tracking-wide font-bold  leading-none'>Wind Down.</h1>
        <p className='text-md leading-tight my-5 w-[60%] font-["Excon"]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent</p>

        <div className='w-full font-[Ranade]'>
            <button className='px-5 py-2 bg-[#303030] my-5 text-[#ffffffe3] rounded-lg'>GET STARTED</button>
        </div>


  </div>
  <div className="right w-[40%]  bg-[#CA9277]  py-20">
    <img className='w-full h-[500px] object-contain -translate-x-40' src={image1} alt="" />

  </div>
        
    </div>
  )
}

export default Hero