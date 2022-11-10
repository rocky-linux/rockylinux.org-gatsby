import React from 'react';

const Section = ({ title, children, category }) => {
  return (
    <>
      <div className="px-8 sm:px-0 max-w-4xl mx-auto mb-12">
        <h2 className="dark:text-white text-2xl font-bold mb-3">{category}</h2>
        <ul className="dark: text-white font-semibold">
            {children}
        </ul>
      </div>
    </>
  );
};

export default Section;
