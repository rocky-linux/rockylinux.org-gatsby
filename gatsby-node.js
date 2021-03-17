const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

async function paginate({ graphql, actions, type, itemPerPage }) {
  const template = path.resolve('./src/pages/' + type + '.jsx');
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
  const pages = Math.ceil(totalCount / itemPerPage);

  Array.from({ length: pages }).forEach((_, i) => {
    actions.createPage({
      path: `/${type}/${i + 1}`,
      component: template,
      context: {
        skip: i * itemPerPage,
        currentPage: i + 1,
        itemPerPage: itemPerPage,
        type: type,
      },
    });
  });
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const blogPost = path.resolve(`./src/templates/blog-post.jsx`);
  const genericPage = path.resolve(`./src/templates/generic-page.jsx`);
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
    } else if (edge.node.frontmatter.posttype === 'page') {
      createPage({
        path: edge.node.fields.slug,
        component: genericPage,
        context: {
          slug: edge.node.fields.slug,
        }
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
    paginate({ graphql, actions, type: 'press', itemPerPage: 5 }),
  ]);
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    if (node.frontmatter.posttype == 'page') {
      createNodeField({
        name: `slug`,
        node,
        value: `${value}`,
      });
    } else {
      createNodeField({
        name: `slug`,
        node,
        value: `/news${value}`,
      });
    }
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
      keywords: String
      date: Date @dateformat
      url: String
    }

    type Fields {
      slug: String
    }
  `;
  createTypes(typeDefs);
};
