import React from 'react'

const Hero = () => {
  return (
    <section className="relative w-full h-screen flex flex-col justify-center px-10 md:px-20">
      {/* Symphony music club */}
      <div className="max-w-4xl">
        <h1 className="text-[#fbbd1d] text-7xl md:text-9xl font-black uppercase leading-[0.9] tracking-tighter">
          Symphony <br /> Music <br />Club
        </h1>
      </div>

      {/* slogan */}
      <div className="mt-10 self-end md:mr-20">
        <p className="text-white text-lg md:text-xl font-medium italic tracking-widest uppercase">
          "Where talent rises and music comes alive"
        </p>
      </div>
      
    </section>
  )
}

export default Hero