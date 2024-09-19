import React, { useState, useEffect } from 'react';

const UpcomingEvents = () => {
  // State to store upcoming events
  const [events, setEvents] = useState([]);

  // Simulate fetching events from an API or database
  useEffect(() => {
    const fetchEvents = () => {
      const upcomingEvents = [
        { id: 1, name: "Tech Conference 2024", date: "2024-09-24", location: "PLA-103" },
        { id: 2, name: "Web Development Workshop", date: "2024-9-24", location: "PLA-101" },
        { id: 3, name: "AI Summit 2024", date: "2024-9-24", location: "ALH-002" },
      ];
      setEvents(upcomingEvents);
    };

    fetchEvents(); // Call the function to load events
  }, []);

  return (
    <div className="bg-white shadow-2xl rounded-xl p-6 w-90% ml-16 mr-16 mt-16">
      <h2 className="text-2xl font-bold mb-4 text-gray-800 mr-16">Upcoming Events</h2>
      <ul className="space-y-4">
        {events.length === 0 ? (
          <li className="text-gray-600">No upcoming events.</li>
        ) : (
          events.map((event) => (
            <li key={event.id} className="bg-gray-100 p-4 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-gray-900">{event.name}</h3>
              <p className="text-gray-700">
                Date: <span className="font-medium">{event.date}</span>
              </p>
              <p className="text-gray-700">
                Location: <span className="font-medium">{event.location}</span>
              </p>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default UpcomingEvents;
