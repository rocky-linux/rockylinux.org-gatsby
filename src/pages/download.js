import * as React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/Seo';
import PageHeader from '../components/PageHeader';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Translate, Trans } from '../../i18n/utils/translate';

import {
  ArchiveIcon,
  BeakerIcon,
  BookOpenIcon,
  CloudIcon,
  ExclamationCircleIcon,
  ShieldCheckIcon,
} from '@heroicons/react/outline';
import LocalizedLink from '../components/LocalizedLink';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

function downloadEvent(versionName) {
  if (typeof window !== 'undefined' && window.plausible) {
    window.plausible('Download Link: Click', {
      props: { version: versionName },
    });
  }
}

const DownloadPage = ({ data, pageContext: { locale: language } }) => {
  const translate = Translate('download');
  const actions = [
    {
      title: `${translate('links.alt')}`,
      href: '/alternative-images',
      icon: BeakerIcon,
      iconForeground: 'text-white',
      iconBackground: 'bg-green-500',
    },
    {
      title: `${translate('links.cloud')}`,
      href: '/cloud-images',
      icon: CloudIcon,
      iconForeground: 'text-white',
      iconBackground: 'bg-green-500',
    },
    {
      title: `${translate('links.vault')}`,
      href: 'https://dl.rockylinux.org/vault/rocky',
      icon: ArchiveIcon,
      iconForeground: 'text-white',
      iconBackground: 'bg-green-500',
    },
    {
      title: `${translate('links.docs')}`,
      href: 'https://docs.rockylinux.org',
      icon: BookOpenIcon,
      iconForeground: 'text-white',
      iconBackground: 'bg-green-500',
    },
    {
      title: `${translate('links.bug')}`,
      href: 'https://bugs.rockylinux.org',
      icon: ExclamationCircleIcon,
      iconForeground: 'text-white',
      iconBackground: 'bg-green-500',
    },
    {
      title: `${translate('links.verify')}`,
      href: 'https://github.com/rocky-linux/checksums',
      icon: ShieldCheckIcon,
      iconForeground: 'text-white',
      iconBackground: 'bg-green-500',
    },
  ];

  return (
    <Layout>
      <SEO title={translate('title')} />
      <Header pageContext="{locale: language}" />
      <PageHeader
        title={translate('title')}
        description={translate('description')}
      >
        <div className="relative max-w-2xl mx-auto">
          <div className="flex flex-col">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <h2 className="text-center mb-2 font-bold text-3xl dark:text-white font-display">
                  {translate('rl9')}
                </h2>
                <h3 className="text-center mb-2 text-md dark:text-white">
                  {translate('elCompat9')}
                </h3>
                <p className="text-center text-base mb-4 dark:text-white">
                  <Trans t={translate} i18nKey="rl9-eol">
                    <strong>Planned EOL:</strong>
                  </Trans>
                </p>
                <div className="shadow overflow-hidden border-b border-gray-200 dark:border-gray-800 sm:rounded-lg mb-20">
                  <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-800">
                    <thead className="bg-gray-100 dark:bg-gray-800">
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider font-display"
                        >
                          {translate('headings.arch')}
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider font-display"
                        >
                          {translate('headings.isos')}
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider font-display"
                        >
                          {translate('headings.packages')}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white dark:bg-gray-700">
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-50">
                          {translate('x86_64')}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <a
                            className="font-medium text-green-600 dark:text-green-500"
                            href="https://download.rockylinux.org/pub/rocky/9/isos/x86_64/Rocky-9.2-x86_64-minimal.iso"
                            onClick={() => downloadEvent('RL9: Minimal x86_64')}
                          >
                            {translate('body.minimal')}
                          </a>{' '}
                          |&nbsp;
                          <a
                            className="font-medium text-green-600 dark:text-green-500"
                            href="https://download.rockylinux.org/pub/rocky/9/isos/x86_64/Rocky-9.2-x86_64-dvd.iso"
                            onClick={() => downloadEvent('RL9: DVD x86_64')}
                          >
                            {translate('body.dvd')}
                          </a>{' '}
                          |&nbsp;
                          <a
                            className="font-medium text-green-600 dark:text-green-500"
                            href="https://download.rockylinux.org/pub/rocky/9/isos/x86_64/Rocky-9.2-x86_64-boot.iso"
                            onClick={() => downloadEvent('RL9: Boot x86_64')}
                          >
                            {translate('body.boot')}
                          </a>{' '}
                          |&nbsp;
                          <a
                            className="font-medium text-green-600 dark:text-green-500"
                            href="https://download.rockylinux.org/pub/rocky/9/isos/x86_64/Rocky-9.2-x86_64-dvd.torrent"
                            onClick={() => downloadEvent('RL9: Torrent x86_64')}
                          >
                            {translate('body.torrent')}
                          </a>{' '}
                          |&nbsp;
                          <a
                            className="font-medium text-green-600 dark:text-green-500"
                            href="https://download.rockylinux.org/pub/rocky/9/isos/x86_64/CHECKSUM"
                          >
                            {translate('body.checksum')}
                          </a>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <a
                            className="font-medium text-green-600 dark:text-green-500"
                            href="https://download.rockylinux.org/pub/rocky/9/BaseOS/x86_64/"
                          >
                            {translate('body.baseos')}
                          </a>
                        </td>
                      </tr>
                      <tr className="bg-gray-100 dark:bg-gray-800">
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-50">
                          {translate('body.arm')}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <a
                            className="font-medium text-green-600 dark:text-green-500"
                            href="https://download.rockylinux.org/pub/rocky/9/isos/aarch64/Rocky-9.2-aarch64-minimal.iso"
                            onClick={() =>
                              downloadEvent('RL9: Minimal aarch64')
                            }
                          >
                            {translate('body.minimal')}
                          </a>{' '}
                          |&nbsp;
                          <a
                            className="font-medium text-green-600 dark:text-green-500"
                            href="https://download.rockylinux.org/pub/rocky/9/isos/aarch64/Rocky-9.2-aarch64-dvd.iso"
                            onClick={() => downloadEvent('RL9: DVD aarch64')}
                          >
                            {translate('body.dvd')}
                          </a>{' '}
                          |&nbsp;
                          <a
                            className="font-medium text-green-600 dark:text-green-500"
                            href="https://download.rockylinux.org/pub/rocky/9/isos/aarch64/Rocky-9.2-aarch64-boot.iso"
                            onClick={() => downloadEvent('RL9: Boot aarch64')}
                          >
                            {translate('body.boot')}
                          </a>{' '}
                          |&nbsp;
                          <a
                            className="font-medium text-green-600 dark:text-green-500"
                            href="https://download.rockylinux.org/pub/rocky/9/isos/aarch64/Rocky-9.2-aarch64-dvd.torrent"
                            onClick={() =>
                              downloadEvent('RL9: Torrent aarch64')
                            }
                          >
                            {translate('body.torrent')}
                          </a>{' '}
                          |&nbsp;
                          <a
                            className="font-medium text-green-600 dark:text-green-500"
                            href="https://download.rockylinux.org/pub/rocky/9/isos/aarch64/CHECKSUM"
                          >
                            {translate('body.checksum')}
                          </a>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <a
                            className="font-medium text-green-600 dark:text-green-500"
                            href="https://download.rockylinux.org/pub/rocky/9/BaseOS/aarch64/"
                          >
                            {translate('body.baseos')}
                          </a>
                        </td>
                      </tr>
                      <tr className="bg-white dark:bg-gray-700">
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-50">
                          {translate('ppc64le')}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <a
                            className="font-medium text-green-600 dark:text-green-500"
                            href="https://download.rockylinux.org/pub/rocky/9/isos/ppc64le/Rocky-9.2-ppc64le-minimal.iso"
                            onClick={() =>
                              downloadEvent('RL9: Minimal ppc64le')
                            }
                          >
                            {translate('body.minimal')}
                          </a>{' '}
                          |&nbsp;
                          <a
                            className="font-medium text-green-600 dark:text-green-500"
                            href="https://download.rockylinux.org/pub/rocky/9/isos/ppc64le/Rocky-9.2-ppc64le-dvd.iso"
                            onClick={() => downloadEvent('RL9: DVD ppc64le')}
                          >
                            {translate('body.dvd')}
                          </a>{' '}
                          |&nbsp;
                          <a
                            className="font-medium text-green-600 dark:text-green-500"
                            href="https://download.rockylinux.org/pub/rocky/9/isos/ppc64le/Rocky-9.2-ppc64le-boot.iso"
                            onClick={() => downloadEvent('RL9: Boot ppc64le')}
                          >
                            {translate('body.boot')}
                          </a>{' '}
                          |&nbsp;
                          <a
                            className="font-medium text-green-600 dark:text-green-500"
                            href="https://download.rockylinux.org/pub/rocky/9/isos/ppc64le/Rocky-9.2-ppc64le-dvd.torrent"
                            onClick={() =>
                              downloadEvent('RL9: Torrent ppc64le')
                            }
                          >
                            {translate('body.torrent')}
                          </a>{' '}
                          |&nbsp;
                          <a
                            className="font-medium text-green-600 dark:text-green-500"
                            href="https://download.rockylinux.org/pub/rocky/9/isos/ppc64le/CHECKSUM"
                          >
                            {translate('body.checksum')}
                          </a>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <a
                            className="font-medium text-green-600 dark:text-green-500"
                            href="https://download.rockylinux.org/pub/rocky/9/BaseOS/ppc64le/"
                          >
                            {translate('body.baseos')}
                          </a>
                        </td>
                      </tr>
                      <tr className="bg-gray-100 dark:bg-gray-800">
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-50">
                          {translate('s390x')}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <a
                            className="font-medium text-green-600 dark:text-green-500"
                            href="https://download.rockylinux.org/pub/rocky/9/isos/s390x/Rocky-9.2-s390x-minimal.iso"
                            onClick={() => downloadEvent('RL9: Minimal s390x')}
                          >
                            {translate('body.minimal')}
                          </a>{' '}
                          |&nbsp;
                          <a
                            className="font-medium text-green-600 dark:text-green-500"
                            href="https://download.rockylinux.org/pub/rocky/9/isos/s390x/Rocky-9.2-s390x-dvd.iso"
                            onClick={() => downloadEvent('RL9: DVD s390x')}
                          >
                            {translate('body.dvd')}
                          </a>{' '}
                          |&nbsp;
                          <a
                            className="font-medium text-green-600 dark:text-green-500"
                            href="https://download.rockylinux.org/pub/rocky/9/isos/s390x/Rocky-9.2-s390x-boot.iso"
                            onClick={() => downloadEvent('RL9: Boot s390x')}
                          >
                            {translate('body.boot')}
                          </a>{' '}
                          |&nbsp;
                          <a
                            className="font-medium text-green-600 dark:text-green-500"
                            href="https://download.rockylinux.org/pub/rocky/9/isos/s390x/Rocky-9.2-s390x-dvd.torrent"
                            onClick={() => downloadEvent('RL9: Torrent s390x')}
                          >
                            {translate('body.torrent')}
                          </a>{' '}
                          |&nbsp;
                          <a
                            className="font-medium text-green-600 dark:text-green-500"
                            href="https://download.rockylinux.org/pub/rocky/9/isos/s390x/CHECKSUM"
                          >
                            {translate('body.checksum')}
                          </a>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <a
                            className="font-medium text-green-600 dark:text-green-500"
                            href="https://download.rockylinux.org/pub/rocky/9/BaseOS/s390x/"
                          >
                            {translate('body.baseos')}
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <h2 className="text-center mb-2 font-bold text-3xl dark:text-white font-display">
                  {translate('rl8')}
                </h2>
                <h3 className="text-center mb-2 text-md dark:text-white">
                  {translate('elCompat8')}
                </h3>
                <p className="text-center text-base mb-4 dark:text-white">
                  <Trans t={translate} i18nKey="rl8-eol">
                    <strong>Planned EOL:</strong>
                  </Trans>
                </p>
                <div className="shadow overflow-hidden border-b border-gray-200 dark:border-gray-800 sm:rounded-lg mb-20">
                  <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-800">
                    <thead className="bg-gray-100 dark:bg-gray-800">
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider font-display"
                        >
                          {translate('headings.arch')}
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider font-display"
                        >
                          {translate('headings.isos')}
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider font-display"
                        >
                          {translate('headings.packages')}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white dark:bg-gray-700">
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-50">
                          {translate('x86_64')}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <a
                            className="font-medium text-green-600 dark:text-green-500"
                            href="https://download.rockylinux.org/pub/rocky/8/isos/x86_64/Rocky-8.8-x86_64-minimal.iso"
                            onClick={() => downloadEvent('RL8: Minimal x86_64')}
                          >
                            {translate('body.minimal')}
                          </a>{' '}
                          |&nbsp;
                          <a
                            className="font-medium text-green-600 dark:text-green-500"
                            href="https://download.rockylinux.org/pub/rocky/8/isos/x86_64/Rocky-8.8-x86_64-dvd1.iso"
                            onClick={() => downloadEvent('RL8: DVD x86_64')}
                          >
                            {translate('body.dvd')}
                          </a>{' '}
                          |&nbsp;
                          <a
                            className="font-medium text-green-600 dark:text-green-500"
                            href="https://download.rockylinux.org/pub/rocky/8/isos/x86_64/Rocky-8.8-x86_64-boot.iso"
                            onClick={() => downloadEvent('RL8: Boot x86_64')}
                          >
                            {translate('body.boot')}
                          </a>{' '}
                          |&nbsp;
                          <a
                            className="font-medium text-green-600 dark:text-green-500"
                            href="https://download.rockylinux.org/pub/rocky/8/isos/x86_64/Rocky-8.8-x86_64-dvd1.torrent"
                            onClick={() => downloadEvent('RL8: Torrent x86_64')}
                          >
                            {translate('body.torrent')}
                          </a>{' '}
                          |&nbsp;
                          <a
                            className="font-medium text-green-600 dark:text-green-500"
                            href="https://download.rockylinux.org/pub/rocky/8/isos/x86_64/CHECKSUM"
                          >
                            {translate('body.checksum')}
                          </a>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <a
                            className="font-medium text-green-600 dark:text-green-500"
                            href="https://download.rockylinux.org/pub/rocky/8/BaseOS/x86_64/"
                          >
                            {translate('body.baseos')}
                          </a>
                        </td>
                      </tr>
                      <tr className="bg-gray-100 dark:bg-gray-800">
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-50">
                          {translate('body.arm')}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <a
                            className="font-medium text-green-600 dark:text-green-500"
                            href="https://download.rockylinux.org/pub/rocky/8/isos/aarch64/Rocky-8.8-aarch64-minimal.iso"
                            onClick={() =>
                              downloadEvent('RL8: Minimal aarch64')
                            }
                          >
                            {translate('body.minimal')}
                          </a>{' '}
                          |&nbsp;
                          <a
                            className="font-medium text-green-600 dark:text-green-500"
                            href="https://download.rockylinux.org/pub/rocky/8/isos/aarch64/Rocky-8.8-aarch64-dvd1.iso"
                            onClick={() => downloadEvent('RL8: DVD aarch64')}
                          >
                            {translate('body.dvd')}
                          </a>{' '}
                          |&nbsp;
                          <a
                            className="font-medium text-green-600 dark:text-green-500"
                            href="https://download.rockylinux.org/pub/rocky/8/isos/aarch64/Rocky-8.8-aarch64-boot.iso"
                            onClick={() => downloadEvent('RL8: Boot aarch64')}
                          >
                            {translate('body.boot')}
                          </a>{' '}
                          |&nbsp;
                          <a
                            className="font-medium text-green-600 dark:text-green-500"
                            href="https://download.rockylinux.org/pub/rocky/8/isos/aarch64/Rocky-8.8-aarch64-dvd1.torrent"
                            onClick={() =>
                              downloadEvent('RL8: Torrent aarch64')
                            }
                          >
                            {translate('body.torrent')}
                          </a>{' '}
                          |&nbsp;
                          <a
                            className="font-medium text-green-600 dark:text-green-500"
                            href="https://download.rockylinux.org/pub/rocky/8/isos/aarch64/CHECKSUM"
                          >
                            {translate('body.checksum')}
                          </a>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <a
                            className="font-medium text-green-600 dark:text-green-500"
                            href="https://download.rockylinux.org/pub/rocky/8/BaseOS/aarch64/"
                          >
                            {translate('body.baseos')}
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative max-w-max lg:max-w-7xl mx-auto">
          <div className="rounded-lg bg-gray-200 dark:bg-gray-600 overflow-hidden shadow divide-y divide-gray-200 dark:divide-gray-600 sm:divide-y-0 sm:grid sm:grid-cols-6 sm:gap-px">
            {actions.map((action, actionIdx) => (
              <div
                key={action.title}
                className={classNames(
                  'relative group bg-white dark:bg-gray-700 p-4 focus-within:ring-2 focus-within:ring-inset focus-within:ring-green-500 font-display'
                )}
              >
                <div>
                  <span
                    className={classNames(
                      action.iconBackground,
                      action.iconForeground,
                      'rounded-lg inline-flex p-3 ring-4 ring-white dark:ring-gray-700'
                    )}
                  >
                    <action.icon className="h-4 w-4" aria-hidden="true" />
                  </span>
                </div>
                <div className="mt-2">
                  <h3 className="text-lg font-medium">
                    <LocalizedLink
                      to={action.href}
                      language={language}
                      className="focus:outline-none dark:text-gray-50"
                    >
                      {/* Extend touch target to entire panel */}
                      <span className="absolute inset-0" aria-hidden="true" />
                      {action.title}
                    </LocalizedLink>
                  </h3>
                </div>
                <span
                  className="pointer-events-none absolute top-4 right-4 text-gray-300 group-hover:text-gray-400 dark:group-hover:text-green-400"
                  aria-hidden="true"
                >
                  <svg
                    className="h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
                  </svg>
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="py-16 xl:py-18 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="max-w-max lg:max-w-7xl mx-auto">
            <div className="relative">
              <div className="relative md:p-6">
                <div className="lg:grid lg:grid-cols-2 lg:gap-6">
                  <div className="prose prose-green prose-lg text-gray-500 dark:text-gray-50 dark:prose-invert lg:max-w-none">
                    <h3>{translate('get-involved.heading')}</h3>
                    <p>
                      <Trans t={translate} i18nKey="get-involved.body">
                        <a href="https://chat.rockylinux.org/">
                          be a part of the community as a contributor
                        </a>
                      </Trans>
                    </p>
                    <h3>{translate('isos.heading')}</h3>
                    <p>{translate('isos.body')}</p>
                    <h4>{translate('isos.boot.heading')}</h4>
                    <p>{translate('isos.boot.body')}</p>
                    <h4>{translate('isos.minimal.heading')}</h4>
                    <p>{translate('isos.minimal.body')}</p>
                    <h4>{translate('isos.dvd.heading')}</h4>
                    <p>{translate('isos.dvd.body')}</p>
                  </div>
                  <div className="mt-6 prose prose-green prose-lg text-gray-500 dark:text-gray-50 dark:prose-invert lg:mt-0">
                    <h3>Export Compliance/Customs Information</h3>
                    <p>
                      By downloading Rocky software, you acknowledge that you
                      understand all of the following:
                    </p>
                    <p>
                      Rocky software and technical information may be subject to
                      the U.S. Export Administration Regulations (the “EAR”) and
                      other U.S. and foreign laws and may not be exported,
                      re-exported or transferred (a) to a prohibited destination
                      country under the EAR or U.S. sanctions regulations
                      (currently Cuba, Iran, North Korea, Syria, and the Crimea
                      Region of Ukraine, subject to change as posted by the
                      United States government); (b) to any prohibited
                      destination or to any end user who has been prohibited
                      from participating in U.S. export transactions by any
                      federal agency of the U.S. government; or (c) for use in
                      connection with the design, development or production of
                      nuclear, chemical or biological weapons, or rocket
                      systems, space launch vehicles, or sounding rockets, or
                      unmanned air vehicle systems.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageHeader>
      <Footer pageContext="{locale: language}" />
    </Layout>
  );
};

export default DownloadPage;
