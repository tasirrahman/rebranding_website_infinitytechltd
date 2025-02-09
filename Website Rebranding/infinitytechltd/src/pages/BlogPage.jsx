import React from 'react';
import  { BlogForBlogPage } from '../components/Blog';
import NavBar from '../components/overlay components/NavBar';
import Footer from '../components/overlay components/Footer';
import ScrollToTop from '../components/overlay components/ScrollToTop';

const BlogPage = () => {
  return (
    <div className="bg-white dark:bg-neutral-900 min-h-screen h-full">
    <NavBar />

     <BlogForBlogPage/>

    <Footer />
    <ScrollToTop />
  </div>
  );
};

export default BlogPage;