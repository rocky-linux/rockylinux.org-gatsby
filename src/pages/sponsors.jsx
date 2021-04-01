import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Header from '../components/header';
import Footer from '../components/footer';

import OpenDrivesLogo from '../images/opendrives.png';
import MattermostLogo from '../images/mattermost.png';
import AwsLogo from '../images/aws.png';
import FortyFiveDrivesLogo from '../images/45drives.jpg';

const Sponsors = ({ data, pageContext: { locale: language } }) => {
  return (
    <Layout>
      <SEO />
      <Header pageContext="{locale: language}" />
      <main className="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white z-0">
        <div className="max-w-4xl mx-auto py-8 px-4 sm:py-10 sm:px-6 lg:px-8">
          <div className="px-4 pb-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="max-w-screen-sm text-center sm:mx-auto">
              <div className="inline-block mb-5 rounded-full sm:mx-auto">
                <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-green-600">
                  <svg
                    className="w-12 h-12 text-green-100"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </div>
              </div>
              <h2 className="mb-4 font-sans text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-50 sm:text-4xl sm:leading-none">
                Sponsors
              </h2>
              <p className="text-base text-gray-700 dark:text-gray-300 md:text-lg sm:px-4">
                We would like to thank our sponsors for their support thus far
                on the project.
              </p>
              <hr className="mx-auto" />
            </div>
          </div>
          <div className="px-4 pb-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="grid gap-5 lg:grid-cols-2 sm:max-w-sm sm:mx-auto lg:max-w-full">
              <div className="overflow-hidden transition-shadow duration-300 rounded">
                <a href="https://www.45drives.com/">
                  <img
                    src={FortyFiveDrivesLogo}
                    className="object-cover w-full h-64 rounded"
                    alt=""
                  />
                </a>
                <div className="py-5">
                  <a
                    href="https://www.45drives.com/"
                    className="inline-block mb-3 text-gray-900 dark:text-gray-50 transition-colors duration-200 hover:text-gray-600 dark:hover:text-gray-300"
                  >
                    <p className="text-2xl font-bold leading-5">45Drives</p>
                  </a>
                  <p className="mb-4 text-gray-700 dark:text-gray-300">
                    45Drives offers enterprise storage solutions built on
                    powerful & robust open-source software that allows customers
                    to benefit from the cost savings & flexibility of
                    off-the-shelf hardware. Check them out for a fully supported
                    data storage solution at the best cost per terabyte!
                  </p>
                </div>
              </div>
              <div className="overflow-hidden transition-shadow duration-300 rounded">
                <a href="https://opendrives.com/">
                  <img
                    src={OpenDrivesLogo}
                    className="rounded bg-white"
                    alt=""
                  />
                </a>
                <div className="py-5">
                  <a
                    href="https://opendrives.com/"
                    className="inline-block mb-3 text-gray-900 dark:text-gray-50 transition-colors duration-200 hover:text-gray-600 dark:hover:text-gray-300"
                  >
                    <p className="text-2xl font-bold leading-5">OpenDrives</p>
                  </a>
                  <p className="mb-4 text-gray-700 dark:text-gray-300">
                    OpenDrives is a global provider of enterprise-grade, hyper-scalable, network-attached-storage (NAS) solutions. We deliver the highest performing solutions for our customers - to match individual performance needs - for the most robust, complex and mission-critical projects and workflows, on-premises and into the cloud.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 mb-6">
            <div className="sm:flex flex-wrap justify-center items-center text-center gap-8">
              <div className="w-full mt-2 sm:w-1/2 md:w-1/2 lg:w-1/4 px-4 py-4 bg-gray-500 shadow-lg rounded-lg dark:bg-gray-800">
                <a href="https://mattermost.com" aria-label="Mattermost">
                  <img
                    className="object-cover w-full"
                    src={MattermostLogo}
                    alt="Mattermost"
                  />
                </a>
              </div>
              <div className="w-full mt-2 sm:w-1/2 md:w-1/2 lg:w-1/4 px-4 py-4 bg-gray-500 shadow-lg rounded-lg dark:bg-gray-800">
                <a href="https://aws.amazon.com/" aria-label="AWS">
                  <img
                    className="object-cover w-full"
                    src={AwsLogo}
                    alt="AWS"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="flex flex-col lg:flex-row">
              <div className="mb-6 lg:mb-0 lg:w-1/2 lg:pr-5">
                <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-50 sm:text-4xl sm:leading-none">
                  Want to support Rocky Linux?
                </h2>
              </div>
              <div className="lg:w-1/2">
                <p className="text-base text-gray-700 dark:text-gray-300">
                  Rocky Linux is an open source enterprise operating system by
                  the community, and for the community. While we will never
                  permit ourselves to be controlled by any single entity, we are
                  eager to engage and work with organizations interested in
                  supporting Rocky. We’re still exploring options for varying
                  tiers of sponsorships, and would be happy to discuss your
                  ideas. Say hi at{' '}
                  <a
                    href="mailto:sponsor@rockylinux.org"
                    className="text-green-600 font-medium"
                  >
                    sponsor@rockylinux.org
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer pageContext="{locale: language}" />
    </Layout>
  );
};

export default Sponsors;
