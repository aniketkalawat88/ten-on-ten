import React from 'react'
import Headcomp from './headcomp'
import { poppins } from '@/styles/font'
import { FaLocationDot } from "react-icons/fa6";
import { PiPhoneCallFill } from "react-icons/pi";
import { MdEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { RiFacebookCircleLine } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa";
import Image from 'next/image';

const GetInTouch = () => {
  return (
    <div className="grid grid-cols-2 max-w-7xl mx-auto rounded-3xl overflow-hidden my-20">
        <div className="bg-primary-main/30 px-14 py-8">
            <Headcomp name={'Get in Touch'} />
            <p className="text-secondary-main my-6">Feel Free to drop us a line below.</p>
            <form className="space-y-6 ">
                <input type="text" className="w-full p-2 px-6 rounded-full" placeholder="Name" />
                <input type="text" className="w-full p-2 px-6 rounded-full" placeholder="Email" />
                <textarea placeholder="Message" className="resize-none w-full rounded-lg h-36 p-2 px-6 " />
                <label className="text-secondary-main flex gap-2 items-center text-sm px-2">
                    <input type="checkbox" className="bg-transparent" />
                    I would like to receive the newsletter.
                </label>
                <button className="text-primary-main bg-heading-main p-4 font-bold rounded-full w-36 mt-14 ">Submit</button>
            </form>
        </div>
        <div className="bg-heading-main p-14 text-white relative">
            <h1 className="text-primary-main text-[2rem] font-semibold">Contact us</h1>
            <p className={`text-2xl font-semibold my-5 ${poppins.className}`}>{`We're just a call away from turning your property into a flawless`}<span className="text-primary-main"> 10 out of 10.</span></p>
            <div className={`${poppins.className} space-y-3 my-10`}>
                <p className="flex items-center gap-4">
                    <FaLocationDot className="text-2xl text-primary-main" />B-32 Gautam Nagar, Chetak Bridge, Bhopal (MP) 462024
                </p>
                <p className="flex items-center gap-4">
                    <PiPhoneCallFill className="text-2xl text-primary-main" />+91 8349752729 , +91 7748822938
                </p>
                <p className="flex items-center gap-4">
                    <MdEmail className="text-2xl text-primary-main" />info@tenontenstays.com
                </p>
            </div>
            <div className="flex gap-3 text-2xl ">
                <FaInstagram />
                <FaTwitter />
                <RiFacebookCircleLine />
                <FaYoutube />
            </div>
            <div className=" h-48 w-64 absolute bottom-0 right-0">
                <Image src="/assests/04.png" alt="" fill className="object-cover" />
            </div>
        </div>
    </div>
  )
}

export default GetInTouch