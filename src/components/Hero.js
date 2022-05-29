import React from 'react';
import HeroImage from '../images/hero-image.png';
import { ChevronRightIcon } from '@heroicons/react/solid';
import { Translate, Trans } from '../../i18n/utils/translate';
import LocalizedLink from '../components/LocalizedLink';

const Hero = ({ pageContext: { locale: language } }) => {
  const translate = Translate('index');

  return (
    <div className="pb-8 sm:pb-12 lg:pb-12">
      <div className="pt-8 overflow-hidden sm:pt-12 lg:relative lg:py-48">
        <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl lg:grid lg:grid-cols-2 lg:gap-24">
          <div>
            <div className="mt-20">
              <div>
                <LocalizedLink
                  to="/news/rocky-linux-8-6-ga-release/"
                  language={language}
                  className="inline-flex space-x-4"
                >
                  <span className="rounded bg-green-50 px-2.5 py-1 text-xs font-semibold text-green-600 tracking-wide uppercase">
                    {translate('hero.new')}
                  </span>
                  <span className="inline-flex items-center text-sm font-medium text-green-600 space-x-1">
                    <span>Version 9 Released</span>
                    <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
                  </span>
                </LocalizedLink>
              </div>
              <div className="mt-6 sm:max-w-xl">
                <h1 className="text-4xl font-extrabold text-gray-900 dark:text-gray-50 tracking-tight sm:text-5xl">
                  {translate('hero.title')}
                </h1>
                <p className="mt-6 text-xl text-gray-500 dark:text-gray-50">
                  <Trans t={translate} i18nKey="hero.description">
                    &#174;
                  </Trans>
                </p>
              </div>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <LocalizedLink
                    to="/download"
                    language={language}
                    className="w-full flex items-center justify-center text-base font-medium rounded-md text-white bg-green-500 hover:bg-green-600 py-2 px-4"
                  >
                    {translate('hero.cta1')}
                  </LocalizedLink>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="https://docs.rockylinux.org/guides/migrate2rocky/"
                    className="w-full flex items-center justify-center text-base font-medium rounded-md text-green-600 bg-green-50 hover:bg-green-100 hover:text-green-700 py-2 px-4"
                  >
                    {translate('hero.cta2')}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="sm:mx-auto sm:max-w-3xl sm:px-6">
          <div className="py-12 sm:relative sm:mt-12 sm:py-16 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <div className="hidden sm:block">
              <div className="absolute inset-y-0 left-1/2 w-screen bg-gray-100 dark:bg-gray-800 rounded-l-3xl lg:left-80 lg:right-0 lg:w-full" />
              <svg
                className="absolute top-8 right-1/2 -mr-3 lg:m-0 lg:left-0"
                width={404}
                height={392}
                fill="none"
                viewBox="0 0 404 392"
              >
                <defs>
                  <pattern
                    id="837c3e70-6c3a-44e6-8854-cc48c737b659"
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
                      className="text-gray-200 dark:text-gray-700"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect
                  width={404}
                  height={392}
                  fill="url(#837c3e70-6c3a-44e6-8854-cc48c737b659)"
                />
              </svg>
            </div>
            <div className="relative pl-4 -mr-40 sm:mx-auto sm:max-w-3xl sm:px-0 lg:max-w-none lg:h-full lg:pl-12">
              <img
                className="w-full rounded-md shadow-xl ring-1 ring-black ring-opacity-5 lg:h-full lg:w-auto lg:max-w-none"
                src={HeroImage}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
