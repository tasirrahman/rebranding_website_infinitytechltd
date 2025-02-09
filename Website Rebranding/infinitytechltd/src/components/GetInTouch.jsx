import React from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const GetInTouch = () => {
  return (
    <section className="bg-white dark:bg-neutral-900 border border-gray-100 dark:border-neutral-800 rounded-xl shadow p-10 max-w-7xl w-full mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Details */}
        <div className="flex flex-col justify-start">
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-6">Drop Us a Message</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            Have a question or inquiry? We&apos;re here to help. Fill out the form below, and we&apos;ll get back to you as soon as possible.
          </p>
          <ul className="space-y-4">
            <li className="flex items-center">
              <FaEnvelope className="text-gray-800 dark:text-gray-200 text-xl" />
              <a className="text-lg font-medium text-blue-600 dark:text-blue-400 hover:underline ml-2" href="mailto:info@infinitytechltd.com">
                info@infinitytechltd.com
              </a>
            </li>
            <li className="flex items-center">
              <FaPhoneAlt className="text-gray-800 dark:text-gray-200 text-xl" />
              <ul className="ml-2 space-y-1 text-gray-900 dark:text-gray-300">
                <li>+880 1911-381019 (Sales)</li>
                <li>+880 1911-381019 (Support)</li>
                <li>+880 1911-381019 (Marketing)</li>
              </ul>
            </li>
            <li className="flex items-start">
              <FaMapMarkerAlt className="text-gray-800 dark:text-gray-200 text-xl" />
              <span className="ml-2 text-gray-700 dark:text-gray-300">
                7th Floor, Shamsuddin Mansion, 41 Gulshan North, Road No. 53, Gulshan-2, Dhaka-1212
              </span>
            </li>
          </ul>
        </div>

        {/* Contact Form */}
        <div className="border-gray-300 dark:border-neutral-700 rounded-xl py-8 lg:p-8 lg:pt-0">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Get in Touch</h2>
          <form className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                className="border border-gray-300 dark:border-neutral-600 p-3 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 dark:bg-neutral-800 text-gray-900 dark:text-white"
                type="text"
                placeholder="Your Name"
                name="name"
              />
              <input
                className="border border-gray-300 dark:border-neutral-600 p-3 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 dark:bg-neutral-800 text-gray-900 dark:text-white"
                type="email"
                placeholder="Your Email"
                name="email"
              />
            </div>
            <input
              className="border border-gray-300 dark:border-neutral-600 p-3 rounded-xl shadow-sm w-full focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 dark:bg-neutral-800 text-gray-900 dark:text-white"
              type="text"
              placeholder="Your Phone"
              name="phone"
            />
            <input
              className="border border-gray-300 dark:border-neutral-600 p-3 rounded-xl shadow-sm w-full focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 dark:bg-neutral-800 text-gray-900 dark:text-white"
              type="text"
              placeholder="Your Subject"
              name="subject"
            />
            <textarea
              className="border border-gray-300 dark:border-neutral-600 p-3 rounded-xl shadow-sm w-full focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 dark:bg-neutral-800 text-gray-900 dark:text-white"
              rows="6"
              placeholder="Your Message"
              name="message"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold p-3 rounded-xl hover:shadow-lg transition-transform transform hover:-translate-y-1 duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Google Maps Embed - Full Width */}
      <iframe
        className="w-full h-[400px] rounded-2xl max-h-[400px] mt-8"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d673.3976775115889!2d90.41307131735213!3d23.794809284477378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7003d0720fd%3A0xe370098e97252a15!2sInfinity%20Technology%20International%20Ltd!5e1!3m2!1sen!2sbd!4v1739008644638!5m2!1sen!2sbd"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </section>
  );
};

export default GetInTouch;
