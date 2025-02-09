import React from 'react';

const jobListings = [
  {
    id: 1,
    title: 'Frontend Developer',
    location: 'Remote',
    type: 'Full-time',
    description: 'We are looking for a skilled Frontend Developer with experience in React and Tailwind CSS.',
  },
  {
    id: 2,
    title: 'Backend Developer',
    location: 'New York, NY',
    type: 'Full-time',
    description: 'Seeking an experienced Backend Developer proficient in Node.js and MongoDB.',
  },
  {
    id: 3,
    title: 'UI/UX Designer',
    location: 'San Francisco, CA',
    type: 'Contract',
    description: 'Creative UI/UX Designer needed to improve user experience and interface design.',
  },
];

const Career = () => {
  return (
    <div className="container dark:text-white mx-auto px-5">
      <h2 className="text-3xl font-semibold text-center mb-10">Join Our Team</h2>
      <div className="grid md:grid-cols-1 gap-6">
        {jobListings.map((job) => (
          <div key={job.id} className="p-6 border border-gray-200 rounded-lg shadow-lg dark:border-neutral-700">
            <h3 className="text-xl font-bold">{job.title}</h3>
            <p className="text-sm ">{job.location} | {job.type}</p>
            <p className="mt-2 ">{job.description}</p>
            <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
              Apply Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Career;
