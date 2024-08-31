import { poppins } from '@/styles/font'
import React from 'react'

const Headcomp = ({name}) => {
  return (
    <main className={`flex flex-col w-fit my-4 ${poppins.className}`}>
        <div className="text-[2rem] font-semibold grid justify-items-end">
            {name}
            <span className="h-1 w-16 rounded-full bg-primary-main " />
        </div>
    </main>
  )
}

export default Headcomp