import React from 'react';
import NavBar from '../components/overlay components/NavBar';
import ScrollToTop from '../components/overlay components/ScrollToTop';
import Footer from '../components/overlay components/Footer';
import Career from '../components/Career';

const CareerPage = () => {
  return (
    <div className="bg-white dark:bg-neutral-900 min-h-screen h-full">
    <NavBar />
    <div className="min-h-screen flex justify-center px-5 py-10 lg:p-20">
     <Career/>
    </div>
    <Footer />
    <ScrollToTop />
  </div>
  );
};

export default CareerPage;