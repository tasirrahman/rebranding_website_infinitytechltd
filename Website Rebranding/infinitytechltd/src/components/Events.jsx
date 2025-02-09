import React from 'react';

const EventsWidget = () => {
  // Dummy event data
  const events = [
    {
      id: 1,
      title: "Tech Conference 2025",
      description: "Join us for the annual Tech Conference with industry leaders and innovators.",
      date: "March 15, 2025",
      location: "San Francisco, CA",
    },
    {
      id: 2,
      title: "Web Development Workshop",
      description: "Hands-on workshop to learn the latest trends in web development.",
      date: "April 5, 2025",
      location: "New York, NY",
    },
    {
      id: 3,
      title: "UX/UI Design Meetup",
      description: "A networking and learning event for designers and developers.",
      date: "May 10, 2025",
      location: "Los Angeles, CA",
    },
  ];

  return (
    <div className="space-y-8 container">
      {events.map((event) => (
        <div key={event.id} className="bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">{event.title}</h2>
          <p className="mt-2 text-gray-600 dark:text-gray-400">{event.description}</p>
          <div className="mt-4 flex justify-between items-center">
            <span className="text-gray-800 dark:text-gray-200">{event.date}</span>
            <span className="text-gray-800 dark:text-gray-200">{event.location}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EventsWidget;
