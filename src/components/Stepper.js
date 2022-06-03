import React from 'react';
import { CheckIcon } from '@heroicons/react/outline';

/**
 * Items schema:
 *
 * { label: string, status: 'done'|'doing'|null }
 */

const Stepper = ({ items }) => {
  const stepperItems = items.map((v, i) => {
    return (
      <div
        className={`${
          i !== items.length - 1 ? 'w-full' : ''
        } flex items-center`}
      >
        <div className="relative flex flex-col items-center">
          <div className={`rounded-full transition duration-500 ease-in-out h-12 w-12 flex items-center justify-center py-3 ${v.status == 'done' ? 'bg-green-500 text-white' : (v.status == 'doing' ? 'bg-blue-500 text-white' : 'dark:border-gray-700 border-gray-300 border-2 dark:text-gray-300 text-gray-800 dark:bg-gray-900 bg-white')} font-bold`}>
            <span className="font-bold text-xl">
              {v.status == 'done' ? <CheckIcon className="h-6 w-6" /> : i + 1}
            </span>
          </div>
          <div className={`absolute top-0 text-center mt-14 w-32 font-medium ${v.status == 'done' ? 'text-green-500' : (v.status == 'doing' ? 'text-blue-500' : 'text-gray-500')}`}>{v.label}</div>
        </div>
        <div className="flex-auto border-t-2 transition duration-500 ease-in-out border-gray-300 dark:border-gray-700" />
      </div>
    );
  });

  return (
    <div className="mx-4 p-4 flex justify-between items-center my-20">
      {stepperItems}
    </div>
  );
};

export default Stepper;
