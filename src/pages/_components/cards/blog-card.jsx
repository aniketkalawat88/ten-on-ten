import Image from 'next/image'
import React from 'react'
import { FaCode } from "react-icons/fa";

const BlogCard = ({name, img , data , val}) => {
  return (
    <div className="rounded-md overflow-hidden shadow-md h-full">
        <div className="md:h-64 sm:h-52 h-44 w-full relative">
            <Image src={img} alt="" fill className="object-cover" />
        </div>
        <div className="md:p-7 sm:p-5 p-4">
            <p className="text-heading-main flex items-center gap-3"><FaCode /> {val}</p>
            <p className="md:text-xl sm:text-lg text-base font-semibold text-heading-main md:my-5 my-2">{name}</p>
            <p className="text-secondary-main md:text-base text-sm">{data}</p>
        </div>
    </div>
  )
}

export default BlogCard