import React from 'react';

const Product = ({title,image}) => {
  return (
    <div className='flex flex-col justify-center items-center bg-white  pb-8 rounded-[1rem]'>
      <p className='font-bold text-[20px] pt-2'>{title}</p>
      <div className='bg-[#eaeded] p-4 rounded-[1rem] mt-2 mx-6'>
      <img src={image} alt=" " className="h-[15rem] sm:h-[10rem] md:h-[6rem] xl:h-[7rem]"/>
      </div>
      <div className='bg-orange-400 hover :bg-orange-300 duration-100 ease-out text-white font-bold w-[5rem] text-center mt-2 py-1 rounded-full'>
        <button>BUY</button>
      </div>
     </div>
  );
};

export default Product;