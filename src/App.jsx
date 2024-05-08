import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

function App() {
  return (
    <div className='w-full bg-lightwhite'>
      <div className='w-full max-w-[1200px] px-4 xl:px-0  mx-auto overflow-hidden'>
        <Navbar />
        <Hero />
      </div>
    </div>
  )
}

export default App