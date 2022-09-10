import * as React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/Seo';
import PageHeader from '../components/PageHeader';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Translate, Trans } from '../../i18n/utils/translate';

import {
  BookOpenIcon,
  CloudIcon,
  ExclamationCircleIcon,
} from '@heroicons/react/outline';
import { Link } from 'gatsby';
import LocalizedLink from '../components/LocalizedLink';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const AlternativeImagesPage = ({ data, pageContext: { locale: language } }) => {
  const translate = Translate('alternative-images');
  const actions = [
    {
      title: `${translate('links.cloud')}`,
      href: '/cloud-images',
      icon: CloudIcon,
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
                <h2 className="text-center mb-2 font-bold text-3xl dark:text-white">
                  {translate('rl9')}
                </h2>
                <p className="text-center text-base mb-6 dark:text-white">
                  <Trans t={translate} i18nKey="rl9-eol">
                    <strong>Planned EOL:</strong>
                  </Trans>
                </p>
                <h2 className="text-center mb-4 font-bold text-2xl dark:text-white">
                  {translate('desktop')}
                </h2>
                <div className="shadow overflow-hidden border-b border-gray-200 dark:border-gray-700 sm:rounded-lg mb-20">
                  <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                    <thead className="bg-gray-100 dark:bg-gray-800">
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          {translate('headings.de')}
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          {translate('headings.checksum')}
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          {translate('headings.download')}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white dark:bg-gray-700">
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-200">
                          {translate('body.gnome')}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <a
                            className="font-medium text-green-600 dark:text-green-500"
                            href="https://download.rockylinux.org/pub/rocky/9/live/x86_64/CHECKSUM"
                          >
                            {translate('body.checksum')}
                          </a>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <a
                            className="font-medium text-green-600 dark:text-green-500"
                            href="https://download.rockylinux.org/pub/rocky/9/live/x86_64/Rocky-Workstation-9.0-x86_64-20220712.0.iso"
                          >
                            {translate('body.x86_64')}
                          </a>{' '}
                          |&nbsp;
                          <a
                            className="font-medium text-green-50"
                            style={{ cursor: 'not-allowed' }}
                          >
                            {translate('body.arm')}
                          </a>
                        </td>
                      </tr>
                      <tr className="bg-white dark:bg-gray-800">
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-200">
                          {translate('body.gnome-lite')}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <a
                            className="font-medium text-green-600 dark:text-green-500"
                            href="https://download.rockylinux.org/pub/rocky/9/live/x86_64/CHECKSUM"
                          >
                            {translate('body.checksum')}
                          </a>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <a
                            className="font-medium text-green-600 dark:text-green-500"
                            href="https://download.rockylinux.org/pub/rocky/9/live/x86_64/Rocky-Workstation-Lite-9.0-x86_64-20220712.1.iso"
                          >
                            {translate('body.x86_64')}
                          </a>{' '}
                          |&nbsp;
                          <a
                            className="font-medium text-green-50"
                            style={{ cursor: 'not-allowed' }}
                          >
                            {translate('body.arm')}
                          </a>
                        </td>
                      </tr>
                      <tr className="bg-white dark:bg-gray-700">
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-200">
                          {translate('KDE')}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <a
                            className="font-medium text-green-600 dark:text-green-500"
                            href="https://download.rockylinux.org/pub/rocky/9/live/x86_64/CHECKSUM"
                          >
                            {translate('body.checksum')}
                          </a>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <a
                            className="font-medium text-green-600 dark:text-green-500"
                            href="https://download.rockylinux.org/pub/rocky/9/live/x86_64/Rocky-KDE-9.0-x86_64-20220712.0.iso"
                          >
                            {translate('body.x86_64')}
                          </a>{' '}
                          |&nbsp;
                          <a
                            className="font-medium text-green-50"
                            style={{ cursor: 'not-allowed' }}
                          >
                            {translate('body.arm')}
                          </a>
                        </td>
                      </tr>
                      <tr className="bg-white dark:bg-gray-800">
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-200">
                          {translate('body.xfce')}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <a
                            className="font-medium text-green-600 dark:text-green-500"
                            href="https://download.rockylinux.org/pub/rocky/9/live/x86_64/CHECKSUM"
                          >
                            {translate('body.checksum')}
                          </a>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <a
                            className="font-medium text-green-600 dark:text-green-500"
                            href="https://download.rockylinux.org/pub/rocky/9/live/x86_64/Rocky-XFCE-9.0-x86_64-20220712.0.iso"
                          >
                            {translate('body.x86_64')}
                          </a>{' '}
                          |&nbsp;
                          <a
                            className="font-medium text-green-50"
                            style={{ cursor: 'not-allowed' }}
                          >
                            {translate('body.arm')}
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <h2 className="text-center mb-4 font-bold text-2xl dark:text-white">
                  {translate('cloud')}
                </h2>
                <div className="shadow overflow-hidden border-b border-gray-200 dark:border-gray-800 sm:rounded-lg mb-20">
                  <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-800">
                    <thead className="bg-gray-100 dark:bg-gray-800">
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          {translate('headings.arch')}
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          {translate('headings.checksum')}
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          {translate('headings.download')}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white dark:bg-gray-700">
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-200">
                          {translate('body.x86_64')}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <a
                            className="font-medium text-green-600 dark:text-green-500"
                            href="https://dl.rockylinux.org/pub/rocky/9/images/x86_64/CHECKSUM"
                          >
                            {translate('body.checksum')}
                          </a>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <a
                            className="font-medium text-green-600 dark:text-green-500"
                            href="https://dl.rockylinux.org/pub/rocky/9/images/x86_64/Rocky-9-GenericCloud-9.0-20220830.0.x86_64.qcow2"
                          >
                            {translate('body.download')}
                          </a>
                        </td>
                      </tr>
                      <tr className="bg-gray-100 dark:bg-gray-800">
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-200">
                          {translate('body.arm')}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <a
                            className="font-medium text-green-600 dark:text-green-500"
                            href="https://dl.rockylinux.org/pub/rocky/9/images/aarch64/CHECKSUM"
                          >
                            {translate('body.checksum')}
                          </a>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <a
                            className="font-medium text-green-600 dark:text-green-500"
                            href="https://dl.rockylinux.org/pub/rocky/9/images/aarch64/Rocky-9-GenericCloud-9.0-20220830.0.aarch64.qcow2"
                          >
                            {translate('body.download')}
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <h2 className="text-center mb-2 font-bold text-3xl dark:text-white">
                  {translate('rl8')}
                </h2>
                <p className="text-center text-base mb-6 dark:text-white">
                  <Trans t={translate} i18nKey="rl8-eol">
                    <strong>Planned EOL:</strong>
                  </Trans>
                </p>
                <h2 className="text-center mb-4 font-bold text-2xl dark:text-white">
                  {translate('desktop')}
                </h2>
                <div className="shadow overflow-hidden border-b border-gray-200 dark:border-gray-700 sm:rounded-lg mb-20">
                  <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                    <thead className="bg-gray-100 dark:bg-gray-800">
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          {translate('headings.de')}
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          {translate('headings.checksum')}
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          {translate('headings.download')}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white dark:bg-gray-700">
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-200">
                          {translate('body.gnome')}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <a
                            className="font-medium text-green-600 dark:text-green-500"
                            href="https://download.rockylinux.org/pub/rocky/8.6/Live/x86_64/CHECKSUM"
                          >
                            {translate('body.checksum')}
                          </a>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <a
                            className="font-medium text-green-600 dark:text-green-500"
                            href="https://download.rockylinux.org/pub/rocky/8.6/Live/x86_64/Rocky-Workstation-8-x86_64-20220515.1.iso"
                          >
                            {translate('body.x86_64')}
                          </a>{' '}
                          |&nbsp;
                          <a
                            className="font-medium text-green-50"
                            style={{ cursor: 'not-allowed' }}
                          >
                            {translate('body.arm')}
                          </a>
                        </td>
                      </tr>
                      <tr className="bg-white dark:bg-gray-800">
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-200">
                          {translate('body.gnome-lite')}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <a
                            className="font-medium text-green-600 dark:text-green-500"
                            href="https://download.rockylinux.org/pub/rocky/8.6/Live/x86_64/CHECKSUM"
                          >
                            {translate('body.checksum')}
                          </a>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <a
                            className="font-medium text-green-600 dark:text-green-500"
                            href="https://download.rockylinux.org/pub/rocky/8.6/Live/x86_64/Rocky-Workstation-Lite-8-x86_64-20220515.1.iso"
                          >
                            {translate('body.x86_64')}
                          </a>{' '}
                          |&nbsp;
                          <a
                            className="font-medium text-green-50"
                            style={{ cursor: 'not-allowed' }}
                          >
                            {translate('body.arm')}
                          </a>
                        </td>
                      </tr>
                      <tr className="bg-gray-100 dark:bg-gray-700">
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-200">
                          {translate('body.xfce')}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <a
                            className="font-medium text-green-600 dark:text-green-500"
                            href="https://download.rockylinux.org/pub/rocky/8.6/Live/x86_64/CHECKSUM"
                          >
                            {translate('body.checksum')}
                          </a>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <a
                            className="font-medium text-green-600 dark:text-green-500"
                            href="https://download.rockylinux.org/pub/rocky/8.6/Live/x86_64/Rocky-XFCE-8-x86_64-20220515.4.iso"
                          >
                            {translate('body.x86_64')}
                          </a>{' '}
                          |&nbsp;
                          <a
                            className="font-medium text-green-50"
                            style={{ cursor: 'not-allowed' }}
                          >
                            {translate('body.arm')}
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <h2 className="text-center mb-4 font-bold text-2xl dark:text-white">
                  {translate('alt-arch')}
                </h2>
                <div className="shadow overflow-hidden border-b border-gray-200 dark:border-gray-700 sm:rounded-lg mb-20">
                  <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                    <thead className="bg-gray-100 dark:bg-gray-800">
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          {translate('headings.arch')}
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          {translate('headings.checksum')}
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          {translate('headings.readme')}
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          {translate('headings.download')}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white dark:bg-gray-700">
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-200">
                          {translate('body.rpi')}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <a
                            className="font-medium text-green-600 dark:text-green-500"
                            href="https://dl.rockylinux.org/pub/rocky/8.6/rockyrpi/aarch64/images/RockyRpi_8.6_20220523.sha256sum"
                          >
                            {translate('body.checksum')}
                          </a>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <a
                            className="font-medium text-green-600 dark:text-green-500"
                            href="https://dl.rockylinux.org/pub/rocky/8.6/rockyrpi/aarch64/images/readme.txt"
                          >
                            {translate('body.readme')}
                          </a>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <a
                            className="font-medium text-green-600 dark:text-green-500"
                            href="https://dl.rockylinux.org/pub/rocky/8.6/rockyrpi/aarch64/images/RockyRpi_8.6_20220523.img.xz"
                          >
                            {translate('body.download')}
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <h2 className="text-center mb-4 font-bold text-2xl dark:text-white">
                  {translate('cloud')}
                </h2>
                <div className="shadow overflow-hidden border-b border-gray-200 dark:border-gray-800 sm:rounded-lg mb-20">
                  <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-800">
                    <thead className="bg-gray-100 dark:bg-gray-800">
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          {translate('headings.arch')}
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          {translate('headings.checksum')}
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          {translate('headings.download')}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white dark:bg-gray-700">
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-200">
                          {translate('body.x86_64')}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <a
                            className="font-medium text-green-600 dark:text-green-500"
                            href="https://dl.rockylinux.org/pub/rocky/8.6/images/CHECKSUM"
                          >
                            {translate('body.checksum')}
                          </a>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <a
                            className="font-medium text-green-600 dark:text-green-500"
                            href="https://dl.rockylinux.org/pub/rocky/8.6/images/Rocky-8-GenericCloud.latest.x86_64.qcow2"
                          >
                            {translate('body.download')}
                          </a>
                        </td>
                      </tr>
                      <tr className="bg-gray-100 dark:bg-gray-800">
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-200">
                          {translate('body.arm')}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <a
                            className="font-medium text-green-600 dark:text-green-500"
                            href="https://dl.rockylinux.org/pub/rocky/8.6/images/CHECKSUM"
                          >
                            {translate('body.checksum')}
                          </a>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <a
                            className="font-medium text-green-600 dark:text-green-500"
                            href="https://dl.rockylinux.org/pub/rocky/8.6/images/Rocky-8-GenericCloud.latest.aarch64.qcow2"
                          >
                            {translate('body.download')}
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
        <div className="relative max-w-max lg:max-w-4xl mx-auto">
          <div className="rounded-lg bg-gray-200 dark:bg-gray-800 overflow-hidden shadow divide-y divide-gray-200 dark:divide-gray-800 sm:divide-y-0 sm:grid sm:grid-cols-3 sm:gap-px">
            {actions.map((action, actionIdx) => (
              <div
                key={action.title}
                className={classNames(
                  'relative group bg-white dark:bg-gray-700 p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-green-500'
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
                    <action.icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                </div>
                <div className="mt-2">
                  <h3 className="text-lg font-medium dark:text-white">
                    <LocalizedLink
                      to={action.href}
                      language={language}
                      className="focus:outline-none"
                    >
                      {/* Extend touch target to entire panel */}
                      <span className="absolute inset-0" aria-hidden="true" />
                      {action.title}
                    </LocalizedLink>
                  </h3>
                </div>
                <span
                  className="pointer-events-none absolute top-6 right-6 text-gray-300 group-hover:text-gray-400"
                  aria-hidden="true"
                >
                  <svg
                    className="h-6 w-6"
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
                  <div className="prose prose-green prose-lg dark:prose-invert text-gray-500 lg:max-w-none">
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
                  <div className="mt-6 prose prose-green prose-lg dark:prose-invert text-gray-500 lg:mt-0">
                    <h3>Export Compliance/Customs Information</h3>
                    <p>
                      By downloading Rocky Linux software, you acknowledge that
                      you understand all of the following:
                    </p>
                    <p>
                      Rocky Linux software and technical information may be
                      subject to the U.S. Export Administration Regulations (the
                      “EAR”) and other U.S. and foreign laws and may not be
                      exported, re-exported or transferred (a) to a prohibited
                      destination country under the EAR or U.S. sanctions
                      regulations (currently Cuba, Iran, North Korea, Sudan,
                      Syria, and the Crimea Region of Ukraine, subject to change
                      as posted by the United States government); (b) to any
                      prohibited destination or to any end user who has been
                      prohibited from participating in U.S. export transactions
                      by any federal agency of the U.S. government; or (c) for
                      use in connection with the design, development or
                      production of nuclear, chemical or biological weapons, or
                      rocket systems, space launch vehicles, or sounding
                      rockets, or unmanned air vehicle systems.
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

export default AlternativeImagesPage;
