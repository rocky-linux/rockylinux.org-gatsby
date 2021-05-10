import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Header from '../components/header';
import Footer from '../components/footer';
import dompurify from 'dompurify';
import { Translate } from '../i18n/utils/translate';

const Faq = ({ data, pageContext: { locale: language } }) => {
  const translate = Translate();
  const sanitizer = dompurify.sanitize;

  return (
    <Layout>
      <SEO title="Frequently Asked Questions" />
      <Header pageContext="{locale: language}" />
      <main className="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white z-0">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-14">
              <h2 className="max-w-lg mb-10 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 dark:text-gray-50 sm:text-4xl md:mx-auto text-center">
                {translate('faq.heading')}
              </h2>
              <hr className="mx-auto" />
            </div>
          </div>
          <div className="max-w-screen-xl sm:mx-auto">
            <div className="prose mx-auto dark-mode:prose-dark dark:text-gray-300">
              <h5 className="font-bold">{translate('faq.q1.q')}</h5>
              <p>
                <a href="https://rockylinux.org/download">
                  https://rockylinux.org/download
                </a>
              </p>
              <hr />
              <h5 className="font-bold">{translate('faq.q2.q')}</h5>
              <p>{translate('faq.q2.a')}</p>
              <hr />
              <h5 className="font-bold">{translate('faq.q3.q')}</h5>
              <p>{translate('faq.q3.a')}</p>
              <hr />
              <h5 className="font-bold">{translate('faq.q4.q')}</h5>
              <p
                dangerouslySetInnerHTML={{
                  __html: sanitizer(translate('faq.q4.a'), {
                    ALLOWED_TAGS: ['a'],
                  }),
                }}
              ></p>
              <hr />
              <h5 className="font-bold">{translate('faq.q5.q')}</h5>
              <p
                dangerouslySetInnerHTML={{
                  __html: sanitizer(translate('faq.q5.a'), {
                    ALLOWED_TAGS: ['a'],
                  }),
                }}
              ></p>
              <hr />
              <h5 className="font-bold">{translate('faq.q6.q')}</h5>
              <p
                dangerouslySetInnerHTML={{
                  __html: sanitizer(translate('faq.q6.a'), {
                    ALLOWED_TAGS: ['a'],
                  }),
                }}
              ></p>
              <hr />
              <h5 className="font-bold">{translate('faq.q7.q')}</h5>
              <p>{translate('faq.q7.a')}</p>
              <hr />
              <h5 className="font-bold">{translate('faq.q8.q')}</h5>
              <p>{translate('faq.q8.a1')}</p>
              <p>{translate('faq.q8.a2')}</p>
              <hr />
              <h5 className="font-bold">{translate('faq.q9.q')}</h5>
              <p
                dangerouslySetInnerHTML={{
                  __html: sanitizer(translate('faq.q9.a'), {
                    ALLOWED_TAGS: ['i'],
                  }),
                }}
              ></p>
              <hr />
              <h5 className="font-bold">{translate('faq.q10.q')}</h5>
              <p
                dangerouslySetInnerHTML={{
                  __html: sanitizer(translate('faq.q10.a'), {
                    ALLOWED_TAGS: ['strong'],
                  }),
                }}
              ></p>
              <hr />
              <h5 className="font-bold">{translate('faq.q11.q')}</h5>
              <p>{translate('faq.q11.a1')}</p>
              <ul>
                <li>{translate('faq.q11.list.community')}</li>
                <li>{translate('faq.q11.list.core-inf')}</li>
                <li>{translate('faq.q11.list.design')}</li>
                <li>{translate('faq.q11.list.documentation')}</li>
                <li>{translate('faq.q11.list.installer')}</li>
                <li>{translate('faq.q11.list.leadership')}</li>
                <li>{translate('faq.q11.list.pkg-autob')}</li>
                <li>{translate('faq.q11.list.packaging')}</li>
                <li>{translate('faq.q11.list.security')}</li>
                <li>{translate('faq.q11.list.sigs')}</li>
                <li>{translate('faq.q11.list.web')}</li>
              </ul>
              <p>{translate('faq.q11.a2')}</p>
              <hr />
              <h5 className="font-bold">{translate('faq.q12.q')}</h5>
              <p>{translate('faq.q12.a')}</p>
              <hr />
              <h5 className="font-bold">{translate('faq.q13.q')}</h5>
              <p>{translate('faq.q13.a')}</p>
              <hr />
              <h5 className="font-bold">{translate('faq.q14.q')}</h5>
              <p
                dangerouslySetInnerHTML={{
                  __html: sanitizer(translate('faq.q14.a'), {
                    ALLOWED_TAGS: ['a'],
                  }),
                }}
              ></p>
            </div>
          </div>
        </div>
      </main>
      <Footer pageContext="{locale: language}" />
    </Layout>
  );
};

export default Faq;
