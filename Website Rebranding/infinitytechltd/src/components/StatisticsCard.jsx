import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { FaUsers, FaGlobe, FaBriefcase, FaCalendarAlt } from "react-icons/fa";

const StatisticsCard = ({ icon: Icon, label, value, delay, gradient }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 50;
    const stepValue = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += stepValue;
      if (current > value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [value]);

  return (
    <div
      className={`p-6 rounded-lg shadow-lg bg-white dark:bg-neutral-800 hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300  border border-gray-500/30 ${gradient}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-center justify-center w-14 h-14 mb-4 rounded-full bg-gray-100 dark:bg-neutral-700 bg-opacity-30 text-blue-600">
        <Icon className="w-8 h-8" />
      </div>
      <div className="text-4xl font-bold text-black dark:text-white mb-2" role="timer" aria-live="polite">
        {count}+
      </div>
      <div className="text-black dark:text-white font-medium">{label}</div>
    </div>
  );
};

const StatisticsDisplay = () => {
  const statistics = [
    {
      label: "Satisfied Clients",
      value: 4050,
      icon: FaUsers,
      delay: 0,
      gradient: "",
    },
    {
      label: "Visitors",
      value: 35992,
      icon: FaGlobe,
      delay: 200,
      gradient: "",
    },
    {
      label: "Employees",
      value: 39,
      icon: FaBriefcase,
      delay: 400,
      gradient: "",
    },
    {
      label: "Years of Experience",
      value: 30,
      icon: FaCalendarAlt,
      delay: 600,
      gradient: "",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-2  lg:grid-cols-4 gap-8">
        {statistics.map((stat, index) => (
          <StatisticsCard
            key={index}
            icon={stat.icon}
            label={stat.label}
            value={stat.value}
            delay={stat.delay}
            gradient={stat.gradient}
          />
        ))}
      </div>
    </div>
  );
};

StatisticsCard.propTypes = {
  icon: PropTypes.elementType.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  delay: PropTypes.number.isRequired,
  gradient: PropTypes.string,
};

export default StatisticsDisplay;
