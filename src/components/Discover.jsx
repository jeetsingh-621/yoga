import React from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Discover() {
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(useGSAP);


  useGSAP(()=>{
    gsap.from(" .headings , .btn",{
      y:30,
      duration:0.8,
      stagger:0.3,
    
      opacity:0,
      scrollTrigger:{
        // markers:true,
        trigger:".headings",
        start:"top 70%",
        end:"bottom 80%",
        // toggleActions:"play none none reverse",
        // scrub:true,
      }
    })
  })

  return (
    <div className='discover w-full py-10 md:py-16 bg-light-black flex flex-col items-center justify-center'>
        <h1  className='headings text-white text-4xl md:text-8xl leading-none tracking-tight font-[Ranade] text-center'>Discover yourself  <br />
          through yoga</h1>
          <div className='btn w-full text-center mt-5 md:mt-10'>
            <button className='bg-light-orange duration-300 hover:text-black px-6 md:px-8 text-sm font-[Ranade] text-white  rounded-lg py-3'>START YOUR JOURNEY </button>
           </div>

    </div>
  )
}

export default Discover