import React from 'react';

import Section from './FaqSection';
import SummaryItem from './FaqSummaryItem';
import { Translate } from '../../i18n/utils/translate';

const Faqs = ({ category, posts, pageContext: { locale: language } }) => {
  const translate = Translate('resf-faq');

  return (
    <Section title={translate('title')} category={category} description={translate('description')}>
      {posts.map((post) => (
        <SummaryItem
          key={post.node.fields.slug}
          name={post.node.frontmatter.title}
          link={post.node.fields.slug}
          internal
        />
      ))}
    </Section>
  );
};

export default Faqs;
