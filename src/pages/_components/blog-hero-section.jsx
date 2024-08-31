/* eslint-disable @next/next/no-img-element */
import React from 'react'

const BlogHeroSection = ({name}) => {
  return (
    <div class="relative bg-gradient-to-r from-purple-600 to-blue-600 h-[30vw] text-white overflow-hidden">
        <div class="absolute inset-0">
            <img src="/assests/05.png" alt="Background Image" class="object-cover object-center w-full h-full" />
            <div class="absolute inset-0 bg-black opacity-50"></div>
        </div>
        
        <div class="relative z-10 flex flex-col top-1/4 h-full text-center">
            <h1 class="text-6xl font-bold  mb-8 text-primary-main">{name}</h1>
            <p class="text-2xl font-semibold text-white max-w-2xl mx-auto">We know growing your hotel business can be a fuss sometimes, sign up and see your <span className="text-primary-main">business grow with us!</span></p>
        </div>
        
        </div>
  )
}

export default BlogHeroSection