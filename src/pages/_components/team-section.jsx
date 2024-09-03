import React from 'react'
import TeamCard from './cards/team-card'

const TeamSection = () => {
  return ( 
    <section className="">
      <div className="container mx-auto">
        <div className="-mx-4 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 md:gap-8 sm:gap-6 gap-4 justify-center">
          <TeamCard
            name="Coriss Ambady"
            profession="I really love the cappucino, the coffee was very smooth  "
            imageSrc="https://i.ibb.co/T1J9LD4/image-03-2.jpg"
          />
          <TeamCard
            name="Coriss Ambady"
            profession="I really love the cappucino, the coffee was very smooth  "
            imageSrc="https://i.ibb.co/8P6cvVy/image-01-1.jpg"
          />
          <TeamCard
            name="Coriss Ambady"
            profession="I really love the cappucino, the coffee was very smooth  "
            imageSrc="https://i.ibb.co/30tGtjP/image-04.jpg"
          />
          <TeamCard
            name="Coriss Ambady"
            profession="I really love the cappucino, the coffee was very smooth  "
            imageSrc="https://i.ibb.co/yVVT0Dp/image-02-2.jpg"
          />
        </div>
      </div>
    </section>
  )
}

export default TeamSection