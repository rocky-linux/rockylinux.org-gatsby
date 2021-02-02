import { graphql } from 'gatsby';
import React from 'react';
import { Link } from 'gatsby';
import { Translate } from '../i18n/utils/translate';

import Header from '../components/header';
import Footer from '../components/footer';
import Layout from '../components/layout';
import SEO from '../components/seo';

import CtrlIqLogo from '../images/ciq.png';
import MattermostLogo from '../images/mattermost.png';
import AwsLogo from '../images/aws.png';

const Index = ({ pageContext: { locale: language } }) => {

  const translate = Translate();

  return (
    <Layout>
      <SEO />
      <Header pageContext= "{locale: language}" />
      <div className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
          <div className="flex flex-col mb-16 text-center sm:mb-0">
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 dark:text-white sm:text-6xl md:mx-auto">
                {translate('landing.p1.heading')}
              </h2>
              <p className="text-base text-gray-500 dark:text-gray-300 md:text-lg">
                {translate('landing.p1.content')}
              </p>
            </div>
            <div>
              <a href="https://chat.rockylinux.org/" className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide rounded-md shadow-md text-white dark:text-gray-900 bg-green-500 hover:bg-green-400 focus:outline-none focus:border-green-700 focus:shadow-outline-green transition duration-150 ease-in-out">
                <svg className="h-6 w-6 mr-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38 31"><path d="M16.109 0C9.396-.047 3.12 4.167.849 10.869c-2.833 8.371 1.656 17.448 10.02 20.281 8.371 2.833 17.448-1.656 20.281-10.02 2.303-6.803-.229-14.068-5.749-18.079l.172 3.396c2.749 3.041 3.839 7.349 2.468 11.401-2.047 6.041-8.791 9.219-15.068 7.093-6.276-2.125-9.708-8.745-7.661-14.792 1.376-4.057 4.876-6.828 8.928-7.557L16.427.004c-.104-.005-.213-.005-.323-.005zm4.703 1.459a.471.471 0 00-.167.031h-.005a.556.556 0 00-.145.099c-.192.188-.875 1.105-.875 1.105l-1.484 1.837-1.735 2.115-2.98 3.704s-1.364 1.703-1.061 3.801c.301 2.1 1.859 3.12 3.072 3.532 1.208.405 3.068.541 4.584-.943 1.515-1.48 1.463-3.667 1.463-3.667l-.115-4.745-.093-2.735-.063-2.364s.011-1.141-.025-1.412a.698.698 0 00-.047-.14l-.011-.016-.005-.016a.39.39 0 00-.308-.187z" /></svg>{translate('links.join-the-discussion')}
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="relative bg-gray-50 dark:bg-gray-900 overflow-hidden" dir="auto">
        <div className="px-4 pb-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-4 lg:px-4 lg:py-4">
          <div className="rounded-lg shadow-md p-7 sm:p-16 bg-gray-100 dark:bg-gray-800">
            <div className="flex flex-col lg:flex-row">
              <div className="mb-6 lg:mb-0 lg:w-1/2 lg:pr-5">
                <h2 className="font-sans text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl sm:leading-none">
                  {translate('landing.p2.heading')}
                </h2>
              </div>
              <div className="lg:w-1/2">
                <p className="text-base text-gray-600 dark:text-gray-300">
                  {translate('landing.p2.content')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 dark:bg-gray-900" dir="auto">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl md:mx-auto text-center">
                {translate('faq.title')}
              </h2>
            </div>
          </div>
          <div className="max-w-screen-xl sm:mx-auto">
            <div className="mt-6 mb-2">
              <dl className="space-y-8 divide-y divide-gray-300 dark:divide-white">
                <div className="pt-6 md:grid md:grid-cols-12 md:gap-8">
                  <dt className="text-base font-bold text-gray-900 dark:text-gray-200 md:col-span-5">
                    {translate('faq.q.downstream-partner-direction')}
                  </dt>
                  <dd className="mt-2 md:mt-0 md:col-span-7">
                    <p className="text-base text-gray-600 dark:text-gray-300">
                      {translate('faq.a.downstream-partner-direction')}
                    </p>
                  </dd>
                </div>
                <div className="pt-6 md:grid md:grid-cols-12 md:gap-8">
                  <dt className="text-base font-bold text-gray-900 dark:text-gray-200 md:col-span-5">
                    {translate('faq.q.come-in')}
                  </dt>
                  <dd className="mt-2 md:mt-0 md:col-span-7">
                    <p className="text-base text-gray-600 dark:text-gray-300">
                      {translate('faq.a.come-in')}
                    </p>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
      <div className="relative bg-gray-50 dark:bg-gray-900 overflow-hidden" dir="auto">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-md md:px-4 lg:px-4 lg:py-4">
          <div className="max-w-xl mb-6 md:mx-auto text-center lg:max-w-2xl md:mb-6">
            <h2 className="max-w-lg font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 dark:text-gray-50 sm:text-4xl md:mx-auto">
              {translate('links.sponsors')}
            </h2>
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md mb-6">
            <div className="max-w-3xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-7 lg:grid-cols-3">
                <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                  <a href="https://ctrliq.com" aria-label="CtrlIQ">
                    <img
                        src={CtrlIqLogo}
                        className="h-16 grayscale transition duration-200"
                        alt="CtrlIQ"
                    />
                  </a>
                </div>
                <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                  <a href="https://mattermost.com" aria-label="Mattermost">
                    <img
                        src={MattermostLogo}
                        className="h-16 grayscale transition duration-200"
                        alt="Mattermost"
                    />
                    </a>
                </div>
                <div className="col-span-1 flex justify-center md:col-span-3 lg:col-span-1">
                  <a href="https://aws.amazon.com/" aria-label="AWS">
                    <img
                        src={AwsLogo}
                        className="h-16 grayscale transition duration-200"
                        alt="AWS"
                    />
                    </a>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center">
            <Link
                to="/sponsors/"
                className="mb-2 inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md shadow-md text-green-500 bg-white dark:bg-gray-800 hover:text-green-400 focus:outline-none focus:border-green-300 focus:shadow-outline-green active:bg-gray-50 active:text-gray-700 transition duration-150 ease-in-out"
            >
                <span className="-ml-2 mr-1">
                        <svg className="w-8 h-8" stroke="currentColor" viewBox="0 0 52 52">
                            <polygon stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none"
                                     points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                        </svg>
                </span>
              See All
            </Link>
          </div>
        </div>
      </div>
      <Footer pageContext= "{locale: language}" />
    </Layout>
  );
};

export default Index;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        name
        title
        description
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 5
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`;
