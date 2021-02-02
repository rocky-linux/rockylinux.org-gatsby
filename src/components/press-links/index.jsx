import React from 'react';

import Section from '../section';
import { Translate } from '../../i18n/utils/translate';
import PressSummaryItem from '../press-summary-item';
import { useLocalization } from 'gatsby-theme-i18n';

const PressLinks = ({ posts }) => {
  const translate = Translate();
  const { config } = useLocalization();

  return (
    <Section title={translate('press.title')} description={translate('press.description')}>
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
