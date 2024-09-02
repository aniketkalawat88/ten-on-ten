/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import React from 'react'

const CommonRight = () => {
  return (
  <div className="h-full w-full flex justify-center items-center relative">
    <div className="h-[35vw] w-[35vw] relative animate-spin-slow border-2 rounded-full flex justify-center items-center" >
      <img src="/assests/09.png" alt="No Preview" className="hover:scale-125 transition-transform cursor-pointer h-14 w-14 object-cover absolute left-1/2 -top-7 rounded-full" />
      <img src="/assests/08.png" alt="No Preview" className="hover:scale-125 transition-transform cursor-pointer h-14 w-14 object-cover absolute top-1/4 -left-[1vw] rounded-full" />
      <img src="/assests/13.png" alt="No Preview" className="hover:scale-125 transition-transform cursor-pointer h-14 w-14 object-cover absolute bottom-1/4 left-0 rounded-full" />
      <img src="/assests/11.png" alt="No Preview" className="hover:scale-125 transition-transform cursor-pointer h-14 w-14 object-cover absolute -bottom-7 left-1/2 rounded-full" />
      <img src="/assests/10.png" alt="No Preview" className="hover:scale-125 transition-transform cursor-pointer h-14 w-14 object-cover absolute -right-0 bottom-1/4 rounded-full" />
      <img src="/assests/12.png" alt="No Preview" className="hover:scale-125 transition-transform cursor-pointer h-14 w-14 object-cover absolute -right-0 top-1/4 rounded-full" />
    </div>
      <div className="h-[25vw] w-[25vw] animate-spin-reverse-slow border-2 rounded-full absolute">
        <img src="/assests/15.png" alt="No Preview" className="hover:scale-125 transition-transform cursor-pointer h-14 w-14 object-cover absolute left-1/2 -top-7 rounded-full" />
        <img src="/assests/14.png" alt="No Preview" className="hover:scale-125 transition-transform cursor-pointer h-14 w-14 object-cover absolute top-1/4 -left-7 rounded-full" />
        <img src="/assests/17.png" alt="No Preview" className="hover:scale-125 transition-transform cursor-pointer h-14 w-14 object-cover absolute bottom-5 left-8 rounded-full" />
        <img src="/assests/18.png" alt="No Preview" className="hover:scale-125 transition-transform cursor-pointer h-14 w-14 object-cover absolute right-12 bottom-5 rounded-full" />
        <img src="/assests/16.png" alt="No Preview" className="hover:scale-125 transition-transform cursor-pointer h-14 w-14 object-cover absolute -right-7 bottom-1/2 rounded-full" />
      </div>
      <div className="h-[18vw] w-[18vw] rounded-full absolute bg-primary-main/30"></div>
      <div className="h-[10vw] w-[10vw] rounded-full absolute bg-white flex justify-center items-center">
        <img src="/assests/19.png" alt="No Preview" className=" h-20 w-20 object-cover rounded-full hover:animate-pulse" />
      </div>
  </div>
  )
}

export default CommonRight


