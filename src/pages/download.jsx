import { Link } from 'gatsby';
import React from 'react';
import Footer from '../components/footer';
import Header from '../components/header';
import Layout from '../components/layout';
import SEO from '../components/seo';
import {Translate} from "../i18n/utils/translate";
import dompurify from 'dompurify';

const DownloadPage = ({ pageContext }) => {
  const translate = Translate();
  const sanitizer = dompurify.sanitize;

  return (
    <Layout>
      <SEO />
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
              {translate('download.p1.heading')}
            </h2>
            <p className="text-base text-gray-700 dark:text-gray-300 md:text-lg sm:px-4">
              {translate('download.p1.content')}
            </p>
            <hr className="mx-auto" />
          </div>
          <div className="max-w-screen-md px-8 mx-auto mt-4 flex flex-col">
            <div className="w-full px-3 py-2 rounded-lg shadow bg-red-600 text-white mb-4 text-center">
              <span dangerouslySetInnerHTML={{__html: sanitizer(translate('download.warning'), {ALLOWED_TAGS: ['i', 'a']})}}></span>
            </div>
          </div>
          <div className="shadow overflow-x-auto overflow-y-hidden rounded-md shadow max-w-screen-md mx-auto">
            <table className="min-w-full divide-y divide-gray-400">
              <thead className="bg-gray-200 dark:bg-gray-600">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                  >
                    {translate('download.table.architecture')}
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                  >
                    {translate('download.table.iso')}
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                  >
                    {translate('download.table.packages')}
                  </th>
                </tr>
              </thead>
              <tbody className="bg-gray-100 dark:bg-gray-800">
                <tr>
                  <td className="px-6 py-3 whitespace-nowrap">x86_64</td>
                  <td className="px-6 py-3 whitespace-nowrap">
                    <a
                      className="font-medium text-green-600 dark:text-green-500"
                      onClick="_paq.push(['trackEvent', 'Download', 'Download', 'x86_64 Minimal', 1]);"
                      href="https://download.rockylinux.org/pub/rocky/8.3/isos/x86_64/Rocky-8.3-x86_64-minimal.iso"
                    >
                      {translate('download.table.isos.minimal')}
                    </a>{' '}
                    |&nbsp;
                    <a
                      className="font-medium text-green-600 dark:text-green-500"
                      onClick="_paq.push(['trackEvent', 'Download', 'Download', 'x86_64 DVD', 1]);"
                      href="https://download.rockylinux.org/pub/rocky/8.3/isos/x86_64/Rocky-8.3-x86_64-dvd1.iso"
                    >
                      {translate('download.table.isos.dvd')}
                    </a>{' '}
                    |&nbsp;
                    <a
                      className="font-medium text-green-600 dark:text-green-500"
                      onClick="_paq.push(['trackEvent', 'Download', 'Download', 'x86_64 Boot', 1]);"
                      href="https://download.rockylinux.org/pub/rocky/8.3/isos/x86_64/Rocky-8.3-x86_64-boot.iso"
                    >
                      {translate('download.table.isos.boot')}
                    </a>{' '}
                    |&nbsp;
                    <a
                      className="font-medium text-green-600 dark:text-green-500"
                      href="https://download.rockylinux.org/pub/rocky/8.3/isos/x86_64/CHECKSUM"
                    >
                      {translate('download.table.isos.checksum')}
                    </a>
                  </td>
                  <td className="px-6 py-3 whitespace-nowrap">
                    <a
                      className="font-medium text-green-600 dark:text-green-500"
                      href="https://download.rockylinux.org/pub/rocky/8.3/BaseOS/x86_64/"
                    >
                      BaseOS
                    </a>
                  </td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-700">
                  <td className="px-6 py-3 whitespace-nowrap">
                    ARM64 (aarch64)
                  </td>
                  <td className="px-6 py-3 whitespace-nowrap">
                    <a
                      className="font-medium text-green-600 dark:text-green-500"
                      onClick="_paq.push(['trackEvent', 'Download', 'Download', 'aarch64 Minimal', 1]);"
                      href="https://download.rockylinux.org/pub/rocky/8.3/isos/aarch64/Rocky-8.3-aarch64-minimal.iso"
                    >
                      {translate('download.table.isos.minimal')}
                    </a>{' '}
                    |&nbsp;
                    <a
                      className="font-medium text-green-600 dark:text-green-500"
                      onClick="_paq.push(['trackEvent', 'Download', 'Download', 'aarch64 DVD', 1]);"
                      href="https://download.rockylinux.org/pub/rocky/8.3/isos/aarch64/Rocky-8.3-aarch64-dvd1.iso"
                    >
                      {translate('download.table.isos.dvd')}
                    </a>{' '}
                    |&nbsp;
                    <a
                      className="font-medium text-green-600 dark:text-green-500"
                      onClick="_paq.push(['trackEvent', 'Download', 'Download', 'aarch64 Boot', 1]);"
                      href="https://download.rockylinux.org/pub/rocky/8.3/isos/aarch64/Rocky-8.3-aarch64-boot.iso"
                    >
                      {translate('download.table.isos.boot')}
                    </a>{' '}
                    |&nbsp;
                    <a
                      className="font-medium text-green-600 dark:text-green-500"
                      href="https://download.rockylinux.org/pub/rocky/8.3/isos/aarch64/CHECKSUM"
                    >
                      {translate('download.table.isos.checksum')}
                    </a>
                  </td>
                  <td className="px-6 py-3 whitespace-nowrap">
                    <a
                      className="font-medium text-green-600 dark:text-green-500"
                      href="https://download.rockylinux.org/pub/rocky/8.3/BaseOS/aarch64/"
                    >
                      BaseOS
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="max-w-screen-sm px-8 mx-auto mt-8 flex flex-col">
            <div className="flex flex-col md:flex-row items-center justify-evenly mb-6">
              <a
                className="text-green-600 dark:text-green-500 font-medium"
                href="https://docs.rockylinux.org/site-index"
              >
                {translate('global.links.documentation')}
              </a>
              <a
                className="text-green-600 dark:text-green-500 font-medium"
                href="https://bugs.rockylinux.org"
              >
                {translate('global.links.bug-report')}
              </a>
            </div>
            <p dangerouslySetInnerHTML={{__html: sanitizer(translate('download.p2.content'), {ALLOWED_TAGS: ['a']})}} className="text-gray-700 dark:text-gray-300">
            </p>
          </div>
        </div>
      </main>
      <Footer pageContext="{locale: language}" />
    </Layout>
  );
};

export default DownloadPage;
