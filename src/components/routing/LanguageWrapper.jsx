import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import SEOHead from '../seo/SEOHead';

function LanguageWrapper({ children, language, title, description }) {
  const { i18n } = useTranslation();

  useEffect(() => {
    if (i18n.language !== language) {
      i18n.changeLanguage(language);
    }
  }, [language, i18n]);

  return (
    <>
      <SEOHead
        language={language}
        title={title}
        description={description}
      />
      {children}
    </>
  );
}

export default LanguageWrapper;