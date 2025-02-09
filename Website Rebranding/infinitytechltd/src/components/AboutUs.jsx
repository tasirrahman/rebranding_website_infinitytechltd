import React from 'react';

const AboutUs = () => {
  const servicesData = [
    { title: 'Company Profile' },
    { title: 'Career' },
    { title: 'IT Consulting' },
    { title: 'Payment Method Information' },
    { title: 'FAQs' },
    { title: 'Banking Solutions' },
  ];

  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 p-6">
      {servicesData.map((service, index) => (
        <div
          key={index}
          className="bg-white w-full dark:bg-neutral-800 flex flex-col items-center justify-center p-6 rounded-2xl shadow-md transition-all duration-300 hover:bg-blue-500 hover:text-white dark:hover:bg-blue-600"
        >
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white transition-all duration-300">
            {service.title}
          </h3>
        </div>
      ))}
    </div>
  );
};

export default AboutUs;
