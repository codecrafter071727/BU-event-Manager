// src/components/HeroSection.jsx
import React from "react";

const HeroSection = () => {
  return (
    <div
      className="h-screen bg-cover bg-center flex flex-col items-center justify-start "
      style={{ 
        backgroundImage: `url('https://www.bennett.edu.in/wp-content/uploads/2021/07/A-Block-Administrative-block.jpg ')`,
      }}
    >
      <h1 className="text-white text-7xl mt-48  font-bold">
      welcome to bennett meeting 
      </h1>
      <p className="text-white text-3xl font-bold mt-8">
      Manage event room bookings easily with just a few clicks.


      </p>
      <div className="mt-8 text-white p-2 text-2xl text-center">
      <p>Personal. Professional. Memorable</p>
      </div>
       <div>
        <button className="p-3 mt-8 w-full bg-red-600 text-white rounded-full text-lg rounded-full font-bold text-xl">
          BOOK YOUR NEXT EVENT OR MEETING
       </button>
       </div> 
       
        <div className="mt-5">
        <a href="" className="text-black font-semibold">Contact Us</a>
        </div>
        
      
    </div>
    

  );
};

export default HeroSection;
