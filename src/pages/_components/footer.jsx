/* eslint-disable @next/next/no-img-element */
import React from 'react'

import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { RiFacebookCircleLine } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer class="w-full border-t border-t-primary-main">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-3 gap-y-8 md:gap-8 py-10 max-w-sm mx-auto sm:max-w-3xl lg:max-w-full">
                <div class="col-span-full mb-10 lg:col-span-2 lg:mb-0">
                    <a href="#"  class="flex justify-center">
                    <img
                        src="/assests/logo.png"
                        className="h-6 mr-3 sm:h-16"
                        alt="Landwind Logo"
                    />
                    </a>
                    <p class="py-8 text-2xl lg:max-w-md text-heading-main font-semibold text-center">
                    {`We recognize the excellence of your hotel, and that's exactly why`} <span className="text-primary-main">{`you've chosen to work with us!`}</span>
                    </p>
                </div>
                <div class="lg:mx-auto text-left ">
                    <h4 class="text-xl text-primary-main font-bold mb-7 ">Partnership</h4>
                    <ul class="text-lg font-medium transition-all duration-500">
                        <li class="mb-6"><a href="#"  class="text-heading-main hover:text-gray-900">website</a></li>
                        <li class="mb-6"><a href="#"  class=" text-heading-main hover:text-gray-900">social media</a></li>
                        <li><a href="#"  class=" text-heading-main hover:text-gray-900">branding</a></li>
                    </ul>
                </div>
                <div class="lg:mx-auto text-left ">
                    <h4 class="text-xl text-primary-main font-bold mb-7 ">About</h4>
                    <ul class="text-lg font-medium transition-all duration-500">
                        <li class="mb-6"><a href="#"  class="text-heading-main hover:text-gray-900">Our projects</a></li>
                        <li class="mb-6"><a href="#"  class=" text-heading-main hover:text-gray-900">Carrers</a></li>
                    </ul>
                </div>
                <div class="lg:mx-auto text-left ">
                    <h4 class="text-xl text-primary-main font-bold mb-7 ">Support</h4>
                    <ul class="text-lg font-medium transition-all duration-500">
                        <li class="mb-6"><a href="#"  class="text-heading-main hover:text-gray-900">Support request</a></li>
                        <li class="mb-6"><a href="#"  class=" text-heading-main hover:text-gray-900">Contact</a></li>
                    </ul>
                </div>
            </div>
            <div class="py-7 border-t border-primary-main">
                <div class="flex items-center justify-center flex-col lg:justify-between lg:flex-row">
                    <span class="text-xl text-heading-main font-medium">All right Reserved 2024</span>
                    <div class="flex mt-4 space-x-4 sm:justify-center lg:mt-0 text-2xl text-heading-main">
                    <FaInstagram />
                <FaTwitter />
                <RiFacebookCircleLine />
                <FaYoutube />
                    </div>
                </div>
            </div>
        </div>
    </footer>
                                        
  )
}

export default Footer