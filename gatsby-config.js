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
        path: `${__dirname}/src/news`,
        name: `news`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/resf-faq`,
        name: `resf-faq`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
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
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.nodes.map((node) => {
                return Object.assign({}, node.frontmatter, {
                  description: node.excerpt,
                  date: node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + node.fields.slug,
                  guid: site.siteMetadata.siteUrl + node.fields.slug,
                  custom_elements: [{ 'content:encoded': node.html }],
                });
              });
            },
            query: `
              {
                allMarkdownRemark(
                  sort: { order: DESC, fields: [frontmatter___date] },
                  filter: { frontmatter: { posttype: { eq: "news" } } },
                ) {
                  nodes {
                    excerpt
                    html
                    fields {
                      slug
                    }
                    frontmatter {
                      title
                      date
                    }
                  }
                }
              }
            `,
            output: '/rss.xml',
            title: "Rocky Linux's RSS Feed",
            match: '^/news/',
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Rocky Linux`,
        short_name: `Rocky`,
        start_url: `/`,
        background_color: `#10B981`,
        theme_color: `#10B981`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/favicon.png`,
      },
    },
    {
      resolve: 'gatsby-plugin-fathom',
      options: {
        trackingUrl: 'img.rockylinux.org',
        siteId: 'QDEPAHYS',
      },
    },
    {
      resolve: `gatsby-theme-i18n`,
      options: {
        defaultLang: `en`,
        prefixDefault: false,
        configPath: require.resolve(`./i18n/config.json`),
      },
    },
    {
      resolve: `gatsby-theme-i18n-react-i18next`,
      options: {
        locales: `./i18n/locales`,
        i18nextOptions: {
          debug: process.env.NODE_ENV === 'development',
          fallbackLng: 'en',
          lowerCaseLng: false,
          load: 'currentOnly',
          ns: [
            'translation',
            'index',
            'news',
            'about',
            'faq',
            'download',
            'alternative-images',
            'cloud-images',
            'sponsors',
            'partners',
            'support',
            'resf-faq',
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
  ],
};
