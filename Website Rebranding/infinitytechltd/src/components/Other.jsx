import React from 'react';

const OtherWidget = () => {
  const widgetData = [
    { title: 'Team Members', link: "/team-members" },
    { title: 'Gallery' },
    { title: 'Video Tutorials' },
    { title: 'Events' },
    { title: 'Blogs' },
    { title: 'Privacy Policy' },
    { title: 'Terms and Conditions' },
  ];

  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 p-6">
      {widgetData.map((widget, index) => (
        <div
          key={index}
          className="bg-white w-full dark:bg-neutral-800 flex flex-col items-center justify-center p-6 rounded-2xl shadow-md transition-all duration-300 hover:bg-blue-500 hover:text-white dark:hover:bg-blue-600"
        >
         <a href={widget.link}>
         <h3 className="text-lg font-semibold text-gray-900 dark:text-white transition-all duration-300">
            {widget.title}
          </h3>
         </a>
        </div>
      ))}
    </div>
  );
};

export default OtherWidget;
