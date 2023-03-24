import React from 'react';

const PageHeader = ({ children }) => {
  return (
    <>
      <div>
        <div className="max-w-7xl mx-auto pt-16 px-4 sm:pt-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="mt-1 text-4xl font-extrabold text-gray-900 dark:text-gray-50 sm:text-5xl sm:tracking-tight lg:text-6xl font-display">
              Welcome Changelog Listeners!
            </p>
            <p className="max-w-xl text-3xl mt-5 mx-auto text-xl text-gray-500 dark:text-gray-50">
              Enterprise Linux, the community way.
            </p>
          </div>
        </div>
      </div>
      {children}
    </>
  );
};

export default PageHeader;
