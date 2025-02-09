import React, { useState } from "react";
import PropTypes from "prop-types";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const blogPosts = Array.from({ length: 16 }, (_, index) => ({
  id: index + 1,
  title: `Blog Post ${index + 1}`,
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  image: "https://placehold.co/400",
}));

const BlogCard = ({ title, description, image }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="bg-white dark:bg-neutral-800 rounded-2xl shadow-lg p-4 hover:shadow-xl transition duration-300"
    >
      <img src={image} alt={title} className="w-full h-48 object-cover rounded-xl" />
      <h2 className="text-xl font-semibold mt-4 text-gray-900 dark:text-white">{title}</h2>
      <p className="text-gray-600 dark:text-gray-300 mt-2">{description}</p>
      <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
        Read More
      </button>
    </motion.div>
  );
};

BlogCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

const BlogList = () => {
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 6;

  const handleNext = () => {
    if (startIndex + itemsPerPage < blogPosts.length) {
      setStartIndex(startIndex + itemsPerPage);
    }
  };

  const handlePrev = () => {
    if (startIndex - itemsPerPage >= 0) {
      setStartIndex(startIndex - itemsPerPage);
    }
  };

  return (
    <div className="py-40 px-5  transition-colors duration-300">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Latest Blogs</h1>
          <div className="flex gap-4">
            <motion.button
              onClick={handlePrev}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 bg-gray-200 dark:bg-neutral-700 rounded-full hover:bg-gray-300 dark:hover:bg-neutral-600"
            >
              <FaChevronLeft />
            </motion.button>
            <motion.button
              onClick={handleNext}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 bg-gray-200 dark:bg-neutral-700 rounded-full hover:bg-gray-300 dark:hover:bg-neutral-600"
            >
              <FaChevronRight />
            </motion.button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="wait">
            {blogPosts.slice(startIndex, startIndex + itemsPerPage).map((post) => (
              <BlogCard key={post.id} {...post} />
            ))}
          </AnimatePresence>
        </div>
      </div>


    </div>
  );
};

export default BlogList;

export const BlogForBlogPage = () => {
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 6;

  const handleNext = () => {
    if (startIndex + itemsPerPage < blogPosts.length) {
      setStartIndex(startIndex + itemsPerPage);
    }
  };

  const handlePrev = () => {
    if (startIndex - itemsPerPage >= 0) {
      setStartIndex(startIndex - itemsPerPage);
    }
  };
  return (
    <div className="py-20 px-5  transition-colors duration-300">
    <div className="container mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Latest Blogs</h1>
        <div className="flex gap-4">
          <motion.button
            onClick={handlePrev}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 bg-gray-200 dark:bg-neutral-700 rounded-full hover:bg-gray-300 dark:hover:bg-neutral-600"
          >
            <FaChevronLeft />
          </motion.button>
          <motion.button
            onClick={handleNext}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 bg-gray-200 dark:bg-neutral-700 rounded-full hover:bg-gray-300 dark:hover:bg-neutral-600"
          >
            <FaChevronRight />
          </motion.button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="wait">
          {blogPosts.slice(startIndex, startIndex + itemsPerPage).map((post) => (
            <BlogCard key={post.id} {...post} />
          ))}
        </AnimatePresence>
      </div>
    </div>


  </div>
  );
};

