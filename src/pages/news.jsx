import { graphql } from 'gatsby';
import React from 'react';

import BlogPosts from '../components/blog-posts';
import Header from '../components/header';
import Footer from '../components/footer';
import Layout from '../components/layout';
import SEO from '../components/seo';
import NotFound from '../pages/404';
import Pagination from '../components/pagination';

const Index = ({ data, pageContext }) => {
  console.log(pageContext);

  const posts = data.allMarkdownRemark.edges;
  const totalCount = data.allMarkdownRemark.totalCount;

  const noBlog = !posts || !posts.length;

  if (!posts || !posts.length) {
    return <NotFound />;
  }

  return (
    <Layout>
      <SEO title="News" />
      <Header
        metadata={data.site.siteMetadata}
        pageContext="{pageContext.language}"
      />
      {!noBlog && <BlogPosts posts={posts} />}
      <Pagination
        totalCount={totalCount}
        currentPage={pageContext.currentPage}
      />
      <Footer pageContext="{pageContext.language}" />
    </Layout>
  );
};

export default Index;

export const pageQuery = graphql`
  query news($skip: Int! = 0) {
    site {
      siteMetadata {
        name
        title
        description
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: ASC }
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
`;
