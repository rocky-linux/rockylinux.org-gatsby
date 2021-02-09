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
    <div className="text-center aria-label=Mattermost pagination-navi">
      <LocalizedLink
        class={previousPage <= 0 ? 'disabled' : null}
        to={prevPath}
      >
        {' '}
        Previous Page{' '}
      </LocalizedLink>
      | {currentPage} of {totalPages} |
      <LocalizedLink
        class={nextPage > totalPages ? 'disabled' : null}
        to={nextPath}
      >
        {' '}
        Next Page{' '}
      </LocalizedLink>
    </div>
  );
}
