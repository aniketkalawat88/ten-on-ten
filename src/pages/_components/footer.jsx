/* eslint-disable @next/next/no-img-element */
import React from 'react'

import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { RiFacebookCircleLine } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa";
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="w-full shadow-2xl shadow-primary-main">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-3 gap-y-8 md:gap-8 md:py-10 max-w-sm mx-auto sm:max-w-3xl lg:max-w-full">
                <div className="col-span-full md:mb-10 lg:col-span-2 lg:mb-0 max-md:mt-4">
                    <Link href="/"  className="flex justify-center">
                    <img
                        src="/assests/logo.png"
                        className="mr-3 h-16"
                        alt="Landwind Logo"
                    />
                    </Link>
                    <p className="md:py-8 sm:py-6 py-4 md:text-2xl text-xl lg:max-w-md text-heading-main font-semibold text-center">
                    {`We recognize the excellence of your hotel, and that's exactly why`} <span className="text-primary-main">{`you've chosen to work with us!`}</span>
                    </p>
                </div>
                <div className="lg:mx-auto text-left ">
                    <h4 className="text-xl text-primary-main font-bold md:mb-7 mb-4">Partnership</h4>
                    <ul className="text-lg font-medium transition-all duration-500">
                        <li className="md:mb-6 mb-2"><a href="#"  className="text-heading-main hover:text-gray-900">website</a></li>
                        <li className="md:mb-6 mb-2"><a href="#"  className=" text-heading-main hover:text-gray-900">social media</a></li>
                        <li><a href="#"  className=" text-heading-main hover:text-gray-900">branding</a></li>
                    </ul>
                </div>
                <div className="lg:mx-auto text-left ">
                    <h4 className="text-xl text-primary-main font-bold md:mb-7 mb-4">About</h4>
                    <ul className="text-lg font-medium transition-all duration-500">
                        <li className="md:mb-6 mb-2"><a href="#"  className="text-heading-main hover:text-gray-900">Our projects</a></li>
                        <li className="md:mb-6 mb-2"><a href="#"  className=" text-heading-main hover:text-gray-900">Carrers</a></li>
                    </ul>
                </div>
                <div className="lg:mx-auto text-left ">
                    <h4 className="text-xl text-primary-main font-bold md:mb-7 mb-4">Support</h4>
                    <ul className="text-lg font-medium transition-all duration-500">
                        <li className="md:mb-6 mb-2"><a href="#"  className="text-heading-main hover:text-gray-900">Support request</a></li>
                        <li className="md:mb-6 mb-2"><a href="#"  className=" text-heading-main hover:text-gray-900">Contact</a></li>
                    </ul>
                </div>
            </div>
            <div className="md:py-7 py-2 border-t border-primary-main">
                <div className="flex items-center justify-center flex-col lg:justify-between lg:flex-row">
                    <span className="md:text-xl text-base text-heading-main font-medium">All right Reserved 2024</span>
                    <div className="flex mt-4 space-x-4 sm:justify-center lg:mt-0 text-2xl text-heading-main">
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