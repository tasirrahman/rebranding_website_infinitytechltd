import React from "react";

const NewsletterWidget = () => {
  return (
    <div className="px-5">
      <div className="mx-auto  my-12 shadow container rounded-3xl  bg-white dark:bg-neutral-800 p-10 text-center lg:text-left text-black dark:text-white  sm:p-16">
      <div className="flex flex-col-reverse  gap-10 lg:flex-row items-center">
        <div className="flex flex-col">
          <h2 className="text-3xl font-bold sm:text-4xl">
            We always strive to provide the best support for you
          </h2>
          <p className="mt-4 text-gray-700 dark:text-gray-300">
            Subscribe to our newsletter for the latest updates and exclusive content.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:gap-2">
            <input
              className="h-12 w-full max-w-md rounded-full border border-gray-600 bg-gray-200 dark:bg-white dark:text-black px-4 text-black  outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              type="email"
              name="email"
            />
            <button className="w-full max-w-xs rounded-full bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 sm:w-auto">
              Subscribe Now
            </button>
          </div>
        </div>
        <div className="lg:w-1/2">
          <img className=" rounded-2xl" src="https://cdni.iconscout.com/illustration/premium/thumb/newsletter-illustration-download-in-svg-png-gif-file-formats--email-marketing-promotional-mail-advertising-business-pack-people-illustrations-3414911.png?f=webp" alt="CTA Illustration"/>
        </div>
      </div>
    </div>
    </div>
  );
};

export default NewsletterWidget;
