import React from 'react';

const Bookappointment = () => {
  return (
    <div className="flex flex-col  lg:flex-row items-center bg-white p-8 rounded-lg mt-16 ml-16 mr-16">
      
      <div className="w-fit lg:w-1/3 mb-4 lg:mb-0">
        <img
          className="rounded-lg w-full object-cover"
          src="https://scontent.fdel32-1.fna.fbcdn.net/v/t1.6435-9/37534538_1994500407229727_4288157419193761792_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=13d280&_nc_ohc=BNXvqbLTC1sQ7kNvgHg-WT8&_nc_ht=scontent.fdel32-1.fna&_nc_gid=ACeQfc4UFPSM2b55efuPc9e&oh=00_AYBalVZreVu3aywg5OL4X7Jx37xX-uXtrwtpVvKCjyPtuw&oe=671345B5" // You can replace this with the actual image URL
          alt="bennett university"
        />
      </div>

      
      <div className="w-fit lg:w-2/3 lg:pl-8 text-left">
        <h2 className="text-3xl font-bold text-gray-800">Bennett Meetings Picklist</h2>
        <p className="text-lg text-gray-600 mt-2">Big or small, perks for all!</p>
        <p className="text-gray-600 mt-4">
        Easily book the perfect room for your college events with our user-friendly platform. Choose from a variety of spaces tailored to your needs, all equipped with modern amenities. Reserve now and simplify your event planning!
        </p>
        <button className="mt-6 px-6 py-3 bg-red-600 text-white font-bold rounded-full hover:bg-red-700">
          DISCOVER MORE
        </button>
      </div>
    </div>
  );
};

export default Bookappointment;
