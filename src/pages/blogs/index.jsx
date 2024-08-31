import React from 'react'
import BlogHeroSection from '../_components/blog-hero-section'
import BlogComponet from '../_components/blog-componet'
import GetInTouch from '../_components/get-in-touch'

const index = () => {
  return (
    <div>
        <BlogHeroSection name="Blogs" />
        <BlogComponet />
        <GetInTouch />
    </div>
  )
}

export default index