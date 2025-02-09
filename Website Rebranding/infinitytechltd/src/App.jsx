import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from 'react';
import LandingPage from './pages/LandingPage';
import ContactPage from './pages/ContactPage';
import PageNotFound from './pages/PageNotFound';
import CareerPage from './pages/CareerPage';
import ServicesPage from './pages/ServicesPage';
import ProductsPage from './pages/ProductsPage';
import EventsPage from './pages/EventsPage';
import BlogPage from './pages/BlogPage';
import TeamPage from './pages/TeamPage';
function App() {


  useEffect(() => {
    const handleContextMenu = (event) => {
      event.preventDefault(); // Prevent the default right-click behavior
    };

    // Attach event listener when component mounts
    document.addEventListener("contextmenu", handleContextMenu);

    // Clean up event listener when component unmounts
    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
    };
  }, []); // Empty dependency array ensures the effect runs only once on mount





  return (
    <>

    <BrowserRouter>
      <Routes>ServicesForServicesPage
      <Route path="/" element={<LandingPage/>} />
      <Route path="/contact" element={<ContactPage/>} />
      <Route path="/career" element={<CareerPage/>} />
      <Route path="/services" element={<ServicesPage/>} />
      <Route path="/products" element={<ProductsPage/>} />
      <Route path="/events" element={<EventsPage/>} />
      <Route path="/blog" element={<BlogPage/>} />
      <Route path="/team-members" element={<TeamPage/>} />
      <Route path="/*" element={<PageNotFound/>} />
      </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;