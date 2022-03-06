import * as React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/Seo';
import Header from '../components/Header';
import PageHeader from '../components/PageHeader';
import Footer from '../components/Footer';
import { Translate } from '../../i18n/utils/translate';
import CiqLogo from '../images/ciq.png';
import FortyFiveDrivesLogo from '../images/45drives.png';
import AwsLogo from '../images/aws.png';
import GcpLogo from '../images/gcp.png';
import AzureLogo from '../images/azure.png';
import MontaVistaLogo from '../images/montavista.png';
import OpenDrivesLogo from '../images/opendrives.png';
import VmwareLogo from '../images/vmware.png';
import ProComputersLogo from '../images/procomputers.png';
import SeagateLogo from '../images/seagate.png';
import StromasysLogo from '../images/stromasys.png';

const SponsorsPage = () => {
  const translate = Translate('sponsors');
  const sponsors = [
    {
      name: `${translate('sponsors.ciq.name')}`,
      tier: `${translate('sponsors.ciq.tier')}`,
      title: `${translate('sponsors.ciq.title')}`,
      blurb: `${translate('sponsors.ciq.blurb')}`,
      source: `${CiqLogo}`,
      link: 'https://ciq.co',
    },
    {
      name: `${translate('sponsors.45drives.name')}`,
      tier: `${translate('sponsors.45drives.tier')}`,
      title: `${translate('sponsors.45drives.title')}`,
      blurb: `${translate('sponsors.45drives.blurb')}`,
      source: `${FortyFiveDrivesLogo}`,
      link: 'https://45drives.com',
    },
    {
      name: `${translate('sponsors.aws.name')}`,
      tier: `${translate('sponsors.aws.tier')}`,
      title: `${translate('sponsors.aws.title')}`,
      blurb: `${translate('sponsors.aws.blurb')}`,
      source: `${AwsLogo}`,
      link: 'https://aws.com',
    },
    {
      name: `${translate('sponsors.gcp.name')}`,
      tier: `${translate('sponsors.gcp.tier')}`,
      title: `${translate('sponsors.gcp.title')}`,
      blurb: `${translate('sponsors.gcp.blurb')}`,
      source: `${GcpLogo}`,
      link: 'https://cloud.google.com',
    },
    {
      name: `${translate('sponsors.azure.name')}`,
      tier: `${translate('sponsors.azure.tier')}`,
      title: `${translate('sponsors.azure.title')}`,
      blurb: `${translate('sponsors.azure.blurb')}`,
      source: `${AzureLogo}`,
      link: 'https://azure.com',
    },
    {
      name: `${translate('sponsors.montavista.name')}`,
      tier: `${translate('sponsors.montavista.tier')}`,
      title: `${translate('sponsors.montavista.title')}`,
      blurb: `${translate('sponsors.montavista.blurb')}`,
      source: `${MontaVistaLogo}`,
      link: 'https://mvista.com/',
    },
    {
      name: `${translate('sponsors.opendrives.name')}`,
      tier: `${translate('sponsors.opendrives.tier')}`,
      title: `${translate('sponsors.opendrives.title')}`,
      blurb: `${translate('sponsors.opendrives.blurb')}`,
      source: `${OpenDrivesLogo}`,
      link: 'https://opendrives.com/',
    },
    {
      name: `${translate('sponsors.vmware.name')}`,
      tier: `${translate('sponsors.vmware.tier')}`,
      title: `${translate('sponsors.vmware.title')}`,
      blurb: `${translate('sponsors.vmware.blurb')}`,
      source: `${VmwareLogo}`,
      link: 'https://vmware.com/',
    },
    {
      name: `${translate('sponsors.procomputers.name')}`,
      tier: `${translate('sponsors.procomputers.tier')}`,
      title: `${translate('sponsors.procomputers.title')}`,
      source: `${ProComputersLogo}`,
      link: 'https://www.procomputers.com/',
    },
    {
      name: `${translate('sponsors.seagate.name')}`,
      tier: `${translate('sponsors.seagate.tier')}`,
      title: `${translate('sponsors.seagate.title')}`,
      source: `${SeagateLogo}`,
      link: 'https://www.seagategov.com/',
    },
    {
      name: `${translate('sponsors.stromasys.name')}`,
      tier: `${translate('sponsors.stromasys.tier')}`,
      title: `${translate('sponsors.stromasys.title')}`,
      source: `${StromasysLogo}`,
      link: 'https://www.stromasys.com/',
    },
  ];

  const principalSponsors = sponsors.filter(function (sponsor) {
    return sponsor.tier === "1";
  })

  const tierFourSponsors = sponsors.filter(function (sponsor) {
    return sponsor.tier === "4"
  })

  return (
    <Layout>
      <SEO title={translate('title')} />
      <Header pageContext="{locale: language}" />
      <PageHeader
        title={translate('title')}
        description={translate('description')}
      >
        <div className="bg-white">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold mb-5">{translate('tierone')}</h1>
            <ul
              role="list"
              className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-4 sm:gap-x-6 lg:grid-cols- xl:gap-x-8"
            >
              {principalSponsors.map((sponsor) => (
                <a href={sponsor.link}>
                  <li key={sponsor.source} className="relative">
                    <div className="group block w-full rounded-lg bg-gray-100 py-10 px-10">
                      <img
                        src={sponsor.source}
                        alt=""
                        className="object-fit pointer-events-none"
                      />
                    </div>
                    <p className="mt-2 block text-base font-bold text-gray-900 truncate pointer-events-none">
                      {sponsor.name}
                    </p>
                    <p className="block text-sm font-medium text-gray-500 pointer-events-none">
                      {sponsor.title}
                    </p>
                    <p className="mt-2 block text-sm font-medium text-gray-900 pointer-events-none">
                      {sponsor.blurb}
                    </p>
                  </li>
                </a>
              ))}
            </ul>
            <h1 className="text-3xl font-bold mb-5 mt-10">
              {translate('tierfour')}
            </h1>
            <ul
              role="list"
              className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
            >
              {tierFourSponsors.map((sponsor) => (
                <a href={sponsor.link}>
                  <li key={sponsor.source} className="relative">
                    <div className="group block w-full rounded-lg bg-gray-100 py-10 px-10">
                      <img
                        src={sponsor.source}
                        alt=""
                        className="object-fit pointer-events-none"
                      />
                    </div>
                    <p className="mt-2 block text-base font-bold text-gray-900 truncate pointer-events-none">
                      {sponsor.name}
                    </p>
                    <p className="block text-sm font-medium text-gray-500 pointer-events-none">
                      {sponsor.title}
                    </p>
                    <p className="mt-2 block text-sm font-medium text-gray-900 pointer-events-none">
                      {sponsor.blurb}
                    </p>
                  </li>
                </a>
              ))}
            </ul>
          </div>
        </div>
        <div className="bg-green-50">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-24 lg:px-8 lg:flex lg:items-center lg:justify-between">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl">
              <span className="block">{translate('blurb.lineone')}</span>
              <span className="block text-green-500">
                {translate('blurb.linetwo')}
              </span>
            </h2>
            <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
              <div className="inline-flex rounded-md shadow">
                <a
                  href="mailto:sponsors@resf.org"
                  className="inline-flex items-center justify-center px-5 py-3 text-base font-medium rounded-md text-white bg-green-500 hover:bg-green-600"
                >
                  {translate('blurb.emailus')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </PageHeader>
      <Footer pageContext="{locale: language}" />
    </Layout>
  );
};

export default SponsorsPage;
