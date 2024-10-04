import React from 'react'
import BlogHeroSection from '../_components/blog-hero-section'
import OurServiceCard from '../_components/cards/our-service-card'
import Layout from '../_components/layout'
import { DummyData } from '@/styles/dummy-data'

const index = () => {
  return (
    <Layout>
        <BlogHeroSection name={"Our Solutions"} />
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:gap-8 sm:gap-6 gap-4 max-w-7xl mx-auto md:my-10 sm:my-8 my-6 md:px-0 px-6">
          {DummyData.ourservice.map((ele,i) => (
            <div key={i} data-aos="fade-right" data-aos-duration={(i+1)*1000}>
              <OurServiceCard name={ele.name} detail={ele.detail} img={ele.img} />
            </div>
          ))
          }

        </div>
    </Layout>
  )
}

export default index