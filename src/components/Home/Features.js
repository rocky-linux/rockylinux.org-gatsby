import React from 'react';
import {
  AdjustmentsIcon,
  TruckIcon,
  UserGroupIcon,
} from '@heroicons/react/solid';
import { Translate, Trans } from '../../../i18n/utils/translate';

const Features = ({ pageContext: { locale: language } }) => {
  const translate = Translate('index');
  const features = [
    {
      name: `${translate('features.1.title')}`,
      icon: AdjustmentsIcon,
      description: `${translate('features.1.description')}`,
    },
    {
      name: `${translate('features.2.title')}`,
      icon: UserGroupIcon,
      description: `${translate('features.2.description')}`,
    },
    {
      name: `${translate('features.3.title')}`,
      icon: TruckIcon,
      description: `${translate('features.3.description')}`,
    },
  ];

  return (
    <div className="relative bg-white dark:bg-gray-900 py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
        <h2 className="text-base font-display font-medium tracking-wider text-green-600 uppercase">
          {translate('features.subtitle')}
        </h2>
        <p className="font-display mt-2 text-3xl font-medium text-gray-900 dark:text-gray-300 tracking-tight sm:text-4xl">
          {translate('features.title')}
        </p>
        <p className="mt-5 max-w-prose mx-auto text-xl text-gray-500">
          <Trans t={translate} i18nKey="features.description">
            &#174;
          </Trans>
        </p>
        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="pt-6">
                <div className="flow-root bg-gray-50 dark:bg-gray-700 rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-green-500 rounded-md shadow-lg">
                        <feature.icon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </span>
                    </div>
                    <h3 className="font-display mt-8 text-lg font-medium text-gray-900 dark:text-gray-50 tracking-tight">
                      {feature.name}
                    </h3>
                    <p className="mt-5 text-base text-gray-500 dark:text-gray-300">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
