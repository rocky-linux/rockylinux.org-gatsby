import React from 'react';
import { LocalizedLink } from 'gatsby-theme-i18n';
import { Translate } from '../i18n/utils/translate';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Header from '../components/header';
import Footer from '../components/footer';

const NotFoundPage = ({ data, pageContext: { locale: language } }) => {
  const translate = Translate();

  return (
    <Layout>
      <SEO title="404 Not Found" />
      <Header pageContext="{locale: language}" />
      <div className="max-w-4xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
        <svg
          className="text-green-500 w-full items-center justify-center icon-404"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-7.536 5.879a1 1 0 001.415 0 3 3 0 014.242 0 1 1 0 001.415-1.415 5 5 0 00-7.072 0 1 1 0 000 1.415z"
            clip-rule="evenodd"
          />
        </svg>
        <h2 className="text-black dark:text-white">
          <span className="block text-5xl sm:text-9xl font-extrabold">404</span>
          <span className="block text-3xl sm:text-6xl">
            {translate('errors.404.title')}
          </span>
        </h2>
        <p className="mt-7 text-2xl leading-6 text-black dark:text-white">
          {translate('errors.404.explanation')}
        </p>
        <LocalizedLink
          to="/"
          language={language}
          className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 shadow-md border border-transparent text-base font-medium rounded-md text-green-500 bg-white dark:bg-gray-800 hover:bg-green-50 dark:hover:bg-gray-700 transition sm:w-auto"
        >
          {translate('links.go-home')}
        </LocalizedLink>
      </div>
      <Footer pageContext="{locale: language}" />
    </Layout>
  );
};

export default NotFoundPage;
