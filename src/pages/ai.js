import * as React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/Seo';
import PageHeader from '../components/Changelog/PageHeader';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Features from '../components/Changelog/Features';
import Hero from '../components/AI/Hero';

const AiPage = ({ pageContext: { locale: language } }) => {
  return (
    <Layout>
      <SEO title="AI on Rocky Linux" />
      <Header pageContext="{locale: language}" />
      <Hero pageContext="{locale: language}" />
      <Footer pageContext="{locale: language}" />
    </Layout>
  );
};

export default AiPage;
