import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Learn from './components/Learn'
import Page3 from './components/Page3'
import Discover from './components/Discover'
import Explore from './components/Explore'
import Review from './components/Review'
import Footer from './components/Footer'
import LocomotiveScroll from 'locomotive-scroll';



function App() {
const locomotiveScroll = new LocomotiveScroll();

  
  return (
    <div className='w-full bg-black'>
      <div className='w-full max-w-[1400px] bg-lightwhite px-0 xl:px-0  mx-auto overflow-hidden'>
        <Navbar />
        <Hero />
        <Learn/>
        <Page3/>
        <Discover/>
        <Explore/>
        <Review/>
        <Footer/>
      </div>
    </div>
  )
}

export default App