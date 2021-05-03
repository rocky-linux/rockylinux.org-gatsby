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

const Sponsors = ({ data, pageContext: { locale: language } }) => {
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
                Sponsors
              </h2>
              <p className="text-base text-gray-700 dark:text-gray-300 md:text-lg sm:px-4">
                We would like to thank our sponsors for their support thus far
                on the project.
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
                    Ctrl IQ
                    <span className="ml-2 bg-green-200 text-green-600 py-1 px-2 text-xs rounded-full self-center">
                      Founding Sponsor
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
                    45Drives
                    <span className="ml-2 bg-green-700 text-green-100 py-1 px-2 text-xs rounded-full self-center">
                      Principal Sponsor
                    </span>
                  </a>
                </h3>
                <p className="mt-2 text-sm text-gray-200">
                  45Drives offers enterprise storage solutions built on powerful
                  & robust open-source software that allows customers to benefit
                  from the cost savings & flexibility of off-the-shelf hardware.
                  Check them out for a fully supported data storage solution at
                  the best cost per terabyte!
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
                    OpenDrives
                    <span className="ml-2 bg-green-700 text-green-100 py-1 px-2 text-xs rounded-full self-center">
                      Principal Sponsor
                    </span>
                  </a>
                </h3>
                <p className="mt-2 text-sm text-gray-200">
                  OpenDrives is a global provider of enterprise-grade,
                  hyper-scalable, network-attached-storage (NAS) solutions. We
                  deliver the highest performing solutions for our customers -
                  to match individual performance needs - for the most robust,
                  complex and mission-critical projects and workflows,
                  on-premises and into the cloud.
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
                    MontaVista
                    <span className="ml-2 bg-green-700 text-green-100 py-1 px-2 text-xs rounded-full self-center">
                      Principal Sponsor
                    </span>
                  </a>
                </h3>
                <p className="mt-2 text-sm text-gray-200">
                  MontaVista Software is the leader in embedded commercial
                  Linux, supporting MontaVista CGX, Yocto Project®, CentOS and
                  Rocky Linux. MontaVista offers Open Source Software expertise,
                  commercial-quality Linux distros, cost-effective maintenance
                  and support for 10+ year life-cycles.
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
                  <a href="https://aws.amazon.com/" className="focus:outline-none">
                    <span className="absolute inset-0" aria-hidden="true" />
                    Amazon Web Services
                    <span className="ml-2 bg-green-700 text-green-100 py-1 px-2 text-xs rounded-full self-center">
                      Principal Sponsor
                    </span>
                  </a>
                </h3>
                <p className="mt-2 text-sm text-gray-200">
                  The RESF utilizes AWS to run much of the underlying
                  infrastructure critical to the development and deployment of
                  the services supporting Rocky Linux. From Koji builders for
                  x86_64 and aarch64 running in EC2 to SRPM blob storage in S3,
                  AWS is foundational to much of what we do.
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
