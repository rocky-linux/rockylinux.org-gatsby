import './src/css/index.css';
import { navigate } from 'gatsby';

const i18nConfig = require('./i18n/config.json');

export const onClientEntry = () => {
  const langs = i18nConfig.map((c) => c.code);
  const userLang = navigator.language.substr(0, 2);

  if (userLang == 'en') {
    return window.location.pathname;
  } else if (
    langs.includes(userLang) &&
    !window.location.pathname.startsWith(`/${userLang}`)
  ) {
    window.location.pathname = `/${userLang}${window.location.pathname}`;
  } else if (!langs.includes(userLang)) {
    return window.location.pathname;
  }
};
