import React from 'react';
import { Translate, Trans } from '../i18n/utils/translate';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Header from '../components/header';
import Footer from '../components/footer';

const Faq = ({ data, pageContext: { locale: language } }) => {
  const translate = Translate('faq');

  return (
    <Layout>
      <SEO title={translate('title')} />
      <Header pageContext="{locale: language}" />
      <main className="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white z-0">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-14">
              <h2 className="max-w-lg mb-10 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 dark:text-gray-50 sm:text-4xl md:mx-auto text-center">
                {translate('title')}
              </h2>
              <hr className="mx-auto" />
            </div>
          </div>
          <div className="max-w-screen-xl sm:mx-auto">
            <div className="prose mx-auto dark-mode:prose-dark dark:text-gray-300">
              <h5 id="faq-1" className="font-bold">
                {translate('questions.0.q')}
              </h5>
              <p>
                <Trans t={translate} i18nKey="questions.0.a">
                  <a href="https://rockylinux.org/download" />
                </Trans>
              </p>
              <hr />
              <h5 id="faq-2" className="font-bold">
                {translate('questions.1.q')}
              </h5>
              <p>
                <Trans t={translate} i18nKey="questions.1.a">
                  <a href="mailto:mirrors@rockylinux.org">
                    mirrors@rockylinux.org
                  </a>
                </Trans>
              </p>
              <hr />
              <h5 id="faq-3" className="font-bold">
                {translate('questions.2.q')}
              </h5>
              <p>
                <Trans t={translate} i18nKey="questions.2.a">
                  <a href="https://accounts.rockylinux.org/">
                    https://accounts.rockylinux.org/
                  </a>
                  <a href="https://bugs.rockylinux.org/">
                    https://bugs.rockylinux.org/
                  </a>
                </Trans>
              </p>
              <hr />
              <h5 id="faq-4" className="font-bold">
                {translate('questions.3.q')}
              </h5>
              <p>
                <Trans t={translate} i18nKey="questions.3.a">
                  <a href="https://chat.rockylinux.org/rocky-linux/channels/testing">
                    ~Testing
                  </a>
                </Trans>
              </p>
              <hr />
              <h5 id="faq-5" className="font-bold">
                {translate('questions.4.q')}
              </h5>
              <p>{translate('questions.4.a')}</p>
              <hr />
              <h5 id="faq-6" className="font-bold">
                {translate('questions.5.q')}
              </h5>
              <p>
                <Trans t={translate} i18nKey="questions.5.a">
                  <strong />
                </Trans>
              </p>
              <hr />
              <h5 id="faq-7" className="font-bold">
                {translate('questions.6.q')}
              </h5>
              <p>{translate('questions.6.a')}</p>
              <hr />
              <h5 id="faq-8" className="font-bold">
                {translate('questions.7.q')}
              </h5>
              <p>
                <Trans t={translate} i18nKey="questions.7.a">
                  <a href="mailto:hello@rockylinux.org">hello@rockylinux.org</a>
                </Trans>
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer pageContext="{locale: language}" />
    </Layout>
  );
};

export default Faq;
