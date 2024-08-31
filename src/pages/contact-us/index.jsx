import React from 'react'
import BlogHeroSection from '../_components/blog-hero-section'
import { PiPhoneCallFill } from "react-icons/pi";
import { poppins } from '@/styles/font';
import { MdEmail } from 'react-icons/md';
import { IoLocationSharp } from "react-icons/io5";
import Headcomp from '../_components/headcomp';

const index = () => {
  return (
    <div>
        <BlogHeroSection name={'Contact Us'}/>
        <section className="" id="contact">
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid md:grid-cols-2 items-center">
            <div className=" max-w-md">
                <p className="mt-3 text-lg text-[#0F1416]">
                What are you waiting for...
                </p>
                <p className={`text-primary-main text-[2.5rem] font-medium ${poppins.className}`}>Book Now</p>
                <p className={`mt-3 text-lg text-[#0F1416] mb-10 ${poppins.className}`}>
                If you have any questions or comments, please feel free to contact us using the information below.
                </p>
                <ul className="mb-6 md:mb-0">
                    <li className="flex">
                        <div className="flex h-9 w-9 items-center justify-center rounded-full border border-primary-main text-primary-main ">
                            <PiPhoneCallFill className="text-xl" />
                        </div>
                        <div className={`ml-4 mb-6 ${poppins.className}`}>
                            <h3 className={`mb-2 text-2xl font-medium text-primary-main dark:text-primary-main/90`}>Contact
                            </h3>
                            <p className="text-heading-main">+91 8349752729 , +91 7748822938</p>
                        </div>
                    </li>
                    <li className="flex">
                        <div className="flex h-9 w-9 items-center justify-center rounded-full border border-primary-main text-primary-main ">
                            <MdEmail className="text-xl" />
                        </div>
                        <div className={`ml-4 mb-6 ${poppins.className}`}>
                            <h3 className={`mb-2 text-2xl font-medium text-primary-main dark:text-primary-main/90`}>Email
                            </h3>
                            <p className="text-heading-main">info@tenontenstays.com</p>
                        </div>
                    </li>
                    <li className="flex">
                        <div className="flex h-9 w-9 items-center justify-center rounded-full border border-primary-main text-primary-main ">
                            <IoLocationSharp className="text-xl" />
                        </div>
                        <div className={`ml-4 mb-6 ${poppins.className}`}>
                            <h3 className={`mb-2 text-2xl font-medium text-primary-main dark:text-primary-main/90`}>Our Location
                            </h3>
                            <p className="text-heading-main">B-32 Gautam Nagar, Chetak Bridge, Bhopal (MP) 462024</p>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="card h-fit max-w-6xl p-5 md:px-12 shadow-[0px_4px_60px_0px_rgba(0,0,0,0.08)] rounded-xl" id="form">
                <Headcomp name={'Contact With TenonTen'}/>
                <form id="contactForm">
                    <div className="mb-6">
                        <div className="mx-0 mb-1 sm:mb-4">
                            <label>
                                <p className="text-sm font-semibold text-heading-main my-3">Your Name</p>
                                <div className="mx-0 mb-1 sm:mb-4">
                                    <label for="name" className="pb-1 text-xs uppercase tracking-wider"></label><input type="text" id="name" autocomplete="given-name" placeholder="Your name" className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 dark:text-gray-300 sm:mb-0" name="name" />
                                </div>
                            </label>
                            <label>
                                <p className="text-sm font-semibold text-heading-main my-3">Email</p>
                                <div className="mx-0 mb-1 sm:mb-4">
                                    <label for="email" className="pb-1 text-xs uppercase tracking-wider"></label><input type="email" id="email" autocomplete="email" placeholder="Your email address" className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 dark:text-gray-300 sm:mb-0" name="email" />
                                </div>
                            </label>
                            <label>
                                <p className="text-sm font-semibold text-heading-main my-3">Phone Number</p>
                                <div className="mx-0 mb-1 sm:mb-4">
                                    <label for="email" className="pb-1 text-xs uppercase tracking-wider"></label><input type="number" id="number" autocomplete="number" placeholder="Your number " className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 dark:text-gray-300 sm:mb-0" name="email" />
                                </div>
                            </label>
                        </div>
                        <label>
                            <p className="text-sm font-semibold text-heading-main my-3">Message</p>
                            <div className="mx-0 mb-1 sm:mb-4">
                                <label for="textarea" className="pb-1 text-xs uppercase tracking-wider"></label><textarea id="textarea" name="textarea" cols="10" rows="5" placeholder="Write your message..." className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 dark:text-gray-300 sm:mb-0 resize-none"></textarea>
                            </div>
                        </label>
                    </div>
                    <div className="text-center">
                        <button type="submit" className="w-full bg-heading-main text-primary-main px-6 py-3 font-xl rounded-full sm:mb-0">Send Message</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</section>
    </div>
  )
}

export default index