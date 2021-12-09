import { Link } from 'gatsby';
import { Translate, Trans } from '../i18n/utils/translate';

import React from 'react';
import Footer from '../components/footer';
import Header from '../components/header';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { LocalizedLink } from 'gatsby-theme-i18n';

const DownloadPage = ({ pageContext }) => {
  const translate = Translate('download');

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
                    {translate('table.heading.1')}
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                  >
                    {translate('table.heading.2')}
                  </th>
                </tr>
              </thead>
              <tbody className="bg-gray-100 dark:bg-gray-800">
                <tr>
                  <td className="px-6 py-3 whitespace-nowrap">x86_64</td>
                  <td className="px-6 py-3 whitespace-nowrap">
                    <a
                      className="font-medium text-green-600 dark:text-green-500"
                      href="https://download.rockylinux.org/pub/rocky/8/isos/x86_64/Rocky-8.5-x86_64-minimal.iso"
                      onClick="fathom.trackGoal('ZKSYYLWD', 0);"
                    >
                      Minimal
                    </a>{' '}
                    |&nbsp;
                    <a
                      className="font-medium text-green-600 dark:text-green-500"
                      href="https://download.rockylinux.org/pub/rocky/8/isos/x86_64/Rocky-8.5-x86_64-dvd1.iso"
                      onClick="fathom.trackGoal('ZKSYYLWD', 0);"
                    >
                      DVD
                    </a>{' '}
                    |&nbsp;
                    <a
                      className="font-medium text-green-600 dark:text-green-500"
                      href="https://download.rockylinux.org/pub/rocky/8/isos/x86_64/Rocky-8.5-x86_64-boot.iso"
                      onClick="fathom.trackGoal('ZKSYYLWD', 0);"
                    >
                      Boot
                    </a>{' '}
                    |&nbsp;
                    <a
                      className="font-medium text-green-600 dark:text-green-500"
                      href="https://download.rockylinux.org/pub/rocky/8/isos/x86_64/Rocky-8.5-x86_64-dvd1.torrent"
                    >
                      Torrent
                    </a>{' '}
                    |&nbsp;
                    <a
                      className="font-medium text-green-600 dark:text-green-500"
                      href="https://download.rockylinux.org/pub/rocky/8/isos/x86_64/CHECKSUM"
                    >
                      Checksum
                    </a>
                  </td>
                  <td className="px-6 py-3 whitespace-nowrap">
                    <a
                      className="font-medium text-green-600 dark:text-green-500"
                      href="https://download.rockylinux.org/pub/rocky/8/BaseOS/x86_64/"
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
                      href="https://download.rockylinux.org/pub/rocky/8/isos/aarch64/Rocky-8.5-aarch64-minimal.iso"
                      onClick="fathom.trackGoal('ZKSYYLWD', 0);"
                    >
                      Minimal
                    </a>{' '}
                    |&nbsp;
                    <a
                      className="font-medium text-green-600 dark:text-green-500"
                      href="https://download.rockylinux.org/pub/rocky/8/isos/aarch64/Rocky-8.5-aarch64-dvd1.iso"
                      onClick="fathom.trackGoal('ZKSYYLWD', 0);"
                    >
                      DVD
                    </a>{' '}
                    |&nbsp;
                    <a
                      className="font-medium text-green-600 dark:text-green-500"
                      href="https://download.rockylinux.org/pub/rocky/8/isos/aarch64/Rocky-8.5-aarch64-boot.iso"
                      onClick="fathom.trackGoal('ZKSYYLWD', 0);"
                    >
                      Boot
                    </a>{' '}
                    |&nbsp;
                    <a
                      className="font-medium text-green-600 dark:text-green-500"
                      href="https://download.rockylinux.org/pub/rocky/8/isos/aarch64/Rocky-8.5-aarch64-dvd1.torrent"
                    >
                      Torrent
                    </a>{' '}
                    |&nbsp;
                    <a
                      className="font-medium text-green-600 dark:text-green-500"
                      href="https://download.rockylinux.org/pub/rocky/8/isos/aarch64/CHECKSUM"
                    >
                      Checksum
                    </a>
                  </td>
                  <td className="px-6 py-3 whitespace-nowrap">
                    <a
                      className="font-medium text-green-600 dark:text-green-500"
                      href="https://download.rockylinux.org/pub/rocky/8/BaseOS/aarch64/"
                    >
                      BaseOS
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
              <Link
                className="text-green-600 dark:text-green-500 font-medium"
                to="/alternative-images"
              >
                {translate('alternative')}
              </Link>
              <Link
                className="text-green-600 dark:text-green-500 font-medium"
                to="/ami"
              >
                {translate('ami')}
              </Link>
              <LocalizedLink
                to="/keys"
                className="text-green-600 dark:text-green-500 font-medium"
              >
                {translate('keys')}
              </LocalizedLink>
            </div>
          </div>
          <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="max-w-3xl mb-5 md:mx-auto lg:max-w-4xl">
              <p className="text-gray-700 dark:text-gray-300 mb-7">
                <Trans t={translate} i18nKey="invitation">
                  <a
                    className="text-green-600 dark:text-green-500 font-medium"
                    href="https://chat.rockylinux.org"
                  >
                    be a part of the community as a contributor.
                  </a>
                </Trans>
              </p>
              <div className="mb-3">
                <h1 className="inline-block max-w-lg font-sans text-xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-gray-50 sm:text-2xl">
                  What's the difference between the ISOs?
                </h1>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                Various installation images are available for installing Rocky
                Linux. Which image you need to download depends on your
                installation environment and use-case.
              </p>
              <h2 className="inline-block max-w-lg font-sans text-lg font-extrabold leading-none tracking-tight text-gray-900 dark:text-gray-50 sm:text-xl">
                Boot
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                Used to install the operating system from another source (such
                as a HTTP repository of the binary files). Can also be used to
                enter Rescue Mode.
              </p>
              <h2 className="inline-block max-w-lg font-sans text-lg font-extrabold leading-none tracking-tight text-gray-900 dark:text-gray-50 sm:text-xl">
                Minimal
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                The aim of the minimal image is to install a very basic Rocky
                Linux system, with the minimum of packages needed to have a
                functional system. A preselected set of packages will be
                installed on your system. Everything else needs to be installed
                using dnf. The set of packages installed by this image is
                identical to the one installed when choosing the group named
                "Minimal" in the full DVD image.
              </p>
              <h2 className="inline-block max-w-lg font-sans text-lg font-extrabold leading-none tracking-tight text-gray-900 dark:text-gray-50 sm:text-xl">
                DVD
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                A full installation that contains the BaseOS and AppStream
                repositories and allows you to complete the installation without
                additional repositories. Installing Rocky Linux from the DVD ISO
                is the easiest and most common method of performing a standard
                Rocky Linux 8 installation.
              </p>
              <div className="mb-3 mt-7">
                <h1 className="inline-block max-w-lg font-sans text-xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-gray-50 sm:text-2xl">
                  Export Compliance/Customs Information
                </h1>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                By downloading Rocky Linux software, you acknowledge that you
                understand all of the following:
              </p>
              <p className="text-gray-700 dark:text-gray-300 mt-2">
                Rocky Linux software and technical information may be subject to
                the U.S. Export Administration Regulations (the “EAR”) and other
                U.S. and foreign laws and may not be exported, re-exported or
                transferred (a) to a prohibited destination country under the
                EAR or U.S. sanctions regulations (currently Cuba, Iran, North
                Korea, Sudan, Syria, and the Crimea Region of Ukraine, subject
                to change as posted by the United States government); (b) to any
                prohibited destination or to any end user who has been
                prohibited from participating in U.S. export transactions by any
                federal agency of the U.S. government; or (c) for use in
                connection with the design, development or production of
                nuclear, chemical or biological weapons, or rocket systems,
                space launch vehicles, or sounding rockets, or unmanned air
                vehicle systems.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mt-2">
                You may not download Rocky Linux software or technical
                information if you are located in one of these countries or
                otherwise subject to these restrictions. You may not provide
                Rocky Linux software or technical information to individuals or
                entities located in one of these countries or otherwise subject
                to these restrictions. You are also responsible for compliance
                with foreign law requirements applicable to the import, export
                and use of Rocky Linux software and technical information. Rocky
                Linux software in source code and binary code form are publicly
                available and are not subject to the EAR in accordance with
                §742.15(b).
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer pageContext="{locale: language}" />
    </Layout>
  );
};

export default DownloadPage;
