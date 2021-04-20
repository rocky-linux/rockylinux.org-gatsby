import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Header from '../components/header';
import Footer from '../components/footer';

import CtrlIqLogo from '../images/ciq.png';
import MattermostLogo from '../images/mattermost.png';
import NaverLogo from '../images/naver.png';
import FossHostLogo from '../images/fosshost.png';
import FastlyLogo from '../images/fastly.png';

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
                Partners
              </h2>
              <p className="text-base text-gray-700 dark:text-gray-300 md:text-lg sm:px-4">
                Partners of the RESF represent ongoing relationships of
                strategic importance to the Rocky Linux project. Through
                dedication of engineering expertise, infrastructure resources,
                or other means, their support is critical to our continued
                success and long term stability.
              </p>
              <hr className="mx-auto" />
            </div>
          </div>
          <div className="rounded-lg bg-gray-200 dark:bg-gray-900 overflow-hidden shadow divide-y divide-gray-200 dark:divide-gray-800 sm:divide-y-0 sm:grid sm:grid-cols-2 sm:gap-px">
            <div className="rounded-tl-lg rounded-tr-lg sm:rounded-tr-none relative group bg-gray-500 dark:bg-gray-800 p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-green-500">
              <div>
                <span className="rounded-lg inline-flex p-3">
                  <img
                    className="object-cover w-full"
                    src={CtrlIqLogo}
                    alt="CIQ"
                  />
                </span>
              </div>
              <div className="mt-8">
                <h3 className="text-lg font-medium text-gray-50">
                  <a href="https://ctrliq.com" className="focus:outline-none">
                    <span className="absolute inset-0" aria-hidden="true" />
                    Ctrl IQ
                    <span className="ml-2 bg-green-200 text-green-600 py-1 px-2 text-xs rounded-full self-center">
                      Founding Partner
                    </span>
                  </a>
                </h3>
                <p className="mt-2 text-sm text-gray-200">
                  Unified, secured, platform agnostic computing starting with
                  the provisioning, management, and support of the base OS
                  (Rocky Linux) and going through the deployment stack of
                  containers with cloud native, multi-prem, multi-cloud
                  meta-orchestration of performance critical workflows and data.
                </p>
              </div>
            </div>
            <div className="sm:rounded-tr-lg relative group bg-gray-500 dark:bg-gray-800 p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-green-500">
              <div>
                <span className="rounded-lg inline-flex p-3">
                  <img
                    className="object-cover w-full"
                    src={NaverLogo}
                    alt="NAVER Cloud"
                  />
                </span>
              </div>
              <div className="mt-8">
                <h3 className="text-lg font-medium text-gray-50">
                  <a href="https://ncloud.com/" className="focus:outline-none">
                    <span className="absolute inset-0" aria-hidden="true" />
                    NAVER Cloud
                    <span className="ml-2 bg-green-700 text-green-100 py-1 px-2 text-xs rounded-full self-center">
                      Principal Partner
                    </span>
                  </a>
                </h3>
                <p className="mt-2 text-sm text-gray-200">
                  NAVER Cloud Platform is a South Korean cloud service that
                  started in 2017 under NAVER Cloud, a subsidiary of NAVER. It
                  provides over 170 individual services in 2021 and holds
                  various security certifications including CSA STAR GOLD, GDPR,
                  and more. It also currently provides cloud services in 10
                  locations around the world.
                </p>
              </div>
            </div>
          </div>

          <div className="px-4 mx-auto my-5 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 mb-6">
            <div className="sm:flex flex-wrap justify-center items-center text-left gap-8">
              <div className="w-full mt-2 sm:w-1/2 md:w-1/2 lg:w-1/4 px-4 py-4 bg-gray-500 shadow-lg rounded-lg dark:bg-gray-800">
                <a href="https://mattermost.com" aria-label="Mattermost">
                  <img
                    className="object-cover w-full"
                    src={MattermostLogo}
                    alt="Mattermost"
                  />
                </a>
                <p className="mt-2 text-sm text-gray-200">
                  Mattermost is an open source messaging solution made for
                  organizations with the highest security requirements. As big
                  believers in the power of open source, Mattermost is thrilled
                  to partner with RESF to help bring an enterprise-grade
                  distribution of Linux to the tech community.
                </p>
              </div>
              <div className="w-full mt-2 sm:w-1/2 md:w-1/2 lg:w-1/4 px-4 py-4 bg-gray-500 shadow-lg rounded-lg dark:bg-gray-800">
                <a href="https://www.fastly.com/" aria-label="Fastly">
                  <img
                    className="object-cover w-full"
                    src={FastlyLogo}
                    alt="Fastly"
                  />
                </a>
              </div>
              <div className="w-full mt-2 sm:w-1/2 md:w-1/2 lg:w-1/4 px-4 py-4 bg-gray-500 shadow-lg rounded-lg dark:bg-gray-800">
                <a href="https://fosshost.org/" aria-label="Fosshost">
                  <img
                    className="object-cover w-full"
                    src={FossHostLogo}
                    alt="Fosshost"
                  />
                </a>
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
