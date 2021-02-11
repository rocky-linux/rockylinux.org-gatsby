import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import CoverImg from '../../images/cover.png';

const SEO = ({ description, lang, meta, image: metaImage, title }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;
  const defaultTitle = site.siteMetadata?.title;
  const finalTitle = title ? `${title} | ${defaultTitle}` : defaultTitle;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={finalTitle}
      meta={[
        {
          property: `og:title`,
          content: finalTitle,
        },
        {
          property: `twitter:title`,
          content: finalTitle,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `twitter:description`,
          content: metaDescription,
        },
        {
          property: 'og:image',
          content: CoverImg,
        },
        {
          property: 'og:image:width',
          content: 800,
        },
        {
          property: 'og:image:height',
          content: 600,
        },
        {
          name: 'twitter:card',
          content: 'summary_large_image',
        },
      ].concat(meta)}
    />
  );
};

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
};

export default SEO;
