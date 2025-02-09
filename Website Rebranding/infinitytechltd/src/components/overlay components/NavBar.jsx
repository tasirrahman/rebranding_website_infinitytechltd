import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Calendar, Moon, Sun, Menu, X } from "lucide-react";
import Banner from "./Banner";
import { ServicesMenuWidget } from "../Services";
import { ProductsMenuWidget } from "../Products";
import AboutUs from "../AboutUs";
import OtherWidget from "../Other";

const NavBar = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem("theme") === "dark");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const navItems = [
    { name: "Home", link: "/" },
    { name: "Services", link: "/services" },
    { name: "Products", link: "/products" },
    { name: "About Us", link: "/about" },
    { name: "Others", link: "/others" },
    { name: "Career", link: "/career" },
    { name: "Contact", link: "/contact" },
  ];

  const handleMouseEnter = (item) => {
    if (!["Home", "Career", "Contact"].includes(item.name)) {
      setActiveSection(item.name);
    }
  };

  return (
    <header className="sticky top-0 mx-auto w-full z-10">
      <Banner />
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`bg-opacity-30 dark:backdrop-blur-3xl shadow border-b border-gray-500/30 bg-white dark:bg-neutral-900/30 rounded-b-2xl`}
      >
        <div className="container mx-auto px-6 py-3 flex justify-between items-center">
          <a href="/">
            <motion.img
              src="https://www.infinitytechltd.com/storage/setting/websitesetting/infinity%20logo.jpeg"
              alt="Infinity Technology International Ltd"
              className="w-14 h-14"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            />
          </a>

          <ul className="hidden lg:flex space-x-6 text-gray-700 dark:text-gray-300">
            {navItems.map((item) => (
              <li
                key={item.name}
                className={`cursor-pointer text-lg font-medium transition hover:text-blue-600 dark:hover:text-blue-400 ${
                  activeSection === item.name ? "text-blue-600 dark:text-blue-400" : ""
                }`}
                onMouseEnter={() => handleMouseEnter(item)}
              >
                <a href={item.link}>{item.name}</a>
              </li>
            ))}
          </ul>

          <button
            className="lg:hidden block p-2 rounded-full bg-gray-200 dark:bg-neutral-800"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          <div className="hidden lg:flex items-center gap-6">
           <a href="/events">
           <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex cursor-pointer items-center gap-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white px-5 py-2.5 rounded-xl shadow-md"
            >
              <Calendar size={22} />
              <span className="text-lg font-medium">Events →</span>
            </motion.button></a>

            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 cursor-pointer rounded-full bg-gray-200 dark:bg-neutral-800 text-gray-700 dark:text-gray-300"
            >
              {darkMode ? <Sun size={22} /> : <Moon size={22} />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white/30 backdrop-blur-lg dark:bg-neutral-800/30 shadow-md top-16 left-0 w-full px-6 py-4"
          >
            <ul className="flex flex-col space-y-4 text-gray-700 dark:text-gray-300">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.link}
                    className="block border border-gray-200 p-5 rounded-2xl text-lg font-medium hover:text-blue-600 dark:hover:text-blue-400"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>

            <div className="flex flex-col items-center mt-6 gap-4">
              <a href="/events" className="w-full">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex w-full justify-center items-center gap-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white px-5 py-2.5 rounded-xl shadow-md"
                >
                  <Calendar size={22} />
                  <span className="text-lg font-medium">Events →</span>
                </motion.button>
              </a>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 cursor-pointer rounded-full bg-gray-200 dark:bg-neutral-800 text-gray-700 dark:text-gray-300"
              >
                {darkMode ? <Sun size={22} /> : <Moon size={22} />}
              </button>
            </div>
          </motion.div>
        )}
      </motion.nav>

      {activeSection && (
        <motion.div
          className="top-0 left-0 w-full bg-white/30 backdrop-blur-lg dark:bg-neutral-800/30 z-50 rounded-b-2xl shadow-lg flex justify-center items-center p-10"
          onMouseEnter={() => setActiveSection(activeSection)}
          onMouseLeave={() => setActiveSection(null)}
        >
          <div className="text-center w-full">
            <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-gray-200">{activeSection}</h2>
            {activeSection === "Services" && <ServicesMenuWidget />}
            {activeSection === "Products" && <ProductsMenuWidget />}
            {activeSection === "About Us" && <AboutUs/>}
            {activeSection === "Others" && <OtherWidget/>}
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default NavBar;
