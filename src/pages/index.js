import * as React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/Seo';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Features from '../components/Features';
import NewsSection from '../components/NewsSection';
import LogoCloud from '../components/LogoCloud';
import Footer from '../components/Footer';

// markup
const IndexPage = () => {
  return (
    <Layout>
      <SEO />
      <Header pageContext="{locale: language}" />
      <Hero pageContext="{locale: language}" />
      <Features pageContext="{locale: language}" />
      <NewsSection pageContext="{locale: language}" />
      <LogoCloud pageContext="{locale: language}" />
      <Footer pageContext="{locale: language}" />
    </Layout>
  );
};

export default IndexPage;
