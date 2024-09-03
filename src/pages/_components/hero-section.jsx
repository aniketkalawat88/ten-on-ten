/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import React from 'react'
import GetCounsularModal from './get-counsular-modal'

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
    <div className="text-[3.41rem] font-bold leading-tight mb-10">
    We know you got a <span className="text-heading-main  drop-shadow-[0px_4px_4px_#C6A669]">fantastic Hotel,</span><br /> and that’s why you’re here!
    </div>
    <p className="text-2xl font-medium text-[#FFFFFFCC] mb-8">
    Growing your hotel business has never been this easy! 
    </p>
    <div
      className=""
    >
     <GetCounsularModal />
    </div>
  </div>
</div>


    </div>
  )
}

export default HeroSection