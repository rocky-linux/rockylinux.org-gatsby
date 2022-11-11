import { graphql } from 'gatsby';
import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Layout from '../components/Layout';
import SEO from '../components/Seo';

const classes = {
  wrapper: 'mt-16 blog-content dark:text-gray-50',
};

const BlogPost = ({ data }) => {
  const post = data.markdownRemark;

  const facebookLink = "https://www.facebook.com/sharer/sharer.php?u=rockylinux.org" + post.fields.slug;
  const twitterLink = "https://twitter.com/intent/tweet?text=rockylinux.org" + post.fields.slug;
  const linkedInLink = "https://www.linkedin.com/sharing/share-offsite/?url=rockylinux.org" + post.fields.slug;

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
              <span className="block text-base text-center text-green-500 font-semibold tracking-wide uppercase">
                {post.frontmatter.date}
              </span>
              <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 dark:text-gray-50 sm:text-4xl">
                {post.frontmatter.title}
              </span>
            </h1>
            <div className="flex justify-center mt-6 text-sm dark:text-white">Share:</div>
            <div className="flex justify-center mt-2 dark:text-white">
              <a href={ facebookLink }>
                <div className="flex justify-center mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="h-5" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/></svg>
                </div>
              </a>
              <a href={ twitterLink }>
                <div className="flex justify-center mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="h-5" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                </div>
              </a>
              <a href={ linkedInLink }>
                <div className="flex justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="h-5" viewBox="0 0 24 24"><path d="M0 0v24h24v-24h-24zm8 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.397-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </div>
              </a>
            </div>
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

export default BlogPost;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
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
      fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`;
