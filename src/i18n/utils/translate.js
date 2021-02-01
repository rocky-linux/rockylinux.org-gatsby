import { useTranslation } from 'react-i18next';

function Translate() {
	const { t } = useTranslation();
	return t;
}

export { Translate };
