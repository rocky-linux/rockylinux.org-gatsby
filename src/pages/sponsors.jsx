import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Header from '../components/header';
import Footer from '../components/footer';

import OpenDrivesLogo from '../images/opendrives.png';
import CIQLogo from '../images/ciq-alt.png';
import AwsLogo from '../images/aws-alt.png';
import FortyFiveDrivesLogo from '../images/45drives.jpg';
import MontaVistaLogo from '../images/montavista.png';
import { Translate } from '../i18n/utils/translate';
import dompurify from 'dompurify';

const Sponsors = ({ data, pageContext: { locale: language } }) => {
  const translate = Translate();
  const sanitizer = dompurify.sanitize;

  return (
    <Layout>
      <SEO title="Sponsors" />
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
                {translate('sponsors.title')}
              </h2>
              <p className="text-base text-gray-700 dark:text-gray-300 md:text-lg sm:px-4">
                {translate('sponsors.description')}
              </p>
              <hr className="mx-auto" />
            </div>
          </div>
          <div className="rounded-lg bg-gray-200 dark:bg-gray-900 overflow-hidden shadow divide-y divide-gray-200 dark:divide-gray-800 sm:divide-y-0 sm:grid sm:grid-cols-2 sm:gap-px">
            <div className="col-span-2 rounded-tl-lg rounded-tr-lg sm:rounded-tr-none relative group bg-gray-500 dark:bg-gray-800 p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-green-500">
              <div>
                <span className="rounded-lg inline-flex p-3">
                  <img
                    className="object-cover w-full"
                    src={CIQLogo}
                    alt="CIQ"
                  />
                </span>
              </div>
              <div className="mt-8">
                <h3 className="text-lg font-medium text-gray-50">
                  <a href="https://ctrliq.com" className="focus:outline-none">
                    <span className="absolute inset-0" aria-hidden="true" />
                    {translate('sponsors.list.ciq.name')}
                    <span className="ml-2 bg-green-200 text-green-600 py-1 px-2 text-xs rounded-full self-center">
                      {translate('sponsors.tag.fsponsor')}
                    </span>
                  </a>
                </h3>
                <p className="mt-2 text-sm text-gray-200">
                  {translate('sponsors.list.ciq.description')}
                </p>
              </div>
            </div>
            <div className="relative group bg-gray-500 dark:bg-gray-800 p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-green-500">
              <div>
                <span className="rounded-lg inline-flex p-3">
                  <img
                    className="object-cover w-full rounded-lg"
                    src={FortyFiveDrivesLogo}
                    alt="45Drives"
                  />
                </span>
              </div>
              <div className="mt-8">
                <h3 className="text-lg font-medium text-gray-50">
                  <a
                    href="https://www.45drives.com/"
                    className="focus:outline-none"
                  >
                    <span className="absolute inset-0" aria-hidden="true" />
                    {translate('sponsors.list.45drives.name')}
                    <span className="ml-2 bg-green-700 text-green-100 py-1 px-2 text-xs rounded-full self-center">
                      {translate('sponsors.tag.psponsor')}
                    </span>
                  </a>
                </h3>
                <p className="mt-2 text-sm text-gray-200">
                  {translate('sponsors.list.45drives.description')}
                </p>
              </div>
            </div>
            <div className="relative group bg-gray-500 dark:bg-gray-800 p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-green-500">
              <div>
                <span className="rounded-lg inline-flex p-3">
                  <img
                    className="object-cover w-full rounded-lg"
                    src={OpenDrivesLogo}
                    alt="OpenDrives"
                  />
                </span>
              </div>
              <div className="mt-8">
                <h3 className="text-lg font-medium text-gray-50">
                  <a
                    href="https://opendrives.com/"
                    className="focus:outline-none"
                  >
                    <span className="absolute inset-0" aria-hidden="true" />
                    {translate('sponsors.list.opendrives.name')}
                    <span className="ml-2 bg-green-700 text-green-100 py-1 px-2 text-xs rounded-full self-center">
                      {translate('sponsors.tag.psponsor')}
                    </span>
                  </a>
                </h3>
                <p className="mt-2 text-sm text-gray-200">
                  {translate('sponsors.list.opendrives.description')}
                </p>
              </div>
            </div>
            <div className="relative group bg-gray-500 dark:bg-gray-800 p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-green-500">
              <div>
                <span className="rounded-lg inline-flex p-3">
                  <img
                    className="object-cover w-full rounded-lg"
                    src={MontaVistaLogo}
                    alt="MontaVista"
                  />
                </span>
              </div>
              <div className="mt-8">
                <h3 className="text-lg font-medium text-gray-50">
                  <a href="https://mvista.com/" className="focus:outline-none">
                    <span className="absolute inset-0" aria-hidden="true" />
                    {translate('sponsors.list.montavista.name')}
                    <span className="ml-2 bg-green-700 text-green-100 py-1 px-2 text-xs rounded-full self-center">
                      {translate('sponsors.tag.psponsor')}
                    </span>
                  </a>
                </h3>
                <p className="mt-2 text-sm text-gray-200">
                  {translate('sponsors.list.montavista.description')}
                </p>
              </div>
            </div>
            <div className="relative group bg-gray-500 dark:bg-gray-800 p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-green-500">
              <div>
                <span className="rounded-lg inline-flex p-3">
                  <img
                    className="object-cover w-full rounded-lg"
                    src={AwsLogo}
                    alt="Amazon Web Services"
                  />
                </span>
              </div>
              <div className="mt-8">
                <h3 className="text-lg font-medium text-gray-50">
                  <a
                    href="https://aws.amazon.com/"
                    className="focus:outline-none"
                  >
                    <span className="absolute inset-0" aria-hidden="true" />
                    {translate('sponsors.list.aws.name')}
                    <span className="ml-2 bg-green-700 text-green-100 py-1 px-2 text-xs rounded-full self-center">
                      {translate('sponsors.tag.psponsor')}
                    </span>
                  </a>
                </h3>
                <p className="mt-2 text-sm text-gray-200">
                  {translate('sponsors.list.aws.description')}
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
