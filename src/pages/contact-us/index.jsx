import React, { useState } from 'react';
import BlogHeroSection from '../_components/blog-hero-section';
import { PiPhoneCallFill } from "react-icons/pi";
import { poppins } from '@/styles/font';
import { MdEmail } from 'react-icons/md';
import { IoLocationSharp } from "react-icons/io5";
import Headcomp from '../_components/headcomp';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import { FiLoader } from "react-icons/fi";
import Layout from '../_components/layout';

const ContactUs = () => {
    const [isLoading, setIsLoading] = useState(false);      
    const [isVal, setIsVal] = useState({
        name: '',
        email: '',
        number: '',
        message: '',
        property: ''  // Added property field
    });

    const handleChange = (e) => {
        setIsVal({
            ...isVal,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const isFetch = async () => {
            try {
                setIsLoading(true);
                const res = await axios.post("https://sheetdb.io/api/v1/59aqknib5ssla", isVal);
                setIsLoading(false);
                toast.success("Data Submitted Successfully");
                console.log(res, "res");
            } catch (err) {
                console.log(err, "error hai");
                toast.error("Data Not Submitted");
                setIsLoading(false);
            }
        };
        isFetch();
        setIsVal({
            name: '',
            email: '',
            number: '',
            message: '',
            property: ''  // Reset property field
        });
    };

    return (
        <Layout>
            <BlogHeroSection name={'Contact Us'} />
            <section>
                <div className="mx-auto max-w-6xl px-4 md:py-16 sm:px-6 lg:px-8 lg:py-20 max-md:p-6">
                    <div className="grid md:grid-cols-2 items-center">
                        <div data-aos="fade-right" data-aos-duration="3000" className=" max-w-md">
                            <p className="md:mt-3 md:text-lg text-base text-[#0F1416]">
                                What are you waiting for...
                            </p>
                            <p className={`text-primary-main lg:text-[2.5rem] md:text-3xl text-2xl font-medium md:my-3 my-1 ${poppins.className}`}>
                                Book Now
                            </p>
                            <p className={` md:text-lg sm:text-base text-xs text-[#0F1416] md:mb-10 mb-4 ${poppins.className}`}>
                                If you have any questions or comments, please feel free to contact us using the information below.
                            </p>
                            <ul className="mb-6 md:mb-0">
                                <li className="flex">
                                    <div className="flex h-9 w-9 items-center justify-center rounded-full border border-primary-main text-primary-main ">
                                        <PiPhoneCallFill className="text-xl" />
                                    </div>
                                    <div className={`ml-4 md:mb-6 mb-4 ${poppins.className}`}>
                                        <h3 className={`mb-2 md:text-2xl text-xl font-medium text-primary-main dark:text-primary-main/90`}>
                                            Contact
                                        </h3>
                                        <p className="text-heading-main md:text-base text-xs">
                                            +91 8349752729 , +91 7748822938
                                        </p>
                                    </div>
                                </li>
                                <li className="flex">
                                    <div className="flex h-9 w-9 items-center justify-center rounded-full border border-primary-main text-primary-main ">
                                        <MdEmail className="text-xl" />
                                    </div>
                                    <div className={`ml-4 md:mb-6 mb-4 ${poppins.className}`}>
                                        <h3 className={`mb-2 md:text-2xl text-xl font-medium text-primary-main dark:text-primary-main/90`}>
                                            Email
                                        </h3>
                                        <p className="text-heading-main md:text-base text-xs">
                                            info@tenontenstays.com
                                        </p>
                                    </div>
                                </li>
                                <li className="flex">
                                    <div className="flex h-9 w-9 items-center justify-center rounded-full border border-primary-main text-primary-main ">
                                        <IoLocationSharp className="text-xl" />
                                    </div>
                                    <div className={`ml-4 md:mb-6 mb-4 ${poppins.className}`}>
                                        <h3 className={`mb-2 md:text-2xl text-xl font-medium text-primary-main dark:text-primary-main/90`}>
                                            Our Location
                                        </h3>
                                        <p className="text-heading-main md:text-base text-xs">
                                            B-32 Gautam Nagar, Chetak Bridge, Bhopal (MP) 462024
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="card h-fit max-w-6xl p-5 md:px-12 shadow-[0px_4px_60px_0px_rgba(0,0,0,0.08)] rounded-xl" id="form">
                            <Headcomp name={'Contact TenOnTen Stays'} />
                            <form onSubmit={handleSubmit} data-aos="zoom-in" data-aos-duration="3000">
                                <div className="mb-6">
                                    <div className="mx-0 mb-1 sm:mb-4">
                                        <label>
                                            <p className="text-xs font-semibold text-heading-main my-3">Your Name</p>
                                            <input
                                                type="text"
                                                id="name"
                                                autoComplete="given-name"
                                                placeholder="Your name"
                                                className="outline-none mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 sm:mb-0"
                                                name="name"
                                                value={isVal.name}
                                                onChange={handleChange}
                                            />
                                        </label>
                                        <label>
                                            <p className="text-xs font-semibold text-heading-main my-3">Email</p>
                                            <input
                                                type="email"
                                                id="email"
                                                autoComplete="email"
                                                placeholder="Your email address"
                                                className="outline-none mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 sm:mb-0"
                                                name="email"
                                                value={isVal.email}
                                                onChange={handleChange}
                                            />
                                        </label>
                                        <label>
                                            <p className="text-xs font-semibold text-heading-main my-3">Phone Number</p>
                                            <input
                                                type="number"
                                                id="number"
                                                autoComplete="number"
                                                placeholder="Your number"
                                                className="outline-none mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 sm:mb-0"
                                                name="number"
                                                value={isVal.number}
                                                onChange={handleChange}
                                            />
                                        </label>
                                        <label>
                                            <p className="text-xs font-semibold text-heading-main my-3">Property</p>
                                            <select
                                                name="property"
                                                value={isVal.property}
                                                onChange={handleChange}
                                                className="outline-none mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4"
                                            >
                                                <option value="">Select Property Type</option>
                                                <option value="Hotel">Hotel</option>
                                                <option value="Resort">Resort</option>
                                                <option value="Retreat">Retreat</option>
                                                <option value="Restaurant">Restaurant</option>
                                            </select>
                                        </label>
                                    </div>
                                    <label>
                                        <p className="text-xs font-semibold text-heading-main my-3">Message</p>
                                        <textarea
                                            cols="10"
                                            rows="5"
                                            placeholder="Write your message..."
                                            className="outline-none mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 resize-none"
                                            name="message"
                                            value={isVal.message}
                                            onChange={handleChange}
                                        ></textarea>
                                    </label>
                                </div>
                                <div className="text-center">
                                    <button
                                        className="w-full bg-heading-main text-primary-main px-6 py-3 font-xl rounded-full sm:mb-0 flex justify-center items-center gap-2"
                                    >
                                        Send Message {isLoading && <FiLoader className="animate-spin" />}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <ToastContainer />
                </div>
            </section>
        </Layout>
    );
};

export default ContactUs;
