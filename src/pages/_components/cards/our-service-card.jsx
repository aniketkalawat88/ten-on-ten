import Image from 'next/image'
import React from 'react'

const OurServiceCard = () => {
  return (
    <div className="flip-container w-full md:h-96 h-72" ontouchstart="this.classList.toggle('hover');">
  <div className="flipper">
      <div className="front p-6 shadow shadow-primary-main/50 rounded-xl md:h-96 h-72 w-full">
        <div className="relative md:h-56 h-44 w-full">
            <Image src="/assests/07.png" alt="" fill className="object-cover rounded-xl" />
        </div>
        <p className="text-heading-main md:text-2xl text-xl font-semibold text-center my-10">Social Media Handles</p>
      </div>
    <div className="back">
    <div className="p-6 shadow shadow-primary-main/50 rounded-xl text-center md:h-96 h-72 overflow-hidden">
    <p className=" text-heading-main md:text-2xl text-xl font-semibold ">Website Development</p>
    <p className="mt-4 md:text-xl sm:text-base text-sm text-secondary-main">At Tenontenstays, we design websites specifically for the hospitality industry, making sure they’re not just functional but also friendly and easy to use. Our goal is to simplify everything from booking and room management to guest services, so your hotel can run smoothly and impress your guests. </p>

    </div>
    </div>
  </div>
</div>
  )
}

export default OurServiceCard