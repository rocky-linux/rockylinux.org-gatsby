import React from 'react';
import { LocalizedLink } from 'gatsby-theme-i18n';

export default function Pagination({
  totalCount,
  currentPage,
  itemPerPage,
  type,
}) {
  const totalPages = Math.ceil(totalCount / itemPerPage);

  const nextPage = currentPage + 1;
  const previousPage = currentPage - 1;

  //const prevPath = currentPage -1 === 1 ? `/news/` : `/news/${previousPage}`;
  const prevPath = `/${type}/${previousPage}`;
  const nextPath = `/${type}/${nextPage}`;

  return (
    <div className="text-center pagination-navi text-gray-900 dark:text-gray-50">
      <LocalizedLink
        to={prevPath}
        className={`${previousPage <= 0 ? 'disabled' : null} mr-5 inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md shadow-md text-green-500 bg-white dark:bg-gray-800 hover:text-green-400 focus:outline-none focus:border-green-300 focus:shadow-outline-green active:bg-gray-50 active:text-gray-700 transition duration-150 ease-in-out`}
      >
          {`<`}
      </LocalizedLink>
      {currentPage} of {totalPages}
      <LocalizedLink
        to={nextPath}
        className={`${nextPage > totalPages ? 'disabled' : null} ml-5 inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md shadow-md text-green-500 bg-white dark:bg-gray-800 hover:text-green-400 focus:outline-none focus:border-green-300 focus:shadow-outline-green active:bg-gray-50 active:text-gray-700 transition duration-150 ease-in-out`}
      >
          {`>`}
      </LocalizedLink>
    </div>
  );
}
