import React from "react";
import { motion } from "framer-motion";

const WhoWeAre = () => {

  const defaultValues = {
    imageUrl: "https://infinitytechltd.com/storage/setting/websitesetting/about-img.jpg",

    description: "Infinity  Technology  International  Ltd  is  a  leading  IT/ITES  Company  in  Bangladesh  and abroad. In November 23rd, 1993, Infinity was founded by a group of graduates from U.S.A., Australia, Bangladesh and family members of renowned “Freedom fighters”. INFINITY is thriving in Research, System & Solution Design, Development, Cyber Security Esurance, Training, etc. In addition, other shareholders are very familiar in this business domain. The organization has many alliances / partnerships with foreign renowned organizations like Winitech Co., S.T. Logic, KEPCO KDN, Trinion Inc., Oracle, Qualitype GmbH, Eagle Ridge, Ducsan, Kaspersky etc.",
    layout: "vertical",
    className: ""
  };

  return (
    <section className={`w-full flex flex-col lg:p-8 ${defaultValues.className}`}>
      <div className="container mx-auto lg:px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={`flex flex-col items-start gap-8 lg:gap-16`}
        >
          <motion.img
            src={defaultValues.imageUrl}
            alt="Who We Are"
            className=" rounded-lg shadow-lg"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          />

          <motion.div
            className="w-full space-y-6 text-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >


            <p className="text-lg md:text-xl dark:text-white leading-relaxed">
              {defaultValues.description}
            </p>


          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhoWeAre;
