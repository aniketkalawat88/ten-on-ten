import React from 'react'
import BlogCard from './cards/blog-card'
import { DummyData } from '@/styles/dummy-data'

const BlogComponet = () => {
  return (
    <div className="max-w-7xl mx-auto w-full h-full grid md:grid-cols-3 sm:grid-cols-2 gap-4 md:my-10 sm:my-8 my-6 md:px-0 px-6">
        {
            DummyData.blogs.map((ele,i) => (
               <div key={i} data-aos="fade-right" data-aos-duration={(i+1)*1000} className="h-full">
                   <BlogCard name={ele.name} img={ele.img} val={ele.val} data={ele.data} />
               </div>

            ))
        }
    </div>
  )
}

export default BlogComponet