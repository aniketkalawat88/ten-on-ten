import React from 'react'
import Headcomp from './headcomp'
import { poppins } from '@/styles/font'
import Image from 'next/image'
import TeamSection from './team-section'

const AboutCompo = () => {
    const arr = [
        {
            name:'',
            img:'',
        }
    ]
  return (
    <div className="relative">
        <div className="md:h-[30vw] w-full bg-primary-main/50 absolute top-36 -z-10" />
        <div className="max-w-7xl mx-auto xl:p-0 p-6">
            <div className="flex flex-col-reverse lg:flex-row justify-between md:gap-8 sm:gap-6 gap-4 shadow-[0px_8px_16px_0px_rgba(0,0,0,0.16)] md:p-6 p-4 md:my-14 sm:my-6 my-4 rounded-md bg-white">
                <div className="w-full  flex flex-col justify-center">
                <Headcomp name={'About us'} />
                <h1 data-aos="fade-up" data-aos-duration="1000" className="md:text-xl text-lg lg:text-2xl font-bold leading-9 text-gray-800 dark:text-heading-main md:pb-4 pb-2">
                Striving for the <span className="text-primary-main">perfect ten!</span>
                </h1>
                <p data-aos="fade-left" data-aos-duration="1000" className={`font-normal md:text-base text-sm leading-6 text-secondary-main dark:text-secondary-main ${poppins.className}`}>
                {` Our in-house team of experts is dedicated to transforming your hotel business. With a strong background in Marketing and Advertising, and experience with international clients from the USA & UAE, we're ready to deliver exactly what Indian Hotels need to dominate the market. Unlike others, we customize packages and deals tailored to your property, ensuring it reaches new heights. Our committed support team handles bookings and calls seamlessly, while our talented design team creates stunning visuals and videos to showcase your property in the best light.`}
                </p>
                <button className="bg-heading-main text-primary-main hover:bg-heading-main py-2.5 px-4 rounded-full text-base font-bold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg md:w-1/3 md:my-12 my-6 ">Get Free consulation</button>
                </div>
                <div data-aos="zoom-in" data-aos-duration="3000" className="md:w-[80%] relative md:h-[22vw] h-[50vw]">
                <Image src="https://i.ibb.co/FhgPJt8/Rectangle-116.png" alt="A group of People" fill className="object-cover rounded-md" />
                </div>
            </div>
            <div className="max-md:mt-10">
                <Headcomp name={'Meet Our Team'} />
                <TeamSection />
            </div>
        </div>

    </div>
  )
}

export default AboutCompo