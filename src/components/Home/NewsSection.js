import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { Translate } from '../../../i18n/utils/translate';
import LocalizedLink from '../LocalizedLink';

const NewsSection = ({ pageContext: { locale: language } }) => {
  const translate = Translate('index');

  return (
    <StaticQuery
      query={graphql`
        query newsSection($skip: Int! = 0) {
          allMarkdownRemark(
            sort: { fields: [frontmatter___date], order: DESC }
            filter: { frontmatter: { posttype: { eq: "news" } } }
            limit: 3
            skip: $skip
          ) {
            totalCount
            edges {
              node {
                excerpt
                fields {
                  slug
                }
                frontmatter {
                  date(formatString: "MMMM DD, YYYY")
                  title
                  description
                }
              }
            }
          }
        }
      `}
      render={(data) => (
        <div className="pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
          <div className="relative max-w-lg mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl">
            <div>
              <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 dark:text-gray-50 sm:text-4xl">
                {translate('latest-news.title')}
              </h2>
              <p className="mt-3 text-xl text-gray-500 dark:text-gray-50 sm:mt-4">
                {translate('latest-news.description')}
              </p>
            </div>
            <div className="mt-12 grid gap-16 pt-12 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12">
              {data.allMarkdownRemark.edges.map((post) => (
                <div key={post.node.fields.slug}>
                  <LocalizedLink
                    to={post.node.fields.slug}
                    language={language}
                    className="block mt-4"
                  >
                    <p className="text-xl font-semibold text-gray-900 dark:text-gray-400">
                      {post.node.frontmatter.title}
                    </p>
                    <p className="mt-3 text-base text-gray-500 dark:text-gray-50">
                      {post.node.frontmatter.description}
                    </p>
                  </LocalizedLink>
                  <div className="mt-6 flex items-center">
                    <div>
                      <div className="flex space-x-1 text-sm text-gray-500 dark:text-gray-50">
                        <time dateTime={post.node.fields.date}>
                          {post.node.frontmatter.date}
                        </time>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    />
  );
};

export default NewsSection;
