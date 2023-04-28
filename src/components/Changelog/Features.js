import React from 'react';
import LocalizedLink from '../LocalizedLink';

import rockyIcon from '../../images/rockyicon.png';
import resfIcon from '../../images/resficon.png';
import ciqIcon from '../../images/ciqicon.png';

const Features = ({ pageContext: { locale: language } }) => {
  const features = [
    {
      name: 'Production Ready',
      icon: rockyIcon,
      description:
        'Rocky Linux is a stable and reliable enterprise-ready operating system with regular updates and a 10-year support lifecycle, all available at no cost.',
      button: {
        title: 'Download',
        link: '/download',
      },
    },
    {
      name: 'Community Developed',
      icon: resfIcon,
      description:
        'The Rocky Linux project has received long-term commitments from its community, sponsors, and partners to ensure its continued success.',
      button: {
        title: 'Join now',
        link: 'https://chat.rockylinux.org',
      },
    },
    {
      name: 'CIQ Supported',
      icon: ciqIcon,
      description:
        'CIQ builds innovative solutions with Rocky Linux and serves as an expert extension of your IT team. CIQ is honored to partner with The Changelog Podcast.',
      button: {
        title: 'Learn more',
        link: 'https://ciq.com/support/enterprise-escalation/',
      },
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-24">
      <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
        <dl className="grid gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3 sm:grid-cols-1">
          {features.map((feature) => (
            <div key={feature.name} className="flex flex-col">
              <dt className="text-lg font-bold leading-7 dark:text-white bg-gray-200 dark:bg-gray-800 w-full text-center rounded-t-lg font-display">
                <div className="-mt-6 flex items-center justify-center">
                  <img
                    className="rounded-md shadow-lg h-14 w-14"
                    src={feature.icon}
                  />
                </div>
                <div className="mt-7">{feature.name}</div>
              </dt>
              <dd className="pt-1 flex flex-auto flex-col text-base leading-7 dark:text-gray-300 bg-gray-200 dark:bg-gray-800 w-full text-center rounded-b-lg px-6 pb-8">
                <p className="flex-auto">{feature.description}</p>
              </dd>
              <LocalizedLink
                to={feature.button.link}
                className="inline-flex items-center justify-center px-4 py-2 border border-transparent dark:border-gray-600 rounded-md shadow-sm text-base font-medium text-white bg-green-500 hover:bg-green-600 mt-4 sm:mt-8 col-span-1 w-fit mx-auto"
              >
                {feature.button.title}
              </LocalizedLink>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
};

export default Features;
