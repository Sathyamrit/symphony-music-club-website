import React from 'react'
import Hero from '../components/home/Hero'
import AboutUs from './AboutUs'
import Team from './Team'

const Home = () => {
  return (
    <div 
      className="relative min-h-screen bg-fixed bg-center bg-cover bg-no-repeat"
      style={{ backgroundImage: "url('/Background_1_hires.png')" }}
    >
      {/* tint on the background */}
      <div className="absolute inset-0 bg-black/50 z-0"></div> 

      <div className="relative w-full">
        <Hero />
        <AboutUs />
        <Team />
      </div>
    </div>
  )
}

export default Home