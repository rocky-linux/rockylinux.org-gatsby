import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Header from '../components/header';
import Footer from '../components/footer';

import CtrlIqLogo from '../images/ciq.png';
import MattermostLogo from '../images/mattermost.png';
import AwsLogo from '../images/aws.png';

const Partners = ({ data, pageContext: { locale: language } }) => {
    return (
        <Layout>
            <SEO />
            <Header pageContext="{locale: language}" />
            <main className="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white z-0">
                <div className="max-w-4xl mx-auto py-8 px-4 sm:py-10 sm:px-6 lg:px-8">
                    <div className="px-4 pb-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                        <div className="max-w-screen-sm text-center sm:mx-auto">
                            <div className="inline-block mb-5 rounded-full sm:mx-auto">
                                <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-green-600">
                                    <svg
                                        className="w-12 h-12 text-green-100"
                                        stroke="currentColor"
                                        viewBox="0 0 52 52"
                                    >
                                        <polygon
                                            stroke-width="3"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            fill="none"
                                            points="29 13 14 29 25 29 23 39 38 23 27 23"
                                        ></polygon>
                                    </svg>
                                </div>
                            </div>
                            <h2 className="mb-4 font-sans text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-50 sm:text-4xl sm:leading-none">
                                Partners
                            </h2>
                            <p className="text-base text-gray-700 dark:text-gray-300 md:text-lg sm:px-4">
                                We would like to thank our partners for their contributions on the project.
                            </p>
                            <hr className="mx-auto" />
                        </div>
                    </div>
                    <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 mb-6">
                        <div className="sm:flex flex-wrap justify-center items-center text-center gap-8">
                            <div className="w-full mt-2 sm:w-1/2 md:w-1/2 lg:w-1/4 px-4 py-4 bg-gray-500 shadow-lg rounded-lg dark:bg-gray-800">
                                <a href="https://ctrliq.com" aria-label="CtrlIQ">
                                    <img
                                        className="object-cover w-full"
                                        src={CtrlIqLogo}
                                        alt="CtrlIQ"
                                    />
                                </a>
                            </div>
                            <div className="w-full mt-2 sm:w-1/2 md:w-1/2 lg:w-1/4 px-4 py-4 bg-gray-500 shadow-lg rounded-lg dark:bg-gray-800">
                                <a href="https://mattermost.com" aria-label="Mattermost">
                                    <img
                                        className="object-cover w-full"
                                        src={MattermostLogo}
                                        alt="Mattermost"
                                    />
                                </a>
                            </div>
                            <div className="w-full mt-2 sm:w-1/2 md:w-1/2 lg:w-1/4 px-4 py-4 bg-gray-500 shadow-lg rounded-lg dark:bg-gray-800">
                                <a href="https://aws.amazon.com/" aria-label="AWS">
                                    <img
                                        className="object-cover w-full"
                                        src={AwsLogo}
                                        alt="AWS"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                        <div className="flex flex-col lg:flex-row">
                            <div className="mb-6 lg:mb-0 lg:w-1/2 lg:pr-5">
                                <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-50 sm:text-4xl sm:leading-none">
                                    Want to support Rocky Linux?
                                </h2>
                            </div>
                            <div className="lg:w-1/2">
                                <p className="text-base text-gray-700 dark:text-gray-300">
                                    Rocky Linux is an open source enterprise operating system by
                                    the community, and for the community. While we will never
                                    permit ourselves to be controlled by any single entity, we are
                                    eager to engage and work with organizations interested in
                                    supporting Rocky. We’re still exploring options for varying
                                    tiers of sponsorships, and would be happy to discuss your
                                    ideas. Say hi at{' '}
                                    <a
                                        href="mailto:sponsor@rockylinux.org"
                                        className="text-green-600 font-medium"
                                    >
                                        sponsor@rockylinux.org
                                    </a>
                                    .
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer pageContext="{locale: language}" />
        </Layout>
    );
};

export default Partners;
