import React from 'react';
import { LocalizedLink } from 'gatsby-theme-i18n';

const SummaryItem = ({
  name,
  description,
  date,
  link = false,
  internal = false,
}) => {
  return (
    <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
      <div className="flex-1 bg-white p-6 flex flex-col justify-between">
        <div className="flex-1">
          <LocalizedLink to={link} className="block mt-2">
            <p className="text-2xl font-semibold text-gray-900">{name}</p>
            <p className="mt-3 text-base text-gray-500">{description}</p>
          </LocalizedLink>
        </div>
        <div className="mt-6 flex items-center">
          <div>
            <div className="flex space-x-1 text-sm text-gray-500">
              <time datetime={date}>{date}</time>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SummaryItem;
