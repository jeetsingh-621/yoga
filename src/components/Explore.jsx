import React from 'react'
import video from "../../public/images/video.png"
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Explore() {

    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(useGSAP);

    useGSAP(()=>{
        gsap.from(".explore h1 , .explore p, .btnnn",{
            y:30,
            opacity:0,
            duration:1,
            stagger:0.3,
            scrollTrigger:{
                trigger:".explore",
                scroller:"body",
                start:"top 70%",
                end:"bottom 80%",
                toggleActions:"play none none reverse",
                // scrub:true,
                // pin:true,
            }
        })
        gsap.from(".videoimg",{
            x:-300,
            opacity:0,
            duration:1,
        
            scrollTrigger:{
                trigger:".videoimg",
                scroller:"body",
                start:"top 70%",
                end:"bottom 10%",
                // toggleActions:"play none none reverse",
                // scrub:true,
                // pin:true,
            }
        })
    })
  return (
    <div className='explore w-full py-10 md:py-20 pb-32 md:pb-72  relative'>
<h1 className='text-center text-3xl tracking-tight md:text-6xl font-semibold'>Explore our video <br /> courses today.</h1>
<p className='text-center leading-none text-sm md:text-lg md:leading-normal py-8'>Practice anywhere, anytime. Explore our online classes as new way to <br /> exercise and learn more about yourself.</p>
<div className='btnnn text-center'>
    <button className='bg-light-black duration-300 hover:bg-light-orange hover:text-black px-8 text-sm font-[Ranade] text-white   rounded-lg py-3'>WATCH OUR ONLINE COURSES </button>
</div>

<div className=' p-5 md:p-20 w-full h-full absolute top-48 md:top-96 text-center'>
    <img className= 'videoimg mx-auto w-full md:w-[90%] h-full md:h-[80%] object-contain' src={video} alt="" />
</div>
    </div>
  )
}

export default Explore