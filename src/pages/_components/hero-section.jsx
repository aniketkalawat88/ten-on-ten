/* eslint-disable @next/next/no-img-element */
import React from 'react'

const HeroSection = () => {
  return (
    <div>
      <div className="relative bg-gradient-to-r from-purple-600 to-blue-600 text-white overflow-hidden h-[520px]">
  <div className="absolute inset-0">
    <img
      src="/assests/01.png"
      alt="Background Image"
      className="object-cover object-center w-full h-full"
    />
    <div className="absolute inset-0 bg-black opacity-20" />
  </div>
  <div className="relative z-10 flex flex-col justify-center items-center h-full text-center max-w-5xl mx-auto">
    <div className="text-[3.41rem] font-bold leading-tight mb-10 drop-shadow-[0px_4px_4px_#C6A669]">
    We know you got a <span className="text-heading-main ">fantastic Hotel,</span><br /> and that’s why you’re here!
    </div>
    <p className="text-2xl font-medium text-[#FFFFFFCC] mb-8">
    Growing your hotel business has never been this easy! 
    </p>
    <a
      href="#"
      className="bg-heading-main text-primary-main hover:bg-heading-main py-2 px-6 rounded-full text-lg font-bold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg "
    >
     Get Free consulation
    </a>
  </div>
</div>


    </div>
  )
}

export default HeroSection