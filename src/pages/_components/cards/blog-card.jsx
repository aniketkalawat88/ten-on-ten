import Image from 'next/image'
import React from 'react'
import { FaCode } from "react-icons/fa";

const BlogCard = () => {
  return (
    <div className="rounded-md overflow-hidden shadow-md">
        <div className="md:h-64 sm:h-52 h-44 w-full relative">
            <Image src="/assests/06.png" alt="" fill className="object-cover" />
        </div>
        <div className="md:p-7 sm:p-5 p-4">
            <p className="text-heading-main flex items-center gap-3"><FaCode /> PROGRAMMING</p>
            <p className="md:text-xl sm:text-lg text-base font-semibold text-heading-main md:my-5 my-2">{`CS50's Introduction to Game Development`}</p>
            <p className="text-secondary-main md:text-base text-sm">Learn about the development of 2D and 3D interactive games in this hands-on course, as you explore the design of games such as...</p>
        </div>
    </div>
  )
}

export default BlogCard