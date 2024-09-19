// src/components/Navbar.jsx
import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-2 sticky top-0 z-50 bg-white h-20">
      <div className="flex items-center space-x-4 ">
    
    <img src="https://www.bennett.edu.in/wp-content/uploads/2023/01/logo-1.webp" alt="Bennett University Logo" className="h-20 w-auto" />
    
  </div>
      
      
      <div className="flex items-center space-x-4">
        <select className="bg-black text-white border border-white p-2">
          <option>English</option>
          <option>Hindi</option>
        </select>
        <button className="bg-red-600 px-4 py-2 rounded text-white">
          Sign In
        </button>
        
      </div>
    </div>
  );
};

export default Navbar;
