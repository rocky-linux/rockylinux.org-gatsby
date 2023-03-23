import React from 'react';
import {
  AdjustmentsIcon,
  TruckIcon,
  UserGroupIcon,
} from '@heroicons/react/solid';
import LocalizedLink from '../LocalizedLink';

const Features = ({ pageContext: { locale: language } }) => {
  const features = [
    {
      name: 'Production Ready',
      icon: AdjustmentsIcon,
      description:
        'Rocky Linux is enterprise-ready, providing solid stability with regular updates and a 10-year support lifecycle, all at no cost.',
      button: {
        title: 'Download',
        link: '/download',
      },
    },
    {
      name: 'Community Supported',
      icon: UserGroupIcon,
      description:
        'The community, sponsors, and partners have invested with long-term commitments to ensure the project stays with the community.',
      button: {
        title: 'Contribute',
        link: 'https://wiki.rockylinux.org/contributing/',
      },
    },
    {
      name: 'Easy Migration',
      icon: TruckIcon,
      description:
        'Migrate from other Enterprise Linux distributions without sweating it. We provide an easy-to-use migration script, free of charge.',
      button: {
        title: 'Migrate',
        link: 'https://docs.rockylinux.org/guides/migrate2rocky/',
      },
    },
  ];

  return (
    <div className="relative bg-gray-50 dark:bg-gray-900 py-16">
      <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <>
                <div key={feature.name} className="pt-6">
                  <div className="flow-root bg-gray-200 dark:bg-gray-800 rounded-lg px-6 pb-8">
                    <div className="-mt-6">
                      <div>
                        <span className="inline-flex items-center justify-center p-3 bg-green-500 rounded-md shadow-lg">
                          <feature.icon
                            className="h-6 w-6 text-white"
                            aria-hidden="true"
                          />
                        </span>
                      </div>
                      <h3 className="mt-8 text-lg font-medium text-gray-900 dark:text-gray-50 tracking-tight">
                        {feature.name}
                      </h3>
                      <p className="mt-5 text-base text-gray-500 dark:text-gray-300">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                  <div className="mt-5">
                    <LocalizedLink
                      to={feature.button.link}
                      className="inline-flex items-center justify-center px-4 py-2 border border-transparent dark:border-gray-600 rounded-md shadow-sm text-base font-medium text-white bg-green-500 hover:bg-green-600"
                    >
                      {feature.button.title}
                    </LocalizedLink>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
