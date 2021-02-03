import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="relative bg-gray-50 dark:bg-gray-900 overflow-hidden">
      <noscript>
        <style>{`
          #LanguageDiv {display:none;}
        `}
        </style>
      </noscript>
      <div>{children}</div>
    </div>
  );
};

export default Layout;
