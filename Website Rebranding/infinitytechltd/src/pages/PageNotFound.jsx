import React from 'react';
import NavBar from '../components/overlay components/NavBar';
import ScrollToTop from '../components/overlay components/ScrollToTop';
import Footer from '../components/overlay components/Footer';
import NotFound from '../components/overlay components/NotFound';

const PageNotFound = () => {
  return (
    <div className="bg-gray-50 dark:bg-neutral-900 min-h-screen h-full">
      <NavBar />
    <NotFound/>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default PageNotFound;