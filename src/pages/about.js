import * as React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/Seo';
import Header from '../components/Header';
import LogoCloud from '../components/LogoCloud';
import Footer from '../components/Footer';
import GMK from '../images/gmk.png';
import { Translate, Trans } from '../../i18n/utils/translate';
import LocalizedLink from '../components/LocalizedLink';

const AboutPage = () => {
  const translate = Translate('about');

  return (
    <Layout>
      <SEO title={translate('title')} />
      <Header pageContext="{locale: language}" />
      <div className="py-16 bg-gray-50 dark:bg-gray-900 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 space-y-8 sm:px-6 lg:px-8">
          <div className="text-base max-w-prose mx-auto lg:max-w-none">
            <h2 className="text-base text-green-500 font-semibold tracking-wide uppercase">
              {translate('subtitle')}
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-gray-300 sm:text-4xl">
              {translate('title')}
            </p>
          </div>
          <div className="relative z-10 text-base max-w-prose prose prose-green mx-auto lg:max-w-5xl lg:mx-0 lg:pr-72">
            <p className="text-lg text-gray-500 dark:text-gray-50">
              <Trans t={translate} i18nKey="content.highlight">
                <a
                  className="text-green-600 dark:text-green-500 font-medium"
                  href="https://blog.centos.org/2020/12/future-is-centos-stream/#comment-183642"
                >
                  via a comment on the CentOS website
                </a>
              </Trans>
            </p>
          </div>
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-start">
            <div className="relative z-10">
              <div className="prose prose-green text-gray-500 dark:text-gray-50 mx-auto lg:max-w-none">
                <p>{translate('content.paragraph')}</p>
                <h3 className="dark:text-gray-50">
                  {translate('organization.heading')}
                </h3>
                <p>
                  <Trans t={translate} i18nKey="organization.paragraph">
                    <LocalizedLink to="/organizational-structure">
                      page
                    </LocalizedLink>
                  </Trans>
                </p>
              </div>
            </div>
            <div className="mt-12 relative text-base max-w-prose mx-auto lg:mt-0 lg:max-w-none">
              <svg
                className="absolute top-0 right-0 -mt-20 -mr-20 lg:top-auto lg:right-auto lg:bottom-1/2 lg:left-1/2 lg:mt-0 lg:mr-0 xl:top-0 xl:right-0 xl:-mt-20 xl:-mr-20"
                width={404}
                height={384}
                fill="none"
                viewBox="0 0 404 384"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="bedc54bc-7371-44a2-a2bc-dc68d819ae60"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x={0}
                      y={0}
                      width={4}
                      height={4}
                      className="text-gray-200 dark:text-gray-600"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect
                  width={404}
                  height={384}
                  fill="url(#bedc54bc-7371-44a2-a2bc-dc68d819ae60)"
                />
              </svg>
              <blockquote className="relative bg-white dark:bg-gray-800 rounded-lg shadow-lg">
                <div className="rounded-t-lg px-6 py-8 sm:px-10 sm:pt-10 sm:pb-8">
                  <div className="relative text-lg text-gray-700 dark:text-gray-300 font-medium">
                    <svg
                      className="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-gray-200 dark:text-gray-700"
                      fill="currentColor"
                      viewBox="0 0 32 32"
                      aria-hidden="true"
                    >
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                    </svg>
                    <p className="relative">{translate('quote.content')}</p>
                  </div>
                </div>
                <cite className="relative flex items-center sm:items-start bg-green-500 rounded-b-lg not-italic py-5 px-6 sm:py-5 sm:pl-12 sm:pr-10 sm:mt-10">
                  <div className="relative rounded-full border-2 border-white sm:absolute sm:top-0 sm:transform sm:-translate-y-1/2 sm:visible invisible">
                    <img
                      className="w-12 h-12 sm:w-20 sm:h-20 rounded-full bg-green-100"
                      src={GMK}
                      alt=""
                    />
                  </div>
                  <span className="relative text-green-100 font-semibold leading-6 sm:ml-24 sm:pl-1">
                    <p className="text-white font-semibold sm:inline">
                      {translate('quote.gmk')}
                    </p>
                    <br />
                    <p className="sm:inline">{translate('quote.occupation')}</p>
                  </span>
                </cite>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
      <LogoCloud pageContext="{locale: language}" />
      <Footer pageContext="{locale: language}" />
    </Layout>
  );
};

export default AboutPage;
