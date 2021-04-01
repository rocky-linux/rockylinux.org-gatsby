import React from 'react';

import Section from '../section';
import SummaryItem from '../summary-item';

const Generic = ({ posts }) => {
  return (
    <Section
      title="Other"
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

export default Generic;
