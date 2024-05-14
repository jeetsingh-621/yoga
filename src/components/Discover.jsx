import React from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Discover() {
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(useGSAP);


  useGSAP(()=>{
    gsap.from('.heading , .btn', {
      scrollTrigger: {
        trigger: '.heading',
        start: 'top 80%',
        end: 'bottom center',
        // scrub: 1,
        // pin: true,
      },
      opacity: 0,
      y: 20,
      duration: 0.8,
      ease: 'power3.out',
      // stagger:0.1
    });
  })

  return (
    <div className='w-full py-10 md:py-16 bg-light-black flex flex-col items-center justify-center'>
        <h1  className='heading text-white text-4xl md:text-8xl leading-none tracking-tight font-[Ranade] text-center'>Discover yourself  <br />
          through yoga</h1>
          <div className='btn w-full text-center mt-5 md:mt-10'>
            <button className='bg-light-orange duration-300 hover:text-black px-6 md:px-8 text-sm font-[Ranade] text-white  rounded-lg py-3'>START YOUR JOURNEY </button>
           </div>

    </div>
  )
}

export default Discover