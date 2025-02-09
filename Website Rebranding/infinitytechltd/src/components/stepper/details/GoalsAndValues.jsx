import React from "react";

const GoalsAndValues = () => {
  return (
    <div className="container mx-auto lg:px-6 py-12">
      <div className="grid gap-12 grid-cols-1">

        {/* Mission Section */}
        <section className="bg-white dark:bg-neutral-800 shadow-lg rounded-lg p-6 text-start ">
          <h2 className="text-2xl font-bold dark:text-white">Mission</h2>
          <p className="dark:text-white mt-4">
            21st-century Software Defined Networking; team and customer engagement solutions that help you lead in a world of IoT, mobility, apps, social, and cloud—including Big Data Analytics and insight.
          </p>

        </section>

        {/* Vision Section */}
        <section className="bg-white dark:bg-neutral-800 shadow-lg rounded-lg p-6 text-start ">
        <h2 className="text-2xl font-bold dark:text-white">Vision</h2>
        <p className="dark:text-white mt-4">
            To be an enterprise IT/ITES solutions provider with global standards of excellence.
          </p>

        </section>

        {/* Goals Section */}
        <section className="bg-white dark:bg-neutral-800 shadow-lg rounded-lg p-6 text-start ">
        <h2 className="text-2xl font-bold dark:text-white">Goals</h2>
        <p className="dark:text-white mt-4">
            Create a seamless, user-centric digital experience that enhances productivity, fosters innovation, and surpasses client expectations.
          </p>

        </section>

      </div>
    </div>
  );
};

export default GoalsAndValues;
