import React from 'react'
import BlogHeroSection from '../_components/blog-hero-section'
import OurServiceCard from '../_components/cards/our-service-card'

const index = () => {
  const arr = ["","","","","","","","",""]
  return (
    <div>
        <BlogHeroSection name={"Our Services"} />
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:gap-8 sm:gap-6 gap-4 max-w-7xl mx-auto md:my-10 sm:my-8 my-6 md:px-0 px-6">
          {arr.map((ele,i) => (
          <div key={i}>
            <OurServiceCard />
          </div>

          ))

          }

        </div>
    </div>
  )
}

export default index