import React from 'react';

import Section from '../components/Section';
import SummaryItem from '../components/SummaryItem';
import { Translate } from '../../i18n/utils/translate';

const BlogPosts = ({ posts, pageContext: { locale: language } }) => {
  const translate = Translate('news');

  return (
    <Section title={translate('title')} description={translate('description')}>
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
