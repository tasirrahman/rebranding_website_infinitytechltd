import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

const HeroWidget = () => {
  return (
    <section className="dark:text-white min-h-[710px] flex flex-col justify-center items-center px-4 pt-5 lg:pt-0 sm:px-6 lg:px-8">
      <div className="flex container flex-col-reverse lg:flex-row items-center justify-center gap-8 lg:gap-16">
        <div className="w-full text-center lg:text-left lg:w-1/2 space-y-6">
          <motion.h1
            className="text-3xl md:text-6xl font-extrabold tracking-tight"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Welcome to Infinity Technology International Ltd.
          </motion.h1>
          <motion.p
            className="text-lg md:text-2xl max-w-xl mx-auto lg:mx-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Innovative Business Solution Providers
          </motion.p>
          <motion.p
            className="text-base md:text-lg opacity-80 max-w-xl mx-auto lg:mx-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            Crafting tailored solutions for diverse business challenges, igniting success amidst complexities.
          </motion.p>
          <motion.div
            className="flex justify-center lg:justify-start space-x-4 mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <a href="/">
              <button className="group inline-flex items-center rounded-full px-8 py-3 text-lg font-semibold transition-all duration-200 bg-blue-600 text-white hover:bg-blue-700">
                Get Started
                <FaArrowRight className="ml-2 transform transition-transform duration-200 group-hover:translate-x-1" />
              </button>
            </a>
            <a href="/contact">
              <button className="group inline-flex items-center rounded-full px-8 py-3 text-lg font-semibold transition-all duration-200 bg-blue-600 text-white hover:bg-blue-700">
                Contact Us
              </button>
            </a>
          </motion.div>
        </div>
        <div className="w-full lg:w-1/2">
          <img
            src="https://neilsonmarketing.com/wp-content/uploads/2023/07/email-marketing.svg"
            alt="Hero section illustration"
            className="h-full w-full object-cover"
            onError={(e) => {
              e.target.src = "https://images.unsplash.com/photo-1535223289827-42f1e9919769?ixlib=rb-4.0.3";
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroWidget;
