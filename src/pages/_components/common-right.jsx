/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import React from 'react'

const CommonRight = () => {
  return (
  <div className="h-full w-full flex justify-center items-center relative max-md:my-5">
    <div className="md:h-[35vw] md:w-[35vw] sm:h-[50vw] sm:w-[50vw] h-[70vw] w-[70vw] relative animate-spin-slow border-2 rounded-full flex justify-center items-center" >
      <img src="/assests/09.png" alt="No Preview" className="hover:scale-125 transition-transform cursor-pointer md:h-14 sm:h-10 md:w-14 sm:w-10 h-6 w-8 md:object-cover object-contain absolute left-1/2 md:-top-7 -top-3 rounded-full" />
      <img src="/assests/08.png" alt="No Preview" className="hover:scale-125 transition-transform cursor-pointer md:h-14 sm:h-10 md:w-14 sm:w-10 h-6 w-8 md:object-cover object-contain absolute top-1/4 -left-[1vw] rounded-full" />
      <img src="/assests/13.png" alt="No Preview" className="hover:scale-125 transition-transform cursor-pointer md:h-14 sm:h-10 md:w-14 sm:w-10 h-6 w-8 md:object-cover object-contain absolute bottom-1/4 left-0 rounded-full" />
      <img src="/assests/11.png" alt="No Preview" className="hover:scale-125 transition-transform cursor-pointer md:h-14 sm:h-10 md:w-14 sm:w-10 h-6 w-8 md:object-cover object-contain absolute md:-bottom-7 -bottom-3 md:left-1/2 rounded-full" />
      <img src="/assests/10.png" alt="No Preview" className="hover:scale-125 transition-transform cursor-pointer md:h-14 sm:h-10 md:w-14 sm:w-10 h-6 w-8 md:object-cover object-contain absolute -right-0 bottom-1/4 rounded-full" />
      <img src="/assests/12.png" alt="No Preview" className="hover:scale-125 transition-transform cursor-pointer md:h-14 sm:h-10 md:w-14 sm:w-10 h-6 w-8 md:object-cover object-contain absolute -right-0 top-1/4 rounded-full" />
    </div>
      <div className="md:h-[25vw] md:w-[25vw] sm:h-[40vw] sm:w-[40vw] h-[50vw] w-[50vw] animate-spin-reverse-slow border-2 rounded-full absolute">
        <img src="/assests/15.png" alt="No Preview" className="hover:scale-125 transition-transform cursor-pointer md:h-14 sm:h-10 md:w-14 sm:w-10 h-6 w-8 md:object-cover object-contain absolute left-1/2 md:-top-7 -top-3 rounded-full" />
        <img src="/assests/14.png" alt="No Preview" className="hover:scale-125 transition-transform cursor-pointer md:h-14 sm:h-10 md:w-14 sm:w-10 h-6 w-8 md:object-cover object-contain absolute top-1/4 md:-left-7 -left-3 rounded-full" />
        <img src="/assests/17.png" alt="No Preview" className="hover:scale-125 transition-transform cursor-pointer md:h-14 sm:h-10 md:w-14 sm:w-10 h-6 w-8 md:object-cover object-contain absolute bottom-5 md:left-8 left-2 rounded-full" />
        <img src="/assests/18.png" alt="No Preview" className="hover:scale-125 transition-transform cursor-pointer md:h-14 sm:h-10 md:w-14 sm:w-10 h-6 w-8 md:object-cover object-contain absolute right-12 md:bottom-5 bottom-0 rounded-full" />
        <img src="/assests/16.png" alt="No Preview" className="hover:scale-125 transition-transform cursor-pointer md:h-14 sm:h-10 md:w-14 sm:w-10 h-6 w-8 md:object-cover object-contain absolute md:-right-7 -right-4 bottom-1/2 rounded-full" />
      </div>
      <div className="md:h-[18vw] md:w-[18vw] sm:h-[25vw] sm:w-[25vw] h-[35vw] w-[35vw] rounded-full absolute bg-primary-main/30"></div>
      <div className="md:h-[10vw] md:w-[10vw] sm:h-[20vw] sm:w-[20vw] h-[25vw] w-[25vw] rounded-full absolute bg-white flex justify-center items-center">
        <img src="/assests/19.png" alt="No Preview" className=" md:h-20 md:w-20 h-10 w-10 md:object-cover object-contain rounded-full animate-pulse" />
      </div>
  </div>
  )
}

export default CommonRight


