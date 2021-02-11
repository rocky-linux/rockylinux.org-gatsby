import { graphql } from 'gatsby';
import React from 'react';

import Header from '../components/header';
import Footer from '../components/footer';
import Layout from '../components/layout';
import SEO from '../components/seo';
import NotFound from '../pages/404';
import PressLinks from '../components/press-links';
import Pagination from '../components/pagination';

const Index = ({ data, pageContext }) => {
  const posts = data.allMarkdownRemark.edges;

  const totalCount = data.allMarkdownRemark.totalCount;

  if (!posts || !posts.length) {
    return <NotFound />;
  }

  return (
    <Layout>
      <SEO title="Press" />
      <Header
        metadata={data.site.siteMetadata}
        pageContext="{pageContext.language}"
      />
      <PressLinks posts={posts} />
      <Pagination
        totalCount={totalCount}
        currentPage={pageContext.currentPage}
        itemPerPage={pageContext.itemPerPage}
        type={pageContext.type}
      />
      <Footer pageContext="{pageContext.language}" />
    </Layout>
  );
};

export default Index;

export const pageQuery = graphql`
  query press($skip: Int! = 0) {
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
      limit: 5
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
            url
          }
        }
      }
    }
  }
`;
