/* eslint-disable @next/next/no-img-element */
import React from 'react'

const BlogHeroSection = ({name}) => {
  return (
    <div className="relative bg-gradient-to-r from-purple-600 to-blue-600 lg:h-[32vw] md:h-[40vw] sm:h-[50vw] h-[50vw] text-white overflow-hidden">
        <div className="absolute inset-0">
            <img src="/assests/05.png" alt="Background Image" className="object-cover object-center w-full h-full" />
            <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        
        <div className="relative z-10 flex flex-col top-1/4 h-full text-center md:px-0 px-6" >
            <h1 className="lg:text-[3.41rem] md:text-4xl sm:text-3xl text-2xl  font-bold  md:mb-8 text-primary-main">{name}</h1>
            <p className="md:text-2xl sm:text-xl text-sm font-semibold text-white max-w-2xl mx-auto">We know growing your hotel business can be a fuss sometimes, sign up and see your <span className="text-primary-main">business grow with us!</span></p>
        </div>
        
        </div>
  )
}

export default BlogHeroSection