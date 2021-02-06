import React from 'react';

import Section from '../section';
import SummaryItem from '../summary-item';

const BlogPosts = ({ posts }) => {
  return (
    <Section
      title="News"
      description="Stay up-to-date on the latest from The Rocky Linux Project."
    >
      {posts.map((post) => (
        <SummaryItem
          key={post.node.fields.slug}
          name={post.node.frontmatter.title}
          description={post.node.frontmatter.description}
          date={post.node.frontmatter.date}
          link={post.node.fields.slug}
          internal
        />
      ))}
    </Section>
  );
};

export default BlogPosts;
