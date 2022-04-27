import React from 'react';
const Layout = ({ children }) => {
  return (
    <div className="relative overflow-hidden bg-gray-50 dark:bg-gray-800">
      <noscript>
        <style>
          {`
                        #LanguageDiv {display:none;}
                    `}
        </style>
      </noscript>
      <div>{children}</div>
    </div>
  );
};

export default Layout;
