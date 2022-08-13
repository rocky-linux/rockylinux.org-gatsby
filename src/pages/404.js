import React from 'react';
import SEO from '../components/Seo';
import Layout from '../components/Layout';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Shrug from '../images/shrug.svg';
import ShrugDark from '../images/shrug-dark.svg';

const NotFoundPage = () => {
  return (
    <Layout>
      <SEO title="404" />
      <Header pageContext="{locale: language}" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-gray-400 dark:text-gray-200">
        <div className="flex dark:hidden items-center justify-center mt-20">
          <img src={Shrug} className="h-20" />
        </div>
        <div className="hidden dark:flex items-center justify-center mt-20">
          <img src={ShrugDark} className="h-20" />
        </div>
        <div className="flex items-center justify-center mt-10">
          <h1 className="text-5xl font-bold">We couldn't find that page.</h1>
        </div>
        <div className="flex items-center justify-center pt-5 mb-20">
          <p className="text-xl">
            Please check the URL and try again or{' '}
            <a
              className="font-medium text-green-500 underline"
              href="https://github.com/rocky-linux/rockylinux.org"
            >
              report an issue
            </a>
            .
          </p>
        </div>
      </div>
      <Footer pageContext="{locale: language}" />
    </Layout>
  );
};

export default NotFoundPage;
