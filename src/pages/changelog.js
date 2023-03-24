import * as React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/Seo';
import PageHeader from '../components/Changelog/PageHeader';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Features from '../components/Changelog/Features';

const MerchPage = ({ pageContext: { locale: language } }) => {
  return (
    <Layout>
      <SEO title="Welcome Changelog Listeners!" />
      <Header pageContext="{locale: language}" />
      <PageHeader
        title="Welcome Changelog Listeners!"
        description="Rocky Linux rebuilds sources directly from RHEL, so you'll have a stable experience no matter the use-case."
      >
        <Features pageContext="{locale: language}" />
      </PageHeader>
      <Footer pageContext="{locale: language}" />
    </Layout>
  );
};

export default MerchPage;
