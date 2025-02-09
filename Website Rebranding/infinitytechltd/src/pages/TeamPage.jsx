import React from 'react';
import NavBar from '../components/overlay components/NavBar';
import Footer from '../components/overlay components/Footer';
import ScrollToTop from '../components/overlay components/ScrollToTop';
import Team from '../components/Team';

const TeamPage = () => {
  return (
    <div className="bg-white dark:bg-neutral-900 min-h-screen h-full">
      <NavBar />
      <h1 className="text-4xl px-5 text-center font-bold pt-20 text-gray-900 dark:text-gray-200">Our Experts Team Members</h1>
      <div className="min-h-screen flex justify-center px-5 py-10 lg:p-20">
<Team/>
      </div>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default TeamPage;