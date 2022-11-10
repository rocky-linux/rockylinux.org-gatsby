import { graphql } from 'gatsby';
import React from 'react';

import Faqs from '../components/Faqs';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Layout from '../components/Layout';
import SEO from '../components/Seo';
import NotFound from '../pages/404';
import { Translate } from '../../i18n/utils/translate';

const Faq = ({ data }) => {
  const posts = data.allMarkdownRemark.edges;
  const noBlog = !posts || !posts.length;
  const translate = Translate('resf-faq');

  if (!posts || !posts.length) {
    return <NotFound />;
  }

  return (
    <Layout>
      <SEO title={translate('title')} />
      <Header
        metadata={data.site.siteMetadata}
        pageContext="{locale: language}"
      />
      <div>
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="mt-1 text-4xl font-extrabold text-gray-900 dark:text-gray-50 sm:text-5xl sm:tracking-tight lg:text-6xl">
              {translate('title')}
            </p>
          </div>
        </div>
      </div>
      {!noBlog && (
        <Faqs
          pageContext="{locale: language}"
          category="About the RESF"
          posts={posts.filter(
            (post) => post.node.frontmatter.category === 'About'
          )}
        />
      )}
      {!noBlog && (
        <Faqs
          pageContext="{locale: language}"
          category="Bylaws/Charter"
          posts={posts.filter(
            (post) => post.node.frontmatter.category === 'BylawsCharter'
          )}
        />
      )}
      {!noBlog && (
        <Faqs
          pageContext="{locale: language}"
          category="Board of Directors"
          posts={posts.filter(
            (post) => post.node.frontmatter.category === 'BoardOfDirectors'
          )}
        />
      )}
      {!noBlog && (
        <Faqs
          pageContext="{locale: language}"
          category="Projects"
          posts={posts.filter(
            (post) => post.node.frontmatter.category === 'Projects'
          )}
        />
      )}
      {!noBlog && (
        <Faqs
          pageContext="{locale: language}"
          category="Members"
          posts={posts.filter(
            (post) => post.node.frontmatter.category === 'Members'
          )}
        />
      )}
      <Footer pageContext="{locale: language}" />
    </Layout>
  );
};

export default Faq;

export const pageQuery = graphql`
  query resfFaq($skip: Int! = 0) {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___id], order: ASC }
      filter: { frontmatter: { posttype: { eq: "resf-faq" } } }
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
            title
            category
            id
          }
        }
      }
    }
  }
`;
