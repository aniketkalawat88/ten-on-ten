import React from 'react'
import BlogCard from './cards/blog-card'

const BlogComponet = () => {
    const arr = ["","","","","",""]
  return (
    <div className="max-w-7xl mx-auto w-full h-full grid md:grid-cols-3 sm:grid-cols-2 gap-4 md:my-10 sm:my-8 my-6 md:px-0 px-6">
        {
            arr.map((ele,i) => (
               <div key={i}>
                   <BlogCard />
               </div>

            ))
        }
    </div>
  )
}

export default BlogComponet