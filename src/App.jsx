import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

function App() {
  return (
    <div className='w-full bg-blue-300 '> 
    <div className='w-full max-w-[1440px] bg-[#FFF4EB] mx-auto overflow-hidden'>
      <Navbar/>
      <Hero/>


    </div>
    </div>
  )
}

export default App