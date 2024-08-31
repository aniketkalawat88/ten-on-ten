import React from 'react'
import Headcomp from './headcomp'
import Image from 'next/image'
import { poppins } from '@/styles/font'

const WhyUs = () => {
  return (
    <div className="bg-primary-main/50 mt-32 pb-20 mb-20">
        <div className="max-w-7xl mx-auto p-8 grid grid-cols-12 gap-8 relative">
            <div className="col-span-8">
                <Headcomp name={'Why us'} />
                <div className="text-[1.4rem] font-semibold my-4 text-heading-main">Striving for the <span className="text-primary-main ">perfect ten!</span></div>
                <p className={`text-secondary-main text-lg ${poppins.className}`}>{`Our in-house team of experts is dedicated to transforming your hotel business. With a strong background in Marketing and Advertising, and experience with international clients from the USA & UAE, we're ready to deliver exactly what Indian Hotels need to dominate the market. Unlike others, we customize packages and deals tailored to your property, ensuring it reaches new heights. Our committed support team handles bookings and calls seamlessly, while our talented design team creates stunning visuals and videos to showcase your property in the best light.`}</p>
            </div>
            <div className="absolute right-0 bottom-0">
                <div className="h-[481px] w-[347px] relative col-span-3 rounded-2xl bg-white shadow-md">
                    <Image src="/assests/03.png" alt="" fill className="object-cover rounded-2xl scale-95" />
                </div>

            </div>
        </div>
        
    </div>
  )
}

export default WhyUs