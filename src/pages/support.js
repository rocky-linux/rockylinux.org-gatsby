import * as React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/Seo';
import Header from '../components/Header';
import PageHeader from '../components/PageHeader';
import Footer from '../components/Footer';
import { Translate } from '../../i18n/utils/translate';
import CiqLogo from '../images/ciq.png';

const SupportPage = () => {
  const translate = Translate('support');
  const partners = [
    {
      name: `${translate('support.ciq.name')}`,
      tier: `${translate('support.ciq.tier')}`,
      blurb: `${translate('support.ciq.blurb')}`,
      source: `${CiqLogo}`,
      link: 'https://ciq.co',
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
        <div className="pb-16 bg-white overflow-hidden lg:pb-24">
          <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
            <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-20 lg:items-center">
              <div className="mb-10 -mx-4 relative lg:mb-0" aria-hidden="true">
                <img
                  className="relative mx-auto bg-gray-50 rounded-md py-10 px-10"
                  width={400}
                  src={CiqLogo}
                  alt="CIQ"
                />
              </div>
              <div className="relative">
                <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
                  {translate('support.ciq.name')}
                </h3>
                <p className="mt-3 text-lg text-gray-500">
                  {translate('support.ciq.blurb')}
                </p>
                <a
                  href="https://ciq.co/rocky/"
                  className="mt-4 inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-green-500 bg-gray-100 hover:bg-gray-200"
                >
                  {translate('get')}
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

export default SupportPage;
