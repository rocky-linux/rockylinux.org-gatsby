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

  console.log(posts);

  return (
    <Layout>
      <SEO title={translate('title')} />
      <Header
        metadata={data.site.siteMetadata}
        pageContext="{locale: language}"
      />
      {!noBlog && <Faqs pageContext="{locale: language}" posts={posts} />}
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
