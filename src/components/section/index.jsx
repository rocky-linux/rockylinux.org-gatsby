import React from 'react';

const Section = ({ title, children, description }) => {
  return (
    <main className="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white z-0">
      <div className="max-w-4xl mx-auto py-8 px-4 sm:py-10 sm:px-6 lg:px-8">
        <div className="px-4 pb-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="max-w-screen-sm text-center sm:mx-auto">
            <h2 className="mb-4 font-sans text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-50 sm:text-4xl sm:leading-none">
              {title}
            </h2>
            <p className="text-base text-gray-700 dark:text-gray-300 md:text-lg sm:px-4">
              {description}
            </p>
            <hr className="mx-auto" />
          </div>
        </div>
        <div className="px-4">
          <div className="grid gap-4 row-gap-6 lg:grid-cols-1">{children}</div>
        </div>
      </div>
    </main>
  );
};

export default Section;
