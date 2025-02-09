import { AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import React from 'react';

const Banner = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
      className="bg-gradient-to-br from-blue-700 to-blue-900"
    >
      <div className="mx-auto px-4 py-5 lg:py-3 gap-7 lg:gap-0 flex flex-col lg:flex-row lg:items-center justify-between text-white sm:flex md:px-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="flex items-center gap-x-4"
        >
          <div className="w-10 h-10 flex-none rounded-lg bg-indigo-800 flex items-center justify-center">
            <AlertCircle size={22} className="text-white" />
          </div>
          <p className="text-sm sm:text-base font-medium">
            This website is developed by{' '}
            <span className="font-bold">Tasir Rahman</span> as a rebranding website.
            Not the official Infinity Technology International Ltd website.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="flex gap-5"
        >
          <a
            href="https://infinitytechltd.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block py-2 px-4 text-center bg-gradient-to-t from-blue-700 to-blue-500 font-medium rounded-lg transition-all duration-200 active:bg-gray-200 sm:w-auto sm:text-sm"
          >
            Visit Official Website
          </a>
          <a
            href="https://tasirrahman.web.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block py-2 px-4 text-center bg-gradient-to-t from-blue-700 to-blue-500 font-medium rounded-lg transition-all duration-200 active:bg-gray-200 sm:w-auto sm:text-sm"
          >
            Visit Tasir&apos;s Portfolio
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Banner;
