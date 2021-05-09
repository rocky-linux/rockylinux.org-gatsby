import React from 'react';
import { Translate } from '../../i18n/utils/translate';
import { LocalizedLink, useLocalization } from 'gatsby-theme-i18n';
import { navigate, Link } from 'gatsby';

const Footer = ({ pageContext: { locale: language } }) => {
  const translate = Translate();
  const { config } = useLocalization();

  return (
    <footer className="bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
        <nav
          className="-mx-5 -my-2 flex flex-wrap justify-center"
          aria-label="Links"
          dir="auto"
        >
          <div className="px-5 py-2">
            <a
              href="https://wiki.rockylinux.org/contributing"
              className="text-base text-gray-600 dark:text-gray-400 hover:text-gray-500 dark:hover:text-white"
            >
              {translate('links.get-involved')}
            </a>
          </div>
          <div className="px-5 py-2">
            <LocalizedLink
              to="/sponsors/"
              className="text-base text-gray-600 dark:text-gray-400 hover:text-gray-500 dark:hover:text-white"
            >
              {translate('links.sponsors')}
            </LocalizedLink>
          </div>
          <div className="px-5 py-2">
            <a
              href="https://status.rockylinux.org/"
              className="text-base text-gray-600 dark:text-gray-400 hover:text-gray-500 dark:hover:text-white"
            >
              {translate('links.status')}
            </a>
          </div>
          <div className="px-5 py-2">
            <LocalizedLink
              to="/partners/"
              className="text-base text-gray-600 dark:text-gray-400 hover:text-gray-500 dark:hover:text-white"
            >
              {translate('links.partners')}
            </LocalizedLink>
          </div>
          <div className="px-5 py-2">
            <LocalizedLink
              to="/press/1/"
              className="text-base text-gray-600 dark:text-gray-400 hover:text-gray-500 dark:hover:text-white"
            >
              {translate('links.press')}
            </LocalizedLink>
          </div>
        </nav>
        <div className="mt-8 flex justify-center space-x-6">
          <a
            href="https://twitter.com/rocky_linux"
            className="text-gray-600 dark:text-gray-400 hover:text-gray-500 dark:hover:text-white"
          >
            <span className="sr-only">{translate('socials.twitter')}</span>
            <svg
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
            </svg>
          </a>
          <a
            href="https://reddit.com/r/rockylinux"
            className="text-gray-600 dark:text-gray-400 hover:text-gray-500 dark:hover:text-white"
          >
            <span className="sr-only">{translate('socials.reddit')}</span>
            <svg
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 670 670"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M429.93 388.258c-27.567 0-50.043-22.473-50.043-50.043 0-27.567 22.476-50.043 50.043-50.043 27.57 0 50.047 22.476 50.047 50.043 0 27.57-22.477 50.043-50.047 50.043m8.84 82.129c-34.196 34.097-99.61 36.789-118.817 36.789-19.21 0-84.719-2.692-118.82-36.79a12.939 12.939 0 010-18.347 12.937 12.937 0 0118.351 0c21.512 21.52 67.524 29.203 100.47 29.203 32.85 0 78.952-7.683 100.472-29.203a12.927 12.927 0 0118.344 0c4.996 5.094 4.996 13.258 0 18.348M159.734 338.219c0-27.567 22.477-50.043 50.047-50.043 27.567 0 50.043 22.476 50.043 50.043s-22.476 50.047-50.043 50.047c-27.57-.008-50.047-22.48-50.047-50.047M640 288.176c0-38.711-31.313-70.024-70.023-70.024-18.922 0-36.024 7.489-48.602 19.692-47.836-34.578-113.82-56.864-187.305-59.457l31.89-150.133 104.22 22.191c1.25 26.512 22.953 47.645 49.757 47.645 27.66 0 50.043-22.383 50.043-50.047C569.98 20.383 547.598-2 519.937-2c-19.695 0-36.503 11.43-44.667 27.95L358.852 1.167c-3.266-.672-6.625-.09-9.414 1.73-2.782 1.825-4.708 4.61-5.375 7.875 0 0-34.965 166.559-34.965 167.52-74.825 1.918-142.063 24.3-190.664 59.36-12.582-12.102-29.586-19.5-48.41-19.5C31.312 218.152 0 249.558 0 288.175c0 28.43 17 52.926 41.398 63.87a140.986 140.986 0 00-1.632 21.231c0 107.77 125.445 195.086 280.187 195.086 154.738 0 280.184-87.316 280.184-195.086 0-7.109-.574-14.12-1.63-21.035C622.81 341.293 640 316.801 640 288.176" />
            </svg>
          </a>
          <a
            href="https://forums.rockylinux.org/"
            className="text-gray-600 dark:text-gray-400 hover:text-gray-500 dark:hover:text-white"
          >
            <span className="sr-only">{translate('socials.forums')}</span>
            <svg
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              aria-hidden="true"
            >
              <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
              <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
            </svg>
          </a>
          <a
            href="https://chat.rockylinux.org/"
            className="text-gray-600 dark:text-gray-400 hover:text-gray-500 dark:hover:text-white"
          >
            <span className="sr-only">{translate('socials.mattermost')}</span>
            <svg
              className="h-6 w-6"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 38 31"
            >
              <path d="M16.109 0C9.396-.047 3.12 4.167.849 10.869c-2.833 8.371 1.656 17.448 10.02 20.281 8.371 2.833 17.448-1.656 20.281-10.02 2.303-6.803-.229-14.068-5.749-18.079l.172 3.396c2.749 3.041 3.839 7.349 2.468 11.401-2.047 6.041-8.791 9.219-15.068 7.093-6.276-2.125-9.708-8.745-7.661-14.792 1.376-4.057 4.876-6.828 8.928-7.557L16.427.004c-.104-.005-.213-.005-.323-.005zm4.703 1.459a.471.471 0 00-.167.031h-.005a.556.556 0 00-.145.099c-.192.188-.875 1.105-.875 1.105l-1.484 1.837-1.735 2.115-2.98 3.704s-1.364 1.703-1.061 3.801c.301 2.1 1.859 3.12 3.072 3.532 1.208.405 3.068.541 4.584-.943 1.515-1.48 1.463-3.667 1.463-3.667l-.115-4.745-.093-2.735-.063-2.364s.011-1.141-.025-1.412a.698.698 0 00-.047-.14l-.011-.016-.005-.016a.39.39 0 00-.308-.187z" />
            </svg>
          </a>
          <a
            href="https://github.com/rocky-linux"
            className="text-gray-600 dark:text-gray-400 hover:text-gray-500 dark:hover:text-white"
          >
            <span className="sr-only">{translate('socials.github')}</span>
            <svg
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clipRule="evenodd"
              />
            </svg>
          </a>
          <Link
            to="/rss.xml"
            className="text-gray-600 dark:text-gray-400 hover:text-gray-500 dark:hover:text-white"
          >
            <span className="sr-only">RSS</span>
            <svg
              className="h-6 w-6"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 5c7.18 0 13 5.82 13 13M6 11a7 7 0 017 7m-6 0a1 1 0 11-2 0 1 1 0 012 0z"
              />
            </svg>
          </Link>
        </div>
        <nav
          className="mt-5 flex flex-wrap justify-center"
          aria-label="Language"
        >
          <div className="px-5 py-2 flex" id="LanguageDiv" name="LanguageDiv">
            <h5 className="font-medium text-sm text-gray-600 dark:text-gray-400 ml-2 mr-2 mt-2 flex">
              <svg
                id="languageIcon"
                name="languageIcon"
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mb-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M7 2a1 1 0 011 1v1h3a1 1 0 110 2H9.578a18.87 18.87 0 01-1.724 4.78c.29.354.596.696.914 1.026a1 1 0 11-1.44 1.389c-.188-.196-.373-.396-.554-.6a19.098 19.098 0 01-3.107 3.567 1 1 0 01-1.334-1.49 17.087 17.087 0 003.13-3.733 18.992 18.992 0 01-1.487-2.494 1 1 0 111.79-.89c.234.47.489.928.764 1.372.417-.934.752-1.913.997-2.927H3a1 1 0 110-2h3V3a1 1 0 011-1zm6 6a1 1 0 01.894.553l2.991 5.982a.869.869 0 01.02.037l.99 1.98a1 1 0 11-1.79.895L15.383 16h-4.764l-.724 1.447a1 1 0 11-1.788-.894l.99-1.98.019-.038 2.99-5.982A1 1 0 0113 8zm-1.382 6h2.764L13 11.236 11.618 14z"
                  clip-rule="evenodd"
                />
              </svg>
              <span className="sr-only">
                {translate('lang.footer.choose-language')}
              </span>
            </h5>
            <select
              id="languagePicker"
              onChange={(e) => {
                window.location.href = `${
                  e.target.value === 'en' ? `/` : `/${e.target.value}`
                }`;
              }}
              name="language"
              className="mt-1 mr-2 block w-full pl-2 pr-8 py-1 text-sm text-black dark:text-white border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm rounded-md"
              aria-label="Language Select"
            >
              <option value="" selected hidden disabled>
                {translate('lang.footer.choose-language')}
              </option>
              {config.map((locale) => (
                <option value={`${locale.code}`}>{locale.localName}</option>
              ))}
            </select>
          </div>
          <noscript className="mt-2 text-center text-sm text-gray-500">
            <nav
              className="-mx-5 -my-2 flex flex-wrap justify-center"
              aria-label="Links"
              dir="auto"
            >
              {config.map((locale) => (
                <div className="px-5 py-2">
                  <Link
                    to={`${locale.code === 'en' ? '/' : `/${locale.code}/`}`}
                  >
                    {locale.localName}
                  </Link>
                </div>
              ))}
            </nav>
          </noscript>
        </nav>
        <nav
          className="mt-4 -mx-5 flex flex-wrap justify-center"
          aria-label="Links"
          dir="auto"
        >
          <div className="px-5 py-2">
            <LocalizedLink
              to="/community-charter/"
              className="text-sm text-gray-500 hover:text-gray-400"
            >
              {translate('links.com_charter')}
            </LocalizedLink>
          </div>
          <div className="px-5 py-2">
            <LocalizedLink
              to="/organizational-structure/"
              className="text-sm text-gray-500 hover:text-gray-400"
            >
              {translate('links.org_structure')}
            </LocalizedLink>
          </div>
          <div className="px-5 py-2">
            <LocalizedLink
              to="/privacy-policy/"
              className="text-sm text-gray-500 hover:text-gray-400"
            >
              {translate('links.privacy')}
            </LocalizedLink>
          </div>
        </nav>
        <p className="text-center text-base text-gray-500" dir="auto">
          {translate('copyright.line1')}
        </p>
        <p className="mt-2 text-center text-sm text-gray-500" dir="auto">
          {translate('copyright.line2')}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
