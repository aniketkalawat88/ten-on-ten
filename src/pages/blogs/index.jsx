import React from 'react'
import BlogHeroSection from '../_components/blog-hero-section'
import BlogComponet from '../_components/blog-componet'
import GetInTouch from '../_components/get-in-touch'
import Layout from '../_components/layout'

const index = () => {
  return (
    <Layout>
        <BlogHeroSection name="Blogs" />
        <BlogComponet />
        <GetInTouch />
    </Layout>
  )
}

export default index