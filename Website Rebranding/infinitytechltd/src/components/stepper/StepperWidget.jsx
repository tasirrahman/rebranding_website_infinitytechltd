import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiCheck, FiChevronRight } from "react-icons/fi";
import WhoWeAre from "./details/WhoWeAre";
import GoalsAndValues from "./details/GoalsAndValues";
import OverView from "./details/OverView";
import OurAwards from "./details/OurAwards";
import OurPartners from "./details/OurPartners";

const StepperWidget = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    { title: "WHO WE ARE", content: <WhoWeAre /> },
    { title: "Goals & Values", content: <GoalsAndValues/> },
    { title: "Overview", content: <OverView/>},
    { title: "Our Awards", content: <OurAwards/> },
    { title: "Our Partners", content: <OurPartners/> },
  ];

  return (
    <div className="  rounded-t-3xl p-6 md:p-12">
      <div className="container mx-auto shadow bg-white dark:bg-neutral-900 rounded-2xl  p-8 backdrop-blur-sm bg-opacity-90 dark:bg-opacity-80">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar Navigation */}
          <div className="md:w-1/3">
            <div className="sticky top-8">
            <h2 className="text-sm font-bold text-gray-800 dark:text-white mb-6">Discover Infinity Technology International Ltd .</h2>
            <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-6">Delivering Excellence Since 1995</h2>
              <div className="space-y-4">
                {steps.map((step, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="relative"
                  >
                    {index < steps.length - 1 && (
                      <div
                        className={`absolute left-6 top-12 w-0.5 h-8 ${currentStep > index ? "bg-blue-600" : "bg-gray-200 dark:bg-neutral-700"}`}
                      />
                    )}
                    <button
                      onClick={() => setCurrentStep(index)}
                      className={`w-full flex items-center p-4 rounded-xl transition-all duration-300 ${currentStep === index ? "bg-blue-600 text-white shadow-lg shadow-blue-200 dark:shadow-blue-900" : currentStep > index ? "bg-blue-50 text-blue-600 dark:bg-neutral-700 dark:text-blue-400" : "bg-gray-50 text-gray-600 dark:bg-neutral-800 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-neutral-700"}`}
                      aria-label={`Go to step ${index + 1}: ${step.title}`}
                    >
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-4 ${currentStep === index ? "bg-white text-blue-600 dark:bg-blue-600 dark:text-white" : currentStep > index ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-600 dark:bg-neutral-700 dark:text-gray-300"}`}>
                        {currentStep > index ? <FiCheck className="w-5 h-5" /> : <span>{index + 1}</span>}
                      </div>
                      <h3 className="font-semibold flex-1 text-left">{step.title}</h3>
                      <FiChevronRight className={`w-5 h-5 ${currentStep === index ? "text-white" : "text-gray-400 dark:text-gray-500"}`} />
                    </button>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Step Content */}
          <div className="md:w-2/3">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-white dark:bg-neutral-900 rounded-xl lg:p-6 lg:border lg:border-gray-500/20"
            >

              <div className="prose max-w-none dark:text-gray-300">{steps[currentStep].content}</div>
              <div className="mt-8 flex justify-between">
                <button
                  onClick={() => setCurrentStep((prev) => Math.max(0, prev - 1))}
                  disabled={currentStep === 0}
                  className="px-6 py-2 rounded-lg bg-gray-100 text-gray-600 dark:bg-neutral-700 dark:text-gray-300 font-medium hover:bg-gray-200 dark:hover:bg-neutral-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                >
                  Previous
                </button>
                <button
                  onClick={() => setCurrentStep((prev) => Math.min(steps.length - 1, prev + 1))}
                  disabled={currentStep === steps.length - 1}
                  className="px-6 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                >
                  {currentStep === steps.length - 1 ? "Complete" : "Next"}
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepperWidget;
