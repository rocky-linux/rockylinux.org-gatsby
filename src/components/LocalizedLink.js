import React from 'react';
import { LocalizedLink as GatsbyLink } from 'gatsby-theme-i18n';

const LocalizedLink = ({ children, to, language, className }) => {
  const internal = /^\/(?!\/)/.test(to);

  if (internal) {
    return (
      <GatsbyLink to={to} className={className} language={language}>
        {children}
      </GatsbyLink>
    );
  }
  return (
    <a href={to} className={className} target="_blank">
      {children}
    </a>
  );
};

export default LocalizedLink;
