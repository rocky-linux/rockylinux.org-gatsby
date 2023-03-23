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
        <div className="max-w-4xl mx-auto mt-6 mb-16">
          <div className="bg-gray-200 dark:bg-gray-800 rounded-full mx-2">
            <p className="text-gray-900 dark:text-gray-50 text-center text-md p-3">
              <span className="inline-block align-middle">
                <svg
                  className="h-4"
                  viewBox="0 0 71 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.6532 0.964178C7.49748 2.07237 4.04978 4.84284 2.26437 8.56758C0.478952 12.2 0.232688 15.4322 1.37166 19.5571C2.0181 21.8658 2.72611 23.1895 4.35761 25.0057C7.31278 28.2995 10.7913 29.7463 15.6858 29.7771C20.3648 29.7771 23.874 28.515 26.7676 25.7137L28.3684 24.1746L25.7826 22.266L24.4281 23.4973C18.487 28.9767 8.5441 27.3452 5.18875 20.3575C2.35672 14.5395 4.9117 7.52096 10.9452 4.68892C12.8229 3.79621 13.2847 3.70386 15.932 3.70386C18.5794 3.70386 19.0411 3.79621 20.8573 4.65814C21.9655 5.18145 23.5046 6.19729 24.305 6.9053C25.0746 7.58252 25.8441 8.1674 25.9981 8.1674C26.1212 8.13662 26.7061 7.73644 27.2909 7.24391L28.3376 6.3512L26.6137 4.65814C22.9198 1.05653 16.8555 -0.45184 11.6532 0.964178Z"
                    className="fill-[#2b9438]"
                  />
                  <path
                    d="M51.5787 0.810264C47.7924 1.70297 44.0061 4.84284 42.2515 8.5368C39.0808 15.1859 40.9586 22.8201 46.7766 27.1297C50.4398 29.8078 56.227 30.6698 60.4135 29.1306C61.4293 28.7612 62.4759 28.3918 62.753 28.2995C63.0916 28.1764 63.6765 28.6689 64.5999 29.8386L65.9544 31.5625H67.8629C68.9403 31.5625 69.8023 31.4701 69.8023 31.3778C69.8023 31.2854 68.9096 30.0233 67.8014 28.6073L65.7697 26.0523L67.0934 24.4208C72.4804 17.8025 70.9412 7.45939 63.8304 2.87273C61.2138 1.17966 58.628 0.471651 55.365 0.502434C53.9182 0.533217 52.1944 0.656349 51.5787 0.810264ZM59.8286 4.50422C62.322 5.4585 65.1233 8.22897 66.1083 10.784C66.9702 13.0619 67.0934 17.1253 66.3238 19.1877C65.8005 20.573 64.0766 23.2511 63.7072 23.2511C63.5841 23.2511 62.4451 21.9274 61.2138 20.3267L58.9667 17.4023H56.9658C55.4574 17.4023 55.0572 17.4947 55.2111 17.7717C55.365 17.9872 56.6887 19.7418 58.1971 21.6196C59.7054 23.5281 60.8444 25.2212 60.7521 25.3751C60.3519 25.9908 56.5964 26.7296 54.6262 26.5756C50.6552 26.237 46.7458 23.5281 45.0835 19.9573C44.0985 17.8025 44.0985 12.6617 45.1143 10.5069C47.7616 4.75049 53.8259 2.25707 59.8286 4.50422Z"
                    className="fill-gray-900 dark:fill-gray-50"
                  />
                  <path
                    d="M32.8627 1.08731V29.0998H36.2488V1.08731H32.8627Z"
                    className="fill-gray-900 dark:fill-gray-50"
                  />
                </svg>
              </span>{' '}
              not only supports great programs like Changelog, they also provide
              support for Rocky Linux.{' '}
              <a
                className="text-green-400 underline font-semibold"
                href="https://ciq.co/products/rocky-linux/"
              >
                Learn more.
              </a>
            </p>
          </div>
        </div>
      </PageHeader>
      <Footer pageContext="{locale: language}" />
    </Layout>
  );
};

export default MerchPage;
