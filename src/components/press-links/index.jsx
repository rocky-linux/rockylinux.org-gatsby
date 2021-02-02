import React from 'react';

import Section from '../section';
import PressSummaryItem from '../press-summary-item';

const PressLinks = ({ posts }) => {
  return (
    <Section title="Press" description="See the latest about Rocky in the press.">
      {posts.map((post) => (
        <PressSummaryItem
          key={post.node.fields.slug}
          name={post.node.frontmatter.title}
          description={post.node.frontmatter.description}
          date={post.node.frontmatter.date}
          link={post.node.frontmatter.url}
        />
      ))}
    </Section>
  );
};

export default PressLinks;
