import Image from 'next/image'
import React from 'react'
import { FaCode } from "react-icons/fa";

const BlogCard = () => {
  return (
    <div className="rounded-md overflow-hidden shadow-md">
        <div className="h-64 w-full relative">
            <Image src="/assests/06.png" alt="" fill className="object-cover" />
        </div>
        <div className="p-7">
            <p className="text-heading-main flex items-center gap-3"><FaCode /> PROGRAMMING</p>
            <p className="text-xl font-semibold text-heading-main my-5">{`CS50's Introduction to Game Development`}</p>
            <p className="text-secondary-main">Learn about the development of 2D and 3D interactive games in this hands-on course, as you explore the design of games such as...</p>
        </div>
    </div>
  )
}

export default BlogCard