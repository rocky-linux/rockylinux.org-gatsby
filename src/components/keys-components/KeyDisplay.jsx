import React from 'react';
import { Translate } from '../../i18n/utils/translate';

const KeyDisplay = ({ link, headerkey, className, lineKeys }) => {
  const translate = Translate('keys');
  return (
    <>
      <h6 className={`font-bold${className ? ` ${className}` : ''}`}>
        {translate(headerkey)}
      </h6>
      <p>
        <a href={link}>{translate('downloadKey')}</a>
      </p>
      <code className="block whitespace-pre overflow-x-auto">
        {lineKeys.map((lineKey, i) => (
          <React.Fragment key={i}>
            {i > 0 ? <br /> : ''}
            {translate(lineKey)}
          </React.Fragment>
        ))}
      </code>
    </>
  );
};

export default KeyDisplay;
