import React from 'react';
import { motion } from 'framer-motion';
const teamMembers = [
  {
    department: 'Management',
    members: [
      { name: 'Mr. A.S.M Kamaluddin', role: 'Chairman', image: 'https://www.infinitytechltd.com/storage/team-members/chairman.jpg' },
      { name: 'Mr. A.S.M Jamaluddin', role: 'Vice Chairman', image: 'https://www.infinitytechltd.com/storage/team-members/vc.jpg' },
      { name: 'Mr. Kazi Mohammad Rahmatullah', role: 'Managing Director', image: 'https://www.infinitytechltd.com/storage/team-members/MD.jpg' },
      { name: 'Mr. A.S.M Ashrafuddin', role: 'Director', image: 'https://www.infinitytechltd.com/storage/team-members/director.jpg' },
      { name: 'Mr. A.S.M Shihabuddin', role: 'Director', image: 'https://www.infinitytechltd.com/storage/team-members/director%201.jpg' },
      { name: 'Anwar Hossain', role: 'Executive director', image: 'https://www.infinitytechltd.com/storage/team-members/Anwar%20Hossain.png' },
      { name: 'MD Hamidur Rahman', role: 'Deputy General Manager', image: 'https://www.infinitytechltd.com/storage/team-members/Shohel%20Rohmam.png' },
    ],
  },
  {
    department: 'Business Development',
    members: [
      { name: 'Bob Smith', role: 'Business Analyst', image: 'https://placehold.co/400' },
      { name: 'Bob Smith', role: 'Business Analyst', image: 'https://placehold.co/400' },
      { name: 'Bob Smith', role: 'Business Analyst', image: 'https://placehold.co/400' },
      { name: 'Bob Smith', role: 'Business Analyst', image: 'https://placehold.co/400' },
      { name: 'Bob Smith', role: 'Business Analyst', image: 'https://placehold.co/400' },
    ],
  },
  {
    department: 'Software Development',
    members: [
      { name: 'Charlie Brown', role: 'Software Engineer', image: 'https://placehold.co/400' },
      { name: 'Charlie Brown', role: 'Software Engineer', image: 'https://placehold.co/400' },
      { name: 'Charlie Brown', role: 'Software Engineer', image: 'https://placehold.co/400' },
      { name: 'Charlie Brown', role: 'Software Engineer', image: 'https://placehold.co/400' },
      { name: 'Charlie Brown', role: 'Software Engineer', image: 'https://placehold.co/400' },
      { name: 'Charlie Brown', role: 'Software Engineer', image: 'https://placehold.co/400' },
      { name: 'Charlie Brown', role: 'Software Engineer', image: 'https://placehold.co/400' },
      { name: 'Charlie Brown', role: 'Software Engineer', image: 'https://placehold.co/400' },
      { name: 'Charlie Brown', role: 'Software Engineer', image: 'https://placehold.co/400' },
      { name: 'Charlie Brown', role: 'Software Engineer', image: 'https://placehold.co/400' },
      { name: 'Charlie Brown', role: 'Software Engineer', image: 'https://placehold.co/400' },
      { name: 'Charlie Brown', role: 'Software Engineer', image: 'https://placehold.co/400' },
    ],
  },
  {
    department: 'Accounts',
    members: [
      { name: 'David Lee', role: 'Accountant', image: 'https://placehold.co/400' },
      { name: 'David Lee', role: 'Accountant', image: 'https://placehold.co/400' },
      { name: 'David Lee', role: 'Accountant', image: 'https://placehold.co/400' },
      { name: 'David Lee', role: 'Accountant', image: 'https://placehold.co/400' },
    ],
  },
  {
    department: 'Support Team',
    members: [
      { name: 'Emma Wilson', role: 'Support Specialist', image: 'https://placehold.co/400' },
      { name: 'Emma Wilson', role: 'Support Specialist', image: 'https://placehold.co/400' },
      { name: 'Emma Wilson', role: 'Support Specialist', image: 'https://placehold.co/400' },
      { name: 'Emma Wilson', role: 'Support Specialist', image: 'https://placehold.co/400' },
      { name: 'Emma Wilson', role: 'Support Specialist', image: 'https://placehold.co/400' },
      { name: 'Emma Wilson', role: 'Support Specialist', image: 'https://placehold.co/400' },
      { name: 'Emma Wilson', role: 'Support Specialist', image: 'https://placehold.co/400' },
      { name: 'Emma Wilson', role: 'Support Specialist', image: 'https://placehold.co/400' },
      { name: 'Emma Wilson', role: 'Support Specialist', image: 'https://placehold.co/400' },
      { name: 'Emma Wilson', role: 'Support Specialist', image: 'https://placehold.co/400' },
    ],
  },
  {
    department: 'Previous Employee',
    members: [
      { name: 'Frank Miller', role: 'Former Developer', image: 'https://placehold.co/400' },
      { name: 'Frank Miller', role: 'Former Developer', image: 'https://placehold.co/400' },
      { name: 'Frank Miller', role: 'Former Developer', image: 'https://placehold.co/400' },
      { name: 'Frank Miller', role: 'Former Developer', image: 'https://placehold.co/400' },
      { name: 'Frank Miller', role: 'Former Developer', image: 'https://placehold.co/400' },
      { name: 'Frank Miller', role: 'Former Developer', image: 'https://placehold.co/400' },
    ],
  },
];

const Team = () => {
  return (
    <div className="w-full container mx-auto p-10">
      {teamMembers.map((dept, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-200 mb-8 border-b-4 pb-3 border-gray-300 dark:border-gray-600">
            {dept.department}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
            {dept.members.map((member, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="p-8 bg-white dark:bg-neutral-800 rounded-3xl shadow-2xl flex flex-col items-center text-center"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mb-5 border-4 border-gray-300 dark:border-gray-600"
                />
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-200 mb-2">{member.name}</h3>
                <p className="text-lg text-gray-600 dark:text-gray-400">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Team;
