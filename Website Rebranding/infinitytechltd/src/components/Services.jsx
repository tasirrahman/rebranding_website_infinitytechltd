import React from "react";
import { motion } from "framer-motion";
import { FaUniversity, FaTools, FaNetworkWired, FaPowerOff, FaBuilding, FaMapMarkedAlt, FaPhone, FaWrench } from "react-icons/fa";
import { MdDeveloperMode, MdSchool, MdContentPaste, MdWork, MdAnalytics } from "react-icons/md";
import { BanknoteIcon } from "lucide-react";
import { GoProject } from "react-icons/go";

const servicesData = [
  {
    icon: <BanknoteIcon className="dark:text-white" size={32} />,
    title: "Banking Solutions",
    description: "Secure and innovative banking solutions tailored for financial institutions.",
    image: "https://www.infinitytechltd.com/storage/serviceimage/Banking%20Solutions.png"
  },
  {
    icon: <MdDeveloperMode className="dark:text-white" size={32} />,
    title: "Customized Solutions",
    description: "Bespoke software solutions designed to meet your unique business needs.",
    image: "https://www.infinitytechltd.com/storage/serviceimage/Infinity%20Customize%20Solution.png"
  },
  {
    icon: <GoProject className="dark:text-white" size={32} />,
    title: "Software Development",
    description: "End-to-end software development services for scalable applications.",
    image: "https://www.infinitytechltd.com/storage/serviceimage/Infinity%20Software%20Development.png"
  },
  {
    icon: <FaUniversity className="dark:text-white" size={32} />,
    title: "Educational Solutions",
    description: "Technology-driven educational tools for institutions and learners.",
    image: "https://www.infinitytechltd.com/storage/serviceimage/Infinity%20Educational%20Solutions.jpeg"
  },
  {
    icon: <MdSchool className="dark:text-white" size={32} />,
    title: "Training & Skill Development",
    description: "Professional training programs to enhance workforce skills.",
    image: "https://www.infinitytechltd.com/storage/serviceimage/Infinity%20Training%20&%20Skill%20Development.png"
  },
  {
    icon: <FaTools className="dark:text-white" size={32} />,
    title: "ICT & Consultancy Solutions",
    description: "Expert IT consulting and ICT solutions for enterprises.",
    image: "https://www.infinitytechltd.com/storage/serviceimage/Infinity%20ICT%20&%20Consultancy%20Solutions.png"
  },
  {
    icon: <MdContentPaste className="dark:text-white" size={32} />,
    title: "Content Development",
    description: "Engaging and high-quality content creation services.",
    image: "https://www.infinitytechltd.com/storage/serviceimage/Infinity%20Content%20Development.jpg"
  },
  {
    icon: <MdWork className="dark:text-white" size={32} />,
    title: "Freelancing and Outsourcing",
    description: "Connecting talent with businesses for seamless outsourcing.",
    image: "https://www.infinitytechltd.com/storage/serviceimage/Infinity%20Freelancing%20and%20Outsourcing.png"
  },
  {
    icon: <MdAnalytics className="dark:text-white" size={32} />,
    title: "Big Data Analytics & Data Entry",
    description: "Advanced analytics and data management solutions.",
    image: "https://www.infinitytechltd.com/storage/serviceimage/Infinity%20Big%20Data%20Analytics%20&%20Data%20Entry.jpeg"
  },
  {
    icon: <FaNetworkWired className="dark:text-white" size={32} />,
    title: "Network and Server Configuration",
    description: "Reliable network and server setup for organizations.",
    image: "https://www.infinitytechltd.com/storage/serviceimage/Infinity%20Network%20and%20Server%20Configuration.jpg"
  },
  {
    icon: <FaPowerOff className="dark:text-white" size={32} />,
    title: "Power Solutions",
    description: "Sustainable and efficient power solutions for all sectors.",
    image: "https://www.infinitytechltd.com/storage/serviceimage/Infinity%20Power%20Solutions.png"
  },
  {
    icon: <FaBuilding className="dark:text-white" size={32} />,
    title: "Construction Solutions",
    description: "Innovative construction technology and services.",
    image: "https://www.infinitytechltd.com/storage/serviceimage/Infinity%20Construction%20Solutions.png"
  },
  {
    icon: <FaMapMarkedAlt className="dark:text-white" size={32} />,
    title: "GIS Consultancy",
    description: "Geospatial solutions for mapping and land management.",
    image: "https://www.infinitytechltd.com/storage/serviceimage/Infinity%20GIS%20Consultancy.jpg"
  },
  {
    icon: <FaMapMarkedAlt className="dark:text-white" size={32} />,
    title: "Land Recording Solutions",
    description: "Comprehensive land recording and management services.",
    image: "https://www.infinitytechltd.com/storage/serviceimage/Infinity%20Land%20Recording%20Solutions.png"
  },
  {
    icon: <FaPhone className="dark:text-white" size={32} />,
    title: "Call Center Services",
    description: "Professional call center solutions for businesses.",
    image: "https://www.infinitytechltd.com/storage/serviceimage/Infinity%20Call%20Center%20Services.png"
  },
  {
    icon: <FaWrench className="dark:text-white" size={32} />,
    title: "Maintenance & Support Services",
    description: "End-to-end technical support and maintenance services.",
    image: "https://www.infinitytechltd.com/storage/serviceimage/Infinity%20Maintenance%20&%20Support%20Services.png"
  }
];



export const ServicesMenuWidget = () => {
  return (
    <div className="w-full grid grid-cols-4 gap-5">
      {servicesData.map((service, index) => (
        <div key={index} className="bg-white hover:text-white hover:bg-blue-500 dark:bg-neutral-800 justify-start gap-4 p-4 rounded-2xl shadow-md flex flex-row items-center text-center ">
          <div className="text-primary dark:text-white ">{service.icon}</div>
          <h3 className="text-lg font-semibold   dark:text-white">{service.title}</h3>
        </div>
      ))}
    </div>
  );
};


export const ServicesForServicesPage = () => {
  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {servicesData.map((service, index) => (
        <div
          key={index}
          className="bg-white dark:bg-neutral-800 hover:shadow-xl transition-transform transform hover:scale-105 rounded-xl p-6 flex flex-col items-center justify-center text-center shadow-lg"
        >
          <img
            className="w-40 h-40 bg-white rounded-full border-4 border-primary-500 mb-4 transition-transform transform hover:scale-110"
            src={service.image}
            alt={service.title}
          />
          <div className="flex flex-col items-center">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
              {service.title}
            </h3>
            <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300">
              {service.description}
            </h4>
          </div>
        </div>
      ))}
    </div>
  );
};







const ServicesWidget = () => {
  return (
    <div className="min-h-screen  rounded-b-3xl  py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-black dark:text-white mb-4">Our Services</h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Explore our range of innovative solutions tailored for your business needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white dark:bg-neutral-800 rounded-xl p-6 hover:bg-gray-100 dark:hover:bg-neutral-900 transition-all duration-300 transform hover:-translate-y-2 border border-gray-300 dark:border-gray-700"
            >
              <div className="bg-gray-200 dark:bg-neutral-700 rounded-lg p-4 inline-block mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-black dark:text-white mb-3">{service.title}</h3>
              <p className="text-gray-800 dark:text-gray-400">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesWidget;
