import React from 'react'
import BlogCard from './cards/blog-card'

const BlogComponet = () => {
    const arr = ["","","","","",""]
  return (
    <div className="max-w-7xl mx-auto w-full h-full grid grid-cols-3 gap-4 my-8">
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