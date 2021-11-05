module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: 'https://rockylinux.org',
    // Site Title
    title: 'Rocky Linux',
    // Site Description
    description:
      'Rocky Linux is an open enterprise Operating System designed to be 100% bug-for-bug compatible with Enterprise Linux.',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/news`,
        name: `news`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/press`,
        name: `press`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/pages`,
        name: `pages`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Rocky Linux`,
        short_name: `Rocky`,
        start_url: `/`,
        background_color: `#10B981`,
        theme_color: `#10B981`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/logo.png`,
      },
    },
    {
      resolve: `gatsby-theme-i18n`,
      options: {
        defaultLang: `en`,
        configPath: require.resolve(`./src/i18n/config.json`),
      },
    },
    {
      resolve: `gatsby-theme-i18n-react-i18next`,
      options: {
        locales: `./src/i18n/locales`,
        i18nextOptions: {
          debug: process.env.NODE_ENV === 'development',
          supportedLngs: [
            'en',
            'tr',
            'es',
            'nl',
            'it',
            'de',
            'fr',
            'lv',
            'pt-pt',
            'pt-br',
            'pl',
            'id',
            'ru',
            'uk',
            'vi',
            'ja',
            'ar',
            'fa',
            'zh-cn',
            'zh-hk',
            'zh-tw',
            'ko',
            'sv',
            'ca',
            'ka',
          ],
          fallbackLng: 'en',
          lowerCaseLng: 'true',
          load: 'currentOnly',
          ns: [
            'translation',
            'index',
            'faq',
            'download',
            'partners',
            'sponsors',
          ],
          returnObjects: true,
          interpolation: {
            escapeValue: false,
          },
          react: {
            useSuspense: true,
          },
        },
      },
    },
    {
      resolve: 'gatsby-plugin-matomo',
      options: {
        siteId: '1',
        matomoUrl: 'https://analytics.rockylinux.org',
        siteUrl: 'https://rockylinux.org',
        trackLoad: false,
      },
    },
  ],
};
