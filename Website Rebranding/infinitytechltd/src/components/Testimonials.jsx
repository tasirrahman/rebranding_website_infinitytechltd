import React from 'react';

// Array to hold testimonial data
const testimonialsData = [
  {
    id: 1,
    quote:
      '“Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi ducimus repellat aperiam quam consequatur eligendi totam vitae iusto mollitia esse.”',
    name: 'Akorn Veesle',
    title: 'CEO Lufthansa Corp',
  },
  {
    id: 2,
    quote:
      '“Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi ducimus repellat aperiam quam consequatur eligendi totam vitae iusto mollitia esse.”',
    name: 'Akorn Veesle',
    title: 'CEO Lufthansa Corp',
  },
  {
    id: 3,
    quote:
      '“Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi ducimus repellat aperiam quam consequatur eligendi totam vitae iusto mollitia esse.”',
    name: 'Akorn Veesle',
    title: 'CEO Lufthansa Corp',
  },
];

// Reusable Star Icon component
const StarIcon = () => (
  <svg
    className="h-5 w-5 text-orange-500"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const TestimonialsWidget = () => {
  return (
    <section className="py-12 px-5  pb-0">
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          {/* Header Section */}
          <div className="text-center">
            <p className="text-2xl font-medium dark:text-white">
            Whats Our Clients Said About
            </p>
            <h2 className="mt-4 text-3xl font-bold dark:text-white sm:text-4xl xl:text-5xl">
            Infinity Technology International Ltd
            </h2>
          </div>

          {/* Button Section */}
          <div className="mt-8 text-center md:order-3 md:mt-16">
            <button className="mb-0 rounded-lg border-2 border-blue-700 bg-blue-700 px-6 py-2 font-medium text-white transition hover:translate-y-1">
              More reviews on Google Reviews
            </button>
          </div>

          {/* Testimonials Cards Section */}
          <div className="relative mt-10 md:order-2 md:mt-24">
            <div className="absolute -inset-x-1 inset-y-16 md:-inset-x-2 md:-inset-y-6">
              <div className="mx-auto h-full w-full max-w-5xl rounded-3xl opacity-30 blur-lg filter"></div>
            </div>

            <div className="relative mx-auto grid container grid-cols-1 gap-6 md:max-w-none md:grid-cols-3 lg:gap-10">
              {testimonialsData.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="flex flex-col overflow-hidden rounded-xl border shadow-sm"
                >
                  <div className="flex flex-1 flex-col justify-between bg-blue-700 p-6 lg:px-7 lg:py-8">
                    <div className="flex-1">
                      {/* Star Rating */}
                      <div className="flex  items-center">
                        {Array.from({ length: 5 }).map((_, index) => (
                          <div className='text-white' key={index}>
                            <StarIcon   />
                          </div>
                        ))}
                      </div>

                      {/* Quote */}
                      <blockquote className="mt-8 flex-1">
                        <p className="font-[400] text-xl italic text-white">
                          {testimonial.quote}
                        </p>
                      </blockquote>
                    </div>

                    {/* Author Info */}
                    <div className="mt-8 flex text-white items-center">
                      <div className="">
                        <p className="text-base font-bold">
                          {testimonial.name}
                        </p>
                        <p className="mt-0.5 text-sm ">
                          {testimonial.title}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsWidget;
