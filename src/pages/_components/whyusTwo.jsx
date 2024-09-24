import React from 'react'
import Headcomp from './headcomp'
import Image from 'next/image'
import { poppins } from '@/styles/font'

const WhyusTwo = () => {
  return (
    <div className="bg-primary-main/30 max-md:my-10 overflow-hidden">
         <div className="max-w-7xl mx-auto lg:p-8 p-6 ">
            <div className="">
                <Headcomp name={'Why Us'} />
                <div className="relative md:h-[30vw] h-[50vw] lg:scale-125 md:scale-100 scale-110">
                    <Image src="/assests/20.png" alt="" fill className="object-contain"  data-aos="fade-up" data-aos-duration="2000"/>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default WhyusTwo