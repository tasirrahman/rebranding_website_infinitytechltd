import React from 'react';
import NavBar from '../components/overlay components/NavBar';
import Footer from '../components/overlay components/Footer';
import ScrollToTop from '../components/overlay components/ScrollToTop';
import GetInTouch from '../components/GetInTouch';

const ContactPage = () => {
  return (
    <div className="bg-white dark:bg-neutral-900 min-h-screen h-full">
      <NavBar />
      <div className="min-h-screen flex justify-center px-5 py-10 lg:p-20">
        <GetInTouch />
      </div>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default ContactPage;
