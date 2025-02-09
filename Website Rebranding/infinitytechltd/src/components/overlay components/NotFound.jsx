import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center p-4">
      <h1 className="text-6xl font-bold text-gray-900 dark:text-white">404</h1>
      <p className="text-xl text-gray-600 dark:text-gray-300 mt-2">Oops! The page you&apos;re looking for doesn&apos;t exist.</p>
      <button className="mt-4 px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition">
  <Link to="/">Go Back Home</Link>
</button>

    </div>
  );
};

export default NotFound;