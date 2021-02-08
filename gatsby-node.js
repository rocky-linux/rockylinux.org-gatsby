const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

async function paginate({ graphql, actions, type, itemPerPage }) {
  const newsTemplate = path.resolve('./src/pages/news.jsx');
  const result = await graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          filter: { frontmatter: { posttype: { eq: "${type}" } } }) {
          totalCount
        }
      }
    `
  );

  if (result.errors) {
    throw result.errors;
  }

  const { totalCount } = result.data.allMarkdownRemark;
  const newsPerPage = 3;
  const pages = Math.ceil(totalCount / newsPerPage);

  Array.from({ length: pages }).forEach((_, i) => {
    actions.createPage({
      path: `/news/${i + 1}`,
      component: newsTemplate,
      context: {
        skip: i * newsPerPage,
        currentPage: i + 1,
        itemPerPage: itemPerPage,
      }
    });
  });
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const blogPost = path.resolve(`./src/templates/blog-post.jsx`);
  const pressLinkTemplate = path.resolve(`./src/templates/project-post.jsx`);
  const result = await graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: ASC }
          limit: 1000
        ) {
          edges {
            node {
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
      }
    `
  );

  if (result.errors) {
    throw result.errors;
  }

  result.data.allMarkdownRemark.edges.forEach((edge) => {
    if (edge.node.frontmatter.posttype === 'press') {
      createPage({
        path: edge.node.frontmatter.path,
        component: pressLinkTemplate,
        context: {},
      });
    } else {
      createPage({
        path: edge.node.fields.slug,
        component: blogPost,
        context: {
          slug: edge.node.fields.slug,
        },
      });
    }
  });

  await Promise.all([
    paginate({ graphql, actions, type: 'news', itemPerPage: 3 }),
  ])
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value: `/news${value}`,
    });
  }
};

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  const typeDefs = `
    type SiteSiteMetadata {
      siteUrl: String
      name: String
      title: String
      description: String
    }

    type SectionItem {
      name: String!
      description: String!
      link: String!
    }

    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
      fields: Fields
    }

    type Frontmatter {
      title: String
      description: String
      date: Date @dateformat
      url: String
    }

    type Fields {
      slug: String
    }
  `;
  createTypes(typeDefs);
};
