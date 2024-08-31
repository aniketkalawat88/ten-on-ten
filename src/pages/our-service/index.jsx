import React from 'react'
import BlogHeroSection from '../_components/blog-hero-section'
import OurServiceCard from '../_components/cards/our-service-card'

const index = () => {
  const arr = ["","","","","","","","",""]
  return (
    <div>
        <BlogHeroSection name={"Our Services"} />
        <div className="grid grid-cols-3 gap-8 max-w-7xl mx-auto my-10">
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