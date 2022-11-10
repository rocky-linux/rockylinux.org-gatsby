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
          </div>
        </div>
      </div>
      <div className="max-w-4xl mx-auto mb-24">
        <dl class="text-gray-900 divide-y-2 divide-gray-200 dark:text-white dark:divide-gray-700">
            {children}
        </dl>
      </div>
    </>
  );
};

export default Section;
