import React from 'react'
import logo from '../../public/images/logo.png'
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { Link, Route, Router, Routes } from 'react-router-dom';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";


function Footer() {

    useGSAP(()=>{
        gsap.from(".logooo,.para2,.icons",{
            opacity:0,
            y:30,
            stagger:0.3,
            duration:0.6,
            scrollTrigger: {
                trigger: ".logooo",
                scroller:'body',
                start: "top 80%",
                end: "bottom 90%",
                // markers:true,
                // scrub: 1,
                // pin: true,
                // pinSpacing: false,
                // toggleActions: "play none none none"
            }
        })
        gsap.from(".about1,.support1,.contact1",{
            opacity:0,
            y:30,
            // stagger:0.3,
            duration:0.6,
            scrollTrigger: {
                trigger: ".about1",
                scroller:'body',
                start: "top 80%",
                end: "bottom 90%",
                // markers:true,
                // scrub: 1,
                // pin: true,
                // pinSpacing: false,
                // toggleActions: "play none none none"
            }
        })
        gsap.from(".about, .support,.contact",{
            opacity:0,
            y:30,
            // stagger:0.3,
            duration:1.5,
            scrollTrigger: {
                trigger: ".about,.support ",
                scroller:'body',
                start: "top 80%",
                end: "bottom 100%",
                // markers:true,
                // scrub: 1,
                // pin: true,
                // pinSpacing: false,
                // toggleActions: "play none none none"
            }
        })
    })
  return (
    <div className='w-full  md:flex xl:px-20 md:px-10 py-10 md:py-10 xl:py-20'>
        <div className='w-full text-center md:text-left md:w-[34%] xl:w-[40%]'>
            <img className='logooo w-[35%] mx-auto md:mx-0 object-cover' src={logo} alt="" />

            <p className='para2 py-5 leading-none w-full md:w-[80%] xl:w-[50%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam</p>

            <div className='icons w-full py-5 flex  md:items-start md:justify-start items-center justify-center gap-4'>
                    <Link to='https://www.instagram.com/' target="_blank">
                <div className='w-8 h-8 cursor-pointer bg-black flex items-center justify-center rounded-full'>
                <AiFillInstagram  color='white' size={20}/>
                </div>
                </Link>
                <Link to="https://www.youtube.com/ " target="_blank">
                <div className='w-8 h-8 cursor-pointer bg-black flex items-center justify-center rounded-full'>
                <FaYoutube color='white' size={20}/>
                </div>
                </Link>
              
              <Link to='https://www.facebook.com/ ' target='_blank'>
                <div className='w-8 h-8 cursor-pointer bg-black flex items-center justify-center rounded-full'>
                <FaFacebookF  color='white' size={20}/>
                </div>
                </Link>
              <Link to='https://www.twitter.com/' target='_blank'>
                <div className='w-8 h-8 cursor-pointer bg-black flex items-center justify-center rounded-full'>
                <FaTwitter color='white '  size={20}/>
                </div>
                </Link>
            </div>
        </div>
        <div className=' w-full mt-5 md:mt-0 text-center md:w-[22%] xl:w-[20%]'>
            <h1 className='about1 font-bold py-2'>About</h1>
            <div className='about'>
                <h2 className=' a py-2 text-sm cursor-pointer hover:text-light-orange duration-300 hover:underline '>About us</h2>
                <h2 className=' b py-2 text-sm cursor-pointer hover:text-light-orange duration-300 hover:underline '>Features</h2>
                <h2 className= ' c py-2 text-sm cursor-pointer hover:text-light-orange duration-300 hover:underline '>News & Blog</h2>
                <h2 className='d py-2 text-sm cursor-pointer hover:text-light-orange duration-300 hover:underline '>Terms & Conditions</h2>
            </div>
        </div>
        <div className='w-full mt-5 md:mt-0 text-center md:w-[22%] xl:w-[20%]'>
        <h1 className='support1 font-bold py-2'>Support</h1>
            <div className='support'>
                <h2 className='py-2 text-sm cursor-pointer hover:text-light-orange duration-300 hover:underline '>FAQs</h2>
                <h2 className='py-2 text-sm cursor-pointer hover:text-light-orange duration-300 hover:underline '>Support Center</h2>
                <h2 className='py-2 text-sm cursor-pointer hover:text-light-orange duration-300 hover:underline '>Contact Us </h2>
                <h2 className='py-2 text-sm cursor-pointer hover:text-light-orange duration-300 hover:underline '>Privacy Policy</h2>
            </div>
        </div>
        <div className='w-full mt-5 md:mt-0 text-center md:w-[22%] xl:w-[20%]'>
        <h1 className=' contact1 font-bold py-2'>Contact Us </h1>
            <div className='contact'>
                <h2 className='py-2 text-sm cursor-pointer hover:text-light-orange duration-300 hover:underline '>info@namaste.com</h2>
                <h2 className='py-2 text-sm cursor-pointer hover:text-light-orange duration-300 hover:underline '>Terms & Agreement</h2>
                <h2 className='py-2 text-sm cursor-pointer hover:text-light-orange duration-300 hover:underline '>Privacy Policy</h2>
            </div> 
        </div>

    </div>
  )
}

export default Footer