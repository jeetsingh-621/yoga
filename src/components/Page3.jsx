import React from 'react'
import yoga1 from '../../public/images/yoga1.png'
import yoga2 from '../../public/images/yoga2.png'
import yoga3 from '../../public/images/yoga3.png'
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";


function Page3() {
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(useGSAP);

  useGSAP(()=>{
    gsap.from(".item1 h1, .item1 p, .item1 .btn ",{
      x:100,
      duration:0.6,
      opacity:0,
      stagger:0.3,
      scrollTrigger:{
        trigger:".item1",
      // markers:true,

        start:"top 50%",
        end:"bottom 50%",
        // toggleActions:"play none none reverse"
      }
    })
    gsap.from(".item2 h1, .item2 p, .item2 .btn ",{
      x:-100,
      duration:0.6,
      opacity:0,
      stagger:0.2,
      scrollTrigger:{
        trigger:".item2",
      // markers:true,

        start:"top 50%",
        end:"bottom 50%",
        // toggleActions:"play none none reverse"
      }
    })
    gsap.from(".second .img ",{
      x:100,
      duration:1,
      opacity:0,
    
      scrollTrigger:{
        trigger:".second .img",
      // markers:true,

        start:"top 50%",
        end:"bottom 50%",
        // toggleActions:"play none none reverse"
      }
    })
  })
  
  return (
    <div className='w-full   '>
      <div className="first w-full flex flex-col xl:flex-row">
        <div className='xl:bg-light-orange flex flex-col xl:flex-row items-center justify-center px-2 xl:px-0 xl:py-28 py-10 xl:w-[35%] w-full relative'>
            <img src={yoga2} className='xl:w-[280px] w-full max-w-[350px] h-[400px] object-cover ' alt="" />
            <img src={yoga1} className='xl:absolute w-[280px] h-[350px] my-2 object-cover xl:top-52 xl:-right-16' alt="" />


        </div>
        <div className='  item1 px-2  xl:pl-52 py-10 xl:py-44 xl:w-[65%] w-full'>
           <h1 className='xl:text-[64px] md:text-[64px] xl:text-left md:text-center text-[42px] font-[500]  tracking-wide leading-none  xl:leading-[64px] md:leading-[64px]  font-[Ranade]'>Healthy lifestyle with yoga.</h1>
           <p className='xl:text-[20px]  md:text-center xl:text-left text-[18px] xl:w-[90%] w-full leading-none my-8 xl:my-10 tracking-tight font-[Excon]'>We are a Yoga Studio based in Sidney, Australia. Our goal is to promote a healthy lifestyle through practice of yoga and mindfulness. Classes are held in our studio space and online. Everyone is welcome to join our little community.</p>

           <div className=' btn w-full text-center xl:text-left'>
            <button className='bg-light-black hover:bg-light-orange duration-300 hover:text-black  px-8 text-sm font-[Ranade] text-white  rounded-lg py-3'>ABOUT US </button>
           </div>
        </div>
      </div>
      <div className="second w-full flex items-center justify-between xl:flex-row flex-col-reverse">
        <div className='item2 px-2 xl:px-24 xl:py-28 py-10 xl:w-[55%] w-full relative'>
          <h1 className='xl:text-[64px] md:text-[64px] md:text-center xl:text-left text-[42px] tracking-wide  font-[500]  leading-none  xl:leading-[64px] md:leading-[60px]  font-[Ranade] '>Start with us the body and mind clensing</h1>
          <p className='xl:text-[20px]  md:text-center xl:text-left text-[18px]  w-full leading-none my-8 xl:my-10 tracking-tight font-[Excon]'>No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful.</p>
          <div className='btn w-full text-center xl:text-left'>
            <button className='bg-light-black hover:bg-light-orange duration-300 hover:text-black px-8 text-sm font-[Ranade] text-white  rounded-lg py-3'>START YOUR JOURNEY </button>
           </div>

        </div>
        <div className='xl:pl-32 py-10 xl:py-0 xl:w-[50%] flex justify-end w-full'>
        <img className='img w-full max-w-[500px] px-2 md:mx-auto md:w-[380px] xl:w-full h-full object-cover' src={yoga3} alt="" />
        </div>


      </div>


    </div>
  )
}

export default Page3