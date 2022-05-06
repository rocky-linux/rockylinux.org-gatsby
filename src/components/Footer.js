import React from 'react';
import {
  ChevronDownIcon,
  ExternalLinkIcon,
  TranslateIcon,
} from '@heroicons/react/solid';
import { Translate, Trans } from '../../i18n/utils/translate';
import { useLocalization } from 'gatsby-theme-i18n';
import LocalizedLink from '../components/LocalizedLink';

const Footer = ({ pageContext: { locale: language } }) => {
  const getCurrentYear = () => {
    return new Date().getFullYear().toString();
  };
  const translate = Translate();
  const { config } = useLocalization();
  const navigation = {
    about: [
      { name: `${translate('about.about')}`, href: '/about' },
      { name: `${translate('about.faq')}`, href: '/faq' },
      { name: `${translate('about.charter')}`, href: '/community-charter' },
      {
        name: `${translate('about.org-structure')}`,
        href: '/organizational-structure',
      },
      {
        name: `${translate('about.status')}`,
        href: 'https://status.rockylinux.org',
      },
      {
        name: `${translate('about.errata')}`,
        href: 'https://errata.rockylinux.org',
      },
    ],
    getinvolved: [
      {
        name: `${translate('community.contribute')}`,
        href: 'https://wiki.rockylinux.org/contributing/',
      },
      {
        name: `${translate('community.bug')}`,
        href: 'https://bugs.rockylinux.org/',
      },
      {
        name: `${translate('community.donate')}`,
        href: 'https://rockylinux.z2systems.com/np/clients/rockylinux/donation.jsp',
      },
      {
        name: `${translate('community.store')}`,
        href: 'https://www.mucklesu.com/collections/rocky-linux',
      },
    ],
    documentation: [
      {
        name: `${translate('documentation.wiki')}`,
        href: 'https://wiki.rockylinux.org',
      },
      {
        name: `${translate('documentation.guides')}`,
        href: 'https://docs.rockylinux.org',
      },
      { name: `${translate('documentation.keys')}`, href: '/keys' },
    ],
    legal: [
      { name: `${translate('legal.licensing')}`, href: '/licensing' },
      { name: `${translate('legal.privacy')}`, href: '/privacy-policy' },
    ],
    social: [
      {
        name: 'GitHub',
        href: 'https://github.com/rocky-linux',
        icon: (props) => (
          <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
            <path
              fillRule="evenodd"
              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
              clipRule="evenodd"
            />
          </svg>
        ),
      },
      {
        name: 'Fediverse',
        href: 'https://fosstodon.org/@rockylinux',
        icon: (props) => (
          <svg fill="currentColor" viewBox="0 0 16 16" {...props}>
            <path d="M11.19 12.195c2.016-.24 3.77-1.475 3.99-2.603.348-1.778.32-4.339.32-4.339 0-3.47-2.286-4.488-2.286-4.488C12.062.238 10.083.017 8.027 0h-.05C5.92.017 3.942.238 2.79.765c0 0-2.285 1.017-2.285 4.488l-.002.662c-.004.64-.007 1.35.011 2.091.083 3.394.626 6.74 3.78 7.57 1.454.383 2.703.463 3.709.408 1.823-.1 2.847-.647 2.847-.647l-.06-1.317s-1.303.41-2.767.36c-1.45-.05-2.98-.156-3.215-1.928a3.614 3.614 0 0 1-.033-.496s1.424.346 3.228.428c1.103.05 2.137-.064 3.188-.189zm1.613-2.47H11.13v-4.08c0-.859-.364-1.295-1.091-1.295-.804 0-1.207.517-1.207 1.541v2.233H7.168V5.89c0-1.024-.403-1.541-1.207-1.541-.727 0-1.091.436-1.091 1.296v4.079H3.197V5.522c0-.859.22-1.541.66-2.046.456-.505 1.052-.764 1.793-.764.856 0 1.504.328 1.933.983L8 4.39l.417-.695c.429-.655 1.077-.983 1.934-.983.74 0 1.336.259 1.791.764.442.505.661 1.187.661 2.046v4.203z" />
          </svg>
        ),
      },
      {
        name: 'Twitter',
        href: 'https://twitter.com/rocky_linux',
        icon: (props) => (
          <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
          </svg>
        ),
      },
      {
        name: 'Reddit',
        href: 'https://reddit.com/r/rockylinux',
        icon: (props) => (
          <svg fill="currentColor" viewBox="0 0 670 670" {...props}>
            <path d="M429.93 388.258c-27.567 0-50.043-22.473-50.043-50.043 0-27.567 22.476-50.043 50.043-50.043 27.57 0 50.047 22.476 50.047 50.043 0 27.57-22.477 50.043-50.047 50.043m8.84 82.129c-34.196 34.097-99.61 36.789-118.817 36.789-19.21 0-84.719-2.692-118.82-36.79a12.939 12.939 0 010-18.347 12.937 12.937 0 0118.351 0c21.512 21.52 67.524 29.203 100.47 29.203 32.85 0 78.952-7.683 100.472-29.203a12.927 12.927 0 0118.344 0c4.996 5.094 4.996 13.258 0 18.348M159.734 338.219c0-27.567 22.477-50.043 50.047-50.043 27.567 0 50.043 22.476 50.043 50.043s-22.476 50.047-50.043 50.047c-27.57-.008-50.047-22.48-50.047-50.047M640 288.176c0-38.711-31.313-70.024-70.023-70.024-18.922 0-36.024 7.489-48.602 19.692-47.836-34.578-113.82-56.864-187.305-59.457l31.89-150.133 104.22 22.191c1.25 26.512 22.953 47.645 49.757 47.645 27.66 0 50.043-22.383 50.043-50.047C569.98 20.383 547.598-2 519.937-2c-19.695 0-36.503 11.43-44.667 27.95L358.852 1.167c-3.266-.672-6.625-.09-9.414 1.73-2.782 1.825-4.708 4.61-5.375 7.875 0 0-34.965 166.559-34.965 167.52-74.825 1.918-142.063 24.3-190.664 59.36-12.582-12.102-29.586-19.5-48.41-19.5C31.312 218.152 0 249.558 0 288.175c0 28.43 17 52.926 41.398 63.87a140.986 140.986 0 00-1.632 21.231c0 107.77 125.445 195.086 280.187 195.086 154.738 0 280.184-87.316 280.184-195.086 0-7.109-.574-14.12-1.63-21.035C622.81 341.293 640 316.801 640 288.176" />
          </svg>
        ),
      },
      {
        name: 'Forums',
        href: 'https://forums.rockylinux.org',
        icon: (props) => (
          <svg fill="currentColor" viewBox="0 0 20 20" {...props}>
            <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
            <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
          </svg>
        ),
      },
      {
        name: 'Mattermost',
        href: 'https://chat.rockylinux.org',
        icon: (props) => (
          <svg fill="currentColor" viewBox="0 0 38 31" {...props}>
            <path d="M16.109 0C9.396-.047 3.12 4.167.849 10.869c-2.833 8.371 1.656 17.448 10.02 20.281 8.371 2.833 17.448-1.656 20.281-10.02 2.303-6.803-.229-14.068-5.749-18.079l.172 3.396c2.749 3.041 3.839 7.349 2.468 11.401-2.047 6.041-8.791 9.219-15.068 7.093-6.276-2.125-9.708-8.745-7.661-14.792 1.376-4.057 4.876-6.828 8.928-7.557L16.427.004c-.104-.005-.213-.005-.323-.005zm4.703 1.459a.471.471 0 00-.167.031h-.005a.556.556 0 00-.145.099c-.192.188-.875 1.105-.875 1.105l-1.484 1.837-1.735 2.115-2.98 3.704s-1.364 1.703-1.061 3.801c.301 2.1 1.859 3.12 3.072 3.532 1.208.405 3.068.541 4.584-.943 1.515-1.48 1.463-3.667 1.463-3.667l-.115-4.745-.093-2.735-.063-2.364s.011-1.141-.025-1.412a.698.698 0 00-.047-.14l-.011-.016-.005-.016a.39.39 0 00-.308-.187z" />
          </svg>
        ),
      },
      {
        name: 'Mailing Lists',
        href: 'https://lists.resf.org',
        icon: (props) => (
          <svg viewBox="0 0 20 20" fill="currentColor" {...props}>
            <path d="M2.003 5.884 10 9.882l7.997-3.998A2 2 0 0 0 16 4H4a2 2 0 0 0-1.997 1.884z" />
            <path d="m18 8.118-8 4-8-4V14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8.118z" />
          </svg>
        ),
      },
      {
        name: 'Events',
        href: 'https://calendar.google.com/calendar/u/0/embed?src=c_2e1oqh6t0i6sqhja5nu9lq8lgo@group.calendar.google.com',
        icon: (props) => (
          <svg viewBox="0 0 20 20" fill="currentColor" {...props}>
            <path
              fill-rule="evenodd"
              d="M6 2a1 1 0 0 0-1 1v1H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1V3a1 1 0 1 0-2 0v1H7V3a1 1 0 0 0-1-1zm0 5a1 1 0 0 0 0 2h8a1 1 0 1 0 0-2H6z"
              clip-rule="evenodd"
            />
          </svg>
        ),
      },
      {
        name: 'RSS',
        href: '/rss.xml',
        icon: (props) => (
          <svg stroke="currentColor" fill="none" viewBox="0 0 24 24" {...props}>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 5c7.18 0 13 5.82 13 13M6 11a7 7 0 017 7m-6 0a1 1 0 11-2 0 1 1 0 012 0z"
            />
          </svg>
        ),
      },
    ],
  };

  return (
    <footer aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="pb-8 xl:grid xl:grid-cols-5 xl:gap-8">
          <div className="grid grid-cols-2 gap-8 xl:col-span-4">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 dark:text-gray-200 tracking-wider uppercase">
                  {translate('categories.about')}
                </h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.about.map((item) => (
                    <li key={item.name}>
                      <LocalizedLink
                        to={item.href}
                        language={language}
                        className="text-base text-gray-500 dark:text-gray-300 hover:text-gray-900 dark:hover:text-green-500"
                      >
                        {item.name}
                      </LocalizedLink>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-400 dark:text-gray-200 tracking-wider uppercase">
                  {translate('categories.get-involved')}
                </h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.getinvolved.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-base text-gray-500 dark:text-gray-300 hover:text-gray-900 dark:hover:text-green-500"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-400 dark:text-gray-200 tracking-wider uppercase">
                  {translate('categories.documentation')}
                </h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.documentation.map((item) => (
                    <li key={item.name}>
                      <LocalizedLink
                        to={item.href}
                        language={language}
                        className="text-base text-gray-500 dark:text-gray-300 hover:text-gray-900 dark:hover:text-green-500"
                      >
                        {item.name}
                      </LocalizedLink>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-400 dark:text-gray-200 tracking-wider uppercase">
                  {translate('categories.legal')}
                </h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <LocalizedLink
                        to={item.href}
                        language={language}
                        className="text-base text-gray-500 dark:text-gray-300 hover:text-gray-900 dark:hover:text-green-500"
                      >
                        {item.name}
                      </LocalizedLink>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-12 xl:mt-0">
            <div className="flex items-center">
              <TranslateIcon class="h-5 w-5 text-gray-400 dark:text-gray-200" />
              <h3 className="ml-1 text-sm font-semibold text-gray-400 dark:text-gray-200 tracking-wider uppercase">
                {translate('categories.language')}
              </h3>
            </div>
            <form className="mt-4 sm:max-w-xs">
              <fieldset className="w-full">
                <label htmlFor="language" className="sr-only">
                  Language
                </label>
                <div className="relative">
                  <select
                    id="languagePicker"
                    onChange={(e) => {
                      window.location.href = `${
                        e.target.value === 'en' ? `/` : `/${e.target.value}`
                      }`;
                    }}
                    name="language"
                    className="appearance-none block w-full bg-none bg-white dark:bg-gray-500 border border-gray-300 rounded-md py-2 pl-3 pr-10 text-base text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-green-500 focus:border-green-500"
                  >
                    <option value="" selected hidden disabled>
                      {translate('lang.choose')}
                    </option>
                    {config.map((locale) => (
                      <option value={`${locale.code}`}>
                        {locale.localName}
                      </option>
                    ))}
                    ;
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 px-2 flex items-center">
                    <ChevronDownIcon
                      className="h-4 w-4 text-gray-400"
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </fieldset>
            </form>
            <a
              href="https://crwd.in/rockylinuxorg"
              className="mt-2 flex items-center"
            >
              <ExternalLinkIcon className="h-5 w-5 text-green-500" />
              <p className="ml-1 text-green-500 text-sm font-medium underline">
                {translate('lang.translate')}
              </p>
            </a>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8 md:flex md:items-center md:justify-between">
          <div className="flex space-x-6 md:order-2">
            {navigation.social.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-400 dark:text-gray-50 hover:text-gray-500 dark:hover:text-green-500"
              >
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </a>
            ))}
          </div>
          <p className="mt-8 text-base text-gray-400 dark:text-gray-50 md:mt-0 md:order-1">
            <Trans t={translate} i18nKey="copyright.line1">
              {getCurrentYear()}
            </Trans>
          </p>
        </div>
        <div className="pt-8 md:flex md:items-center md:justify-between">
          <p className="mt-8 text-xs text-gray-400 dark:text-gray-50 md:mt-0 md:order-1">
            {translate('copyright.line2')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
