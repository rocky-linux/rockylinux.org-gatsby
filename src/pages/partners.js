import * as React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/Seo';
import Header from '../components/Header';
import PageHeader from '../components/PageHeader';
import Footer from '../components/Footer';
import { Translate } from '../../i18n/utils/translate';

import ActLogo from '../images/act.png';
import ArmLogo from '../images/arm.png';
import CiqLogo from '../images/ciq.png';
import CrowdinLogo from '../images/crowdin.png';
import DsStudioLogo from '../images/dsstudio.png';
import EquinixLogo from '../images/equinix.png';
import FastlyLogo from '../images/fastly.png';
import MattermostLogo from '../images/mattermost.png';
import NaverLogo from '../images/naver.png';
import OslLogo from '../images/osl.png';
import OsslabLogo from '../images/osslab.png';
import SupermicroLogo from '../images/supermicro.png';

const PartnersPage = () => {
  const translate = Translate('partners');
  const partners = [
    {
      name: `${translate('partners.ciq.name')}`,
      tier: `${translate('partners.ciq.tier')}`,
      blurb: `${translate('partners.ciq.blurb')}`,
      source: `${CiqLogo}`,
      link: 'https://ciq.com/products/rocky-linux/',
    },
    {
      name: `${translate('partners.act.name')}`,
      tier: `${translate('partners.act.tier')}`,
      blurb: `${translate('partners.act.blurb')}`,
      source: `${ActLogo}`,
      link: 'https://advancedclustering.com/',
    },
    {
      name: `${translate('partners.arm.name')}`,
      tier: `${translate('partners.arm.tier')}`,
      blurb: `${translate('partners.arm.blurb')}`,
      source: `${ArmLogo}`,
      link: 'https://arm.com',
    },
    {
      name: `${translate('partners.equinix.name')}`,
      tier: `${translate('partners.equinix.tier')}`,
      blurb: `${translate('partners.equinix.blurb')}`,
      source: `${EquinixLogo}`,
      link: 'https://equinix.com/',
    },
    {
      name: `${translate('partners.fastly.name')}`,
      tier: `${translate('partners.fastly.tier')}`,
      blurb: `${translate('partners.fastly.blurb')}`,
      source: `${FastlyLogo}`,
      link: 'https://www.fastly.com/',
    },
    {
      name: `${translate('partners.mattermost.name')}`,
      tier: `${translate('partners.mattermost.tier')}`,
      blurb: `${translate('partners.mattermost.blurb')}`,
      source: `${MattermostLogo}`,
      link: 'https://mattermost.com/',
    },
    {
      name: `${translate('partners.naver.name')}`,
      tier: `${translate('partners.naver.tier')}`,
      blurb: `${translate('partners.naver.blurb')}`,
      source: `${NaverLogo}`,
      link: 'https://ncloud.com/',
    },
    {
      name: `${translate('partners.osl.name')}`,
      tier: `${translate('partners.osl.tier')}`,
      blurb: `${translate('partners.osl.blurb')}`,
      source: `${OslLogo}`,
      link: 'https://osuosl.org/',
    },
    {
      name: `${translate('partners.osslab.name')}`,
      tier: `${translate('partners.osslab.tier')}`,
      source: `${OsslabLogo}`,
      link: 'http://www.oss-lab.co.kr/',
    },
    {
      name: `${translate('partners.supermicro.name')}`,
      tier: `${translate('partners.supermicro.tier')}`,
      blurb: `${translate('partners.supermicro.blurb')}`,
      source: `${SupermicroLogo}`,
      link: 'https://www.supermicro.com/en/',
    },
    {
      name: `${translate('partners.crowdin.name')}`,
      tier: `${translate('partners.crowdin.tier')}`,
      source: `${CrowdinLogo}`,
      link: 'https://crowdin.com/',
    },
    {
      name: `${translate('partners.dsstudio.name')}`,
      tier: `${translate('partners.dsstudio.tier')}`,
      source: `${DsStudioLogo}`,
      link: 'https://dotslash.studio/',
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
        <div className="bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
            <ul
              role="list"
              className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
            >
              {partners.map((partner) => (
                <a href={partner.link}>
                  <li key={partner.source} className="relative">
                    <div className="group block w-full rounded-lg bg-gray-100 dark:bg-gray-600 py-10 px-10">
                      <img
                        src={partner.source}
                        alt=""
                        className="object-fit pointer-events-none"
                      />
                    </div>
                    <p className="mt-2 block text-base font-bold text-gray-900 dark:text-gray-300 truncate pointer-events-none font-display">
                      {partner.name}
                    </p>
                    <p className="block text-sm font-medium text-gray-500 dark:text-gray-50 pointer-events-none font-display">
                      {partner.tier}
                    </p>
                    <p className="mt-2 block text-sm font-medium text-gray-900 dark:text-gray-300 pointer-events-none">
                      {partner.blurb}
                    </p>
                  </li>
                </a>
              ))}
            </ul>
          </div>
        </div>
      </PageHeader>
      <Footer pageContext="{locale: language}" />
    </Layout>
  );
};

export default PartnersPage;
