import { Trans, useTranslation } from 'react-i18next'

function Translate(ns) {
  const { t } = useTranslation(ns);
  return t;
}

export { Translate, Trans };
