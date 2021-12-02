import { Link } from 'gatsby';
import { Translate, Trans } from '../i18n/utils/translate';

import React from 'react';
import Footer from '../components/footer';
import Header from '../components/header';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { LocalizedLink } from 'gatsby-theme-i18n';

const AlternativeImagesPage = ({ pageContext }) => {
  const translate = Translate('alternative');

  return (
    <Layout>
      <SEO title={translate('title')} />
      <Header pageContext="{locale: language}" />
      <main className="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white z-0">
        <div className="px-4 pb-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="max-w-screen-sm text-center sm:mx-auto">
            <div className="inline-block mb-5 rounded-full sm:mx-auto">
              <div className="flex items-center justify-center w-16 h-16 mb-4 mt-10 bg-green-600 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-8 w-8 text-green-100"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    strokeWidth="3"
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
              </div>
            </div>
            <h2 className="mb-4 font-sans text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-50 sm:text-4xl sm:leading-none">
              {translate('title')}
            </h2>
            <p className="text-base text-gray-700 dark:text-gray-300 md:text-lg sm:px-4">
              {translate('description')}
            </p>
            <hr className="mx-auto" />
          </div>
          <div className="max-w-screen-sm text-center sm:mx-auto">
            <h3 className="mb-4 font-sans text-xl font-bold tracking-tight text-gray-900 dark:text-gray-50 sm:text-2xl sm:leading-none">
              {translate('alt-archs')}
            </h3>
          </div>
          <div className="shadow overflow-x-auto overflow-y-hidden rounded-md shadow max-w-screen-md mx-auto">
            <table className="min-w-full divide-y divide-gray-400">
              <thead className="bg-gray-200 dark:bg-gray-600">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                  >
                    {translate('table.heading.0')}
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                  >
                    {translate('table.heading.2')}
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                  >
                    {translate('table.heading.1')}
                  </th>
                </tr>
              </thead>
              <tbody className="bg-gray-100 dark:bg-gray-800">
                <tr>
                  <td className="px-6 py-3 whitespace-nowrap">RPi (aarch64)</td>
                  <td className="px-6 py-3 whitespace-nowrap">
                    <a
                      className="font-medium text-green-600 dark:text-green-500"
                      href="http://download.rockylinux.org/pub/rocky/8.5/rockyrpi/aarch64/images/RockyRpi_8.5_20211116.sha256sum"
                    >
                      Checksum
                    </a>
                  </td>
                  <td className="px-6 py-3 whitespace-nowrap">
                    <a
                      className="font-medium text-green-600 dark:text-green-500"
                      onClick="_paq.push(['trackEvent', 'Download', 'Download', 'x86_64 Minimal', 1]);"
                      href="http://download.rockylinux.org/pub/rocky/8.5/rockyrpi/aarch64/images/RockyRpi_8.5_20211116.img.xz"
                    >
                      Download
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="max-w-screen-sm text-center sm:mx-auto">
            <h3 className="mt-9 mb-4 font-sans text-xl font-bold tracking-tight text-gray-900 dark:text-gray-50 sm:text-2xl sm:leading-none">
              {translate('live-images')}
            </h3>
          </div>
          <div className="shadow overflow-x-auto overflow-y-hidden rounded-md shadow max-w-screen-md mx-auto">
            <table className="min-w-full divide-y divide-gray-400">
              <thead className="bg-gray-200 dark:bg-gray-600">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                  >
                    {translate('table.heading.3')}
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                  >
                    {translate('table.heading.2')}
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                  >
                    {translate('table.heading.1')}
                  </th>
                </tr>
              </thead>
              <tbody className="bg-gray-100 dark:bg-gray-800">
                <tr>
                  <td className="px-6 py-3 whitespace-nowrap">GNOME (Workstation)</td>
                  <td className="px-6 py-3 whitespace-nowrap">
                    <a
                      className="font-medium text-green-600 dark:text-green-500"
                      href="https://download.rockylinux.org/pub/rocky/8.5/live/x86_64/CHECKSUM"
                    >
                      Checksum
                    </a>
                  </td>
                  <td className="px-6 py-3 whitespace-nowrap">
                    <a
                      className="font-medium text-green-600 dark:text-green-500"
                      onClick="_paq.push(['trackEvent', 'Download', 'Download', 'x86_64 Minimal', 1]);"
                      href="https://download.rockylinux.org/pub/rocky/8.5/live/x86_64/Rocky-8.5-Workstation-20211114.iso"
                    >
                      x86_64
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-3 whitespace-nowrap">XFCE</td>
                  <td className="px-6 py-3 whitespace-nowrap">
                    <a
                      className="font-medium text-green-600 dark:text-green-500"
                      href="https://download.rockylinux.org/pub/rocky/8.5/live/x86_64/CHECKSUM"
                    >
                      Checksum
                    </a>
                  </td>
                  <td className="px-6 py-3 whitespace-nowrap">
                    <a
                      className="font-medium text-green-600 dark:text-green-500"
                      onClick="_paq.push(['trackEvent', 'Download', 'Download', 'x86_64 Minimal', 1]);"
                      href="https://download.rockylinux.org/pub/rocky/8.5/live/x86_64/Rocky-8.5-XFCE-20211115.iso"
                    >
                      x86_64
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="max-w-screen-sm mx-auto mt-8 text-center">
            <b>{translate('eol')}:</b> 31st May 2029
          </div>
          <div className="max-w-screen-sm px-8 mx-auto mt-8 flex flex-col">
            <div className="flex flex-col md:flex-row items-center justify-evenly mb-6">
              <a
                className="text-green-600 dark:text-green-500 font-medium"
                href="https://docs.rockylinux.org/"
              >
                {translate('docs')}
              </a>
              <a
                className="text-green-600 dark:text-green-500 font-medium"
                href="https://bugs.rockylinux.org"
              >
                {translate('report')}
              </a>
              <LocalizedLink
                to="/keys"
                className="text-green-600 dark:text-green-500 font-medium"
              >
                {translate('keys')}
              </LocalizedLink>
            </div>
          </div>
        </div>
      </main>
      <Footer pageContext="{locale: language}" />
    </Layout>
  );
};

export default AlternativeImagesPage;
