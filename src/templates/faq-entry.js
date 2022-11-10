import { graphql, Link } from 'gatsby';
import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Layout from '../components/Layout';
import SEO from '../components/Seo';

const classes = {
  wrapper: 'mt-16 blog-content dark:text-gray-50',
};

const FaqEntry = ({ data }) => {
  const post = data.markdownRemark;

  return (
    <Layout>
      <Header
        metadata={data.site.siteMetadata}
        pageContext="{locale: language}"
      />
      <SEO title={post.frontmatter.title} />
      <div className="relative py-16 overflow-auto">
        <div className="relative px-4 sm:px-6 lg:px-8">
          <div className="text-lg max-w-prose mx-auto">
            <h1>
              <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 dark:text-gray-50 sm:text-4xl">
                {post.frontmatter.title}
              </span>
            </h1>
            <Link
              to="/resf-faq"
              className="block mt-2 text-green-600 font-semibold underline text-center"
            >
              ← Back to RESF FAQs
            </Link>
          </div>
          <div className="text-lg max-w-prose prose prose-green mx-auto dark:prose-invert">
            <div
              className={classes.wrapper}
              dangerouslySetInnerHTML={{ __html: post.html }}
            />
          </div>
        </div>
      </div>
      <Footer pageContext="{locale: language}" />
    </Layout>
  );
};

export default FaqEntry;

export const pageQuery = graphql`
  query FaqPostBySlug($slug: String!) {
    site {
      siteMetadata {
        name
        title
        description
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        category
        id
      }
    }
  }
`;
