import React from 'react';

const CTAWidget = () => {
  return (
    <div className="pb-20 px-4">
      <div className="container mx-auto bg-white  dark:bg-neutral-800 shadow rounded-2xl p-8 mt-10 ">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div className="text-center sm:text-left">
            <h2 className="text-3xl font-semibold dark:text-white text-gray-900">
              Have any questions?
            </h2>
            <p className="text-gray-600 dark:text-white  mt-2">
              Feel free to reach out, and we’ll get back to you as soon as
              possible.
            </p>
          </div>
          <a href="/contact">
            <button className="mt-4 sm:mt-0 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-all hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400">
              Contact Us
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CTAWidget;
