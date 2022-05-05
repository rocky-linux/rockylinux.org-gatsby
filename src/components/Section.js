import React from 'react';

const Section = ({ title, children, description }) => {
  return (
    <>
      <div>
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="mt-1 text-4xl font-extrabold text-gray-900 dark:text-gray-50 sm:text-5xl sm:tracking-tight lg:text-6xl">
              {title}
            </p>
            <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500 dark:text-gray-50">
              {description}
            </p>
          </div>
        </div>
      </div>
      <div className="relative max-w-7xl mx-auto">
        <div className="max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
          {children}
        </div>
      </div>
    </>
  );
};

export default Section;
