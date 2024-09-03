/* eslint-disable @next/next/no-img-element */
import { poppins } from "@/styles/font";
import React from "react";


const TeamCard = ({ imageSrc, name, profession }) => {
    return (
        <div className={`w-full px-4  ${poppins.className}`}>
          <div className="mx-auto mb-10 w-full max-w-60 bg-primary-main/50 p-2 rounded">
            <div className="relative w-full md:h-80 sm:h-72 h-60">
              <img src={imageSrc} alt="" className="w-full h-full object-cover rounded" />
              <div className="absolute bottom-5 left-10 w-full p-1 rounded-lg bg-primary-main/50">
                <div className="relative overflow-hidden rounded-lg bg-primary-main/90 sm:px-3 px-2 sm:py-5 py-2 dark:bg-dark-2">
                  <h3 className="sm:text-base text-sm font-semibold dark:text-heading-main">
                    {name}
                  </h3>
                  <p className="sm:text-xs text-[10px] text-body-color dark:text-dark-6">
                    {profession}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  };
  
export default TeamCard