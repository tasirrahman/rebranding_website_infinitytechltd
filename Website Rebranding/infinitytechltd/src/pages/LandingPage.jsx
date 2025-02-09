import React from 'react';
import NavBar from '../components/overlay components/NavBar';
import HeroWidget from '../components/HeroWidget';
import Footer from '../components/overlay components/Footer';
import ScrollToTop from '../components/overlay components/ScrollToTop';
import StatisticsDisplay from '../components/StatisticsCard';
import StepperWidget from '../components/stepper/StepperWidget';
import ServicesWidget from '../components/Services';
import ProductCarouselSlider from '../components/Products';
import NewsletterWidget from '../components/Newsletter';
import TestimonialsWidget from '../components/Testimonials';
import ClientsLogo from '../components/LogoCloud';
import CTAWidget from '../components/CTA';
import BlogList from '../components/Blog';

const LandingPage = () => {
  return (
    <div className="bg-gray-50 dark:bg-neutral-900 min-h-screen h-full">
 <NavBar />

        <HeroWidget />

      <div className="py-10">
        <StatisticsDisplay />
        <ClientsLogo />
      </div>

      <StepperWidget />
      <ServicesWidget />
      <ProductCarouselSlider />
      <TestimonialsWidget />
      <BlogList />
      <NewsletterWidget />
      <CTAWidget />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default LandingPage;
