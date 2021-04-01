import { graphql } from 'gatsby';
import React from 'react';

import GenericPages from '../components/generic';
import Header from '../components/header';
import Footer from '../components/footer';
import Layout from '../components/layout';
import SEO from '../components/seo';
import NotFound from './404';

const Index = ({ data }) => {
  const posts = data.allMarkdownRemark.edges;
  const noPages = !posts || !posts.length;

  if (!posts || !posts.length) {
    return <NotFound />;
  }

  return (
    <Layout>
      <SEO title="Other" />
      <Header
        metadata={data.site.siteMetadata}
        pageContext="{pageContext.language}"
      />
      {!noPages && <GenericPages posts={posts} />}
      <Footer pageContext="{pageContext.language}" />
    </Layout>
  );
};

export default Index;

export const pageQuery = graphql`
  query page($skip: Int! = 0) {
    site {
      siteMetadata {
        name
        title
        description
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { posttype: { eq: "page" } } }
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
`;
