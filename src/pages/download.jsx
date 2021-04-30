import React from 'react';
import Footer from '../components/footer';
import Header from '../components/header';
import Layout from '../components/layout';
import SEO from '../components/seo';

const DownloadPage = ({ pageContext }) => {
    return (
        <Layout>
            <SEO />
            <Header pageContext="{locale: language}" />
            <main className="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white z-0">
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
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        fill="none"
                                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                                    />
                                </svg>
                            </div>
                        </div>
                        <h2 className="mb-4 font-sans text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-50 sm:text-4xl sm:leading-none">
                            Downloads
                        </h2>
                        <p className="text-base text-gray-700 dark:text-gray-300 md:text-lg sm:px-4">
                            Download the official release of Rocky Linux from one of our
                            trusted mirrors.
                        </p>
                        <hr className="mx-auto" />
                    </div>
                    <div className="max-w-screen-sm px-8 mx-auto mt-4 flex flex-col">
                        <div className="w-full px-3 py-2 rounded-lg shadow bg-red-600 text-white mb-4">
                            <span>The release you can download here is a <i>Release Candidate</i> and should not be used in production.</span>
                        </div>
                    </div>
                    <div className="shadow overflow-scroll rounded-md shadow max-w-screen-md mx-auto">
                        <table className="min-w-full divide-y divide-gray-400">
                            <thead className="bg-gray-200 dark:bg-gray-600">
                                <tr>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Architecture</th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">ISOs</th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Packages</th>
                                </tr>
                            </thead>
                            <tbody className="bg-gray-100 dark:bg-gray-800">
                                <tr>
                                    <td className="px-6 py-3 whitespace-nowrap">
                                        x86_64
                                    </td>
                                    <td className="px-6 py-3 whitespace-nowrap">
                                        <a className="font-medium text-green-600 dark:text-green-500" href="https://download.rockylinux.org/pub/rockylinux/8/isos/x86_64">Minimal</a> |&nbsp;
                                        <a className="font-medium text-green-600 dark:text-green-500" href="https://download.rockylinux.org/pub/rockylinux/8/isos/x86_64">DVD</a> |&nbsp;
                                        <a className="font-medium text-green-600 dark:text-green-500" href="https://download.rockylinux.org/pub/rockylinux/8/isos/x86_64">Boot</a>
                                    </td>
                                    <td className="px-6 py-3 whitespace-nowrap">
                                        <a className="font-medium text-green-600 dark:text-green-500" href="https://download.rockylinux.org/pub/rockylinux/8/BaseOS/x86_64/os">BaseOS</a>
                                    </td>
                                </tr>
                                <tr className="bg-gray-50 dark:bg-gray-700">
                                    <td className="px-6 py-3 whitespace-nowrap">
                                        ARM64 (aarch64)
                                    </td>
                                    <td className="px-6 py-3 whitespace-nowrap">
                                        <a className="font-medium text-green-600 dark:text-green-500" href="https://download.rockylinux.org/pub/rockylinux/8/isos/aarch64">Minimal</a> |&nbsp;
                                        <a className="font-medium text-green-600 dark:text-green-500" href="https://download.rockylinux.org/pub/rockylinux/8/isos/aarch64">DVD</a> |&nbsp;
                                        <a className="font-medium text-green-600 dark:text-green-500" href="https://download.rockylinux.org/pub/rockylinux/8/isos/aarch64">Boot</a>
                                    </td>
                                    <td className="px-6 py-3 whitespace-nowrap">
                                        <a className="font-medium text-green-600 dark:text-green-500" href="https://download.rockylinux.org/pub/rockylinux/8/BaseOS/aarch64/os">BaseOS</a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="max-w-screen-sm px-8 mx-auto mt-8 flex flex-col">
                        <div className="flex flex-col md:flex-row items-center justify-evenly mb-6">
                            <a className="text-green-600 dark:text-green-500 font-medium" href="https://docs.rockylinux.org">Documentation</a>
                            <a className="text-green-600 dark:text-green-500 font-medium" href="https://bugs.rockylinux.org">Report a bug</a>
                            <a className="text-green-600 dark:text-green-500 font-medium" href="#">Verifying your ISO</a>
                        </div>
                        <p className="text-gray-700 dark:text-gray-300">
                            As you download and use Rocky Linux, the Rocky Enterprise
                            Software Foundation invites you to <a className="text-green-600 dark:text-green-500 font-medium" href="https://chat.rockylinux.org">be a part of the community
                            as a contributor</a>. There are many ways to contribute to the
                            project, from documentation, QA, and testing to coding changes
                            for SIGs, providing mirroring or hosting, and helping other users.
                        </p>
                    </div>
                </div>
            </main>
            <Footer pageContext="{locale: language}" />
        </Layout>
    )
};

export default DownloadPage;