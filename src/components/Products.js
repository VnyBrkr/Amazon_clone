import React from 'react';
import headphone from "../assets/headphone.png";
import laptop from "../assets/laptop.png";
import phone from "../assets/phone.png";
import Product from "./Product";

const Products = () => {
  const products =[
    {title:"Headphones" ,image:headphone},
    {title:"Laptop" ,image:laptop},
    {title:"Phone" ,image:phone},
    {title:"Headphones" ,image:headphone},
    {title:"Laptop" ,image:laptop},
    {title:"Phone" ,image:phone},
  ];
  return (
    <div className='bg-red-400 w-full'>
     
      <div className='pl-20  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3  mx-auto md:mx-16 w-[80vw] 
      xl:w-[70vw] gap-5 mt-4 pt-5 pb-5'>
    {products.map((product) => (
      <Product title={product.title} image ={product.image}/>
    ))}
    </div>
  </div>
    
  );
};

export default Products;