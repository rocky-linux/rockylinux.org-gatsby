import React from 'react';
import LocalizedLink from './LocalizedLink';

const SummaryItem = ({
  name,
  description,
  date,
  link = false,
  internal = false,
}) => {
  return (
    <div class="flex flex-col pb-3">
      <LocalizedLink to={link} className="block mt-2">
        <li>●&nbsp; {name}</li>
      </LocalizedLink>
    </div>
  );
};

export default SummaryItem;
