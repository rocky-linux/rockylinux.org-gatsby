import { graphql } from 'gatsby';
import React from 'react';

import Header from '../components/header';
import Footer from '../components/footer';
import Layout from '../components/layout';
import SEO from '../components/seo';
import NotFound from '../pages/404';
import PressLinks from '../components/press-links';

const Index = ({ data, pageContext: { locale: language } }) => {
  const posts = data.allMarkdownRemark.edges;
  const noBlog = !posts || !posts.length;

  if (!posts || !posts.length) {
    return <NotFound />;
  }

  return (
    <Layout>
      <SEO title="Press" />
      <Header metadata={data.site.siteMetadata} pageContext= "{locale: language}" />
      <PressLinks posts={posts} />
      <Footer pageContext= "{locale: language}" />
    </Layout>
  );
};

export default Index;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        name
        title
        description
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { posttype: { eq: "press" } } }
    ) {
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
            url
          }
        }
      }
    }
  }
`;
