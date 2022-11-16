import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/Seo';
import Header from '../components/Header';
import PageHeader from '../components/PageHeader';
import Table, { SelectColumnFilter } from '../components/Table';
import Footer from '../components/Footer';
import { Translate } from '../../i18n/utils/translate';
import DataJson from '../data/cloud-images.json';

function CloudImagesPage({ pageContext: { locale: language } }) {
  const translate = Translate('cloud-images');
  const getData = JSON.parse(JSON.stringify(DataJson));
  const columns = React.useMemo(
    () => [
      {
        Header: `${translate('headings.version')}`,
        accessor: 'version',
      },
      {
        Header: `${translate('headings.provider')}`,
        accessor: 'provider',
        Filter: SelectColumnFilter,
        filter: 'includes',
      },
      {
        Header: `${translate('headings.region')}`,
        accessor: 'region',
        Filter: SelectColumnFilter,
        filter: 'includes',
      },
      {
        Header: `${translate('headings.arch')}`,
        accessor: 'architecture',
        Filter: SelectColumnFilter,
        filter: 'includes',
      },
      {
        Header: `${translate('headings.id')}`,
        accessor: 'imageid',
      },
      {
        Header: `${translate('headings.deploy')}`,
        accessor: 'deploylink',
      },
    ],
    []
  );

  const data = React.useMemo(() => getData, []);

  return (
    <Layout>
      <SEO title={translate('title')} />
      <Header pageContext="{locale: language}" />
      <PageHeader
        title={translate('title')}
        description={translate('description')}
      >
        <div className="min-h-screen text-gray-900 dark:text-gray-200 overflow-auto">
          <main className="max-w-4xl lg:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
            <div className="mt-4">
              <Table columns={columns} data={data} />
            </div>
          </main>
        </div>
      </PageHeader>
      <Footer pageContext="{locale: language}" />
    </Layout>
  );
}

export default CloudImagesPage;
