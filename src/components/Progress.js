import React from 'react';
import Stepper from '../components/Stepper';

const Progress = ({ pageContext: { locale: language } }) => {
  const stepperItems = [
    { label: 'Import', status: 'done' },
    { label: 'Build', status: 'doing' },
    { label: 'Test', status: null },
    { label: 'Release', status: null },
  ];

  return (
    <div className="relative bg-white dark:bg-gray-900 py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
        <p className="mt-2 text-3xl font-extrabold text-gray-900 dark:text-gray-300 tracking-tight sm:text-4xl">
          Current Release Progress
        </p>
        <Stepper items={stepperItems} />
        <p className="mt-5 max-w-prose mx-auto text-xl text-gray-500">
          Rocky Linux 9.0 will be ready for general release in the June - July
          2022 timeframe after thorough testing and validation.
        </p>
        <p className="mt-5 max-w-prose mx-auto text-xl text-gray-500">
          In tandem with Rocky Linux 9, we are releasing Peridot, the new build
          system with which it is forged. We are excited to open source Peridot,
          which has been in development for over a year! This release represents
          our commitment to free and open source software as well as the
          longevity of the project which necessitates that Rocky Linux is built
          in the open, with replicable and verifiable tooling.
        </p>
        <p className="mt-5 max-w-prose mx-auto text-xl text-gray-500">
          Don’t wait on the sidelines! Join the development, build, and testing
          efforts at{' '}
          <a href="https://chat.rockylinux.org">chat.rockylinux.org</a>
        </p>
      </div>
    </div>
  );
};

export default Progress;
