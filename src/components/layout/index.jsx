import React from 'react';

const classes = {
  wrapper: '',
  outerWrapper: 'relative',
  svg: 'hidden fixed transform right-0 top-5 z-0 xl:block',
};

const Layout = ({ children }) => {
  return (
    <div className="relative bg-gray-50 dark:bg-gray-900 overflow-hidden">
      <div>{children}</div>
    </div>
  );
};

export default Layout;
