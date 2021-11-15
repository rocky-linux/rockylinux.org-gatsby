import React from 'react';
import { Translate } from '../i18n/utils/translate';

import Layout from '../components/layout';
import Seo from '../components/seo';
import Header from '../components/header';
import Footer from '../components/footer';
import KeyDisplay from '../components/keys-components/KeyDisplay';

const Keys = ({ data, pageContext: { locale: language } }) => {
  const translate = Translate('keys');

  return (
    <Layout>
      <Seo title={translate('title')} />
      <Header pageContext="{locale: language}" />
      <main className="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white z-0">
        <div className="max-w-4xl mx-auto py-8 px-4 sm:py-10 sm:px-6 lg:px-8">
          <div className="px-4 pb-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
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
                {translate('title')}
              </h2>
              <hr className="mx-auto" />
            </div>
          </div>
          <div className="max-w-screen-xl sm:mx-auto">
            <div className="prose mx-auto dark-mode:prose-dark dark:text-gray-300">
              <h5 id="introHeader" className="font-bold">
                {translate('introHeaderText')}
              </h5>
              <p>{translate('introBodyText')}</p>
              <hr />
              <h5 id="importingHeader" className="font-bold">
                {translate('importingHeaderText')}
              </h5>
              <p>{translate('importingBody1Text')}</p>
              <p>{translate('importingBody2Text')}</p>
              <code className="block whitespace-pre overflow-x-auto">
                {translate('codeLine1')}
                <br />
                {translate('codeLine2')}
                <br />
                {translate('codeLine3')}
                <br />
                {translate('codeLine4')}
              </code>
              <hr />
              <h5 id="projectKeysHeader" className="font-bold">
                {translate('projectKeysHeaderText')}
              </h5>
              <p>{translate('projectKeysBodyText')}</p>
              <KeyDisplay
                className="mt-8"
                link="https://dl.rockylinux.org/pub/rocky/RPM-GPG-KEY-rockyofficial"
                headerkey="officialKeyHeaderText"
                lineKeys={['officialKeyLine1', 'officialKeyLine2']}
              />
              <KeyDisplay
                className="mt-16"
                link="https://dl.rockylinux.org/pub/rocky/RPM-GPG-KEY-rockytesting"
                headerkey="testingKeyHeaderText"
                lineKeys={['testingKeyLine1', 'testingKeyLine2']}
              />
              <KeyDisplay
                className="mt-16"
                link="https://dl.rockylinux.org/pub/rocky/RPM-GPG-KEY-rockyinfra"
                headerkey="infrastructureKeyHeaderText"
                lineKeys={['infrastructureKeyLine1', 'infrastructureKeyLine2']}
              />
            </div>
          </div>
        </div>
      </main>
      <Footer pageContext="{locale: language}" />
    </Layout>
  );
};

export default Keys;
