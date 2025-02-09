import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import React from "react";

const productItems = [
  {
    title: "Remittance Management System",
    img: "https://www.infinitytechltd.com/storage/productimage/remit%201.png",
  },
  {
    title: "Infinity 365 (CBS Software)",
    img: "https://www.infinitytechltd.com/storage/productimage/CBS.png",
  },
  {
    title: "Micro Finance Management System",
    img: "https://www.infinitytechltd.com/storage/productimage/Micro%20Finance%20Software.jpg",
  },
  {
    title: "Infinity ERP Solution",
    img: "https://www.infinitytechltd.com/storage/productimage/Infinity%20ERP.jpg",
  },
  {
    title: "Infinity HR Management Solution",
    img: "https://www.infinitytechltd.com/storage/productimage/Infinity%20HR%20Management%20Software.png",
  },
  {
    title: "Digital Learning Management System",
    img: "https://www.infinitytechltd.com/storage/productimage/lms.png",
  },
  {
    title: "Operational Training Management System",
    img: "https://www.infinitytechltd.com/storage/productimage/Training-management-system.png",
  },
  {
    title: "Library Management System",
    img: "https://www.infinitytechltd.com/storage/productimage/Library%20Management%20System.jpeg",
  },
  {
    title: "Infinity Officers Information Solution",
    img: "https://www.infinitytechltd.com/storage/productimage/Officers%20Information%20Management%20System.jpg",
  },
  {
    title: "Loan Monitoring System",
    img: "https://www.infinitytechltd.com/storage/productimage/Loan%20Management%20System.jpg",
  },
  {
    title: "Infinity Equipment Database Manag.",
    img: "https://www.infinitytechltd.com/storage/productimage/Infinity%20Equipment%20Database%20Management.jpg",
  },
  {
    title: "INFINITY PAY PENSION & ACCOUNTS MANAGEMENT SOLUTIONS",
    img: "https://www.infinitytechltd.com/storage/productimage/infinity%20account-management-software.png",
  },
  {
    title: "Infinity Shipbuilding Monitoring Info & Prog. Solution",
    img: "https://www.infinitytechltd.com/storage/productimage/pr2.png",
  },
  {
    title: "Infinity Spares & Management Solution",
    img: "https://www.infinitytechltd.com/storage/productimage/pr3.png",
  },
  {
    title: "Employee Daily Monitoring System",
    img: "https://www.infinitytechltd.com/storage/productimage/infinity%20employee-monitoring-software.png",
  },
  {
    title: "Digital Municipality Service System - DMSS",
    img: "https://www.infinitytechltd.com/storage/productimage/Infinity%20DMSS.jpg",
  },
];

export const ProductsMenuWidget = () => {
  return (
    <div className="w-full grid grid-cols-3 gap-5">
      {productItems.map((service, index) => (
       <div key={index} className="bg-white hover:text-white hover:bg-blue-500 dark:bg-neutral-800 justify-start gap-4 p-4 rounded-2xl shadow-md flex flex-row items-center text-center ">

          <h3 className="text-lg font-semibold   dark:text-white">{service.title}</h3>
        </div>
      ))}
    </div>
  );
};

export const ProductsForProductsPage = () => {
  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-5">
      {productItems.map((item, index) => (
              <motion.div
                key={index}
                className="min-w-[300px] md:min-w-[400px]  max-w-[700px] bg-blue-600 dark:bg-neutral-800 rounded-xl shadow-lg flex-shrink-0 snap-center overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <a href={item.link} target="_blank" rel="noopener noreferrer" className="block">
                  <div className="w-full h-64 md:h-80 lg:h-96 overflow-hidden">
                    <img src={item.img || "/placeholder.svg"} alt={item.title} className="w-full bg-white h-full object-cover" />
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-semibold  dark:text-gray-200 mb-2 line-clamp-2 text-white">{item.title}</h4>
                    <p className="text-sm text-white dark:text-gray-400">View →</p>
                  </div>
                </a>
              </motion.div>
            ))}
    </div>
  );
};

const ModernCarouselSlider = () => {
  const sliderRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const handleScroll = () => {
    if (sliderRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  const navigate = (direction) => {
    if (sliderRef.current) {
      const scrollAmount = sliderRef.current.clientWidth;
      sliderRef.current.scrollBy({
        left: direction === "next" ? scrollAmount : -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const slider = sliderRef.current;
    if (slider) {
      slider.addEventListener("scroll", handleScroll);
      handleScroll(); // Initial check
    }
    return () => slider?.removeEventListener("scroll", handleScroll);
  }, [sliderRef]); // Added sliderRef to dependencies

  return (
    <section className="py-16  px-4">
      <div className="container mx-auto ">
        <h2 className="text-3xl text-center font-bold mb-8 text-gray-800 dark:text-gray-200">Our Products</h2>
        <div className="relative">
          <div
            ref={sliderRef}
            className="flex px-0 p-5 gap-6 overflow-x-scroll scrollbar-hide scroll-smooth snap-x snap-mandatory"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {productItems.map((item, index) => (
              <motion.div
                key={index}
                className="min-w-[300px] md:min-w-[400px] max-w-[700px] bg-white dark:bg-neutral-800 rounded-xl shadow-lg flex-shrink-0 snap-center overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <a href={item.link} target="_blank" rel="noopener noreferrer" className="block">
                  <div className="w-full h-64 md:h-80 lg:h-96 overflow-hidden">
                    <img src={item.img || "/placeholder.svg"} alt={item.title} className="w-full bg-white h-full object-cover" />
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2 line-clamp-2">{item.title}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">View →</p>
                  </div>
                </a>
              </motion.div>
            ))}
          </div>
          <button
            onClick={() => navigate("prev")}
            className={`absolute left-4 top-1/2 transform -translate-y-1/2 bg-white dark:bg-neutral-900 text-gray-800 dark:text-gray-200 p-3 rounded-full shadow-md transition-opacity duration-300 ${
              canScrollLeft ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={() => navigate("next")}
            className={`absolute right-4 top-1/2 transform -translate-y-1/2 bg-white dark:bg-neutral-900 text-gray-800 dark:text-gray-200 p-3 rounded-full shadow-md transition-opacity duration-300 ${
              canScrollRight ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
            aria-label="Next slide"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ModernCarouselSlider;
