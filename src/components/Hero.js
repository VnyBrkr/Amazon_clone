import React from 'react';
import christmas_deals from "../assets/christmas_deals.png"
import "../index.css";

function Hero() {
  return (
   <div className='relative w-full bg-[#eaeded] mx-auto'>
       <div className='mx-auto w-full lg:w-[90vw] xl:w-[70vw]'>
      <div className='absolute grad w-full lg:w-[90vw] flex h-[15rem] sm:h-[21rem] md:h-[25rem] z-10 xl:w-[70vw]'></div>
      <div className='w-full lg:w-[90vw] flex relative h-[15rem] sm:h-[21rem] md:h-[25rem] xl:w-[70vw]'>
         <img src = {christmas_deals} alt=""className="absolute object-cover w-full lg:w-[90vw] z-0 h-[15rem] sm:h-[21rem] md:h-[25rem] xl:w-[70vw]"/>
      </div>
    </div>

   </div> 
   
  );
};

export default Hero;