// src/App.jsx
import React from "react";
import Navbar from "./component/Navbar";
import HeroSection from "./component/Herosection";
import MeetingEventCard from './component/Meetingeventcard';
import Bookappointment from './component/Bookappointment';
import UpcomingEvents from "./component/Upcomingevent";




function App() {
  return (
    <div className="App bg-gray-100">
      <Navbar />
      <HeroSection />
      <MeetingEventCard />
      <Bookappointment />
      <UpcomingEvents />
    
      
    </div>
  );
}

export default App;
