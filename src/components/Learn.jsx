import React, { useRef } from 'react'
import tutorial from '../../public/images/tutorial.png'
import tutorial1 from '../../public/images/Rectangle.png'
import tutorial2 from '../../public/images/Rectangle2.png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

function Learn() {
  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };
  const settings = {

    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 1800,
    cssEase: "linear",
    pauseOnHover: true,
    initialSlide:0,
    swipeToSlide: true,
    responsive: [
      { 
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 430,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]

  };
  
  var slidedata = [
    {img:tutorial,h2:"Morning routine for beginners",h4:"30 MINS  •  RELAXATION & STRETCHING"},
    {img:tutorial1,h2:"Yoga in house",h4:"30 MINS  •  RELAXATION & STRETCHING"},
    {img:tutorial2,h2:"Balance yoga",h4:"30 MINS  •  RELAXATION & STRETCHING"},
    {img:tutorial1,h2:"Yoga in house",h4:"30 MINS  •  RELAXATION & STRETCHING"},
    {img:tutorial2,h2:"Balance yoga",h4:"30 MINS  •  RELAXATION & STRETCHING"},
    {img:tutorial1,h2:"Yoga in house",h4:"30 MINS  •  RELAXATION & STRETCHING"},
    {img:tutorial2,h2:"Balance yoga",h4:"30 MINS  •  RELAXATION & STRETCHING"},
   

  ]
  return (
    <div className='w-full   py-0 md:px-0 text-white'>
    <div className='w-full py-10 xl:pl-28 pl-0  bg-light-black'>
        <h1 className='lg:text-[54px]  text-center md:text-left xl:text-[64px] md:text-[44px] text-[34px] font-[500] leading-none  font-["Ranade"]'>Learn with us</h1>
        <p className=' w-full text-sm md:text-md text-center md:text-left md:w-[55%] leading-tight px-2 my-5'>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system.</p>
    </div>

    <div className='w-full h-full py-10 bg-light-black'>
      <div className="mx-0 w-full ">
        <Slider {...settings}  ref={slider => {
          sliderRef = slider;
        }}
         className='h-full'>
        {slidedata.map((item,index)=>{
          return( 
            <div className='px-2 lg:px-3  h-full'>
            
               <div key={index} className="slide mx-0  max-w-[380px] h-full flex-shrink-0 w-full">
          <img className='w-full h-full object-contain' src={item.img} />
          <div className=' py-4 '>
            <h2 className='text-lg  leading-none tracking-tight'>{item.h2}</h2>
            <h4 className='text-light-orange  text-xs py-3'>{item.h4}</h4>

          </div>
          </div>
          
        </div>

          )
        })}
        </Slider>
        <div  className='w-full  flex gap-4 py-5 items-center justify-center xl:justify-start px-20'>
          <div onClick={previous} className='w-10 h-10 cursor-pointer rounded-full bg-white text-black flex items-center justify-center'>
          <button className="button" >
          <IoIosArrowBack />
        </button>
       
          </div>
          <div onClick={next} className='bg-white cursor-pointer rounded-full w-10 h-10 flex items-center justify-center text-black'>
          <button className="button" >
          <IoIosArrowForward />
        </button>
          </div>
      </div>
       


      </div>

    </div>
    </div>
  )
}

export default Learn