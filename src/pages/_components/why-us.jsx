import React from 'react'
import Headcomp from './headcomp'
import Image from 'next/image'
import { poppins } from '@/styles/font'

const WhyUs = () => {
  return (
    <div className="bg-primary-main/30 md:mt-32 md:pb-20 md:mb-20">
        <div className="max-w-7xl mx-auto lg:p-8 p-6 md:grid md:grid-cols-12 flex flex-col-reverse justify-center gap-8 relative">
            <div className="md:col-span-8">
                <Headcomp name={'Why us'} />
                <div className="md:text-[1.4rem] text-xl font-semibold my-4 text-heading-main">Striving for the <span className="text-primary-main ">perfect ten!</span></div>
                <p data-aos="fade-up" data-aos-duration="1000"  className={`text-secondary-main md:text-lg sm:text-base text-base ${poppins.className}`}>{`Our in-house team of experts is dedicated to transforming your hotel business. With a strong background in Marketing and Advertising, and experience with international clients from the USA & UAE, we're ready to deliver exactly what Indian Hotels need to dominate the market. Unlike others, we customize packages and deals tailored to your property, ensuring it reaches new heights. Our committed support team handles bookings and calls seamlessly, while our talented design team creates stunning visuals and videos to showcase your property in the best light.`}</p>
            </div>
            <div data-aos="flip-right" data-aos-duration="3000" className="md:absolute right-0 bottom-0 max-md:flex justify-center">
                <div className="md:h-[32vw] md:w-[22vw] sm:h-[50vw] sm:w-[50vw] h-[70vw] w-[70vw] relative col-span-3 rounded-2xl bg-white shadow-md">
                    <Image src="/assests/03.png" alt="" fill className="object-cover rounded-2xl scale-95" />
                </div>

            </div>
        </div>
        
    </div>
  )
}

export default WhyUs