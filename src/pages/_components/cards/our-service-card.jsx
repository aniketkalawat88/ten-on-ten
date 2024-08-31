import Image from 'next/image'
import React from 'react'

const OurServiceCard = () => {
  return (
    <div className="flip-container w-full h-96" ontouchstart="this.classList.toggle('hover');">
  <div className="flipper">
      <div className="front p-6 shadow-lg shadow-black/30 rounded-xl h-96 w-full">
        <div className="relative h-56 w-full">
            <Image src="/assests/07.png" alt="" fill className="object-cover rounded-xl" />
        </div>
        <p className="text-heading-main text-2xl font-semibold text-center my-10">Social Media Handles</p>
      </div>
    <div className="back">
    <div className="p-6 shadow-lg shadow-black/30 rounded-xl text-center h-96 overflow-hidden">
    <p className=" text-heading-main text-2xl font-semibold ">Website Development</p>
    <p className="mt-4 text-xl text-secondary-main">At Tenontenstays, we design websites specifically for the hospitality industry, making sure they’re not just functional but also friendly and easy to use. Our goal is to simplify everything from booking and room management to guest services, so your hotel can run smoothly and impress your guests. </p>

    </div>
    </div>
  </div>
</div>
  )
}

export default OurServiceCard