import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/Seo';
import Header from '../components/Header';
import PageHeader from '../components/PageHeader';
import Table, { SelectColumnFilter } from '../components/Table';
import Footer from '../components/Footer';
import { Translate } from '../../i18n/utils/translate';

function CloudImagesPage() {
  const translate = Translate('cloud-images');
  const getData = () => [
    {
      version: '8',
      provider: 'AWS',
      region: 'us-west-1',
      architecture: 'x86_64',
      imageid: 'ami-0335e1660e1197d63',
      deploylink: (
        <a
          href="https://console.aws.amazon.com/ec2/v2/home?region=us-west-1#LaunchInstanceWizard:ami=ami-0335e1660e1197d63"
          className="font-medium text-green-500 underline"
        >
          {translate('deploy')}
        </a>
      ),
    },
    {
      version: '8',
      provider: 'AWS',
      region: 'us-west-1',
      architecture: 'aarch64',
      imageid: 'ami-0b5ea38a0532d8a30',
      deploylink: (
        <a
          href="https://console.aws.amazon.com/ec2/v2/home?region=us-west-1#LaunchInstanceWizard:ami=ami-0b5ea38a0532d8a30"
          className="font-medium text-green-500 underline"
        >
          {translate('deploy')}
        </a>
      ),
    },
    {
      version: '8',
      provider: 'AWS',
      region: 'us-west-2',
      architecture: 'x86_64',
      imageid: 'ami-09ca837d91f083d04',
      deploylink: (
        <a
          href="https://console.aws.amazon.com/ec2/v2/home?region=us-west-1#LaunchInstanceWizard:ami=ami-09ca837d91f083d04"
          className="font-medium text-green-500 underline"
        >
          {translate('deploy')}
        </a>
      ),
    },
    {
      version: '8',
      provider: 'AWS',
      region: 'us-west-2',
      architecture: 'aarch64',
      imageid: 'ami-08eb90c0d94c32ff4',
      deploylink: (
        <a
          href="https://console.aws.amazon.com/ec2/v2/home?region=us-west-1#LaunchInstanceWizard:ami=ami-08eb90c0d94c32ff4"
          className="font-medium text-green-500 underline"
        >
          {translate('deploy')}
        </a>
      ),
    },
    {
      version: '8',
      provider: 'AWS',
      region: 'us-east-1',
      architecture: 'x86_64',
      imageid: 'ami-043ceee68871e0bb5',
      deploylink: (
        <a
          href="https://console.aws.amazon.com/ec2/v2/home?region=us-west-1#LaunchInstanceWizard:ami=ami-043ceee68871e0bb5"
          className="font-medium text-green-500 underline"
        >
          {translate('deploy')}
        </a>
      ),
    },
    {
      version: '8',
      provider: 'AWS',
      region: 'us-east-1',
      architecture: 'aarch64',
      imageid: 'ami-096e199c58bb0653f',
      deploylink: (
        <a
          href="https://console.aws.amazon.com/ec2/v2/home?region=us-west-1#LaunchInstanceWizard:ami=ami-096e199c58bb0653f"
          className="font-medium text-green-500 underline"
        >
          {translate('deploy')}
        </a>
      ),
    },
    {
      version: '8',
      provider: 'AWS',
      region: 'us-east-2',
      architecture: 'x86_64',
      imageid: 'ami-08882eba49067074f',
      deploylink: (
        <a
          href="https://console.aws.amazon.com/ec2/v2/home?region=us-west-1#LaunchInstanceWizard:ami=ami-08882eba49067074f"
          className="font-medium text-green-500 underline"
        >
          {translate('deploy')}
        </a>
      ),
    },
    {
      version: '8',
      provider: 'AWS',
      region: 'us-east-2',
      architecture: 'aarch64',
      imageid: 'ami-0b6159d240ab78b1a',
      deploylink: (
        <a
          href="https://console.aws.amazon.com/ec2/v2/home?region=us-west-1#LaunchInstanceWizard:ami=ami-0b6159d240ab78b1a"
          className="font-medium text-green-500 underline"
        >
          {translate('deploy')}
        </a>
      ),
    },
    {
      version: '8',
      provider: 'AWS',
      region: 'af-south-1',
      architecture: 'x86_64',
      imageid: 'TBD',
      deploylink: (
        <a
          href="#"
          style={{ cursor: 'not-allowed' }}
          className="font-medium text-green-50 underline"
        >
          {translate('deploy')}
        </a>
      ),
    },
    {
      version: '8',
      provider: 'AWS',
      region: 'af-south-1',
      architecture: 'aarch64',
      imageid: 'TBD',
      deploylink: (
        <a
          href="#"
          style={{ cursor: 'not-allowed' }}
          className="font-medium text-green-50 underline"
        >
          {translate('deploy')}
        </a>
      ),
    },
    {
      version: '8',
      provider: 'AWS',
      region: 'ap-east-1',
      architecture: 'x86_64',
      imageid: 'TBD',
      deploylink: (
        <a
          href="#"
          style={{ cursor: 'not-allowed' }}
          className="font-medium text-green-50 underline"
        >
          {translate('deploy')}
        </a>
      ),
    },
    {
      version: '8',
      provider: 'AWS',
      region: 'ap-east-1',
      architecture: 'aarch64',
      imageid: 'TBD',
      deploylink: (
        <a
          href="#"
          style={{ cursor: 'not-allowed' }}
          className="font-medium text-green-50 underline"
        >
          {translate('deploy')}
        </a>
      ),
    },
    {
      version: '8',
      provider: 'AWS',
      region: 'ap-south-1',
      architecture: 'x86_64',
      imageid: 'ami-099589c84ecec2f81',
      deploylink: (
        <a
          href="https://console.aws.amazon.com/ec2/v2/home?region=us-west-1#LaunchInstanceWizard:ami=ami-099589c84ecec2f81"
          className="font-medium text-green-500 underline"
        >
          {translate('deploy')}
        </a>
      ),
    },
    {
      version: '8',
      provider: 'AWS',
      region: 'ap-south-1',
      architecture: 'aarch64',
      imageid: 'ami-0f9e8f0b3490c929c',
      deploylink: (
        <a
          href="https://console.aws.amazon.com/ec2/v2/home?region=us-west-1#LaunchInstanceWizard:ami=ami-0f9e8f0b3490c929c"
          className="font-medium text-green-500 underline"
        >
          {translate('deploy')}
        </a>
      ),
    },
    {
      version: '8',
      provider: 'AWS',
      region: 'ap-northeast-1',
      architecture: 'x86_64',
      imageid: 'ami-0ddb05e945a674cf5',
      deploylink: (
        <a
          href="https://console.aws.amazon.com/ec2/v2/home?region=us-west-1#LaunchInstanceWizard:ami=ami-0ddb05e945a674cf5"
          className="font-medium text-green-500 underline"
        >
          {translate('deploy')}
        </a>
      ),
    },
    {
      version: '8',
      provider: 'AWS',
      region: 'ap-northeast-1',
      architecture: 'aarch64',
      imageid: 'ami-084d423cf7accd8d9',
      deploylink: (
        <a
          href="https://console.aws.amazon.com/ec2/v2/home?region=us-west-1#LaunchInstanceWizard:ami=ami-084d423cf7accd8d9"
          className="font-medium text-green-500 underline"
        >
          {translate('deploy')}
        </a>
      ),
    },
    {
      version: '8',
      provider: 'AWS',
      region: 'ap-northeast-2',
      architecture: 'x86_64',
      imageid: 'ami-0280ce8ecafa32cf',
      deploylink: (
        <a
          href="https://console.aws.amazon.com/ec2/v2/home?region=us-west-1#LaunchInstanceWizard:ami=ami-0280ce8ecafa32cf"
          className="font-medium text-green-500 underline"
        >
          {translate('deploy')}
        </a>
      ),
    },
    {
      version: '8',
      provider: 'AWS',
      region: 'ap-northeast-2',
      architecture: 'aarch64',
      imageid: 'ami-08ae751f8a19fb9b5',
      deploylink: (
        <a
          href="https://console.aws.amazon.com/ec2/v2/home?region=us-west-1#LaunchInstanceWizard:ami=ami-08ae751f8a19fb9b5"
          className="font-medium text-green-500 underline"
        >
          {translate('deploy')}
        </a>
      ),
    },
    {
      version: '8',
      provider: 'AWS',
      region: 'ap-northeast-3',
      architecture: 'x86_64',
      imageid: 'ami-0ce722d42255297b9',
      deploylink: (
        <a
          href="https://console.aws.amazon.com/ec2/v2/home?region=us-west-1#LaunchInstanceWizard:ami=ami-0ce722d42255297b9"
          className="font-medium text-green-500 underline"
        >
          {translate('deploy')}
        </a>
      ),
    },
    {
      version: '8',
      provider: 'AWS',
      region: 'ap-northeast-3',
      architecture: 'aarch64',
      imageid: 'ami-052198efa1a75e212',
      deploylink: (
        <a
          href="https://console.aws.amazon.com/ec2/v2/home?region=us-west-1#LaunchInstanceWizard:ami=ami-052198efa1a75e212"
          className="font-medium text-green-500 underline"
        >
          {translate('deploy')}
        </a>
      ),
    },
    {
      version: '8',
      provider: 'AWS',
      region: 'ap-southeast-1',
      architecture: 'x86_64',
      imageid: 'ami-0514af8e1e699170c',
      deploylink: (
        <a
          href="https://console.aws.amazon.com/ec2/v2/home?region=us-west-1#LaunchInstanceWizard:ami=ami-0514af8e1e699170c"
          className="font-medium text-green-500 underline"
        >
          {translate('deploy')}
        </a>
      ),
    },
    {
      version: '8',
      provider: 'AWS',
      region: 'ap-southeast-1',
      architecture: 'aarch64',
      imageid: 'ami-064be01ca69cd982d',
      deploylink: (
        <a
          href="https://console.aws.amazon.com/ec2/v2/home?region=us-west-1#LaunchInstanceWizard:ami=ami-064be01ca69cd982d"
          className="font-medium text-green-500 underline"
        >
          {translate('deploy')}
        </a>
      ),
    },
    {
      version: '8',
      provider: 'AWS',
      region: 'ap-southeast-2',
      architecture: 'x86_64',
      imageid: 'ami-01d801fcba2e682d0',
      deploylink: (
        <a
          href="https://console.aws.amazon.com/ec2/v2/home?region=us-west-1#LaunchInstanceWizard:ami=ami-01d801fcba2e682d0"
          className="font-medium text-green-500 underline"
        >
          {translate('deploy')}
        </a>
      ),
    },
    {
      version: '8',
      provider: 'AWS',
      region: 'ap-southeast-2',
      architecture: 'aarch64',
      imageid: 'ami-0171b2fa317eb0d6d',
      deploylink: (
        <a
          href="https://console.aws.amazon.com/ec2/v2/home?region=us-west-1#LaunchInstanceWizard:ami=ami-0171b2fa317eb0d6d"
          className="font-medium text-green-500 underline"
        >
          {translate('deploy')}
        </a>
      ),
    },
    {
      version: '8',
      provider: 'AWS',
      region: 'ca-central-1',
      architecture: 'x86_64',
      imageid: 'ami-09ada793eea1559e6',
      deploylink: (
        <a
          href="https://console.aws.amazon.com/ec2/v2/home?region=us-west-1#LaunchInstanceWizard:ami=ami-09ada793eea1559e6"
          className="font-medium text-green-500 underline"
        >
          {translate('deploy')}
        </a>
      ),
    },
    {
      version: '8',
      provider: 'AWS',
      region: 'ca-central-1',
      architecture: 'aarch64',
      imageid: 'ami-033e74798225e42e4',
      deploylink: (
        <a
          href="https://console.aws.amazon.com/ec2/v2/home?region=us-west-1#LaunchInstanceWizard:ami=ami-033e74798225e42e4"
          className="font-medium text-green-500 underline"
        >
          {translate('deploy')}
        </a>
      ),
    },
    {
      version: '8',
      provider: 'AWS',
      region: 'eu-north-1',
      architecture: 'x86_64',
      imageid: 'ami-0090b17f0ffd314ba',
      deploylink: (
        <a
          href="https://console.aws.amazon.com/ec2/v2/home?region=us-west-1#LaunchInstanceWizard:ami=ami-0090b17f0ffd314ba"
          className="font-medium text-green-500 underline"
        >
          {translate('deploy')}
        </a>
      ),
    },
    {
      version: '8',
      provider: 'AWS',
      region: 'eu-north-1',
      architecture: 'aarch64',
      imageid: 'ami-09c237aa6f84aa31d',
      deploylink: (
        <a
          href="https://console.aws.amazon.com/ec2/v2/home?region=us-west-1#LaunchInstanceWizard:ami=ami-09c237aa6f84aa31d"
          className="font-medium text-green-500 underline"
        >
          {translate('deploy')}
        </a>
      ),
    },
    {
      version: '8',
      provider: 'AWS',
      region: 'eu-south-1',
      architecture: 'x86_64',
      imageid: 'TBD',
      deploylink: (
        <a
          href="#"
          style={{ cursor: 'not-allowed' }}
          className="font-medium text-green-50 underline"
        >
          {translate('deploy')}
        </a>
      ),
    },
    {
      version: '8',
      provider: 'AWS',
      region: 'eu-south-1',
      architecture: 'aarch64',
      imageid: 'TBD',
      deploylink: (
        <a
          href="#"
          style={{ cursor: 'not-allowed' }}
          className="font-medium text-green-50 underline"
        >
          {translate('deploy')}
        </a>
      ),
    },
    {
      version: '8',
      provider: 'AWS',
      region: 'eu-central-1',
      architecture: 'x86_64',
      imageid: 'ami-079f4c25253b27e9d',
      deploylink: (
        <a
          href="https://console.aws.amazon.com/ec2/v2/home?region=us-west-1#LaunchInstanceWizard:ami=ami-079f4c25253b27e9d"
          className="font-medium text-green-500 underline"
        >
          {translate('deploy')}
        </a>
      ),
    },
    {
      version: '8',
      provider: 'AWS',
      region: 'eu-central-1',
      architecture: 'aarch64',
      imageid: 'ami-0a9cd4ee47ff73e1d',
      deploylink: (
        <a
          href="https://console.aws.amazon.com/ec2/v2/home?region=us-west-1#LaunchInstanceWizard:ami=ami-0a9cd4ee47ff73e1d"
          className="font-medium text-green-500 underline"
        >
          {translate('deploy')}
        </a>
      ),
    },
    {
      version: '8',
      provider: 'AWS',
      region: 'eu-west-1',
      architecture: 'x86_64',
      imageid: 'ami-0a10fe11f3e1bf41e',
      deploylink: (
        <a
          href="https://console.aws.amazon.com/ec2/v2/home?region=us-west-1#LaunchInstanceWizard:ami=ami-0a10fe11f3e1bf41e"
          className="font-medium text-green-500 underline"
        >
          {translate('deploy')}
        </a>
      ),
    },
    {
      version: '8',
      provider: 'AWS',
      region: 'eu-west-1',
      architecture: 'aarch64',
      imageid: 'ami-05bdfaac44dd4f8be',
      deploylink: (
        <a
          href="https://console.aws.amazon.com/ec2/v2/home?region=us-west-1#LaunchInstanceWizard:ami=ami-05bdfaac44dd4f8be"
          className="font-medium text-green-500 underline"
        >
          {translate('deploy')}
        </a>
      ),
    },
    {
      version: '8',
      provider: 'AWS',
      region: 'eu-west-2',
      architecture: 'x86_64',
      imageid: 'ami-0768c1f18418e882d',
      deploylink: (
        <a
          href="https://console.aws.amazon.com/ec2/v2/home?region=us-west-1#LaunchInstanceWizard:ami=ami-0768c1f18418e882d"
          className="font-medium text-green-500 underline"
        >
          {translate('deploy')}
        </a>
      ),
    },
    {
      version: '8',
      provider: 'AWS',
      region: 'eu-west-2',
      architecture: 'aarch64',
      imageid: 'ami-0f626368bef526180',
      deploylink: (
        <a
          href="https://console.aws.amazon.com/ec2/v2/home?region=us-west-1#LaunchInstanceWizard:ami=ami-0f626368bef526180"
          className="font-medium text-green-500 underline"
        >
          {translate('deploy')}
        </a>
      ),
    },
    {
      version: '8',
      provider: 'AWS',
      region: 'eu-west-3',
      architecture: 'x86_64',
      imageid: 'ami-0abb90b1685f9e9fc',
      deploylink: (
        <a
          href="https://console.aws.amazon.com/ec2/v2/home?region=us-west-1#LaunchInstanceWizard:ami=ami-0abb90b1685f9e9fc"
          className="font-medium text-green-500 underline"
        >
          {translate('deploy')}
        </a>
      ),
    },
    {
      version: '8',
      provider: 'AWS',
      region: 'eu-west-3',
      architecture: 'aarch64',
      imageid: 'ami-0cb170992520649fa',
      deploylink: (
        <a
          href="https://console.aws.amazon.com/ec2/v2/home?region=us-west-1#LaunchInstanceWizard:ami=ami-0cb170992520649fa"
          className="font-medium text-green-500 underline"
        >
          {translate('deploy')}
        </a>
      ),
    },
    {
      version: '8',
      provider: 'AWS',
      region: 'me-south-1',
      architecture: 'x86_64',
      imageid: 'TBD',
      deploylink: (
        <a
          href="#"
          style={{ cursor: 'not-allowed' }}
          className="font-medium text-green-50 underline"
        >
          {translate('deploy')}
        </a>
      ),
    },
    {
      version: '8',
      provider: 'AWS',
      region: 'me-south-1',
      architecture: 'aarch64',
      imageid: 'TBD',
      deploylink: (
        <a
          href="#"
          style={{ cursor: 'not-allowed' }}
          className="font-medium text-green-50 underline"
        >
          {translate('deploy')}
        </a>
      ),
    },
    {
      version: '8',
      provider: 'AWS',
      region: 'sa-east-1',
      architecture: 'x86_64',
      imageid: 'ami-07177719c7d6b0ac4',
      deploylink: (
        <a
          href="https://console.aws.amazon.com/ec2/v2/home?region=us-west-1#LaunchInstanceWizard:ami=ami-07177719c7d6b0ac4"
          className="font-medium text-green-500 underline"
        >
          {translate('deploy')}
        </a>
      ),
    },
    {
      version: '8',
      provider: 'AWS',
      region: 'sa-east-1',
      architecture: 'aarch64',
      imageid: 'ami-06674197fb810dc0c',
      deploylink: (
        <a
          href="https://console.aws.amazon.com/ec2/v2/home?region=us-west-1#LaunchInstanceWizard:ami=ami-06674197fb810dc0c"
          className="font-medium text-green-500 underline"
        >
          {translate('deploy')}
        </a>
      ),
    },
  ];
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

  const data = React.useMemo(() => getData(), []);

  return (
    <Layout>
      <SEO title={translate('title')} />
      <Header pageContext="{locale: language}" />
      <PageHeader
        title={translate('title')}
        description={translate('description')}
      >
        <div className="min-h-screen text-gray-900 overflow-auto">
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
