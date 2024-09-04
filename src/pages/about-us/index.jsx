import React from 'react'
import BlogHeroSection from '../_components/blog-hero-section'
import AboutCompo from '../_components/about-compo'
import Layout from '../_components/layout'

const index = () => {
  return (
    <Layout>
        <BlogHeroSection name={'About Us'} />
        <AboutCompo />
    </Layout>
  )
}

export default index