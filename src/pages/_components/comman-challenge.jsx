import React from 'react'
import Headcomp from './headcomp'
import Image from 'next/image'
import CommonRight from './common-right'

const CommanChallenge = () => {
    const sol = ["Shock the web! ","Make the online booking platforms work","Calling and support "]
  return (
    <div  className="max-w-7xl mx-auto xl:p-0 p-6 ">
        <div className="grid md:grid-cols-2 md:my-10">
            <div>
                <Headcomp name={'Common Challenges'} />
                <div data-aos="zoom-out-up" data-aos-duration="1000" className="md:text-xl text-base font-semibold md:my-6 my-2 text-heading-main">We know growing your hotel business can be a fuss sometimes, sign up and see your <span className="text-primary-main "> business grow with us!</span></div>
                <ul data-aos="fade-up" data-aos-duration="1000" className="md:text-xl sm:text-lg text-base md:space-y-6 sm:space-y-4 space-y-2 pl-5 list-disc font-medium text-secondary-main w-[95%] text-justify">
                    <li>Do you also want to increase your booking score ?</li>
                    <li>Do you also think that you deserve more bookings than competitors around ?</li>
                    <li>Do you also face issues handling business bookings online ?</li>
                    <li>Do you also want to have a better online presence ?</li>
                    <li>Do you also wish to grow your hotel business over social media ?</li>
                    <li>Do you also face issues closing the booking deals ?</li>
                </ul>
            </div>
            <div  data-aos="fade-up" data-aos-duration="2000">
                <CommonRight />
            </div>
            
        </div>
        <div className="relative lg:my-10 md:my-8 sm:my-6 my-4 " >
            <Headcomp name={'Our Solutions'} />
            <p data-aos="fade-up" data-aos-duration="1000" className="md:text-xl sm:text-lg text-base font-medium text-secondary-main my-4 max-w-6xl">With our advanced booking management system and OTA platform, handover your booking hassel to us and watch them boom! </p>
            <div className="">
            <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:w-[96%] mx-auto md:gap-8 sm:gap-6 gap-4">
                {
                    sol.map((ele,i) => (
                        <div data-aos="fade-right" data-aos-duration={(i+1)*1000} key={i} className="md:py-6 py-4 md:px-4 px-2 shadow-2xl rounded-xl bg-white" >
                            <div className="relative md:h-56 h-40 w-full">
                                <Image src="/assests/02.png" alt="" fill className="object-cover rounded-xl" />
                            </div>
                            <p className="lg:text-2xl md:text-xl  text-heading-main text-center md:my-5 my-3 font-semibold" >{ele} </p>
                        </div>
                    ))
                }
            </div>
            <div className="flex justify-center md:mt-14 sm:mt-8 mt-4">
                <button className="bg-heading-main text-lg text-primary-main w-56 py-2.5 rounded-full">View all</button>
            </div>
            <div className="w-full absolute bottom-5 -z-10 max-md:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" width="" height="" viewBox="0 0 1268 364" fill="none">
                <path d="M0 64.9359C0 28.0895 31.0343 -1.14672 67.8151 1.04973L1207.82 69.1273C1241.62 71.146 1268 99.149 1268 133.014V300C1268 335.346 1239.35 364 1204 364H64C28.6538 364 0 335.346 0 300V64.9359Z" fill="#F7EBDA"/>
            </svg>
            </div>
            </div>
        </div>


    </div>
  )
}

export default CommanChallenge