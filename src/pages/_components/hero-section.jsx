/* eslint-disable @next/next/no-img-element */
import React , {useContext}  from 'react'
import { RouteContext } from '../../../context/context'

const HeroSection = () => {
  const { PopupOpen  } = useContext(RouteContext)
  
  return (
    <div>
      <div className="relative bg-gradient-to-r from-primary-main to-heading-main text-white overflow-hidden lg:h-[32vw] md:h-[40vw] sm:h-[50vw] h-[50vw]">
  <div className="absolute inset-0">
    <img
      src="/assests/01.png"
      alt="Background Image"
      className="object-cover object-center w-full h-full"
    />
    <div className="absolute inset-0 bg-black opacity-20" />
  </div>
  <div className="relative z-10 flex flex-col justify-center items-center h-full text-center max-w-5xl mx-auto md:p-0 sm:p-4 p-2">
    <div data-aos="fade-up" data-aos-duration="3000" className="lg:text-[3.41rem] md:text-4xl sm:text-3xl text-lg font-bold xl:leading-tight md:mb-10 sm:mb-6">
    We know you got a <span className="text-heading-main  drop-shadow-[0px_4px_4px_#C6A669]">fantastic Hotel,</span><span className="block">and that’s why you’re here!</span>
    </div>
    <p data-aos="fade-up" data-aos-duration="3000" className="md:text-2xl sm:text-xl text-sm font-medium text-[#FFFFFFCC] md:mb-8">
    Growing your hotel business has never been this easy! 
    </p>
    <div>
    <button
        className="bg-heading-main text-primary-main hover:bg-heading-main md:py-2 md:px-6 px-2 py-1 rounded-full lg:text-lg sm:text-base text-sm font-bold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg "
        onClick={PopupOpen}
      >
        Get Free consulation
      </button>
    </div>
  </div>
</div>


    </div>
  )
}

export default HeroSection